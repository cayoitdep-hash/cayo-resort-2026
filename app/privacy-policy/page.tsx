import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

const sections = [
  {
    title: "Information We Collect",
    body: "We may collect personal information provided voluntarily through enquiries, reservations, contact forms, email communication, or direct interaction with the resort. This may include name, contact details, stay preferences, booking details, and any information required to support guest service.",
  },
  {
    title: "How We Use Information",
    body: "Personal information is used to respond to enquiries, manage reservations, provide guest support, improve services, process requests, and communicate information related to the guest experience at Cayo Exclusive Resort & Spa.",
  },
  {
    title: "Sharing of Information",
    body: "Information may be shared only where required for operational purposes, legal compliance, reservation management, payment processing, or service delivery. We do not sell personal data.",
  },
  {
    title: "Data Security",
    body: "Reasonable technical and organisational measures are applied to protect personal information against unauthorised access, misuse, loss, or disclosure.",
  },
  {
    title: "Guest Rights",
    body: "Guests may request access, correction, deletion, or restriction of their personal data, subject to applicable legal requirements and operational obligations.",
  },
  {
    title: "Contact",
    body: "For privacy-related enquiries, guests may contact the resort directly at info@cayoresort.com.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <Header />

      <section className="border-b pt-40 pb-20 md:pt-48 md:pb-24" style={{ borderColor: "var(--border)" }}>
        <div className="container">
          <div className="max-w-4xl">
            <div className="eyebrow">Privacy Policy</div>
            <h1 className="section-title mt-4">
              Privacy,
              <br />
              handled with care.
            </h1>
            <p className="section-copy mt-8">
              This Privacy Policy explains how Cayo Exclusive Resort &amp; Spa
              may collect, use, and protect personal information in connection
              with enquiries, reservations, and guest services.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container max-w-4xl">
          <div className="space-y-6">
            {sections.map((section) => (
              <article
                key={section.title}
                className="rounded-[30px] bg-white p-8 md:p-10"
                style={{ border: "1px solid var(--border)" }}
              >
                <div className="eyebrow">{section.title}</div>
                <p className="mt-5 text-base leading-8 text-neutral-600">
                  {section.body}
                </p>
              </article>
            ))}
          </div>

          <p className="mt-10 text-sm leading-7 text-neutral-500">
            This page is provided as a general website privacy notice and should
            be reviewed by the resort’s legal representative before publication.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}