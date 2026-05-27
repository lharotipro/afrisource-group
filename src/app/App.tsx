import { useState } from "react";
import { Routes, Route } from "react-router";
import { Language, translations } from "../translations";
import ArticlePage from "../pages/ArticlePage";
import AboutPage from "../pages/AboutPage";
import CgvPage from "../pages/legal/CgvPage";
import PrivacyPage from "../pages/legal/PrivacyPage";
import TermsPage from "../pages/legal/TermsPage";
import CookiesPage from "../pages/legal/CookiesPage";
import Header from "../sections/Header";
import HeroSection from "../sections/HeroSection";
import ServicesSection from "../sections/ServicesSection";
import AboutSection from "../sections/AboutSection";
import WhyMoroccoSection from "../sections/WhyMoroccoSection";
import VerificationSection from "../sections/VerificationSection";
import CategoriesSection from "../sections/CategoriesSection";
import HowItWorksSection from "../sections/HowItWorksSection";
import ImpactSection from "../sections/ImpactSection";
import TestimonialsSection from "../sections/TestimonialsSection";
import CtaSection from "../sections/CtaSection";
import BlogSection from "../sections/BlogSection";
import ContactSection from "../sections/ContactSection";
import Footer from "../sections/Footer";
import CookieBanner from "./components/CookieBanner";
import RequestAccessModal from "./components/RequestAccessModal";

export default function App() {
  const [lang, setLang] = useState<Language>("en");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [requestModal, setRequestModal] = useState({ open: false, category: "" });
  const t = translations[lang];

  function openRequestModal(category: string) {
    setRequestModal({ open: true, category });
  }

  const HomePage = (
    <div className="min-h-screen bg-background text-foreground">
      <Header t={t} lang={lang} setLang={setLang} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <HeroSection t={t} />
      <ServicesSection t={t} />
      <div id="about"><AboutSection t={t} /></div>
      <WhyMoroccoSection t={t} />
      <VerificationSection t={t} />
      <div id="products"><CategoriesSection t={t} onRequestAccess={openRequestModal} /></div>
      <HowItWorksSection t={t} />
      <ImpactSection t={t} />
      <BlogSection />
      <TestimonialsSection t={t} />
      <CtaSection t={t} />
      <ContactSection t={t} />
      <Footer t={t} />
    </div>
  );

  return (
    <>
      <Routes>
        <Route path="/" element={HomePage} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog/:slug" element={<ArticlePage />} />
        <Route path="/cgv" element={<CgvPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/cookies" element={<CookiesPage />} />
      </Routes>

      {/* Global overlays — rendered outside route tree so they persist across pages */}
      <CookieBanner />
      <RequestAccessModal
        open={requestModal.open}
        category={requestModal.category}
        onClose={() => setRequestModal({ open: false, category: "" })}
      />
    </>
  );
}