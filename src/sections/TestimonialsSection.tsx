import { Star } from "lucide-react";
import { Translations } from "../translations";
interface TestimonialsSectionProps { t: Translations; }
export default function TestimonialsSection({ t }: TestimonialsSectionProps) {
  const items = [
    { quote: t.testimonials.t1, name: t.testimonials.t1Name, role: t.testimonials.t1Role },
    { quote: t.testimonials.t2, name: t.testimonials.t2Name, role: t.testimonials.t2Role },
    { quote: t.testimonials.t3, name: t.testimonials.t3Name, role: t.testimonials.t3Role },
  ];
  return (
    <section className="bg-white py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <span className="inline-block rounded-full border border-accent/30 bg-accent/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent">{t.testimonials.eyebrow}</span>
          <h2 className="mt-5 text-4xl font-bold md:text-5xl">{t.testimonials.title}</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {items.map((item, i) => (
            <div key={i} className="rounded-3xl border border-border bg-secondary p-8 flex flex-col">
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 fill-accent text-accent" />)}
              </div>
              <p className="flex-1 text-base italic leading-relaxed text-muted-foreground">"{item.quote}"</p>
              <div className="mt-8 flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{item.name}</p>
                  <p className="text-xs text-muted-foreground">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}