import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import BookACallLink from "@/components/BookACallLink";
import JsonLd from "@/components/JsonLd";
import styles from "./page.module.css";

const description = "AI-first delegate acquisition for executive and B2B events. Intelligent prospecting, personalised outreach and expert campaign management, with a base campaign fee plus performance incentives.";

export const metadata: Metadata = {
  title: "AI-first B2B Delegate Acquisition",
  description,
  keywords: ["AI-first delegate acquisition", "B2B event attendance", "executive prospecting", "AI-powered guest acquisition"],
  alternates: { canonical: "/ai-first-hpage" },
  openGraph: { title: "The right executives. A smarter way to reach them.", description, url: "/ai-first-hpage" },
  twitter: { title: "AI-first delegate acquisition | Apex Strategy", description },
};

const steps = [
  { title: "Define the room", label: "Audience strategy", text: "Agree the companies, seniority, roles and markets that matter. Set your priority accounts, suppression lists and qualification criteria before outreach begins." },
  { title: "Find the right people", label: "AI-powered prospecting", text: "AI agents research executive prospects and prioritise fit. Data and predictive modelling help focus the campaign on relevant decision-makers." },
  { title: "Make it personal", label: "Multi-channel outreach", text: "Tailor invitations to each executive’s role, company and interests. Coordinate messaging and follow-ups across email and LinkedIn, using agreed campaign identities." },
  { title: "Turn interest into attendance", label: "Qualification & follow-through", text: "Manage replies, qualify registrations and keep guests engaged. Use campaign signals to refine targeting and focus follow-up as event day approaches." },
];
const faqs = [
  ["What does AI-first actually mean?", "AI is built into the acquisition workflow: prospect research, audience prioritisation, personalised messaging and follow-up. Your campaign team sets the strategy and manages qualification, conversations and delivery."],
  ["Who is this designed for?", "Enterprise technology and professional services teams hosting high-value B2B events. We focus on the C-suite, VPs and other senior decision-makers who match your agreed audience criteria."],
  ["Can we control who receives an invitation?", "Yes. We work from agreed priority accounts and suppression lists. If the initial audience is too narrow, we can propose look-alike companies or adjacent roles for your approval before expanding outreach."],
  ["How does pricing work?", "A base campaign fee covers strategy, research and campaign operations. Performance-based incentives are tied to qualified attendees secured. We agree the qualification criteria, billable milestone and treatment of cancellations or no-shows in your proposal."],
  ["Can you guarantee a specific number of attendees?", "We agree a target based on your audience, market, event and lead time. Predictive modelling supports planning, but attendance depends on individual decisions. We review campaign progress with you and adjust the approach as needed."],
];

