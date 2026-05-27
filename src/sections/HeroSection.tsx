import { Globe, ArrowRight, Shield, CheckCircle2, Ship } from "lucide-react";
import { Translations } from "../translations";

interface HeroSectionProps { t: Translations; }

export default function HeroSection({ t }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen overflow-hidden bg-primary text-primary-foreground flex items-center pt-20">
      {/* Background radial glows */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(212,175,55,0.35),transparent_55%),radial-gradient(ellipse_at_80%_20%,rgba(212,175,55,0.15),transparent_50%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 py-20">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
          {/* LEFT */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-accent">
              <Globe className="h-3.5 w-3.5" />
              {t.hero.eyebrow}
            </span>

            <h1 className="mt-6 text-5xl font-bold leading-[1.1] md:text-6xl xl:text-7xl">
              {t.hero.title}
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/75 md:text-xl">
              {t.hero.subtitle}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-4 font-semibold text-accent-foreground shadow-lg transition-all hover:bg-accent/90 hover:-translate-y-0.5 hover:shadow-xl">
                {t.hero.ctaPrimary} <ArrowRight className="h-4 w-4" />
              </button>
              <button className="inline-flex items-center gap-2 rounded-xl border-2 border-white/20 bg-white/10 px-8 py-4 font-semibold backdrop-blur-sm transition-all hover:bg-white/20">
                {t.hero.ctaSecondary}
              </button>
            </div>

            {/* Badges */}
            <div className="mt-10 flex flex-wrap gap-3">
              {[t.hero.badge1, t.hero.badge2, t.hero.badge3].map((b, i) => (
                <span key={i} className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm font-medium">
                  <CheckCircle2 className="h-3.5 w-3.5 text-accent" /> {b}
                </span>
              ))}
            </div>

            <p className="mt-8 text-sm text-primary-foreground/50 italic">{t.hero.tag}</p>
          </div>

          {/* RIGHT — image card */}
          <div className="relative">
            <div className="absolute -top-10 -right-10 h-48 w-48 rounded-full bg-accent/15 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/15 shadow-2xl" style={{ height: "580px" }}>
              {/* Image fills full container */}
              <img
                src="/Hero/hero-image-1.png"
                alt="AfriSource verified sourcing"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
              {/* Full-container gradient shadow overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/75 via-transparent via-[45%] to-primary/85" />
              {/* top pill */}
              <div className="absolute inset-x-6 top-6 z-10 flex items-center justify-between gap-2 rounded-2xl border border-white/20 bg-white/10 px-5 py-3.5 backdrop-blur-md">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-primary-foreground/70">Afrisource Group · 2026</p>
                  <p className="mt-0.5 text-sm font-bold text-primary-foreground">Verified Moroccan Export Catalog</p>
                </div>
                <ArrowRight className="h-5 w-5 text-accent" />
              </div>
              {/* bottom cards */}
              <div className="absolute bottom-6 left-6 right-6 z-10 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-md">
                  <Shield className="mb-2 h-5 w-5 text-accent" />
                  <p className="text-xs font-semibold text-primary-foreground">Supplier Verified</p>
                  <p className="mt-1 text-[11px] text-primary-foreground/70">SGS · Intertek · Cotecna</p>
                </div>
                <div className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-md">
                  <Ship className="mb-2 h-5 w-5 text-accent" />
                  <p className="text-xs font-semibold text-primary-foreground">Export Ready</p>
                  <p className="mt-1 text-[11px] text-primary-foreground/70">EU · USA · Gulf · Asia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}