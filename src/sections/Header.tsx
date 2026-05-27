import { Globe, Menu, X } from "lucide-react";
import { Language, Translations } from "../translations";
interface HeaderProps { t: Translations; lang: Language; setLang: (l: Language) => void; mobileMenuOpen: boolean; setMobileMenuOpen: (o: boolean) => void; }
export default function Header({ t, lang, setLang, mobileMenuOpen, setMobileMenuOpen }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <img src="/logo-inline-white.png" alt="Afrisource Group" className="h-10 brightness-0 invert" />
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-sm font-medium text-primary-foreground/80 hover:text-accent transition-colors">{t.nav.about}</a>
          <a href="#products" className="text-sm font-medium text-primary-foreground/80 hover:text-accent transition-colors">{t.nav.products}</a>
          <a href="#verification" className="text-sm font-medium text-primary-foreground/80 hover:text-accent transition-colors">{t.nav.verification}</a>
          <a href="#blog" className="text-sm font-medium text-primary-foreground/80 hover:text-accent transition-colors">{t.nav.blog}</a>
          <a href="#contact" className="text-sm font-medium text-primary-foreground/80 hover:text-accent transition-colors">{t.nav.contact}</a>
        </nav>
        <div className="flex items-center gap-4">
          <button onClick={() => setLang(lang === "en" ? "fr" : "en")} className="flex items-center gap-1.5 rounded-lg border border-white/20 bg-white/10 px-3 py-1.5 text-sm font-medium text-primary-foreground hover:bg-white/20 transition-colors">
            <Globe className="h-3.5 w-3.5" />{lang === "en" ? "FR" : "EN"}
          </button>
          <a href="#contact" className="hidden md:inline-flex rounded-lg bg-accent px-5 py-2 text-sm font-semibold text-accent-foreground hover:bg-accent/90 transition-colors">Get Started</a>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 text-primary-foreground">
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-primary">
          <nav className="flex flex-col px-6 py-4 gap-1">
            {[["#about", t.nav.about], ["#products", t.nav.products], ["#verification", t.nav.verification], ["#blog", t.nav.blog], ["#contact", t.nav.contact]].map(([href, label]) => (
              <a key={href} href={href} onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 text-sm font-medium text-primary-foreground/80 hover:text-accent rounded-lg hover:bg-white/5 transition-colors">{label}</a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}