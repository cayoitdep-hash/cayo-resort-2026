import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

const sections = [
  {
    title: "Use of Website",
    body: "This website is provided for general information, inspiration, and booking-related purposes. By accessing or using the website, visitors agree to use it in a lawful and respectful manner.",
  },
  {
    title: "Content & Accuracy",
    body: "Cayo Exclusive Resort & Spa aims to ensure that all information presented is accurate and up to date. However, content may be subject to change without notice, including availability, services, and facilities.",
  },
  {
    title: "Intellectual Property",
    body: "All content on this website, including text, imagery, branding, and design elements, is owned or licensed by the resort and may not be reproduced, distributed, or used without permission.",
  },
  {
    title: "External Links",
    body: "The website may include links to third-party services such as booking engines or external platforms. The resort is not responsible for the content or policies of these external websites.",
  },
  {
    title: "Limitation of Liability",
    body: "The resort shall not be held responsible for any direct or indirect damages resulting from the use or inability to use the website, including technical issues, inaccuracies, or service interruptions.",
  },
  {
    title: "Changes to Terms",
    body: "These terms may be updated from time to time. Continued use of the website indicates acceptance of any revised terms.",
  },
  {
    title: "Contact",
    body: "For enquiries related to the website or its terms of use, visitors may contact info@cayoresort.com.",
  },
];

export default function WebsiteTermsPage() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <Header />

      <section
        className="border-b pt-40 pb-20 md:pt-48 md:pb-24"
        style={{ borderColor: "var(--border)" }}
      >
        <div className="container">
          <div className="max-w-4xl">
            <div className="eyebrow">Website Terms of Use</div>

            <h1 className="section-title mt-4">
              Terms guiding
              <br />
              the use of
              <br />
              this website.
            </h1>

            <p className="section-copy mt-8">
              These terms define how the website may be used and outline the
              responsibilities and limitations associated with its content and
              services.
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
            This page is provided as a general website terms template and should
            be reviewed by the resort’s legal representative before publication.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}