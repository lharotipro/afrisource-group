import { ArrowRight } from "lucide-react";
import { Translations } from "../translations";

interface CategoriesSectionProps {
  t: Translations;
  onRequestAccess: (category: string) => void;
}

const CATEGORIES = [
  {
    name: "Seafood & Marine",
    nameFr: "Produits de la Mer",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
    products: ["Sardines & Anchovies", "Canned Fish", "Octopus & Squid", "Frozen Seafood", "Marinated Seafood", "Fish Meal"],
    markets: "EU · Middle East · USA · West Africa",
    certs: "HACCP · ISO 22000 · CE Mark · Friend of the Sea",
  },
  {
    name: "Herbs & Botanicals",
    nameFr: "Herbes & Botaniques",
    image: "https://images.unsplash.com/photo-1509023464722-18d996393ca8?auto=format&fit=crop&w=800&q=80",
    products: ["Rosemary", "Thyme", "Lavender", "Verbena", "Chamomile", "Mint"],
    markets: "EU · Middle East · USA · Asia",
    certs: "ONSSA · Organic EU · USDA Organic · HACCP",
  },
  {
    name: "Natural Beauty",
    nameFr: "Beauté Naturelle",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
    products: ["Pure Argan Oil", "Cosmetic Grade Argan Oil", "Food Grade Argan Oil", "Rose Water", "Cactus Seed Oil", "Ghassoul Clay"],
    markets: "EU · Middle East · USA · Asia",
    certs: "ECOCERT · USDA Organic · COSMOS · ISO 9001",
  },
  {
    name: "Agri-Food & Spices",
    nameFr: "Agro-Alimentaire & Épices",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80",
    products: ["Moroccan Saffron — Taliouine", "Extra Virgin Olive Oil", "Black & Green Olives", "Cumin & Coriander", "Ras el Hanout", "Preserved Lemons"],
    markets: "EU · Middle East · USA · Asia",
    certs: "IGP Taliouine · ISO 22000 · Halal · Organic ECOCERT",
  },
  {
    name: "Fresh Produce",
    nameFr: "Produits Frais",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80",
    products: ["Tomatoes & Cherry Tomatoes", "Bell & Chili Peppers", "Courgettes & Zucchini", "Green Beans", "Citrus — Oranges & Clementines", "Strawberries · Blueberries · Grapes"],
    markets: "EU · Middle East · USA · Russia",
    certs: "Global G.A.P · Phytosanitary · BRC · ECOCERT",
  },
  {
    name: "Handicrafts & Textiles",
    nameFr: "Artisanat & Textiles",
    image: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&w=800&q=80",
    products: ["Handmade Berber Carpets", "Wool & Cotton Rugs", "Moroccan Leather Goods", "Ceramic & Pottery", "Woven Baskets & Bags", "Zellige Tiles & Mosaics"],
    markets: "EU · Middle East · USA · Asia",
    certs: "Artisanat Maroc · Fair Trade · OEKO-TEX · Certificate of Origin",
  },
  {
    name: "Dried & Processed",
    nameFr: "Produits Séchés",
    image: "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?auto=format&fit=crop&w=800&q=80",
    products: ["Medjool & Deglet Nour Dates", "Dried Figs", "Dried Apricots", "Dried Mint", "Raisins & Sultanas", "Almonds & Walnuts — Middle Atlas"],
    markets: "EU · Middle East · USA · Japan",
    certs: "HACCP · ISO 22000 · Mycotoxin Test · ECOCERT",
  },
];

export default function CategoriesSection({ t, onRequestAccess }: CategoriesSectionProps) {
  return (
    <section className="bg-[#F5F3EF] py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full border border-accent/30 bg-accent/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
            {t.categories.eyebrow}
          </span>
          <h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
            {t.categories.title}{" "}
            <span className="text-accent">{t.categories.titleAccent}</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">{t.categories.subtitle}</p>
        </div>

        {/* Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {CATEGORIES.map((cat, i) => (
            <div
              key={i}
              className="group overflow-hidden rounded-3xl bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <h3 className="absolute bottom-4 left-4 right-4 text-lg font-bold text-white leading-tight">
                  {cat.name}
                </h3>
              </div>

              {/* Body */}
              <div className="flex flex-col flex-1 p-5">
                {/* Products */}
                <ul className="space-y-1">
                  {cat.products.map((p, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-foreground/80">
                      <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                      {p}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 space-y-2 border-t border-border pt-4">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">{t.categories.marketsLabel}</p>
                    <p className="mt-0.5 text-xs text-foreground/70">{cat.markets}</p>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">{t.categories.certLabel}</p>
                    <p className="mt-0.5 text-xs text-foreground/70">{cat.certs}</p>
                  </div>
                </div>

                <button
                  onClick={() => onRequestAccess(cat.name)}
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground">
                  {t.categories.cta} <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}

          {/* 8th card — CTA */}
          <div className="flex flex-col items-center justify-center rounded-3xl border-2 border-dashed border-accent/40 bg-accent/5 p-8 text-center">
            <span className="text-4xl">📦</span>
            <h3 className="mt-4 text-lg font-bold text-foreground">More Categories</h3>
            <p className="mt-2 text-sm text-muted-foreground">Contact us for custom sourcing requests in any product category.</p>
            <button className="mt-6 rounded-xl bg-accent px-6 py-2.5 text-sm font-semibold text-accent-foreground hover:bg-accent/90 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
