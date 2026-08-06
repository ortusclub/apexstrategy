import type { Metadata } from "next";
import Image from "next/image";
import RegisterForm from "@/components/event/RegisterForm";

export const metadata: Metadata = {
  title: "Securing the Enterprise — A CISO Roundtable · 30 June 2026 · Alexandria, VA",
  description:
    "An invitation-only executive dinner for North America's senior cybersecurity leaders. 30 June 2026 at Ada's on the River, Alexandria, VA. Hosted by Aphinia in partnership with Apex Strategy.",
  robots: { index: false, follow: false },
  // Without this the root layout's canonical ("/") would be inherited here.
  alternates: { canonical: "/event/security-leaders" },
};

const QUESTIONS = [
  "How are CISOs balancing the opportunities and risks of AI adoption across the enterprise?",
  "What's actually working when it comes to communicating cyber risk to the board?",
  "Where should security leaders be investing their limited time, budget, and political capital in the year ahead?",
];

const SCHEDULE = [
  { time: "6:00–7:00", zone: "pm ET", what: "Cocktails, introductions and ice-breakers" },
  { time: "7:00–8:00", zone: "pm ET", what: "Guided discussion on the most important cybersecurity topics" },
  { time: "8:00–9:00", zone: "pm ET", what: "Dinner" },
];

const ROLES = [
  "Chief Information Security Officer (CISO)",
  "Chief Security Officer (CSO)",
  "Chief Information Officer (CIO)",
  "VP / SVP of Information Security",
  "VP / SVP of Cybersecurity",
  "Head of Security",
  "Head of Cyber Risk",
  "Head of Information Security",
];

