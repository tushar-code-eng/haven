import Link from "next/link";
import Logo from "./Logo";

const links = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/refund", label: "Refund Policy" },
  { href: "/delivery", label: "Delivery Policy" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 md:flex-row md:items-start md:justify-between">
        <div>
          <Logo />
          <p className="mt-2 text-sm text-muted-foreground">Your safe place when your relationship gets in your head.</p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-primary">{l.label}</Link>
          ))}
        </nav>
      </div>
      <p className="mx-auto mt-8 max-w-6xl px-5 text-xs text-muted-foreground">
        Haven is a digital reflection companion, not a mental-health professional or crisis service.
      </p>
    </footer>
  );
}
