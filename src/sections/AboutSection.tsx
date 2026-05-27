import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { Translations } from "../translations";

interface AboutSectionProps {
  t: Translations;
}

export default function AboutSection({ t }: AboutSectionProps) {
  const stats = [
    { value: t.about.stat1, label: t.about.stat1Label },
    { value: t.about.stat2, label: t.about.stat2Label },
    { value: t.about.stat3, label: t.about.stat3Label },
  ];

  return (
    <section className="py-28 px-6 bg-[#F5F0E8] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left — image */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -top-8 -left-8 h-72 w-72 rounded-full bg-accent/8 blur-3xl" />
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="/about-us/hayoun-shaking-hands.jpg"
                alt="AfriSource business partnership"
                className="h-[520px] w-full object-cover object-top"
              />
              {/* Overlay card */}
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-primary/90 p-6 backdrop-blur-sm">
                <p className="text-sm italic leading-relaxed text-primary-foreground/90">
                  "{t.about.quote}"
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="h-px flex-1 bg-accent/40" />
                  <div className="text-right">
                    <p className="text-sm font-semibold text-primary-foreground">{t.about.founderName}</p>
                    <p className="text-xs text-primary-foreground/70">{t.about.founderRole}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — text */}
          <div className="order-1 lg:order-2">
            <span className="inline-block rounded-full border border-accent/30 bg-accent/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
              {t.about.eyebrow}
            </span>

            <h2 className="mt-5 text-4xl font-bold leading-tight text-foreground md:text-5xl">
              {t.about.title}
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {t.about.description}
            </p>

            <div className="mt-8 flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-accent" />
              <p className="font-semibold text-foreground">{t.about.tagline}</p>
            </div>

            {/* Stats row */}
            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-8">
              {stats.map((s, i) => (
                <div key={i}>
                  <p className="text-3xl font-bold text-accent">{s.value}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-all hover:-translate-y-0.5 shadow-lg"
              >
                Learn More About Us <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