export default function EventPage() {
  return (
    <main id="main-content" className="min-h-screen">
      {/* Sticky nav with co-branded lockup */}
      <header className="glass-nav sticky top-0 z-50 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image
              src="/event/apex-logo-white.png"
              alt="Apex Strategy"
              width={120}
              height={36}
              className="h-7 w-auto"
              priority
            />
            <span className="text-text-muted text-lg font-light">×</span>
            <Image
              src="/event/aphinia-logo.png"
              alt="Aphinia"
              width={150}
              height={28}
              className="h-7 w-auto invert brightness-0"
              priority
            />
          </div>
          <a
            href="#register"
            className="bg-accent hover:bg-accent-hover text-bg-primary font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors"
          >
            Request invitation
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative pt-28 pb-24 overflow-hidden hero-grid-bg cta-gradient-bg">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-sm font-medium text-text-muted uppercase tracking-[0.18em] mb-5">
            <span className="text-text-white font-semibold">30 June 2026</span>
            <span className="mx-3 text-text-muted">·</span>
            <span className="text-text-white font-semibold">Alexandria, VA</span>
            <span className="mx-3 text-text-muted">·</span>
            By invitation only
          </p>
          <span className="inline-block text-accent text-xs font-semibold tracking-widest uppercase bg-[rgba(0,208,132,0.1)] border border-[rgba(0,208,132,0.25)] rounded-full px-4 py-1.5 mb-6">
            Executive dinner &amp; discussion
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6 max-w-[18ch]">
            Securing the Enterprise:{" "}
            <span className="gradient-text italic font-medium">a CISO roundtable.</span>
          </h1>
          <p className="text-lg md:text-xl text-text-light leading-relaxed mb-10 max-w-2xl">
            An invitation-only evening bringing together some of North America&apos;s most accomplished cybersecurity leaders for candid conversation, sharp insight, and genuine connection — alongside peers who understand the weight of the role.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#register"
              className="bg-accent hover:bg-accent-hover text-bg-primary font-semibold px-8 py-4 rounded-lg transition-colors inline-flex items-center justify-center gap-2"
            >
              Request your seat <span>→</span>
            </a>
            <a
              href="#topic"
              className="border border-[rgba(146,212,205,0.2)] hover:border-[rgba(146,212,205,0.4)] text-text-light hover:text-white px-8 py-4 rounded-lg transition-colors inline-flex items-center justify-center"
            >
              Read the brief
            </a>
          </div>
        </div>
      </section>

      {/* TOPIC */}
      <section id="topic" className="py-24 bg-bg-secondary">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12 max-w-3xl">
            <span className="inline-block text-accent text-xs font-semibold tracking-widest uppercase bg-[rgba(0,208,132,0.1)] border border-[rgba(0,208,132,0.25)] rounded-full px-4 py-1.5 mb-6">
              The topic
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-4">
              Securing the enterprise at one of the most demanding moments in the discipline&apos;s history.
            </h2>
          </div>

          <div className="space-y-6 text-text-light text-lg leading-relaxed">
            <p>
              Cybersecurity leaders are navigating one of the most demanding moments in the history of the discipline. Threat actors move faster, AI has rewritten both the attack surface and the defender&apos;s toolkit, and boards expect clearer answers on risk than ever before. The CISO&apos;s mandate has expanded well beyond technology — into business strategy, regulatory navigation, and organisational resilience.
            </p>
            <p>
              Yet the best ideas rarely come from vendor decks or industry reports. They come from conversations with peers who are quietly solving the same problems, making the same trade-offs, and learning the same hard lessons. This dinner is designed to be exactly that kind of conversation: off-the-record, senior-only, and grounded in the realities of running security at scale.
            </p>
          </div>

          <div className="mt-12 green-gradient-card rounded-2xl p-8 md:p-10">
            <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-5">
              Questions we&apos;ll explore
            </p>
            <ul className="divide-y divide-[rgba(146,212,205,0.10)]">
              {QUESTIONS.map((q) => (
                <li key={q} className="flex gap-3 py-4 text-text-white">
                  <span className="text-accent font-semibold flex-shrink-0">→</span>
                  <span>{q}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SCHEDULE */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-12 max-w-3xl">
            <span className="inline-block text-accent text-xs font-semibold tracking-widest uppercase bg-[rgba(0,208,132,0.1)] border border-[rgba(0,208,132,0.25)] rounded-full px-4 py-1.5 mb-6">
              The evening
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
              An unhurried three-hour evening.
            </h2>
            <p className="text-text-light text-lg">
              Designed for connection first — the conversation comes after the room has had a chance to settle in.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {SCHEDULE.map((s) => (
              <div
                key={s.time}
                className="bg-bg-card border border-border rounded-xl p-7 hover:-translate-y-1 hover:border-[rgba(0,208,132,0.3)] transition-all"
              >
                <div className="text-accent text-3xl font-bold tracking-tight mb-2">
                  {s.time}
                </div>
                <div className="text-text-muted text-xs font-medium uppercase tracking-widest mb-4">
                  {s.zone}
                </div>
                <div className="text-text-white text-lg leading-snug">{s.what}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VENUE */}
      <section className="py-24 bg-bg-secondary">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-10 max-w-3xl">
            <span className="inline-block text-accent text-xs font-semibold tracking-widest uppercase bg-[rgba(0,208,132,0.1)] border border-[rgba(0,208,132,0.25)] rounded-full px-4 py-1.5 mb-6">
              The venue
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Ada&apos;s on the River — a riverside table on the Potomac.
            </h2>
          </div>
          <div className="grid md:grid-cols-[1.1fr_1fr] bg-bg-card border border-border rounded-2xl overflow-hidden">
            <div className="p-10">
              <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-5">
                Where we&apos;ll gather
              </p>
              <h3 className="text-3xl font-bold tracking-tight mb-4">
                Ada&apos;s on the River
              </h3>
              <p className="text-text-light leading-relaxed mb-7">
                <span className="text-white font-medium">3 Pioneer Mill Way</span>
                <br />
                Alexandria, VA 22314
                <br />
                United States
              </p>
              <a
                href="https://maps.google.com/?q=Ada%27s+on+the+River%2C+3+Pioneer+Mill+Way%2C+Alexandria%2C+VA+22314"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent hover:text-accent-hover text-sm font-semibold border-b border-[rgba(0,208,132,0.3)] pb-1 transition-colors"
              >
                Open in Google Maps →
              </a>
            </div>
            <div className="relative min-h-[280px] bg-bg-primary">
              <iframe
                src="https://www.google.com/maps?q=Ada%27s+on+the+River%2C+3+Pioneer+Mill+Way%2C+Alexandria%2C+VA+22314&output=embed"
                title="Ada's on the River — location map"
                className="w-full h-full border-0 grayscale-[85%] brightness-90 contrast-[1.05]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* AUDIENCE */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-10 max-w-3xl">
            <span className="inline-block text-accent text-xs font-semibold tracking-widest uppercase bg-[rgba(0,208,132,0.1)] border border-[rgba(0,208,132,0.25)] rounded-full px-4 py-1.5 mb-6">
              Who should be in the room
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Designed for senior cybersecurity executives leading security strategy at large enterprises across North America.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {ROLES.map((r) => (
              <div
                key={r}
                className="flex items-center gap-3 px-5 py-4 bg-bg-card border border-border rounded-lg hover:border-[rgba(0,208,132,0.3)] transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                <span className="text-text-white text-sm">{r}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REGISTER */}
      <RegisterForm />

      {/* HOSTS */}
      <section className="py-24 bg-bg-secondary">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-10 max-w-3xl">
            <span className="inline-block text-accent text-xs font-semibold tracking-widest uppercase bg-[rgba(0,208,132,0.1)] border border-[rgba(0,208,132,0.25)] rounded-full px-4 py-1.5 mb-6">
              The hosts
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Convened by Aphinia, in partnership with Apex Strategy.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-bg-card border border-border rounded-2xl p-10">
              <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-5">
                Guesting partner
              </p>
              <Image
                src="/event/apex-logo-white.png"
                alt="Apex Strategy"
                width={200}
                height={56}
                className="h-10 w-auto mb-6"
              />
              <p className="text-text-light leading-relaxed">
                Apex Strategy partners with leading organisations to design and deliver high-impact executive gatherings, creating the conditions for senior leaders to exchange ideas, build trust, and shape the thinking that drives their industries forward.
              </p>
            </div>
            <div className="bg-bg-card border border-border rounded-2xl p-10">
              <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-5">
                The host
              </p>
              <Image
                src="/event/aphinia-logo.png"
                alt="Aphinia"
                width={220}
                height={42}
                className="h-10 w-auto mb-6 invert brightness-0"
              />
              <p className="text-text-light leading-relaxed">
                Aphinia is a community of 2,000+ CISOs in North America, dedicated to connecting cybersecurity leaders through trusted networks, shared intelligence, and candid peer exchange. The organisation exists to help security executives lead more effectively by learning directly from one another.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-10 text-center text-sm text-text-muted">
        <div className="flex justify-center gap-6 mb-3">
          <a href="/" className="hover:text-accent transition-colors">Apex Strategy</a>
          <a href="mailto:driton@apexstrategy.io" className="hover:text-accent transition-colors">driton@apexstrategy.io</a>
        </div>
        <div>© 2026 Apex Guesting Limited &nbsp;·&nbsp; Convened with Aphinia</div>
      </footer>
    </main>
  );
}
