import { CheckCircle2 } from "lucide-react";
import { Translations } from "../translations";
interface VerificationSectionProps { t: Translations; }
export default function VerificationSection({ t }: VerificationSectionProps) {
  const steps = [
    { emoji: "📄", label: t.supplierPanel.s1 },
    { emoji: "🎥", label: t.supplierPanel.s2 },
    { emoji: "🔬", label: t.supplierPanel.s3 },
    { emoji: "🏭", label: t.supplierPanel.s4 },
    { emoji: "✅", label: t.supplierPanel.s5 },
    { emoji: "🌍", label: t.supplierPanel.s6 },
  ];
  const partners = ["Intertek", "SGS", "Cotecna", "Bureau Veritas"];
  return (
    <section id="verification" className="bg-white py-28 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span className="inline-block rounded-full border border-accent/30 bg-accent/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent">{t.supplierPanel.eyebrow}</span>
          <h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
            {t.supplierPanel.title} <span className="text-accent">{t.supplierPanel.titleAccent}</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">{t.supplierPanel.subtitle}</p>
        </div>
        <div className="relative">
          <div className="absolute top-[2.75rem] left-[calc(8.33%+2rem)] right-[calc(8.33%+2rem)] hidden h-px bg-border lg:block" />
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {steps.map((s, i) => (
              <div key={i} className="flex flex-col items-center text-center relative z-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-2xl shadow-lg border-4 border-background">{s.emoji}</div>
                <div className="mt-3 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">{i + 1}</div>
                <p className="mt-2 text-sm font-semibold text-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 rounded-2xl bg-secondary border border-border p-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-5">{t.supplierPanel.partners}</p>
          <div className="flex flex-wrap justify-center gap-4">
            {partners.map((p, i) => (
              <span key={i} className="rounded-xl border border-border bg-white px-6 py-3 text-sm font-bold text-foreground shadow-sm">{p}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}