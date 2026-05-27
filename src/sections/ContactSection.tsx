import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { Translations } from "../translations";
interface ContactSectionProps { t: Translations; }
export default function ContactSection({ t }: ContactSectionProps) {
  return (
    <section id="contact" className="bg-white py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <span className="inline-block rounded-full border border-accent/30 bg-accent/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent">{t.contact.eyebrow}</span>
          <h2 className="mt-5 text-4xl font-bold md:text-5xl">{t.contact.title}</h2>
          <p className="mt-4 text-lg text-muted-foreground">{t.contact.subtitle}</p>
        </div>
        <div className="grid gap-12 lg:grid-cols-2">
          <form className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-semibold mb-2">{t.contact.name}</label>
                <input type="text" className="w-full rounded-xl border border-border bg-secondary px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">{t.contact.email}</label>
                <input type="email" className="w-full rounded-xl border border-border bg-secondary px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-semibold mb-2">{t.contact.phone}</label>
                <input type="tel" className="w-full rounded-xl border border-border bg-secondary px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">{t.contact.country}</label>
                <input type="text" className="w-full rounded-xl border border-border bg-secondary px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">{t.contact.product}</label>
              <input type="text" className="w-full rounded-xl border border-border bg-secondary px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">{t.contact.message}</label>
              <textarea rows={4} className="w-full rounded-xl border border-border bg-secondary px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
            </div>
            <button className="w-full rounded-xl bg-primary py-4 font-semibold text-primary-foreground hover:bg-primary/90 transition-colors shadow-lg">{t.contact.submit}</button>
          </form>
          <div className="space-y-8">
            <div className="rounded-3xl bg-primary p-8 text-primary-foreground">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/50 mb-6">{t.contact.founderLabel}</p>
              <div className="space-y-5">
                {[
                  { icon: Mail, label: "Email", value: "contact@afrisourcegroup.com", href: "mailto:contact@afrisourcegroup.com" },
                  { icon: Phone, label: "Phone", value: "+212 6 61 37 26 84", href: "tel:+212661372684" },
                  { icon: MapPin, label: "Location", value: "Morocco, Africa", href: null },
                  { icon: Linkedin, label: "LinkedIn", value: "Mohammed Hayoun — Afrisource Group", href: "https://www.linkedin.com/company/afrisource-group/" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-primary-foreground/50">{item.label}</p>
                      {item.href ? <a href={item.href} className="text-sm font-medium text-primary-foreground hover:text-accent transition-colors">{item.value}</a> : <p className="text-sm font-medium">{item.value}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-border bg-secondary p-8">
              <h4 className="font-semibold mb-4 text-foreground">Business Hours</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex justify-between"><span>Monday — Friday</span><span className="font-medium text-foreground">9:00 AM – 6:00 PM</span></div>
                <div className="flex justify-between"><span>Saturday</span><span className="font-medium text-foreground">10:00 AM – 2:00 PM</span></div>
                <div className="flex justify-between"><span>Sunday</span><span>Closed</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}