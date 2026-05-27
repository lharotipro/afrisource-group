import { ArrowRight, Mail } from "lucide-react";
import { Translations } from "../translations";
interface CtaSectionProps { t: Translations; }
export default function CtaSection({ t }: CtaSectionProps) {
  return (
    <section className="relative overflow-hidden bg-accent py-28 px-6">
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(ellipse_at_30%_50%,rgba(255,255,255,0.4),transparent_60%)]" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl font-bold text-accent-foreground md:text-6xl">{t.cta.title}</h2>
        <p className="mt-6 text-lg text-accent-foreground/80 max-w-2xl mx-auto">{t.cta.subtitle}</p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 font-semibold text-primary-foreground shadow-xl hover:bg-primary/90 hover:-translate-y-0.5 transition-all">
            {t.cta.btn1} <ArrowRight className="h-4 w-4" />
          </a>
          <button className="inline-flex items-center gap-2 rounded-xl border-2 border-accent-foreground/20 bg-white px-8 py-4 font-semibold text-accent-foreground hover:bg-white/90 transition-all">
            {t.cta.btn2}
          </button>
        </div>
        <p className="mt-12 text-sm text-accent-foreground/60">{t.cta.contact}</p>
        <a href="mailto:contact@afrisourcegroup.com" className="mt-2 inline-flex items-center gap-2 text-accent-foreground font-semibold hover:underline">
          <Mail className="h-4 w-4" /> contact@afrisourcegroup.com
        </a>
      </div>
    </section>
  );
}