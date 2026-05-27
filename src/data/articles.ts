export interface ArticleImage {
  src: string;
  caption?: string;
}

export interface Article {
  slug: string;
  category: string;
  categoryBg: string;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  coverImage: string;
  heroImage?: string;
  images: ArticleImage[];
  tags: string[];
  body: { type: "paragraph" | "heading" | "quote" | "list"; content: string | string[] }[];
}

export const articles: Article[] = [
  {
    slug: "moroccan-nana-mint-supplier-spotlight",
    category: "Supplier Spotlight",
    categoryBg: "bg-emerald-500",
    date: "May 12, 2026",
    readTime: "3 min read",
    title: "Moroccan Nana Mint: 20 Tons/Week, Certified & Cold-Chain Ready",
    excerpt: "We spotlight one of our certified Moroccan mint producers — supplying both fresh and dried Mentha Spicata (Nana variety) from high-altitude fields. Fully documented, verified, and export-ready.",
    coverImage: "/blog/article1/1.jpg",
    heroImage: "https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?auto=format&fit=crop&w=1600&q=80",
    images: [
      { src: "/blog/article1/1.jpg", caption: "Moroccan Nana Mint — Product Spotlight by Afrisource Group" },
      { src: "/blog/article1/2.jpg", caption: "The world's most traded mint variety — grown in Moroccan high-altitude fields" },
      { src: "/blog/article1/3.jpg", caption: "Key benefits that serious buyers need to know" },
      { src: "/blog/article1/4.jpg", caption: "Why Nana Mint? Cold chain, bulk capacity, and buyer-ready documentation" },
    ],
    tags: ["Verified Supplier", "Cold Chain", "Herbs & Botanicals"],
    body: [
      { type: "paragraph", content: "At Afrisource Group, we only present suppliers we have verified ourselves. Today we spotlight one of our certified Moroccan mint producers — supplying both fresh and dried Mentha Spicata (Nana variety), grown in premium high-altitude fields across Morocco's Meknes and Beni Mellal regions." },
      { type: "heading", content: "Why Moroccan Nana Mint?" },
      { type: "paragraph", content: "Moroccan Nana Mint (Mentha Spicata — Nana Variety) is the world's most traded mint variety. Grown in the high-altitude fields of Morocco, it is renowned for its intense aroma, deep green colour, and exceptional quality — consistently preferred by buyers in Europe, the Gulf, and North America." },
      { type: "list", content: ["Herbal Tea Blends", "Mojitos & Cocktails", "Food & Pharma applications", "Cosmetics & wellness products"] },
      { type: "heading", content: "This Supplier Is Fully Documented" },
      { type: "paragraph", content: "Every supplier we onboard must pass our full verification protocol before being presented to any buyer. This mint producer has cleared every checkpoint." },
      { type: "list", content: ["✅ Phytosanitary Certificate", "✅ Certificate of Origin", "✅ Food Safety / Laboratory Analysis Certificate", "✅ ONSSA Sanitary Authorization"] },
      { type: "quote", content: "The gap in African sourcing is rarely the product. It is always the documentation and the logistics behind it. This supplier has closed that gap — Afrisource Group verified it." },
      { type: "heading", content: "Scale & Logistics" },
      { type: "paragraph", content: "Capacity stands at 20 tons per week, available in both fresh and dried formats. Cold chain is fully respected from farm to shipment — ensuring product integrity across long-haul routes to Europe, Gulf, and North America." },
      { type: "paragraph", content: "Destinations served: France · Germany · Belgium · Gulf · UK. Ready to source? Contact contact@afrisourcegroup.com" },
    ],
  },
  {
    slug: "from-zero-to-hero-supplier-development",
    category: "Supplier Development",
    categoryBg: "bg-blue-500",
    date: "Apr 28, 2026",
    readTime: "4 min read",
    title: "From Zero to Hero: How We Turn African Producers Into Global Exporters",
    excerpt: "Most businesses we work with start unstructured — no export knowledge, no professional quotation, no access to global buyers. We sit with them, listen, and build their readiness from the ground up.",
    coverImage: "/blog/article2/1.jpg",
    heroImage: "https://images.unsplash.com/photo-1558612522-52c02d66f5a1?auto=format&fit=crop&w=1600&q=80",
    images: [
      { src: "/blog/article2/1.jpg", caption: "From a field in the Atlas Mountains. To shelves worldwide." },
      { src: "/blog/article2/2.jpg", caption: "It starts here — a Moroccan farmer, hands in the flowers, before sunrise." },
      { src: "/blog/article2/3.jpg", caption: "Most of this saffron never reaches global markets. Not because of quality." },
      { src: "/blog/article2/4.jpg", caption: "The same Moroccan saffron — now certified, traceable, global." },
      { src: "/blog/article2/5.jpg", caption: "That's exactly why Afrisource Group exists." },
      { src: "/blog/article2/6.jpg", caption: "Here's what we do for every supplier we work with." },
    ],
    tags: ["Partnership", "Export Ready", "Africa Trade"],
    body: [
      { type: "paragraph", content: "Most of the businesses we encounter are not structured. The owners lack export knowledge. They have never written a professional quotation. They don't know how to speak to a global buyer. And deep down — they are scared." },
      { type: "paragraph", content: "Scared that their business is too small. Scared that the international market is not for them. Scared to take what they built to the next level." },
      { type: "quote", content: "We show them it is possible. We sit with them. We listen. We understand their product, their story, their capacity." },
      { type: "heading", content: "The Saffron Story" },
      { type: "paragraph", content: "150 crocus flowers to produce 1 gram of saffron. A Moroccan farmer, hands in the flowers, before sunrise — this is where it starts. Taliouine saffron is world-class. It sells for up to €15/gram in European specialty stores. Yet most of it never reaches those shelves." },
      { type: "heading", content: "Why Does Premium Product Stay Local?" },
      { type: "list", content: ["❌ No IGP certification", "❌ No export documentation", "❌ No traceability", "❌ No access to international buyers"] },
      { type: "paragraph", content: "The product is world-class. The structure is missing. That is exactly why Afrisource Group exists." },
      { type: "heading", content: "What We Do for Every Supplier" },
      { type: "list", content: ["Supplier verification & audit", "Export documentation support", "IGP & organic certification guidance", "Buyer-ready product positioning", "Direct connection to serious global buyers"] },
      { type: "paragraph", content: "We get them export-ready — documentation, compliance, communication, quality standards. We position their business the way it deserves to be positioned on the global stage. Because the product was never the problem. The structure was." },
      { type: "quote", content: "At Afrisource Group, we don't just source. We build. We prepare. We elevate. We value what African suppliers have built — and we make sure the world sees it too. That is not just sourcing. That is partnership." },
    ],
  },
  {
    slug: "7-high-demand-moroccan-products",
    category: "Export Guide",
    categoryBg: "bg-amber-500",
    date: "Mar 15, 2026",
    readTime: "5 min read",
    title: "7 High-Demand Moroccan Products — What Buyers Must Know Before Sourcing",
    excerpt: "Morocco exports 150,000 tonnes of sardines annually. Argan oil commands a $350M+ global market. Taliouine saffron sells at up to $15/gram in Europe. The supply exists. The demand exists. The problem? Verification.",
    coverImage: "/blog/article4/1.jpg",
    heroImage: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1600&q=80",
    images: [
      { src: "/blog/article4/1.jpg", caption: "Morocco's premium export products — verified by Afrisource Group" },
    ],
    tags: ["Morocco", "Certifications", "Sourcing"],
    body: [
      { type: "paragraph", content: "Morocco exports over 150,000 tonnes of sardines a year. Argan oil commands a $350M+ global market growing at 17% annually. Taliouine saffron sells for up to $15/gram in Europe. The supply exists. The demand exists." },
      { type: "paragraph", content: "The problem? Verification. Most buyers get burned not by bad products — but by unaudited suppliers, missing certifications, and broken traceability chains." },
      { type: "heading", content: "The 7 Categories We Work With" },
      { type: "list", content: ["🐟 Seafood & Marine — Sardines, sea bass, shrimp, canned seafood", "🌿 Herbs & Botanicals — Nana mint, rosemary, thyme, oregano, lavender", "🧴 Natural Beauty — Argan oil, rose water, prickly pear oil, ghassoul clay", "🫒 Agri-food & Spices — Saffron, cumin, paprika, coriander, ras el hanout", "🥦 Fresh Produce — Tomatoes, peppers, citrus, avocados, strawberries", "🪨 Handicrafts & Textiles — Handira blankets, leather goods, zellige ceramics", "🌾 Dried & Processed — Dates, figs, olives, argan kernels"] },
      { type: "heading", content: "What Certifications Buyers Need" },
      { type: "paragraph", content: "For food and agricultural products, the essential documentation chain includes: Phytosanitary Certificate, Certificate of Origin, Food Safety / Laboratory Analysis Certificate, ONSSA Sanitary Authorization, and where applicable, IGP or organic certification." },
      { type: "quote", content: "We built Afrisource Group to close the verification gap. We find. We audit. We connect." },
      { type: "paragraph", content: "Each category in our catalog has been pre-screened. Every supplier meets our 6-step onboarding protocol before being presented to any buyer. Ready to source? Contact contact@afrisourcegroup.com" },
    ],
  },
  {
    slug: "moroccos-7-export-categories-verified",
    category: "Market Insight",
    categoryBg: "bg-violet-500",
    date: "Feb 3, 2026",
    readTime: "3 min read",
    title: "Morocco's 7 Key Export Categories — Verified, Documented & Ready for Global Buyers",
    excerpt: "Morocco is one of Africa's strongest export hubs, yet most global buyers struggle to find verified, export-ready suppliers. We've built a panel spanning 7 categories — every supplier passes a rigorous 6-step process.",
    coverImage: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80",
    heroImage: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1600&q=80",
    images: [
      { src: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80", caption: "Global trade connections — verified and protected" },
    ],
    tags: ["Seafood", "Agri-Food", "Supply Chain"],
    body: [
      { type: "paragraph", content: "Morocco is one of Africa's strongest export hubs — strategically positioned 14km from Europe, with strong logistics infrastructure, deep agricultural heritage, and a growing industrial base. Yet most global buyers struggle to find verified, export-ready Moroccan suppliers." },
      { type: "paragraph", content: "At Afrisource Group we are on the ground, connecting with suppliers across 7 key categories that represent Morocco's most exportable, globally demanded products." },
      { type: "heading", content: "Our 7-Category Verified Supplier Panel" },
      { type: "list", content: ["🐟 Seafood & Marine", "🌿 Herbs & Botanicals", "🧴 Natural Beauty", "🫒 Agri-food & Spices", "🥦 Fresh Produce", "🪨 Handicrafts & Textiles", "🌾 Dried & Processed"] },
      { type: "heading", content: "Our Verification Process" },
      { type: "paragraph", content: "Every supplier we onboard goes through our verification process — documents, certifications, capacity, and quality — before being presented to any buyer. This is not optional. It is our core promise." },
      { type: "quote", content: "The demand is there. The products are there. The missing piece is a structured, verified connection. That's what we provide." },
      { type: "paragraph", content: "Looking for verified Moroccan suppliers? Contact us at contact@afrisourcegroup.com" },
    ],
  },
  {
    slug: "14km-from-europe-bridging-the-gap",
    category: "Company Vision",
    categoryBg: "bg-rose-500",
    date: "Jan 10, 2026",
    readTime: "2 min read",
    title: "14km From Europe — Yet Worlds Apart in Market Access. We Bridge That Gap.",
    excerpt: "Morocco sits just 14 kilometres from Europe, yet the distance between Moroccan suppliers and global buyers has never felt wider. We verify. We protect. We deliver — connecting verified exporters with serious buyers worldwide.",
    coverImage: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=1200&q=80",
    heroImage: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=1600&q=80",
    images: [
      { src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=1200&q=80", caption: "Morocco — gateway between Africa and the world" },
    ],
    tags: ["Global Trade", "Morocco", "Proximity"],
    body: [
      { type: "paragraph", content: "Morocco is 14km from Europe. Yet the gap between Moroccan suppliers and global buyers has never been wider." },
      { type: "paragraph", content: "At Afrisource Group we bridge that gap — connecting verified Moroccan exporters with serious buyers worldwide across 7 product categories." },
      { type: "heading", content: "What We Connect" },
      { type: "list", content: ["🐟 Seafood & Marine", "🌿 Herbs & Botanicals", "🧴 Natural Beauty", "🫒 Agri-food & Spices", "🥦 Fresh Produce", "🪨 Handicrafts & Textiles", "🌾 Dried & Processed"] },
      { type: "quote", content: "We verify. We protect. We deliver." },
      { type: "paragraph", content: "The problem has never been the product. Morocco produces world-class goods at competitive prices. The problem is the infrastructure of trust — documentation, traceability, certification, and reliable logistics." },
      { type: "paragraph", content: "That is what Afrisource Group provides. Contact us to access our verified Moroccan supplier panel: contact@afrisourcegroup.com" },
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}