import { Check, ChevronDown, Ghost, Heart, HandHeart, LifeBuoy, MessageSquareText, MessagesSquare, Moon, ShoppingBag, Sparkles, Waves, Wind } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Logo from "@/components/Logo";
import { headers } from "next/headers";
import { BuyButton, PriceDisplay, PricingProvider } from "@/components/Price";
import { regionFromHeaders } from "@/lib/pricing";

const btnPrimary =
  "inline-flex items-center justify-center rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-soft transition hover:-translate-y-0.5 hover:bg-primary/90";
const eyebrow = "text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground";

const moments = [
  { img: "/assets/moment-1.jpg", alt: "A woman checking her phone in bed late at night", title: "The delayed reply", text: "They haven't replied in hours. You know they might be busy, but your mind keeps looking for another explanation." },
  { img: "/assets/moment-2.jpg", alt: "A person at a kitchen table looking thoughtfully at their phone", title: "The changed tone", text: "Their message feels different today. Now you're wondering whether you've done something wrong." },
  { img: "/assets/moment-3.jpg", alt: "A young man on a sofa typing a message on his phone", title: "The unsent message", text: "You want to ask if everything is okay, but you're afraid of sounding needy." },
  { img: "/assets/moment-4.jpg", alt: "A person lying awake in bed lit by their phone screen", title: "The 2 AM spiral", text: "It's late. You're replaying the conversation again, trying to find an answer you can't quite reach." },
];

const benefits = [
  { title: "There when you need to talk", text: "Available whenever you need a moment to pause and reflect — no waiting for someone to be free." },
  { title: "No fear of being judged", text: "Say what you're really thinking, exactly as it comes out." },
  { title: "Same thoughts, again? That's okay", text: "A space to untangle the worries that keep coming back, without feeling like a burden." },
  { title: "Private, at your own pace", text: "Talk things through quietly and take as long as you need to find a calmer next step." },
];

const commands = [
  { cmd: "/textcheck", Icon: MessageSquareText, text: "Want to send a message but not sure how it sounds? Work through it before you hit send." },
  { cmd: "/spiral", Icon: Waves, text: "Feeling overwhelmed by your thoughts? Slow down and separate what's happening from what you're afraid might be happening." },
  { cmd: "/ghost", Icon: Ghost, text: "Worried someone is pulling away or disappearing? Talk through the uncertainty without jumping straight to conclusions." },
  { cmd: "/sos", Icon: LifeBuoy, text: "Need a moment to pause before reacting? Get support when the urge to text, check, or act feels overwhelming." },
  { cmd: "/vent", Icon: Wind, text: "Need to get everything off your chest? Talk freely without needing to organize your thoughts first." },
  { cmd: "/reassure", Icon: HandHeart, text: "Feeling insecure or needing reassurance? Explore those feelings with care and perspective." },
  { cmd: "/night", Icon: Moon, text: "Can't switch your brain off at night? Work through the thoughts keeping you awake." },
];

const steps = [
  { Icon: ShoppingBag, n: "01", title: "Get Haven", text: "Purchase the digital product and receive your Haven setup instructions." },
  { Icon: Sparkles, n: "02", title: "Open ChatGPT", text: "Follow the simple instructions to add Haven's companion prompt to ChatGPT." },
  { Icon: MessagesSquare, n: "03", title: "Talk it through", text: "Whenever relationship worries start taking over, open your Haven conversation and start talking." },
];

const forYou = [
  "You reread messages trying to understand what they meant.",
  "You struggle with uncertainty when someone's communication changes.",
  "You sometimes need reassurance but worry about asking for it.",
  "You want to understand your feelings before acting on them.",
];

const features = [
  "Seven quick-start commands",
  "Guided conversations for common relationship worries",
  "A simple setup guide",
  "Access to the digital product after purchase, per checkout and delivery terms",
];

