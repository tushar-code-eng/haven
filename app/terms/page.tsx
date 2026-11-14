import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { BUSINESS } from "@/lib/business";

export const metadata: Metadata = { title: "Terms & Conditions — Haven" };

export default function Terms() {
  return (
    <LegalPage title="Terms & Conditions">
      <p>By purchasing or using {BUSINESS.brand}, operated by {BUSINESS.legalName} (&quot;we&quot;, &quot;us&quot;), you agree to these terms.</p>

      <h2>What you are buying</h2>
      <p>{BUSINESS.brand} is a digital product: a companion prompt, guided commands and a setup guide that you add to your own ChatGPT account. It is not a separate app or AI model. You need your own access to ChatGPT, which is provided by OpenAI under its own terms and may have its own cost.</p>

      <h2>Not therapy or crisis support</h2>
      <p>{BUSINESS.brand} is a reflection companion. It is not a therapist, medical device or mental-health professional, and it cannot diagnose, treat or replace professional care. It cannot know what another person thinks or predict relationship outcomes. If you are in crisis or at risk of harming yourself, contact your local emergency number or a crisis helpline immediately.</p>

      <h2>Pricing and payment</h2>
      <p>Prices are shown on the website in Indian rupees (INR) or US dollars (USD) depending on your location. Payments are processed securely by Razorpay. Applicable taxes, if any, are included or shown at checkout.</p>

      <h2>Licence and use</h2>
      <p>Your purchase gives you a personal, non-transferable licence to use the product for yourself. You may not resell, redistribute, publish or share the product or its contents.</p>

      <h2>Availability</h2>
      <p>The product depends on third-party services such as ChatGPT. Their features may change, and we cannot guarantee uninterrupted availability or that it will work identically after such changes.</p>

      <h2>Limitation of liability</h2>
      <p>To the fullest extent permitted by law, we are not liable for any indirect or consequential loss arising from your use of the product, or for decisions you make in your relationships. Our total liability is limited to the amount you paid for the product.</p>

      <h2>Governing law</h2>
      <p>These terms are governed by the laws of India. Disputes are subject to the courts of India.</p>

      <h2>Changes and contact</h2>
      <p>We may update these terms from time to time; the date above shows the latest version. Questions: <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>.</p>
    </LegalPage>
  );
}
