import { createHmac, timingSafeEqual } from "node:crypto";

// Razorpay calls this after a payment is captured, even if the buyer closed the tab.
// It emails the buyer their Haven setup instructions (via Resend, if configured).
export async function POST(req: Request) {
  const secret = process.env.RAZORPAY_WEBHOOK_SECRET;
  if (!secret) return new Response("Webhook not configured", { status: 500 });

  const raw = await req.text();
  const signature = req.headers.get("x-razorpay-signature") ?? "";
  const expected = createHmac("sha256", secret).update(raw).digest("hex");
  const a = Buffer.from(expected);
  const b = Buffer.from(signature);
  if (a.length !== b.length || !timingSafeEqual(a, b)) {
    return new Response("Invalid signature", { status: 400 });
  }

  const event = JSON.parse(raw);
  if (event.event === "payment.captured") {
    const payment = event.payload?.payment?.entity;
    if (payment?.notes?.product === "haven" && payment.email) {
      await sendDeliveryEmail(payment.email);
    }
  }
  return new Response("ok");
}

async function sendDeliveryEmail(to: string) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.EMAIL_FROM;
  const deliveryUrl = process.env.DELIVERY_URL;
  if (!apiKey || !from || !deliveryUrl) {
    console.warn("Delivery email skipped: set RESEND_API_KEY, EMAIL_FROM and DELIVERY_URL.");
    return;
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to,
      subject: "Your Haven setup instructions",
      html: `<p>Thank you for getting Haven 🤍</p>
<p>Here are your setup instructions: <a href="${deliveryUrl}">${deliveryUrl}</a></p>
<p>Open ChatGPT, follow the short guide, and you're ready to talk things through whenever you need to.</p>
<p>Haven is a digital reflection companion, not a mental-health professional or crisis service.</p>`,
    }),
  });
  if (!res.ok) console.error("Delivery email failed", res.status, await res.text());
}
