export type Region = "IN" | "INTL";

// `amount` is in the smallest currency unit (paise / cents), as Razorpay expects.
export const PLANS: Record<Region, { original: string; current: string; currency: "INR" | "USD"; amount: number }> = {
  IN: { original: "₹499", current: "₹99", currency: "INR", amount: 9900 },
  INTL: { original: "$19.99", current: "$9.99", currency: "USD", amount: 999 },
};

// Country comes from a header set by the host (Vercel / Cloudflare). Null when unknown (e.g. localhost).
export function regionFromCountry(country: string | null | undefined): Region | null {
  if (!country || country === "XX") return null;
  return country.toUpperCase() === "IN" ? "IN" : "INTL";
}

export function regionFromHeaders(h: Headers): Region | null {
  return regionFromCountry(h.get("x-vercel-ip-country") ?? h.get("cf-ipcountry"));
}
