import LegalLayout from "./LegalLayout";
export default function CookiesPage() {
  return (
    <LegalLayout
      title="Cookie Policy"
      subtitle="How Afrisource Group uses cookies and similar technologies on our website."
      lastUpdated="May 1, 2026"
      sections={[
        { heading: "What Are Cookies?", body: ["Cookies are small text files stored on your device when you visit a website. They help us recognise your browser, remember your preferences, and improve your experience on our site."] },
        { heading: "Types of Cookies We Use", body: ["We use the following categories of cookies:", ["Essential cookies: required for the website to function (session management, security). These cannot be disabled.", "Analytics cookies: help us understand how visitors use our site (pages visited, time spent, traffic sources). We use anonymised data only.", "Preference cookies: remember your choices (e.g., language selection — EN / FR).", "Marketing cookies: used to track interactions with our LinkedIn presence and third-party sharing buttons."]] },
        { heading: "Specific Cookies", body: ["Key cookies in use on our website:", ["_session — essential — stores your session state — expires at end of session", "lang_pref — preference — remembers language choice (EN/FR) — 30 days", "_ga, _gid — analytics (Google Analytics, if active) — 2 years / 24 hours", "li_sugr — LinkedIn Insight Tag (if active) — 90 days"]] },
        { heading: "Third-Party Cookies", body: ["Some cookies are placed by third-party services we use, such as LinkedIn. These are governed by the respective privacy policies of those providers.", "We do not control third-party cookies. You can opt out of LinkedIn cookies via your LinkedIn account settings or the LinkedIn opt-out page."] },
        { heading: "Managing Cookies", body: ["You can control cookies through your browser settings. Most browsers allow you to:", ["View and delete existing cookies", "Block all cookies or cookies from specific sites", "Set preferences for specific types of cookies"], "Please note that disabling cookies may affect the functionality of this website. For instructions, refer to your browser's help documentation."] },
        { heading: "Cookie Consent", body: ["On your first visit, we display a cookie consent banner. By continuing to browse after acknowledging the banner, you consent to non-essential cookies as described in this policy.", "You may withdraw consent at any time by clearing your cookies and adjusting your browser settings."] },
        { heading: "Updates to This Policy", body: ["We may update this Cookie Policy to reflect changes in our practices or applicable law. Please check this page periodically for the latest version."] },
        { heading: "Contact", body: ["For any questions about our use of cookies, contact: contact@afrisourcegroup.com"] },
      ]}
    />
  );
}