import { MapPin, Globe, Award, Anchor, CheckCircle2 } from "lucide-react";
import { Translations } from "../translations";

interface WhyMoroccoProps {
  t: Translations;
}

export default function WhyMoroccoSection({ t }: WhyMoroccoProps) {
  const pillars = [
    { icon: MapPin,  title: t.whyMorocco.p1Title, desc: t.whyMorocco.p1Desc },
    { icon: Globe,   title: t.whyMorocco.p2Title, desc: t.whyMorocco.p2Desc },
    { icon: Award,   title: t.whyMorocco.p3Title, desc: t.whyMorocco.p3Desc },
    { icon: Anchor,  title: t.whyMorocco.p4Title, desc: t.whyMorocco.p4Desc },
  ];

  const facts = [t.whyMorocco.fact1, t.whyMorocco.fact2, t.whyMorocco.fact3];

  return (
    <section className="overflow-hidden bg-primary py-28 text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left — text */}
          <div>
            <span className="inline-block rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
              {t.whyMorocco.eyebrow}
            </span>

            <h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
              {t.whyMorocco.title}
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/75">{t.whyMorocco.subtitle}</p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {pillars.map((p, i) => (
                <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p.icon className="mb-3 h-6 w-6 text-accent" />
                  <p className="font-semibold">{p.title}</p>
                  <p className="mt-1 text-sm text-primary-foreground/70">{p.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 space-y-3">
              {facts.map((f, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                  <p className="text-sm text-primary-foreground/85">{f}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — image */}
          <div className="relative">
            <div className="absolute -right-12 top-12 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
              <img
                src="https://media.licdn.com/dms/image/v2/D4E12AQEpzvZ5yF0PCg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1708189931607?e=2147483647&v=beta&t=wkwenYMeVUZKgBqp2dffqeMlJAWewfFhiP1_grt3WcY"
                alt="Morocco — Africa's gateway"
                className="h-[580px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
              {/* Bottom badge */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center gap-4 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">
                <span className="text-4xl">🇲🇦</span>
                <div>
                  <p className="font-semibold">Kingdom of Morocco</p>
                  <p className="text-sm text-primary-foreground/75">Africa's premier export destination</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
