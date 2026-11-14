import Link from "next/link";
import Footer from "./Footer";
import Logo from "./Logo";
import { BUSINESS } from "@/lib/business";

export default function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/60 bg-background/85">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <Link href="/" aria-label="Haven home"><Logo /></Link>
          <Link href="/" className="text-sm text-muted-foreground hover:text-primary">← Back to home</Link>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-5 py-16">
        <h1 className="text-4xl text-primary md:text-5xl">{title}</h1>
        <p className="mt-3 text-sm text-muted-foreground">Last updated: {BUSINESS.updated}</p>
        <div className="mt-10 space-y-5 leading-relaxed text-foreground [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:text-primary [&_li]:mt-2 [&_ul]:list-disc [&_ul]:pl-6 [&_a]:text-primary [&_a]:underline">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
