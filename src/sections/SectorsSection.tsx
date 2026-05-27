import { Leaf, Home, Building2, Cpu, Droplet, Heart, Zap, Factory } from "lucide-react";
import { Translations } from "../translations";

interface SectorsSectionProps {
  t: Translations;
}

export default function SectorsSection({ t }: SectorsSectionProps) {
  return (
    <section id="sectors" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.sectors.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.sectors.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="group bg-secondary rounded-lg p-8 hover:bg-primary hover:text-primary-foreground transition-all cursor-pointer border border-border">
            <Leaf className="w-12 h-12 mb-4 text-accent group-hover:text-accent" />
            <h3 className="font-bold text-lg">{t.sectors.sector1}</h3>
          </div>
          <div className="group bg-secondary rounded-lg p-8 hover:bg-primary hover:text-primary-foreground transition-all cursor-pointer border border-border">
            <Home className="w-12 h-12 mb-4 text-accent group-hover:text-accent" />
            <h3 className="font-bold text-lg">{t.sectors.sector2}</h3>
          </div>
          <div className="group bg-secondary rounded-lg p-8 hover:bg-primary hover:text-primary-foreground transition-all cursor-pointer border border-border">
            <Building2 className="w-12 h-12 mb-4 text-accent group-hover:text-accent" />
            <h3 className="font-bold text-lg">{t.sectors.sector3}</h3>
          </div>
          <div className="group bg-secondary rounded-lg p-8 hover:bg-primary hover:text-primary-foreground transition-all cursor-pointer border border-border">
            <Cpu className="w-12 h-12 mb-4 text-accent group-hover:text-accent" />
            <h3 className="font-bold text-lg">{t.sectors.sector4}</h3>
          </div>
          <div className="group bg-secondary rounded-lg p-8 hover:bg-primary hover:text-primary-foreground transition-all cursor-pointer border border-border">
            <Droplet className="w-12 h-12 mb-4 text-accent group-hover:text-accent" />
            <h3 className="font-bold text-lg">{t.sectors.sector5}</h3>
          </div>
          <div className="group bg-secondary rounded-lg p-8 hover:bg-primary hover:text-primary-foreground transition-all cursor-pointer border border-border">
            <Heart className="w-12 h-12 mb-4 text-accent group-hover:text-accent" />
            <h3 className="font-bold text-lg">{t.sectors.sector6}</h3>
          </div>
          <div className="group bg-secondary rounded-lg p-8 hover:bg-primary hover:text-primary-foreground transition-all cursor-pointer border border-border">
            <Zap className="w-12 h-12 mb-4 text-accent group-hover:text-accent" />
            <h3 className="font-bold text-lg">{t.sectors.sector7}</h3>
          </div>
          <div className="group bg-secondary rounded-lg p-8 hover:bg-primary hover:text-primary-foreground transition-all cursor-pointer border border-border flex items-center justify-center">
            <Factory className="w-12 h-12 text-accent group-hover:text-accent" />
          </div>
        </div>
      </div>
    </section>
  );
}
