import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { BUSINESS } from "@/lib/business";

export const metadata: Metadata = { title: "Refund & Cancellation Policy — Haven" };

export default function Refund() {
  return (
    <LegalPage title="Refund & Cancellation Policy">
      <p>{BUSINESS.brand} is a digital product delivered immediately after payment, so it cannot be returned once access has been provided. This is a one-time purchase, with no subscription and no recurring charges, so there is nothing to cancel after you buy.</p>

      <h2>When we will refund you</h2>
      <ul>
        <li>You were charged but did not receive your setup instructions, and we cannot resolve this within 7 days.</li>
        <li>You were charged more than once for the same order.</li>
        <li>The product has a technical problem we are unable to fix.</li>
      </ul>

      <h2>When we cannot refund</h2>
      <p>Because the product is delivered digitally and cannot be taken back, we do not offer refunds for change of mind after delivery.</p>

      <h2>How to request a refund</h2>
      <p>Email <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a> within 7 days of purchase with your payment ID and the email address used at checkout. We will reply within 3 business days.</p>

      <h2>Refund timeline</h2>
      <p>Approved refunds are issued to your original payment method through Razorpay. It typically takes 5–7 business days to appear, depending on your bank.</p>
    </LegalPage>
  );
}