const faqs = [
  { q: "Is Haven a separate app?", a: "No. Haven is a ready-to-use AI relationship-support companion that works through ChatGPT. You'll follow the provided setup instructions to use it." },
  { q: "Do I need ChatGPT?", a: "Yes. You'll need access to ChatGPT to use Haven. Check the setup instructions and your ChatGPT account's available features." },
  { q: "Can Haven tell me whether my partner is losing interest?", a: "No. Haven cannot know what another person is thinking or predict what will happen in your relationship. It can help you explore the evidence, consider other possibilities, and decide what you want to do next." },
  { q: "Is Haven therapy?", a: "No. Haven is a supportive reflection companion, not a therapist or a replacement for professional mental-health care." },
  { q: "Can I use Haven if I'm a man?", a: "Absolutely. Haven is for anyone who experiences relationship anxiety or overthinking." },
  { q: "What do I receive after purchasing?", a: "You'll receive the digital product and instructions for setting up Haven in ChatGPT. The final delivery details will be shown at checkout." },
];

function Bubble({ who, children }: { who: "You" | "Haven"; children: React.ReactNode }) {
  const you = who === "You";
  return (
    <div className={`flex ${you ? "justify-end" : "justify-start"}`}>
      <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${you ? "rounded-br-sm bg-secondary text-foreground" : "rounded-bl-sm bg-primary text-primary-foreground"}`}>
        <p className="mb-1 text-[10px] font-semibold uppercase tracking-widest opacity-60">{who}</p>
        {children}
      </div>
    </div>
  );
}

export default async function Home() {
  // Country header set by the host (Vercel / Cloudflare). Absent on localhost -> client-side fallback.
  const region = regionFromHeaders(await headers());

  return (
    <div id="top" className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-12 md:grid-cols-2 md:pt-20">
          <div>
            <p className={eyebrow}>There when you need to talk</p>
            <h1 className="mt-5 text-5xl leading-[1.05] text-primary md:text-6xl">
              You don&apos;t have to wait for someone <em className="text-foreground">to be there for you.</em>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">When relationship anxiety takes over, Haven gives you a space to talk things through, explore your thoughts, and find perspective — whenever you need it.</p>
            <p className="mt-3 text-lg leading-relaxed text-muted-foreground">No waiting for a friend to be free. No fear of being judged. No guilt about bringing up the same worry again.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#pricing" className={btnPrimary}>Find Your Calm</a>
              <a href="#how" className="inline-flex items-center justify-center rounded-full border border-primary/30 px-7 py-3.5 text-sm font-medium text-primary transition hover:bg-primary/5">See How It Works</a>
            </div>
            <p className="mt-5 text-sm text-muted-foreground">A companion built on ChatGPT, with carefully designed prompts, personality and guided commands. An extra source of support — alongside the people in your life.</p>
          </div>
          <div className="relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/hero.jpg" alt="A thoughtful young woman sitting on her bed at night holding her phone, lit by a warm bedside lamp" className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-soft" />
            <div className="absolute -bottom-8 left-4 right-4 space-y-3 rounded-3xl border border-border bg-ivory/95 p-5 shadow-soft backdrop-blur md:-left-10 md:right-10">
              <Bubble who="You">They haven&apos;t replied in hours. I think something&apos;s wrong.</Bubble>
              <Bubble who="Haven">It&apos;s hard sitting with that uncertainty. Let&apos;s slow things down. What do you know for sure, and what is your mind filling in?</Bubble>
            </div>
          </div>
        </section>

        {/* Moments */}
        <section className="bg-ivory py-24">
          <div className="mx-auto max-w-6xl px-5">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-4xl text-primary md:text-5xl">Ever find yourself here?</h2>
              <p className="mt-4 text-lg text-muted-foreground">Sometimes the smallest things can trigger the loudest thoughts.</p>
            </div>
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {moments.map((m) => (
                <article key={m.title} className="overflow-hidden rounded-3xl border border-border bg-background transition hover:-translate-y-1">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={m.img} alt={m.alt} loading="lazy" className="aspect-[6/5] w-full object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl text-primary">{m.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.text}</p>
                  </div>
                </article>
              ))}
            </div>
            <p className="mt-14 text-center font-serif text-2xl italic text-foreground">You don&apos;t have to figure out every feeling on your own.</p>
          </div>
        </section>

        {/* Meet Haven */}
        <section className="mx-auto max-w-6xl px-5 py-24">
          <div className="grid gap-12 md:grid-cols-[1.1fr_1fr]">
            <div>
              <p className={eyebrow}>Meet Haven</p>
              <h2 className="mt-4 text-4xl leading-tight text-primary md:text-5xl">Meet Haven. Someone to turn to, whenever you need to talk.</h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">Friends aren&apos;t always free at 2 AM. Sometimes you don&apos;t want to explain it all again. Haven gives you a place to talk things through when your relationship starts taking up too much space in your head.</p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">Haven is a carefully designed companion — its prompts, personality and guided commands — that works through ChatGPT (and can be adapted to Claude where our setup supports it). It&apos;s not a separate AI model, and it&apos;s not a replacement for the people who care about you. It&apos;s simply there for the moments in between.</p>
              <p className="mt-8 border-l-2 border-blush pl-4 text-sm text-muted-foreground">Haven is designed to support reflection, not tell you what your partner thinks or guarantee a relationship outcome.</p>
            </div>
            <div className="space-y-4">
              {benefits.map((b) => (
                <div key={b.title} className="rounded-3xl border border-border bg-ivory p-6">
                  <h3 className="flex items-center gap-2 text-2xl text-primary"><Heart className="h-4 w-4 fill-blush text-blush" aria-hidden />{b.title}</h3>
                  <p className="mt-2 text-muted-foreground">{b.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Example conversation */}
        <section className="bg-secondary/50 py-24">
          <div className="mx-auto max-w-3xl px-5 text-center">
            <h2 className="text-4xl text-primary md:text-5xl">Here&apos;s what talking to Haven can look like.</h2>
            <p className="mt-4 text-muted-foreground">An example conversation with Haven inside ChatGPT.</p>
          </div>
          <div className="mx-auto mt-12 max-w-2xl px-5">
            <div className="overflow-hidden rounded-3xl border border-border bg-ivory shadow-soft">
              <div className="flex items-center gap-2 border-b border-border px-5 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-blush" />
                <span className="h-2.5 w-2.5 rounded-full bg-secondary" />
                <span className="h-2.5 w-2.5 rounded-full bg-sage" />
                <span className="ml-3 text-xs text-muted-foreground">ChatGPT · Haven</span>
              </div>
              <div className="space-y-4 p-5 md:p-8">
                <Bubble who="You">It&apos;s 1 AM and I&apos;m worrying about the same thing again. I don&apos;t want to text my friends about it — they&apos;ve heard it so many times. I feel like she&apos;s losing interest.</Bubble>
                <Bubble who="Haven">
                  <span className="block">I&apos;m glad you came here. You don&apos;t need to apologise for a worry coming back — that&apos;s often how anxiety works. 🫂</span>
                  <span className="mt-3 block">Let&apos;s take it slowly. Has something specific changed in how she treats you, or is it mainly her texting that&apos;s felt different?</span>
                </Bubble>
              </div>
            </div>
            <p className="mt-8 text-center font-serif text-xl italic text-foreground">No waiting, no judgment, no &quot;you said this last week.&quot; Just a space to work through what&apos;s happening for you.</p>
          </div>
        </section>

        {/* Commands */}
        <section id="commands" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24">
          <div className="max-w-2xl">
            <p className={eyebrow}>Your moments, your way</p>
            <h2 className="mt-4 text-4xl text-primary md:text-5xl">A little help for the moments that get to you.</h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {commands.map(({ cmd, Icon, text }) => (
              <div key={cmd} className="rounded-3xl border border-border bg-ivory p-6 transition hover:border-primary/30">
                <Icon className="h-5 w-5 text-sage" aria-hidden />
                <p className="mt-4 font-mono text-lg font-semibold text-primary">{cmd}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
            <div className="flex items-center rounded-3xl bg-primary p-6 text-sm leading-relaxed text-primary-foreground">
              These are quick-start commands for different relationship moments. Haven can also support natural, open-ended conversations.
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="scroll-mt-20 bg-ivory py-24">
          <div className="mx-auto max-w-6xl px-5">
            <div className="text-center">
              <span className="inline-block rounded-full border border-border px-4 py-1.5 text-xs text-muted-foreground">Digital product · ChatGPT required</span>
              <h2 className="mt-5 text-4xl text-primary md:text-5xl">Getting started is simple.</h2>
            </div>
            <ol className="relative mt-14 grid gap-6 md:grid-cols-3">
              <div className="absolute left-[16%] right-[16%] top-8 hidden h-px bg-border md:block" />
              {steps.map(({ Icon, n, title, text }) => (
                <li key={n} className="relative text-center">
                  <div className="mx-auto grid h-16 w-16 place-items-center rounded-full border border-border bg-background">
                    <Icon className="h-6 w-6 text-primary" aria-hidden />
                  </div>
                  <p className="mt-5 text-xs font-semibold tracking-widest text-sage">{n}</p>
                  <h3 className="mt-1 text-2xl text-primary">{title}</h3>
                  <p className="mx-auto mt-2 max-w-xs text-muted-foreground">{text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Who it's for */}
        <section className="mx-auto max-w-4xl px-5 py-24 text-center">
          <h2 className="text-4xl leading-tight text-primary md:text-5xl">For the people who feel a little too much, think a little too long, and care deeply.</h2>
          <ul className="mt-12 grid gap-4 text-left sm:grid-cols-2">
            {forYou.map((t) => (
              <li key={t} className="flex gap-3 rounded-2xl border border-border bg-ivory p-5">
                <Heart className="mt-1 h-4 w-4 shrink-0 fill-blush text-blush" aria-hidden />
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-muted-foreground">Haven is for anyone who experiences relationship anxiety — regardless of gender or relationship status.</p>
        </section>

        {/* Pricing */}
        <section id="pricing" className="scroll-mt-20 bg-secondary/50 py-24">
          <PricingProvider region={region}>
          <div className="mx-auto max-w-lg px-5">
            <div className="rounded-[2rem] border border-border bg-ivory p-8 text-center shadow-soft md:p-10">
              <Logo />
              <p className="mt-2 text-sm text-muted-foreground">Relationship Anxiety Companion</p>
              <PriceDisplay />
              <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">Launch price</p>
              <p className="mt-6 text-foreground">Your ready-to-use ChatGPT companion for relationship overthinking.</p>
              <ul className="mt-6 space-y-3 text-left">
                {features.map((f) => (
                  <li key={f} className="flex gap-3 text-sm"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />{f}</li>
                ))}
              </ul>
              <BuyButton className={`${btnPrimary} mt-8 w-full`} />
              <p className="mt-4 text-xs text-muted-foreground">Digital product. Requires access to ChatGPT. No separate Haven app.</p>
            </div>
          </div>
          </PricingProvider>
        </section>

        {/* FAQ */}
        <section id="faq" className="mx-auto max-w-3xl scroll-mt-20 px-5 py-24">
          <h2 className="text-center text-4xl text-primary md:text-5xl">Questions, gently answered.</h2>
          <div className="mt-10 divide-y divide-border rounded-3xl border border-border bg-ivory">
            {faqs.map((f) => (
              <details key={f.q} className="group px-6 py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-foreground [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition group-open:rotate-180" aria-hidden />
                </summary>
                <p className="mt-3 leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-primary py-24 text-primary-foreground">
          <div className="mx-auto max-w-3xl px-5 text-center">
            <Heart className="mx-auto h-8 w-8 fill-blush text-blush" aria-hidden />
            <h2 className="mt-6 text-4xl leading-tight md:text-5xl">You don&apos;t have to wait for someone to be there for you.</h2>
            <p className="mt-6 text-lg opacity-80">Whenever the worry comes back — at 2 AM, between meetings, for the tenth time — Haven is there to help you talk it through privately, without judgment, at your own pace.</p>
            <a href="#pricing" className="mt-10 inline-flex rounded-full bg-background px-8 py-4 text-sm font-medium text-primary transition hover:-translate-y-0.5">Find Your Calm</a>
            <p className="mt-6 text-sm opacity-70">An extra source of support, alongside the people who care about you. 🤍</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
