import { PLANS, regionFromHeaders, type Region } from "@/lib/pricing";

export async function POST(req: Request) {
  const keyId = process.env.RAZORPAY_KEY_ID;
  const keySecret = process.env.RAZORPAY_KEY_SECRET;
  if (!keyId || !keySecret) {
    return Response.json({ error: "Payments are not configured yet." }, { status: 500 });
  }

  const body = await req.json().catch(() => ({}));
  // Trust the host's country header; only fall back to the browser's hint when there is none (local dev).
  const region: Region = regionFromHeaders(req.headers) ?? (body?.region === "IN" ? "IN" : "INTL");
  const plan = PLANS[region];

  const res = await fetch("https://api.razorpay.com/v1/orders", {
    method: "POST",
    headers: {
      Authorization: "Basic " + Buffer.from(`${keyId}:${keySecret}`).toString("base64"),
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      amount: plan.amount,
      currency: plan.currency,
      receipt: `haven_${Date.now()}`,
      notes: { product: "haven", region },
    }),
  });

  if (!res.ok) {
    console.error("Razorpay order creation failed", res.status, await res.text());
    return Response.json({ error: "Could not start checkout. Please try again." }, { status: 502 });
  }

  const order = await res.json();
  return Response.json({ orderId: order.id, amount: order.amount, currency: order.currency, keyId });
}
