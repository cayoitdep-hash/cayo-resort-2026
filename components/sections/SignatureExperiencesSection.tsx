import Link from "next/link";

const experiences = [
  {
    eyebrow: "Signature Experience",
    title: "Private dining under the evening sky.",
    copy:
      "Tailored dining moments shaped by view, privacy, and a more intimate rhythm of hospitality.",
    href: "/dining",
    cta: "Explore Gastronomy",
  },
  {
    eyebrow: "Wellness Ritual",
    title: "Restorative spa journeys with a slower tempo.",
    copy:
      "A more immersive layer of calm, movement, and care inspired by the resort’s wellness philosophy.",
    href: "/wellness",
    cta: "Explore Wellness",
  },
  {
    eyebrow: "Destination Access",
    title: "Experiences that connect sea, landscape, and culture.",
    copy:
      "From private moments to curated discovery, each experience extends the atmosphere of the resort beyond the room.",
    href: "/experiences",
    cta: "Explore Activities",
  },
];

export default function SignatureExperiencesSection() {
  return (
    <section className="pb-24 md:pb-32">
      <div className="container">
        <div className="grid gap-10 md:grid-cols-[1.02fr_0.98fr] md:items-start">
          <div>
            <div className="eyebrow">Signature Experiences</div>
            <h2 className="section-title mt-4">
              More than a stay.
              <br />
              A sequence of
              <br />
              elevated moments.
            </h2>
          </div>

          <div>
            <p className="section-copy">
              Cayo is experienced through atmosphere, privacy, gastronomy,
              wellness, and destination-led rituals designed to feel effortless,
              cinematic, and deeply personal.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {experiences.map((item) => (
            <article
              key={item.title}
              className="rounded-[30px] bg-white p-7 md:p-8"
              style={{ border: "1px solid var(--border)" }}
            >
              <div className="eyebrow">{item.eyebrow}</div>

              <h3 className="mt-4 text-[1.95rem] font-light leading-[1.06] tracking-[-0.03em]">
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-neutral-500">
                {item.copy}
              </p>

              <div className="mt-8">
                <Link href={item.href} className="outline-button">
                  {item.cta}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}