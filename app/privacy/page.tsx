import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { BUSINESS } from "@/lib/business";

export const metadata: Metadata = { title: "Privacy Policy — Haven" };

export default function Privacy() {
  return (
    <LegalPage title="Privacy Policy">
      <p>This policy explains what information {BUSINESS.brand} (operated by {BUSINESS.legalName}) collects when you visit this website or buy our digital product, and how we use it.</p>

      <h2>Information we collect</h2>
      <ul>
        <li><strong>Purchase details:</strong> your name, email address and phone number as entered at checkout, and payment status. Your card, UPI or bank details are handled directly by our payment processor, Razorpay, and are never stored on our servers.</li>
        <li><strong>Technical data:</strong> basic information such as your approximate country (to show the correct price), browser type and pages visited.</li>
        <li><strong>Messages to us:</strong> anything you send when you contact us.</li>
      </ul>

      <h2>How we use it</h2>
      <ul>
        <li>To process your payment and deliver the product to your email.</li>
        <li>To show pricing in the right currency.</li>
        <li>To respond to support requests and send important notices about your purchase.</li>
        <li>To meet legal, tax and accounting obligations.</li>
      </ul>

      <h2>Your conversations with Haven</h2>
      <p>Haven is a set of prompts and commands you add to ChatGPT. Your conversations take place inside ChatGPT, under OpenAI&apos;s terms and privacy policy. We do not see, store or have access to those conversations.</p>

      <h2>Sharing</h2>
      <p>We do not sell your personal information. We share it only with service providers needed to run the business (such as Razorpay for payments and our email provider for delivery), and where required by law.</p>

      <h2>Retention and your rights</h2>
      <p>We keep purchase records for as long as needed for legal and accounting purposes. You may ask us to access, correct or delete your personal information, subject to those obligations, by emailing <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>.</p>

      <h2>Cookies</h2>
      <p>This site uses only essential technical functionality. Our payment provider may set cookies when you open its checkout window.</p>

      <h2>Contact</h2>
      <p>Questions about this policy: <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>.</p>
    </LegalPage>
  );
}
