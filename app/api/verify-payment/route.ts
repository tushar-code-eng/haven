import { createHmac, timingSafeEqual } from "node:crypto";

export async function POST(req: Request) {
  const keySecret = process.env.RAZORPAY_KEY_SECRET;
  if (!keySecret) return Response.json({ ok: false }, { status: 500 });

  const { orderId, paymentId, signature } = await req.json().catch(() => ({}));
  if (typeof orderId !== "string" || typeof paymentId !== "string" || typeof signature !== "string") {
    return Response.json({ ok: false }, { status: 400 });
  }

  const expected = createHmac("sha256", keySecret).update(`${orderId}|${paymentId}`).digest("hex");
  const a = Buffer.from(expected);
  const b = Buffer.from(signature);
  const valid = a.length === b.length && timingSafeEqual(a, b);
  if (!valid) return Response.json({ ok: false }, { status: 400 });

  // Only revealed after a verified payment.
  return Response.json({ ok: true, deliveryUrl: process.env.DELIVERY_URL ?? null });
}
