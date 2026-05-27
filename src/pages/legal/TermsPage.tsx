import LegalLayout from "./LegalLayout";
export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms of Use"
      subtitle="Rules and conditions governing access to and use of the Afrisource Group website."
      lastUpdated="May 1, 2026"
      sections={[
        { heading: "Acceptance of Terms", body: ["By accessing and using the Afrisource Group website (afrisourcegroup.com), you agree to be bound by these Terms of Use. If you do not agree, please discontinue use of the site immediately."] },
        { heading: "Use of the Website", body: ["This website is intended for professional use by importers, buyers, sourcing managers, and other business professionals interested in Moroccan and African export products.", "You may use this website to:", ["Browse product categories and supplier information", "Submit sourcing enquiries via the contact form", "Access trade insights and blog content", "Download available catalogues and documentation"]] },
        { heading: "Prohibited Activities", body: ["You may not use this website to:", ["Scrape, copy, or republish content without written permission", "Attempt to gain unauthorised access to any part of the site or its servers", "Transmit spam, malware, or any harmful code", "Misrepresent your identity or affiliation", "Use the site for any unlawful purpose or in violation of applicable law"]] },
        { heading: "Intellectual Property", body: ["All content on this website — including text, images, logos, and design — is the intellectual property of Afrisource Group or its content providers.", "You may not reproduce, distribute, or create derivative works without prior written consent, except for personal, non-commercial use."] },
        { heading: "Accuracy of Information", body: ["Afrisource Group strives to provide accurate and up-to-date information. However, we do not warrant the completeness or accuracy of any content on this site. Product availability, certifications, and supplier details are subject to change."] },
        { heading: "External Links", body: ["Our website may contain links to third-party websites. These links are provided for convenience only. Afrisource Group has no control over the content of those sites and accepts no responsibility for them."] },
        { heading: "Limitation of Liability", body: ["To the maximum extent permitted by law, Afrisource Group shall not be liable for any direct, indirect, or consequential loss arising from use of this website or reliance on its content."] },
        { heading: "Changes to These Terms", body: ["We reserve the right to modify these Terms of Use at any time. Continued use of the website after changes are posted constitutes acceptance of the revised terms."] },
        { heading: "Governing Law", body: ["These Terms of Use are governed by the laws of the Kingdom of Morocco. Any disputes shall be subject to the exclusive jurisdiction of the courts of Morocco."] },
      ]}
    />
  );
}