export default function AiFirstHomePage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <nav className={styles.nav} aria-label="Main navigation">
          <Link href="/" aria-label="Apex Strategy home"><Image src="/images/APEX_TransparentLogo2-White.png" alt="Apex Strategy" width={140} height={40} className={styles.logo} priority /></Link>
          <div className={styles.navLinks}><a href="#approach">Our approach</a><a href="#audience">Who we reach</a><a href="#pricing">Pricing</a></div>
          <BookACallLink className={styles.button}>Book a call <span aria-hidden="true">↗</span></BookACallLink>
        </nav>
      </header>
      <main id="main-content">
        <section className={styles.hero}>
          <div className={`${styles.container} ${styles.heroGrid}`}>
            <div>
              <p className={styles.eyebrow}>AI-first B2B delegate acquisition</p>
              <h1>The right executives.<br /><span>A smarter way<br className={styles.desktopBreak} /> to reach them.</span></h1>
              <p className={styles.lead}>Your next event deserves the right people in the room. We combine AI-powered prospecting, personalised outreach and hands-on campaign expertise to get them there.</p>
              <div className={styles.actions}><BookACallLink className={styles.button}>Build your audience <span aria-hidden="true">↗</span></BookACallLink><a className={styles.secondaryButton} href="#approach">See how it works <span aria-hidden="true">↓</span></a></div>
              <p className={styles.heroNote}>Built for executive events. Focused on qualified attendance.</p>
            </div>
            <div className={styles.heroVisual}>
              <div className={styles.imageWrap}><Image src="/images/events/networking-reception.jpg" alt="Professionals in conversation at an executive networking reception" fill sizes="(max-width: 900px) 100vw, 45vw" className={styles.heroImage} priority /><div className={styles.imageCaption}><span className={styles.dot} /> Human connections. Intelligent acquisition.</div></div>
              <div className={styles.workflowCard}>
                <div className={styles.workflowHeading}><span>THE APEX APPROACH</span><span className={styles.smallPill}>AI + expertise</span></div>
                <div className={styles.pipeline}>{["Identify", "Personalise", "Engage", "Qualify"].map((step, i) => <div key={step}><span className={styles.stepNumber}>0{i + 1}</span><strong>{step}</strong></div>)}</div>
                <p>From your ideal audience to meaningful conversations.</p>
              </div>
            </div>
          </div>
        </section>
        <div className={`${styles.container} ${styles.trackRecord}`}><p>Event expertise.<br /><strong>Built into every campaign.</strong></p>{[["12+", "Years of experience"], ["40+", "Countries"], ["2,500+", "Events"]].map(([number, label]) => <div key={label}><strong>{number}</strong><span>{label}</span></div>)}</div>
        <section className={`${styles.section} ${styles.tinted}`} id="approach">
          <div className={styles.container}>
            <div className={styles.sectionHeading}><div><p className={styles.eyebrow}>Intelligence at every step</p><h2>Less manual outreach.<br /><span>More relevant conversations.</span></h2></div><p>Getting senior decision-makers to attend takes more than a bigger contact list. Our acquisition workflow connects audience intelligence, relevant invitations and consistent follow-through.</p></div>
            <div className={styles.steps}>{steps.map((step, i) => <article className={styles.step} key={step.title}><span className={styles.largeNumber}>0{i + 1}</span><p className={styles.miniLabel}>{step.label}</p><h3>{step.title}</h3><p>{step.text}</p></article>)}</div>
          </div>
        </section>
        <section className={`${styles.section} ${styles.container} ${styles.audienceGrid}`} id="audience">
          <div><p className={styles.eyebrow}>Precision before volume</p><h2>Not just a full room.<br /><span>Your kind of room.</span></h2><p className={styles.lead}>Reach the people who influence high-value buying decisions. We shape every campaign around your market, your event and your definition of a qualified attendee.</p><div className={styles.tags}><span>Enterprise technology</span><span>Professional services</span><span>C-suite & VP-level</span></div><BookACallLink className={styles.textLink}>Talk through your target audience <span aria-hidden="true">↗</span></BookACallLink></div>
          <div className={styles.audienceCard}><div className={styles.cardHeading}><span className={styles.dot} /><p>Your audience, clearly defined</p></div>{[["01", "Priority accounts", "Start with the companies, roles and markets that matter most."], ["02", "Suppression lists", "Exclude existing relationships, competitors and contacts you do not want approached."], ["03", "Approved expansion", "Explore look-alike companies and adjacent roles if the initial brief is too narrow."], ["04", "Agreed qualification", "Define attendee fit and the success milestone together before launch."]].map(([n, title, text]) => <div className={styles.controlRow} key={title}><span>{n}</span><div><h3>{title}</h3><p>{text}</p></div></div>)}</div>
        </section>
        <section className={`${styles.section} ${styles.tinted}`}>
          <div className={styles.container}><p className={styles.eyebrow}>Built for high-value B2B events</p><h2>Different formats.<br /><span>The same focus on fit.</span></h2><div className={styles.formats}>{[["Executive dinners", "Curated conversations with the decision-makers you want at the table."], ["Roundtables & briefings", "Relevant peers, focused discussion and an audience shaped around your topic."], ["Summits & conferences", "A coordinated acquisition campaign for senior audiences at greater scale."]].map(([title, text]) => <article key={title}><span aria-hidden="true">↗</span><h3>{title}</h3><p>{text}</p></article>)}</div></div>
        </section>
        <section className={`${styles.section} ${styles.container}`} id="pricing"><div className={styles.pricing}><div><p className={styles.eyebrow}>A partnership built around outcomes</p><h2>A clear campaign fee.<br /><span>A shared incentive to deliver.</span></h2><p>Invest in the strategy and operations behind your campaign, with performance incentives linked to qualified attendees secured.</p><BookACallLink className={styles.button}>Discuss your campaign <span aria-hidden="true">↗</span></BookACallLink></div><div className={styles.priceParts}><article><span>01 / THE FOUNDATION</span><h3>Base campaign fee</h3><p>Audience strategy, data research, campaign setup and ongoing outreach operations.</p></article><div className={styles.plus} aria-hidden="true">+</div><article><span>02 / THE OUTCOME</span><h3>Performance incentives</h3><p>Linked to qualified attendees, with the criteria and billable milestone agreed in your proposal.</p></article><p className={styles.priceNote}>Campaign scope, target volume and timing shape your quote. Registration and attendance are tracked as separate milestones.</p></div></div></section>
        <section className={`${styles.container} ${styles.faqSection}`} id="faqs"><div><p className={styles.eyebrow}>A few useful answers</p><h2>Before we<br /><span>fill the room.</span></h2></div><div className={styles.faqs}>{faqs.map(([q, a]) => <details key={q}><summary>{q}<span aria-hidden="true">+</span></summary><p>{a}</p></details>)}</div></section>
        <section className={styles.finalCta}><div className={styles.container}><p className={styles.eyebrow}>Your next event starts with the right audience</p><h2>Let’s put the right people<br /><span>in your room.</span></h2><p>Tell us who you want to reach, where and when.<br />We’ll build an acquisition plan around your event.</p><BookACallLink className={styles.button}>Book a campaign call <span aria-hidden="true">↗</span></BookACallLink><a className={styles.emailLink} href="mailto:info@apexstrategy.io">Or email info@apexstrategy.io</a></div></section>
      </main>
      <Footer description="AI-first delegate acquisition for executive and B2B events. Intelligent outreach. Qualified audiences." />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "Service", name: "AI-first B2B delegate acquisition", description, url: "https://apexstrategy.io/ai-first-hpage", provider: { "@id": "https://apexstrategy.io/#organization" }, offers: { "@type": "Offer", description: "Base campaign fee plus performance-based incentives for qualified attendees secured. Qualification and billable milestones agreed per campaign." } }} />
    </div>
  );
}
