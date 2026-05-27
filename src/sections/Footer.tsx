import { Linkedin, Mail, Phone, MapPin, ArrowRight, FileText } from "lucide-react";
import { Link } from "react-router";
import { Translations } from "../translations";
import { articles } from "../data/articles";

interface FooterProps { t: Translations; }

export default function Footer({ t }: FooterProps) {
  const recentArticles = articles.slice(0, 4);

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[2fr_1.1fr_1.6fr_1.1fr_1.1fr]">

          {/* ── Brand ──────────────────────────────────── */}
          <div className="sm:col-span-2 lg:col-span-1">
            <img src="/logo.PNG" alt="Afrisource Group" className="h-10 mb-5 brightness-0 invert" />
            <p className="text-sm text-primary-foreground/65 max-w-xs leading-relaxed mb-7">
              {t.footer.tagline} — connecting verified Moroccan exporters with global buyers since 2022.
            </p>
            <div className="space-y-3">
              <a href="mailto:contact@afrisourcegroup.com" className="flex items-center gap-3 text-sm text-primary-foreground/60 hover:text-accent transition-colors group">
                <div className="h-8 w-8 rounded-lg bg-white/8 flex items-center justify-center group-hover:bg-accent/20 transition-colors flex-shrink-0">
                  <Mail className="h-3.5 w-3.5 text-accent" />
                </div>
                contact@afrisourcegroup.com
              </a>
              <a href="tel:+212661372684" className="flex items-center gap-3 text-sm text-primary-foreground/60 hover:text-accent transition-colors group">
                <div className="h-8 w-8 rounded-lg bg-white/8 flex items-center justify-center group-hover:bg-accent/20 transition-colors flex-shrink-0">
                  <Phone className="h-3.5 w-3.5 text-accent" />
                </div>
                +212 6 61 37 26 84
              </a>
              <div className="flex items-center gap-3 text-sm text-primary-foreground/60">
                <div className="h-8 w-8 rounded-lg bg-white/8 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-3.5 w-3.5 text-accent" />
                </div>
                Morocco, Africa
              </div>
            </div>
            <div className="mt-7 flex items-center gap-3">
              <a href="https://www.linkedin.com/company/afrisource-group/" target="_blank" rel="noopener noreferrer"
                className="h-9 w-9 rounded-xl bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* ── Products ───────────────────────────────── */}
          <div>
            <h4 className="font-semibold mb-5 text-xs uppercase tracking-widest text-primary-foreground/40">
              {t.footer.products}
            </h4>
            <ul className="space-y-3 text-sm text-primary-foreground/65">
              {[
                "Seafood & Marine",
                "Herbs & Botanicals",
                "Natural Beauty",
                "Agri-Food & Spices",
                "Fresh Produce",
                "Handicrafts & Textiles",
                "Dried & Processed",
              ].map((p) => (
                <li key={p}>
                  <a href="#products" className="hover:text-accent transition-colors flex items-center gap-1.5 group">
                    <span className="h-1 w-1 rounded-full bg-accent/40 group-hover:bg-accent transition-colors" />
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Latest Insights (Blog) ─────────────────── */}
          <div>
            <h4 className="font-semibold mb-5 text-xs uppercase tracking-widest text-primary-foreground/40">
              {t.footer.blog}
            </h4>
            <ul className="space-y-4">
              {recentArticles.map((article) => (
                <li key={article.slug}>
                  <Link to={`/blog/${article.slug}`}
                    className="group flex gap-3 hover:text-accent transition-colors">
                    <div className="mt-0.5 h-10 w-10 flex-shrink-0 overflow-hidden rounded-lg">
                      <img src={article.coverImage} alt="" className="h-full w-full object-cover opacity-70 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div>
                      <span className={`inline-block ${article.categoryBg} px-2 py-0.5 rounded-full text-white text-[10px] font-semibold mb-1`}>
                        {article.category}
                      </span>
                      <p className="text-xs text-primary-foreground/65 group-hover:text-accent transition-colors leading-snug line-clamp-2">
                        {article.title}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
            <Link to="/#blog" className="mt-5 inline-flex items-center gap-1 text-xs font-semibold text-accent hover:gap-2 transition-all">
              {t.footer.viewAll} <ArrowRight className="h-3 w-3" />
            </Link>
          </div>

          {/* ── Company ────────────────────────────────── */}
          <div>
            <h4 className="font-semibold mb-5 text-xs uppercase tracking-widest text-primary-foreground/40">
              {t.footer.company}
            </h4>
            <ul className="space-y-3 text-sm text-primary-foreground/65">
              <li><a href="#about" className="hover:text-accent transition-colors">{t.footer.about}</a></li>
              <li><a href="#verification" className="hover:text-accent transition-colors">{t.footer.verification}</a></li>
              <li><a href="#how-it-works" className="hover:text-accent transition-colors">{t.footer.howItWorks}</a></li>
              <li><a href="#blog" className="hover:text-accent transition-colors">Blog</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">{t.nav.contact}</a></li>
              <li>
                <a href="#" className="inline-flex items-center gap-1.5 hover:text-accent transition-colors">
                  <FileText className="h-3.5 w-3.5" />{t.footer.catalog}
                </a>
              </li>
            </ul>
          </div>

          {/* ── Legal ──────────────────────────────────── */}
          <div>
            <h4 className="font-semibold mb-5 text-xs uppercase tracking-widest text-primary-foreground/40">
              {t.footer.legal}
            </h4>
            <ul className="space-y-3 text-sm text-primary-foreground/65">
              <li><a href="/cgv" className="hover:text-accent transition-colors">{t.footer.cgv}</a></li>
              <li><a href="/privacy" className="hover:text-accent transition-colors">{t.footer.privacy}</a></li>
              <li><a href="/terms" className="hover:text-accent transition-colors">{t.footer.terms}</a></li>
              <li><a href="/cookies" className="hover:text-accent transition-colors">{t.footer.cookies}</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ─────────────────────────────────── */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} Afrisource Group · Morocco · {t.footer.rights}
          </p>
          <div className="flex items-center gap-6 text-xs text-primary-foreground/40">
            <a href="/cgv" className="hover:text-accent transition-colors">{t.footer.cgv}</a>
            <span>·</span>
            <a href="/privacy" className="hover:text-accent transition-colors">{t.footer.privacy}</a>
            <span>·</span>
            <a href="/cookies" className="hover:text-accent transition-colors">{t.footer.cookies}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}