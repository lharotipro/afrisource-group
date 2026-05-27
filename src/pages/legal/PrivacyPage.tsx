import LegalLayout from "./LegalLayout";
export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      subtitle="How Afrisource Group collects, uses, and protects your personal data in compliance with applicable data protection regulations."
      lastUpdated="May 1, 2026"
      sections={[
        { heading: "Data Controller", body: ["Afrisource Group acts as data controller for all personal data collected through our website and business activities. Responsible person: Mohammed Hayoun — contact@afrisourcegroup.com"] },
        { heading: "Data We Collect", body: ["We collect the following categories of personal data:", ["Identity data: name, job title, company name", "Contact data: email address, phone number, country of residence", "Business data: sourcing interests, product categories, procurement volumes", "Usage data: pages visited, time on site, device and browser type (via cookies)", "Communications: content of emails, contact form submissions, and LinkedIn messages"]] },
        { heading: "Purpose & Legal Basis", body: ["We process your data for the following purposes:", ["To respond to sourcing enquiries and provide our services (contract performance)", "To send relevant trade insights and market updates (legitimate interest / consent)", "To improve our website and user experience (legitimate interest)", "To comply with legal and regulatory obligations (legal compliance)"]] },
        { heading: "Data Sharing", body: ["We do not sell your personal data. We may share it with:", ["Inspection partners (SGS, Intertek, Cotecna) where necessary for service delivery", "IT service providers hosting our website and communications infrastructure", "Legal or regulatory authorities where required by law"], "All third parties are bound by appropriate data protection agreements."] },
        { heading: "International Transfers", body: ["As an international trade facilitator, some data may be processed or accessed from outside Morocco or the EU. Where this occurs, we ensure adequate safeguards are in place (standard contractual clauses or equivalent protections)."] },
        { heading: "Data Retention", body: ["We retain personal data for as long as necessary for the purposes described:", ["Client and prospect data: 5 years from last interaction", "Website analytics: 13 months rolling", "Email communications: 3 years", "Legal and financial records: as required by applicable law (up to 10 years)"]] },
        { heading: "Your Rights", body: ["You have the following rights regarding your personal data:", ["Right of access: request a copy of the data we hold about you", "Right to rectification: correct inaccurate or incomplete data", "Right to erasure: request deletion under certain circumstances", "Right to restriction: limit how we process your data", "Right to portability: receive your data in a machine-readable format", "Right to object: object to processing based on legitimate interest", "Right to withdraw consent at any time where processing is consent-based"], "To exercise any of these rights, contact: contact@afrisourcegroup.com"] },
        { heading: "Cookies", body: ["We use cookies to improve your browsing experience. For full details, please refer to our Cookie Policy."] },
        { heading: "Changes to This Policy", body: ["We may update this Privacy Policy periodically. Material changes will be notified via our website. The date at the top of this page reflects the most recent revision."] },
      ]}
    />
  );
}