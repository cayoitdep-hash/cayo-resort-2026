import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

const sections = [
  {
    title: "Commitment",
    body: "Cayo Exclusive Resort & Spa is committed to providing a safe, respectful, and inclusive environment for employees, partners, and guests, free from violence, harassment, or inappropriate behaviour.",
  },
  {
    title: "Zero Tolerance",
    body: "Any form of violence, harassment, intimidation, or discriminatory behaviour is not accepted. This includes verbal, physical, psychological, or any other form of misconduct.",
  },
  {
    title: "Workplace Environment",
    body: "The resort promotes a professional environment based on respect, dignity, equality, and cooperation across all departments and levels of operation.",
  },
  {
    title: "Reporting",
    body: "Employees and partners are encouraged to report any incident or concern through appropriate internal channels. All reports are handled with seriousness, confidentiality, and respect.",
  },
  {
    title: "Protection & Fair Handling",
    body: "All reported cases are reviewed in a fair and objective manner. The resort aims to protect individuals involved and ensure appropriate actions are taken when necessary.",
  },
  {
    title: "Continuous Awareness",
    body: "The resort supports awareness and prevention initiatives to reinforce a culture of respect and professionalism within the workplace.",
  },
  {
    title: "Contact",
    body: "For related enquiries, communication may be directed to info@cayoresort.com.",
  },
];

export default function AntiHarassmentPolicyPage() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <Header />

      <section
        className="border-b pt-40 pb-20 md:pt-48 md:pb-24"
        style={{ borderColor: "var(--border)" }}
      >
        <div className="container">
          <div className="max-w-4xl">
            <div className="eyebrow">
              Policy on the Prevention and Combating of Violence and Harassment
            </div>

            <h1 className="section-title mt-4">
              Respect,
              <br />
              safety, and
              <br />
              professionalism.
            </h1>

            <p className="section-copy mt-8">
              This policy outlines the resort’s position against any form of
              violence or harassment and reinforces a culture of respect,
              safety, and accountability.
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
            This policy should be reviewed and aligned with the official HR and
            legal framework of the resort before publication.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}