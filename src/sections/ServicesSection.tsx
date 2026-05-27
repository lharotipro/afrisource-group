import { Search, Shield, Globe, ArrowRight } from "lucide-react";
import { Translations } from "../translations";
interface ServicesSectionProps { t: Translations; }
export default function ServicesSection({ t }: ServicesSectionProps) {
  const items = [
    { icon: Shield, title: t.services.s1Title, desc: t.services.s1Desc, label: t.services.s1Label, img: "https://collegeforadultlearning.edu.au/wp-content/uploads/professions-pathways-to-quality-auditor.jpg", reverse: false },
    { icon: Search, title: t.services.s2Title, desc: t.services.s2Desc, label: t.services.s2Label, img: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80", reverse: true },
    { icon: Globe,  title: t.services.s3Title, desc: t.services.s3Desc, label: t.services.s3Label, img: "https://content.jdmagicbox.com/comp/def_content/import-export-consultants/shutterstock-721476064-import-export-consultants-6-a2zwd.jpg", reverse: false },
  ];
  return (
    <section className="bg-white py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mx-auto max-w-2xl text-center mb-20">
          <span className="inline-block rounded-full border border-accent/30 bg-accent/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent">{t.services.eyebrow}</span>
          <h2 className="mt-5 text-4xl font-bold md:text-5xl">{t.services.title} <span className="text-accent">{t.services.titleAccent}</span></h2>
          <p className="mt-4 text-lg text-muted-foreground">{t.services.subtitle}</p>
        </div>
        <div className="space-y-24">
          {items.map((s, i) => (
            <div key={i} className={`grid items-center gap-12 lg:grid-cols-2 ${s.reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img src={s.img} alt={s.title} className="h-[420px] w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />
              </div>
              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 mb-6">
                  <s.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-3xl font-bold text-foreground">{s.title}</h3>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{s.desc}</p>
                <div className="mt-6 inline-flex items-center gap-2 rounded-xl border border-border bg-secondary px-5 py-3 text-sm font-medium text-foreground">
                  {s.label}
                </div>
                <div className="mt-8">
                  <button className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:gap-3 transition-all">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}