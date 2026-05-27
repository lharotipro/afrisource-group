import { ArrowLeft, CheckCircle2, Mail, Phone, Linkedin, ArrowRight, Shield, Globe, Star, Users } from "lucide-react";
import { Link } from "react-router";

export default function AboutPage() {
  const values = [
    { icon: Shield, title: "Integrity First", desc: "We verify before we connect. Every supplier, every product, every time. No exceptions." },
    { icon: Globe, title: "Global Mindset", desc: "Built to serve international buyers who need reliability, documentation, and trust at scale." },
    { icon: Star, title: "Excellence", desc: "We hold our suppliers to the highest standards — because your reputation depends on ours." },
    { icon: Users, title: "Partnership", desc: "We don't just source. We build long-term relationships between producers and buyers." },
  ];

  const stats = [
    { value: "500+", label: "Sourcing Operations" },
    { value: "15+", label: "Countries Reached" },
    { value: "200+", label: "Verified Suppliers" },
    { value: "7", label: "Product Categories" },
  ];

  const timeline = [
    { year: "2022", title: "Founded", desc: "Afrisource Group is established in Morocco with a clear mission: bridge the gap between verified African exporters and global buyers." },
    { year: "2023", title: "First Verified Panel", desc: "We onboard our first cohort of 50+ verified Moroccan suppliers across Seafood, Herbs, and Agri-food categories." },
    { year: "2024", title: "International Reach", desc: "Our supplier panel reaches buyers across Europe, the Gulf, and North America. We formalise partnerships with SGS, Intertek, and Cotecna." },
    { year: "2025", title: "Export Consulting", desc: "We launch our supplier development programme — taking Moroccan producers from zero to export-ready, with documentation, certification, and positioning support." },
    { year: "2026", title: "Premium Catalog", desc: "We publish our 2026 Verified Moroccan Export Catalog — 7 categories, 200+ audited suppliers, ready to ship globally." },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <div className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-accent transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>
          <img src="/logo.PNG" alt="Afrisource Group" className="h-9" />
        </div>
      </div>

      {/* Hero */}
      <div className="relative h-[70vh] overflow-hidden">
        <img src="/about-us/hayoun-shaking-hands.jpg" alt="Afrisource Group — Mohammed Hayoun" className="absolute inset-0 h-full w-full object-cover object-top" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/50 to-primary/90" />
        <div className="absolute inset-0 flex flex-col justify-end px-6 pb-16 max-w-7xl mx-auto w-full">
          <span className="inline-block rounded-full border border-accent/40 bg-accent/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent mb-5 w-fit">
            Who We Are
          </span>
          <h1 className="text-4xl font-bold text-white md:text-6xl max-w-3xl leading-tight">
            The Trusted Bridge Between African Producers & Global Buyers
          </h1>
          <p className="mt-5 text-lg text-white/70 max-w-xl">
            We verify before we connect — every supplier, every product, every time.
          </p>
        </div>
      </div>

      {/* Mission statement */}
      <div className="bg-primary text-primary-foreground py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-2xl font-medium leading-relaxed md:text-3xl text-primary-foreground/90">
            "Afrisource Group is a global sourcing and supply chain company specialized in connecting{" "}
            <span className="text-accent font-bold">verified Moroccan and African exporters</span> with serious buyers worldwide."
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-accent/40" />
            <div className="text-center">
              <p className="font-semibold text-primary-foreground">Mohammed Hayoun</p>
              <p className="text-xs text-primary-foreground/50">Founder, Afrisource Group</p>
            </div>
            <div className="h-px w-16 bg-accent/40" />
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="bg-accent py-14 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <div key={i}>
              <p className="text-4xl font-bold text-accent-foreground">{s.value}</p>
              <p className="mt-1 text-sm font-medium text-accent-foreground/70">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Story + Founder */}
      <div className="py-24 px-6 bg-[#F5F0E8]">
        <div className="max-w-7xl mx-auto grid gap-16 lg:grid-cols-2 items-center">
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-accent mb-4">Our Story</span>
            <h2 className="text-3xl font-bold md:text-4xl mb-6">From a Gap in the Market to a Global Sourcing Bridge</h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>Morocco produces world-class goods — premium saffron, certified argan oil, fresh herbs, and high-quality seafood — at competitive prices. The demand from global buyers is there. Yet the connection was broken.</p>
              <p>Suppliers lacked export documentation. Buyers lacked verified contacts. The gap wasn't quality — it was structure. Afrisource Group was founded to close that gap.</p>
              <p>We sit with producers, understand their capacity, and get them export-ready — documentation, certifications, labelling, compliance. Then we connect them to serious international buyers who need exactly what they produce.</p>
            </div>
            <div className="mt-8 flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
              <p className="font-semibold text-foreground">Simplifying Global Trade for Africa</p>
            </div>
          </div>
          {/* Founder card */}
          <div className="rounded-3xl bg-primary text-primary-foreground p-10 shadow-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/40 mb-6">Meet the Founder</p>
            <h3 className="text-2xl font-bold mb-2">Mohammed Hayoun</h3>
            <p className="text-accent text-sm font-medium mb-6">Founder & Director, Afrisource Group</p>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-8">
              With deep roots in Moroccan trade and a global perspective forged through years of international business development, Mohammed Hayoun built Afrisource Group around one conviction: African products deserve global markets — and global buyers deserve verified African suppliers.
            </p>
            <div className="space-y-3">
              <a href="mailto:contact@afrisourcegroup.com" className="flex items-center gap-3 text-sm text-primary-foreground/60 hover:text-accent transition-colors">
                <Mail className="h-4 w-4 text-accent" /> contact@afrisourcegroup.com
              </a>
              <a href="tel:+212661372684" className="flex items-center gap-3 text-sm text-primary-foreground/60 hover:text-accent transition-colors">
                <Phone className="h-4 w-4 text-accent" /> +212 6 61 37 26 84
              </a>
              <a href="https://www.linkedin.com/company/afrisource-group/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-primary-foreground/60 hover:text-accent transition-colors">
                <Linkedin className="h-4 w-4 text-accent" /> linkedin.com/company/afrisource-group
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-accent mb-4">Our Values</span>
            <h2 className="text-3xl font-bold md:text-4xl">How We Work</h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <div key={i} className="rounded-2xl border border-border bg-secondary p-8 hover:shadow-md transition-shadow">
                <div className="h-12 w-12 rounded-xl bg-primary/5 flex items-center justify-center mb-5">
                  <v.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="py-24 px-6 bg-[#F5F3EF]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-accent mb-4">Our Journey</span>
            <h2 className="text-3xl font-bold md:text-4xl">Building Trust, Year by Year</h2>
          </div>
          <div className="relative">
            <div className="absolute left-[2.25rem] top-0 bottom-0 w-px bg-border" />
            <div className="space-y-10">
              {timeline.map((item, i) => (
                <div key={i} className="flex gap-8 items-start">
                  <div className="flex-shrink-0 h-[4.5rem] w-[4.5rem] rounded-2xl bg-primary flex flex-col items-center justify-center text-primary-foreground shadow-lg">
                    <span className="text-[10px] font-semibold text-primary-foreground/50">YEAR</span>
                    <span className="text-base font-bold">{item.year}</span>
                  </div>
                  <div className="pt-4">
                    <h3 className="text-lg font-bold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-primary text-primary-foreground py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-primary-foreground/40 mb-4">Ready to Work Together?</p>
          <h2 className="text-3xl font-bold md:text-4xl mb-4">Start Your Verified Sourcing Journey</h2>
          <p className="text-primary-foreground/70 mb-10 max-w-xl mx-auto">
            Connect directly with Mohammed Hayoun and access Morocco's most trusted supplier panel.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/#contact" className="inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-4 font-semibold text-accent-foreground hover:bg-accent/90 transition-colors shadow-lg">
              Contact Us <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="mailto:contact@afrisourcegroup.com" className="inline-flex items-center gap-2 rounded-xl border-2 border-white/20 bg-white/10 px-8 py-4 font-semibold hover:bg-white/20 transition-colors">
              <Mail className="h-4 w-4" /> Send an Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}