import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { BUSINESS } from "@/lib/business";

export const metadata: Metadata = { title: "Contact — Haven" };

export default function Contact() {
  return (
    <LegalPage title="Contact Us">
      <p>Questions about your order, access to the product, or anything else? We&apos;re happy to help.</p>

      <h2>Get in touch</h2>
      <ul>
        <li><strong>Email:</strong> <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a></li>
        <li><strong>Business name:</strong> {BUSINESS.legalName}</li>
      </ul>

      <p>We reply to emails within 3 business days. When writing about a payment, please include your payment ID and the email used at checkout.</p>
    </LegalPage>
  );
}
