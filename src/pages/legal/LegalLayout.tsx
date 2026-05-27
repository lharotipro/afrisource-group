import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";

interface Section { heading: string; body: (string | string[])[]; }
interface LegalLayoutProps {
  title: string;
  subtitle: string;
  lastUpdated: string;
  sections: Section[];
}

export default function LegalLayout({ title, subtitle, lastUpdated, sections }: LegalLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <div className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-accent transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to Afrisource Group
          </Link>
          <img src="/logo.PNG" alt="Afrisource Group" className="h-9" />
        </div>
      </div>

      {/* Hero */}
      <div className="bg-primary text-primary-foreground py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-xs text-primary-foreground/40 mb-6">
            <Link to="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <span>{title}</span>
          </div>
          <h1 className="text-4xl font-bold md:text-5xl mb-4">{title}</h1>
          <p className="text-lg text-primary-foreground/70 max-w-xl">{subtitle}</p>
          <p className="mt-6 text-xs text-primary-foreground/40">Last updated: {lastUpdated}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-20">
        {/* Preamble box */}
        <div className="mb-14 rounded-2xl border border-accent/20 bg-accent/5 p-8">
          <p className="text-sm text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Afrisource Group</strong> — Simplifying Global Trade for Africa. Registered in Morocco.
            Contact: <a href="mailto:contact@afrisourcegroup.com" className="text-accent hover:underline">contact@afrisourcegroup.com</a> · +212 6 61 37 26 84
          </p>
        </div>

        <div className="space-y-14">
          {sections.map((section, i) => (
            <div key={i} className="scroll-mt-24">
              <div className="flex items-start gap-4 mb-5">
                <span className="flex-shrink-0 h-8 w-8 rounded-lg bg-primary flex items-center justify-center text-xs font-bold text-primary-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="text-xl font-bold text-foreground pt-1">{section.heading}</h2>
              </div>
              <div className="ml-12 space-y-4">
                {section.body.map((item, j) =>
                  Array.isArray(item) ? (
                    <ul key={j} className="space-y-2">
                      {item.map((li, k) => (
                        <li key={k} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                          {li}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p key={j} className="text-sm leading-relaxed text-muted-foreground">{item}</p>
                  )
                )}
              </div>
              {i < sections.length - 1 && <div className="mt-14 border-t border-border" />}
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-20 rounded-3xl bg-primary px-10 py-12 text-center text-primary-foreground">
          <p className="text-xs uppercase tracking-widest text-primary-foreground/40 mb-3">Questions?</p>
          <p className="text-xl font-bold mb-2">Contact our team directly</p>
          <a href="mailto:contact@afrisourcegroup.com" className="mt-4 inline-block text-accent hover:underline text-sm font-medium">
            contact@afrisourcegroup.com
          </a>
        </div>
      </div>
    </div>
  );
}