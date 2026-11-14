"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { PLANS, type Region } from "@/lib/pricing";

export type { Region };

// Fallback when the server could not tell the country (e.g. localhost): browser timezone / language.
function detectFromBrowser(): Region {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (tz === "Asia/Kolkata" || tz === "Asia/Calcutta") return "IN";
    if (navigator.languages?.some((l) => /-IN$/i.test(l))) return "IN";
  } catch {}
  return "INTL";
}

const PricingContext = createContext<{ region: Region; ready: boolean } | null>(null);

export function PricingProvider({ region, children }: { region: Region | null; children: React.ReactNode }) {
  const [detected, setDetected] = useState<Region | null>(region);
  useEffect(() => {
    if (!region) setDetected(detectFromBrowser());
  }, [region]);
  const value = { region: detected ?? "INTL", ready: detected !== null };
  return <PricingContext.Provider value={value}>{children}</PricingContext.Provider>;
}

function usePricing() {
  const ctx = useContext(PricingContext);
  if (!ctx) throw new Error("Price components must be inside <PricingProvider>");
  return ctx;
}

// Hidden until the region is known, so the wrong currency never flashes.
export function PriceDisplay() {
  const { region, ready } = usePricing();
  const plan = PLANS[region];
  return (
    <div className={`mt-8 flex items-baseline justify-center gap-3 ${ready ? "" : "invisible"}`}>
      <span className="font-serif text-3xl text-muted-foreground line-through decoration-blush decoration-2">{plan.original}</span>
      <span className="font-serif text-6xl text-primary">{plan.current}</span>
    </div>
  );
}

/* ---------- Razorpay Checkout ---------- */

type RazorpaySuccess = { razorpay_order_id: string; razorpay_payment_id: string; razorpay_signature: string };
declare global {
  interface Window {
    Razorpay?: new (options: Record<string, unknown>) => { open: () => void; on: (e: string, cb: () => void) => void };
  }
}

function loadCheckoutScript(): Promise<boolean> {
  return new Promise((resolve) => {
    if (window.Razorpay) return resolve(true);
    const s = document.createElement("script");
    s.src = "https://checkout.razorpay.com/v1/checkout.js";
    s.onload = () => resolve(true);
    s.onerror = () => resolve(false);
    document.body.appendChild(s);
  });
}

type Status = "idle" | "loading" | "paid";

export function BuyButton({ className }: { className?: string }) {
  const { region, ready } = usePricing();
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [deliveryUrl, setDeliveryUrl] = useState<string | null>(null);
  const plan = PLANS[region];

  async function buy() {
    setError(null);
    setStatus("loading");
    try {
      if (!(await loadCheckoutScript())) throw new Error("Could not load the payment window. Check your connection.");

      const res = await fetch("/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ region }),
      });
      const order = await res.json();
      if (!res.ok) throw new Error(order.error ?? "Could not start checkout.");

      const rzp = new window.Razorpay!({
        key: order.keyId,
        order_id: order.orderId,
        amount: order.amount,
        currency: order.currency,
        name: "Haven",
        description: "Relationship Anxiety Companion",
        theme: { color: "#3b4a35" },
        handler: async (r: RazorpaySuccess) => {
          const v = await fetch("/api/verify-payment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ orderId: r.razorpay_order_id, paymentId: r.razorpay_payment_id, signature: r.razorpay_signature }),
          });
          const data = await v.json().catch(() => ({}));
          if (v.ok && data.ok) {
            setDeliveryUrl(data.deliveryUrl ?? null);
            setStatus("paid");
          } else {
            setStatus("idle");
            setError("We couldn't confirm your payment. If you were charged, please contact us with your payment ID.");
          }
        },
        modal: { ondismiss: () => setStatus((s) => (s === "paid" ? s : "idle")) },
      });
      rzp.open();
    } catch (e) {
      setStatus("idle");
      setError(e instanceof Error ? e.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "paid") {
    return (
      <div className="mt-8 rounded-2xl bg-secondary/60 p-5 text-left text-sm leading-relaxed">
        <p className="font-medium text-primary">Thank you — your payment is confirmed. 🤍</p>
        <p className="mt-2 text-muted-foreground">Your Haven setup instructions are on their way to your email.</p>
        {deliveryUrl && (
          <a href={deliveryUrl} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block font-medium text-primary underline">
            Open your setup instructions now
          </a>
        )}
      </div>
    );
  }

  return (
    <>
      <button type="button" onClick={buy} disabled={!ready || status === "loading"} className={`${className ?? ""} disabled:opacity-60`}>
        {status === "loading" ? "Opening checkout…" : `Get Haven${ready ? ` — ${plan.current}` : ""}`}
      </button>
      {error && <p role="alert" className="mt-3 text-sm text-red-700">{error}</p>}
    </>
  );
}
