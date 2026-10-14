import Link from "next/link";
import BookACallLink from "@/components/BookACallLink";
import { ArrowRightIcon } from "@/components/icons";

export default function AiEraBanner() {
  return (
    <section aria-labelledby="ai-era-heading" className="relative overflow-hidden bg-accent text-bg-primary pt-32 pb-16 md:pt-40 md:pb-20">
      <div aria-hidden="true" className="absolute -right-44 -top-44 h-[640px] w-[640px] rounded-full border border-bg-primary/10 pointer-events-none" />
      <div aria-hidden="true" className="absolute -right-24 -top-24 h-[480px] w-[480px] rounded-full border border-bg-primary/10 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6">
        <p className="inline-flex items-center gap-3 text-xs md:text-sm font-semibold tracking-widest uppercase mb-7"><span aria-hidden="true" className="w-8 h-0.5 bg-bg-primary" />Apex Strategy · AI-first by design</p>
        <h1 id="ai-era-heading" className="max-w-5xl text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight text-balance">The AI era has reached<br className="hidden md:block" /> B2B delegate acquisition.</h1>
        <p className="max-w-3xl text-lg md:text-2xl font-semibold leading-relaxed mt-7">Apex Strategy is your AI-first delegate acquisition partner.</p>
        <p className="max-w-2xl text-base md:text-lg leading-relaxed mt-3">Powered by the Apex Precision Pipeline™. Built to find, engage and bring the right executives to your event.</p>
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <BookACallLink className="inline-flex items-center justify-center gap-2 bg-bg-primary text-white hover:bg-bg-card font-semibold px-7 py-3.5 rounded-lg transition-colors">Build your audience <ArrowRightIcon className="w-4 h-4" /></BookACallLink>
          <Link href="#apex-acquisition" className="inline-flex items-center justify-center gap-2 border border-bg-primary/40 hover:bg-bg-primary/10 font-semibold px-7 py-3.5 rounded-lg transition-colors">Discover the Apex approach <span aria-hidden="true">↓</span></Link>
        </div>
      </div>
    </section>
  );
}
