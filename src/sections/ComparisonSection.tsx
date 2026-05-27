import { X, CheckCircle2 } from "lucide-react";
import { Translations } from "../translations";

interface ComparisonSectionProps {
  t: Translations;
}

export default function ComparisonSection({ t }: ComparisonSectionProps) {
  const features = [
    t.comparison.feature1,
    t.comparison.feature2,
    t.comparison.feature3,
    t.comparison.feature4,
    t.comparison.feature5,
    t.comparison.feature6,
  ];

  return (
    <section className="py-24 px-6 bg-secondary">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.comparison.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.comparison.subtitle}</p>
        </div>

        <div className="bg-white rounded-lg border border-border overflow-hidden">
          <div className="grid grid-cols-3 border-b border-border">
            <div className="p-4 font-semibold"></div>
            <div className="p-4 font-semibold text-center bg-secondary">{t.comparison.generic}</div>
            <div className="p-4 font-semibold text-center bg-accent/10 text-accent">{t.comparison.afrisource}</div>
          </div>
          {features.map((feature, i) => (
            <div key={i} className="grid grid-cols-3 border-b border-border last:border-0">
              <div className="p-4 font-medium">{feature}</div>
              <div className="p-4 text-center bg-secondary/50">
                <X className="w-5 h-5 mx-auto text-muted-foreground" />
              </div>
              <div className="p-4 text-center bg-accent/5">
                <CheckCircle2 className="w-5 h-5 mx-auto text-accent" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
