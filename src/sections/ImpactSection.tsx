import { Translations } from "../translations";
interface ImpactSectionProps { t: Translations; }
export default function ImpactSection({ t }: ImpactSectionProps) {
  const stats = [
    { value: t.impact.s1, label: t.impact.s1Label },
    { value: t.impact.s2, label: t.impact.s2Label },
    { value: t.impact.s3, label: t.impact.s3Label },
    { value: t.impact.s4, label: t.impact.s4Label },
  ];
  return (
    <section className="relative overflow-hidden bg-primary py-28 px-6 text-primary-foreground">
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(212,175,55,0.4),transparent_50%)]" />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <span className="inline-block rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent">{t.impact.eyebrow}</span>
          <h2 className="mt-5 text-4xl font-bold md:text-5xl">{t.impact.title}</h2>
          <p className="mt-4 text-lg text-primary-foreground/70">{t.impact.subtitle}</p>
        </div>
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div key={i} className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm">
              <p className="text-5xl font-black text-accent">{s.value}</p>
              <p className="mt-3 text-sm text-primary-foreground/70">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}