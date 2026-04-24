import Link from "next/link";

const activityCards = [
  {
    title: "Sea & Watersports",
    copy:
      "A direct connection to the water through movement, freedom, and the lighter rhythm of the coast.",
    image: "/images/experiences/preview-sea.jpg",
  },
  {
    title: "Boat Excursions & Spinalonga",
    copy:
      "Private and shared sea journeys that expand the resort experience into the wider landscape of Elounda.",
    image: "/images/experiences/preview-boat.jpg",
  },
  {
    title: "Nature, Culture & Attractions",
    copy:
      "A more grounded sense of place through local routes, scenery, heritage, and curated destination moments.",
    image: "/images/experiences/preview-culture.jpg",
  },
];

export default function ActivitiesPreview() {
  return (
    <section className="pb-28 md:pb-36">
      <div className="container">
        <div className="grid gap-12 md:grid-cols-[1fr_1fr] md:items-end">
          <div>
            <div className="eyebrow">Experiences</div>

            <h2 className="mt-5 text-[clamp(3rem,6vw,5.8rem)] font-light leading-[0.92] tracking-[-0.05em]">
              Sea, landscape,
              <br />
              culture, and
              <br />
              destination-led
              <br />
              discovery.
            </h2>
          </div>

          <div>
            <p className="max-w-xl text-[1.05rem] leading-8 text-neutral-600">
              Beyond the stay itself, Cayo opens into a wider experience of sea,
              landscape, and local character, bringing guests closer to the
              atmosphere of Elounda and Crete.
            </p>

            <div className="mt-8">
              <Link href="/experiences" className="outline-button">
                Explore Experiences
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {activityCards.map((item) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-[34px] bg-white"
              style={{ border: "1px solid var(--border)" }}
            >
              <div className="relative h-[22rem] overflow-hidden bg-[#d8d1c6]">
                <div
                  className="absolute inset-0 transition duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                  style={{
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/18 via-black/0 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
              </div>

              <div className="p-7 md:p-8">
                <div className="eyebrow">Destination Experience</div>

                <h3 className="mt-4 text-[2rem] font-light leading-[1.04] tracking-[-0.035em]">
                  {item.title}
                </h3>

                <p className="mt-4 text-[0.98rem] leading-8 text-neutral-500">
                  {item.copy}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}