import { ArrowRight } from "lucide-react";
import { Translations } from "../translations";
interface HowItWorksSectionProps { t: Translations; }
export default function HowItWorksSection({ t }: HowItWorksSectionProps) {
  const steps = [
    { num: "01", title: t.howItWorks.s1, desc: t.howItWorks.s1Desc },
    { num: "02", title: t.howItWorks.s2, desc: t.howItWorks.s2Desc },
    { num: "03", title: t.howItWorks.s3, desc: t.howItWorks.s3Desc },
    { num: "04", title: t.howItWorks.s4, desc: t.howItWorks.s4Desc },
  ];
  return (
    <section className="bg-[#F5F3EF] py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <span className="inline-block rounded-full border border-accent/30 bg-accent/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent">{t.howItWorks.eyebrow}</span>
          <h2 className="mt-5 text-4xl font-bold md:text-5xl">{t.howItWorks.title}</h2>
          <p className="mt-4 text-lg text-muted-foreground">{t.howItWorks.subtitle}</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={i} className="relative rounded-3xl bg-white p-8 shadow-sm border border-border hover:shadow-md transition-shadow">
              <span className="text-6xl font-black text-accent/15 leading-none">{s.num}</span>
              <h3 className="mt-4 text-xl font-bold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              {i < 3 && <div className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 lg:flex h-8 w-8 items-center justify-center rounded-full bg-accent shadow-md"><ArrowRight className="h-4 w-4 text-accent-foreground" /></div>}
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <p className="text-lg font-semibold text-foreground mb-6">{t.howItWorks.ctaLabel}</p>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 font-semibold text-primary-foreground shadow-lg hover:bg-primary/90 hover:-translate-y-0.5 transition-all">
            Contact Us <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}