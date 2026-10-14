import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookACallLink from "@/components/BookACallLink";
import { ArrowRightIcon, CheckIcon } from "@/components/icons";

const description = "A base fee matched to your event size, plus a fee for each qualified attendee. If we deliver 50% or less of the agreed target, we waive the base fee.";
export const metadata: Metadata = {
  title: "Incentivised aligned pricing",
  description,
  alternates: { canonical: "/pricing" },
  openGraph: { title: "Incentivised aligned pricing | Apex Strategy", description, url: "/pricing" },
  twitter: { title: "Incentivised aligned pricing | Apex Strategy", description },
};

const plans = [
  { name: "Small events", description: "Focused rooms. Carefully selected executives.", examples: "Executive dinners, roundtables and intimate briefings.", items: ["A base fee scoped for a smaller event", "Audience research and campaign setup", "Personalised outreach and guest management", "A fee for each qualified attendee"] },
  { name: "Large events", description: "More seats. The same focus on audience quality.", examples: "Conferences, summits and larger executive programmes.", items: ["A base fee scoped for a larger campaign", "Audience strategy across your target segments", "Coordinated outreach and campaign management", "A fee for each qualified attendee"] },
];

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <section className="pt-32 pb-16 hero-grid-bg">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <Link href="/ai-first-hpage" className="inline-flex text-accent text-sm mb-8 hover:underline">← AI-first delegate acquisition</Link>
            <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-5">Clear fees. Shared outcomes.</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">Incentivised <span className="gradient-text">aligned pricing</span></h1>
            <p className="text-text-light text-lg leading-relaxed max-w-2xl mx-auto">A base fee for the campaign. A fee for each qualified attendee. And a base-fee waiver if we fall short of your agreed target by 50% or more.</p>
          </div>
        </section>

        <section className="py-16 bg-bg-secondary" aria-labelledby="event-size-heading">
          <div className="max-w-6xl mx-auto px-6">
            <h2 id="event-size-heading" className="text-3xl font-bold text-center mb-4">Start with your event size.</h2>
            <p className="text-text-light text-center max-w-2xl mx-auto mb-10">We quote the base fee and attendee rate around your event, audience and campaign scope. Exact fees are agreed in your proposal.</p>
            <div className="grid md:grid-cols-2 gap-6">
              {plans.map(plan => <article key={plan.name} className="bg-bg-card border border-border rounded-2xl p-8 md:p-10">
                <h3 className="text-2xl font-semibold mb-3">{plan.name}</h3>
                <p className="text-accent-secondary mb-2">{plan.description}</p>
                <p className="text-text-muted text-sm leading-relaxed mb-8">{plan.examples}</p>
                <div className="border-y border-border py-6 mb-7"><p className="text-2xl font-semibold text-accent">Base fee + per attendee</p><p className="text-text-light text-sm mt-2">Quoted to match your brief</p></div>
                <ul className="space-y-4 mb-8">{plan.items.map(item => <li className="flex items-start gap-3 text-text-light text-sm" key={item}><CheckIcon className="w-5 h-5 text-accent shrink-0" /><span>{item}</span></li>)}</ul>
                <BookACallLink className="inline-flex items-center justify-center gap-2 w-full bg-accent hover:bg-accent-hover text-bg-primary font-semibold px-6 py-3.5 rounded-lg transition-colors">Discuss your event <ArrowRightIcon className="w-4 h-4" /></BookACallLink>
              </article>)}
            </div>
          </div>
        </section>

        <section className="py-20"><div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start">
          <div><p className="text-accent text-xs font-semibold tracking-widest uppercase mb-4">The attendee fee</p><h2 className="text-3xl md:text-4xl font-bold mb-5">Priced for the people<br />you want in the room.</h2><p className="text-text-light leading-relaxed">The per-attendee rate reflects your target audience: the accounts, roles, seniority, markets and qualification criteria in your brief. We agree the rate and attendee target before the campaign starts.</p></div>
          <div className="bg-bg-card border border-border rounded-2xl p-8"><h3 className="text-xl font-semibold mb-5">What counts as a qualified attendee?</h3><ul className="space-y-4 text-text-light leading-relaxed"><li>Meets the account, role and seniority criteria agreed in your brief.</li><li>Attends your event, with attendance verified against the agreed process.</li><li>Counts towards the agreed campaign target. An invitation or registration alone is not attendance.</li></ul></div>
        </div></section>

        <section className="py-20 bg-bg-secondary"><div className="max-w-6xl mx-auto px-6"><div className="green-gradient-card rounded-2xl p-8 md:p-12 grid lg:grid-cols-2 gap-12">
          <div><p className="text-accent text-xs font-semibold tracking-widest uppercase mb-4">Our base-fee commitment</p><h2 className="text-3xl md:text-4xl font-bold mb-5">Miss the target by 50%?<br /><span className="text-accent">We waive the base fee.</span></h2><p className="text-text-light leading-relaxed">If we deliver 50% or less of the agreed qualified-attendee target, the base fee is waived. You still pay the agreed per-attendee fee for the qualified guests who attend.</p></div>
          <div className="bg-bg-primary/50 border border-border rounded-xl p-6"><h3 className="font-semibold text-xl mb-5">An example with a target of 50</h3><dl className="space-y-5"><div><dt className="text-accent font-semibold">25 qualified attendees or fewer</dt><dd className="text-text-light text-sm leading-relaxed mt-1">Base fee waived. Per-attendee fees apply to the qualified guests who attend.</dd></div><div className="border-t border-border pt-5"><dt className="text-white font-semibold">26–50 qualified attendees</dt><dd className="text-text-light text-sm leading-relaxed mt-1">Base fee applies, plus the agreed fee for each qualified attendee.</dd></div></dl><p className="text-text-muted text-xs leading-relaxed mt-6">Illustrative attendee target, not a fixed package or attendance guarantee. Your proposal sets the actual target and fees.</p></div>
        </div></div></section>

        <section className="py-20"><div className="max-w-4xl mx-auto px-6"><h2 className="text-3xl font-bold mb-8">Agreed before we begin.</h2><div className="grid sm:grid-cols-2 gap-8">{[
          ["Your target and audience", "The attendee target, qualification criteria and audience scope are recorded in your proposal."],
          ["Your campaign fees", "Your event-size base fee and target-audience attendee rate are confirmed before launch."],
          ["Your attendance record", "We agree how attendance is verified and how the base-fee waiver is applied if the threshold is reached."],
          ["Your event capacity", "We discuss capacity and the commercial terms for any attendance above target as part of your proposal."],
        ].map(([title, text]) => <div key={title}><h3 className="text-lg font-semibold mb-3">{title}</h3><p className="text-text-light text-sm leading-relaxed">{text}</p></div>)}</div></div></section>

        <section className="py-20 bg-bg-secondary cta-gradient-bg border-t border-border"><div className="max-w-3xl mx-auto px-6 text-center"><h2 className="text-3xl md:text-4xl font-bold mb-5">Let’s put a plan behind your target.</h2><p className="text-text-light text-lg leading-relaxed mb-8">Tell us about your event and ideal audience. We’ll scope the campaign, agree the target and give you a clear quote.</p><BookACallLink className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-bg-primary font-semibold px-8 py-3.5 rounded-lg transition-colors">Discuss pricing <ArrowRightIcon className="w-4 h-4" /></BookACallLink></div></section>
      </main>
      <Footer description="AI-first delegate acquisition for executive events. Incentivised aligned pricing." />
    </>
  );
}
