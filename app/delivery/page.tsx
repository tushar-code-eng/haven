import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { BUSINESS } from "@/lib/business";

export const metadata: Metadata = { title: "Delivery Policy — Haven" };

export default function Delivery() {
  return (
    <LegalPage title="Delivery Policy">
      <p>{BUSINESS.brand} is a digital product. Nothing is shipped physically, and there are no shipping charges.</p>

      <h2>How you receive it</h2>
      <ul>
        <li>Immediately after your payment is confirmed, the page shows a link to your setup instructions.</li>
        <li>The same instructions are also emailed to the address you entered at checkout, usually within a few minutes.</li>
      </ul>

      <h2>Didn&apos;t receive it?</h2>
      <p>Check your spam or promotions folder first. If it still hasn&apos;t arrived within 24 hours, email <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a> with your payment ID and we will resend it.</p>

      <h2>What you need</h2>
      <p>Access to ChatGPT. See the setup guide you receive for the exact steps.</p>
    </LegalPage>
  );
}
