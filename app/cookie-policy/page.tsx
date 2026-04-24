import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

const sections = [
  {
    title: "What Cookies Are",
    body: "Cookies are small text files stored on a device when visiting a website. They help the website function properly, remember preferences, understand usage, and support a smoother browsing experience.",
  },
  {
    title: "How We Use Cookies",
    body: "Cayo Exclusive Resort & Spa may use cookies to support website functionality, improve performance, measure traffic, understand visitor behaviour, and support booking or enquiry-related user journeys.",
  },
  {
    title: "Types of Cookies",
    body: "The website may use essential cookies, preference cookies, analytics cookies, and marketing or third-party cookies where applicable. Essential cookies are required for the website to operate correctly.",
  },
  {
    title: "Third-Party Services",
    body: "Some cookies may be set by third-party services, such as analytics, embedded media, maps, booking engines, or social media platforms. These services may process information according to their own privacy and cookie policies.",
  },
  {
    title: "Managing Cookies",
    body: "Visitors can manage or disable cookies through their browser settings. Disabling some cookies may affect the functionality or performance of the website.",
  },
  {
    title: "Contact",
    body: "For cookie-related questions, visitors may contact the resort at info@cayoresort.com.",
  },
];

export default function CookiePolicyPage() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <Header />

      <section
        className="border-b pt-40 pb-20 md:pt-48 md:pb-24"
        style={{ borderColor: "var(--border)" }}
      >
        <div className="container">
          <div className="max-w-4xl">
            <div className="eyebrow">Cookie Policy</div>

            <h1 className="section-title mt-4">
              Cookies,
              <br />
              transparency,
              <br />
              and control.
            </h1>

            <p className="section-copy mt-8">
              This Cookie Policy explains how cookies and similar technologies
              may be used on the Cayo Exclusive Resort &amp; Spa website.
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
            This page is provided as a general website cookie notice and should
            be reviewed by the resort’s legal representative before publication.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}