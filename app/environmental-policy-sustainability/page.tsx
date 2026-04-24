import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

const sections = [
  {
    title: "Environmental Responsibility",
    body: "Cayo Exclusive Resort & Spa recognises the importance of protecting the natural environment of Crete and supporting responsible hospitality practices that respect the landscape, local resources, and surrounding community.",
  },
  {
    title: "Resource Awareness",
    body: "The resort aims to encourage mindful use of energy, water, and materials across daily operations, while promoting practices that reduce unnecessary waste and support more responsible resource management.",
  },
  {
    title: "Local Connection",
    body: "Sustainability is also connected to place. The resort values local culture, local producers, Cretan hospitality, and a stronger relationship between the guest experience and the destination.",
  },
  {
    title: "Guest Participation",
    body: "Guests are encouraged to participate in simple responsible practices during their stay, including mindful energy and water use, towel and linen reuse where applicable, and respect for the surrounding natural and cultural environment.",
  },
  {
    title: "Continuous Improvement",
    body: "Environmental responsibility is an ongoing process. The resort continues to review opportunities for improvement across operations, guest communication, procurement, and destination-related initiatives.",
  },
  {
    title: "Contact",
    body: "For enquiries related to environmental policy and sustainability, guests may contact the resort directly at info@cayoresort.com.",
  },
];

export default function EnvironmentalPolicySustainabilityPage() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <Header />

      <section
        className="border-b pt-40 pb-20 md:pt-48 md:pb-24"
        style={{ borderColor: "var(--border)" }}
      >
        <div className="container">
          <div className="max-w-4xl">
            <div className="eyebrow">Environmental Policy &amp; Sustainability</div>

            <h1 className="section-title mt-4">
              Respect for place,
              <br />
              people, and
              <br />
              environment.
            </h1>

            <p className="section-copy mt-8">
              This page outlines the resort’s commitment to responsible
              hospitality, environmental awareness, and a more considered
              relationship with the destination.
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
            This content should be reviewed and completed with the resort’s
            official sustainability policy before publication.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}