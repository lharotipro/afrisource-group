import { Shield, Truck, TrendingUp, Package } from "lucide-react";
import { Translations } from "../translations";

interface TrustSectionProps {
  t: Translations;
}

export default function TrustSection({ t }: TrustSectionProps) {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.trust.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.trust.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-secondary rounded-lg p-8 hover:shadow-lg transition-shadow border border-border">
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-semibold mb-2 text-lg">{t.trust.feature1}</h3>
            <p className="text-sm text-muted-foreground">Rigorous screening and validation</p>
          </div>
          <div className="bg-secondary rounded-lg p-8 hover:shadow-lg transition-shadow border border-border">
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
              <Truck className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-semibold mb-2 text-lg">{t.trust.feature2}</h3>
            <p className="text-sm text-muted-foreground">End-to-end coordination</p>
          </div>
          <div className="bg-secondary rounded-lg p-8 hover:shadow-lg transition-shadow border border-border">
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-semibold mb-2 text-lg">{t.trust.feature3}</h3>
            <p className="text-sm text-muted-foreground">Competitive pricing secured</p>
          </div>
          <div className="bg-secondary rounded-lg p-8 hover:shadow-lg transition-shadow border border-border">
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
              <Package className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-semibold mb-2 text-lg">{t.trust.feature4}</h3>
            <p className="text-sm text-muted-foreground">Full workflow oversight</p>
          </div>
        </div>
      </div>
    </section>
  );
}
