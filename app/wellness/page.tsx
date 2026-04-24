import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Link from "next/link";
import VideoHero from "../../components/ui/VideoHero";
import { pageMedia } from "../../data/page-media";

const wellnessSpaces = [
  {
    key: "armoniaSpa",
    title: "Armonia Spa",
    subtitle: "Operated by Aegeo Spas",
    description:
      "A sanctuary of tranquility where treatments, premium products, and a balance of traditional and modern techniques come together in a refined spa environment.",
  },
  {
    key: "spaFacilities",
    title: "Spa Facilities",
    subtitle: "Indoor Wellness Environment",
    description:
      "The public wellness information highlights a large indoor pool, steam room, sauna, three treatment rooms, hair salon, and nail salon.",
  },
  {
    key: "fitnessMovement",
    title: "Fitness & Movement",
    subtitle: "Wellness Beyond Treatments",
    description:
      "The wider resort wellness offer also includes a fitness room and yoga studio, supporting a fuller wellbeing experience beyond spa rituals.",
  },
] as const;

const spaFacilities = [
  "Large indoor pool",
  "Steam room",
  "Sauna",
  "Three treatment rooms",
  "Hair salon",
  "Nail salon",
];

const movementFacilities = [
  "Fitness room",
  "Yoga studio",
  "Treadmills",
  "Elliptical machine",
  "Bicycle",
  "Dumbbells",
  "Premium yoga mats",
  "Personal trainer on request",
];

export default function WellnessPage() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <Header />

      <VideoHero
        video={pageMedia.wellness.heroVideo}
        image={pageMedia.wellness.heroImage}
      >
        <div className="max-w-5xl">
          <div className="eyebrow text-white/70">Wellness &amp; Spa</div>

          <h1 className="mt-4 text-[clamp(3.2rem,7vw,6.5rem)] font-light leading-[0.9] tracking-[-0.05em] text-white">
            Quiet luxury,
            <br />
            inward restoration,
            <br />
            elevated wellbeing.
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-white/82 md:text-lg">
            Wellness at Cayo Exclusive Resort &amp; Spa is shaped around
            Armonia Spa, indoor spa facilities, and a broader movement and
            fitness layer designed to restore body and mind.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#wellness-overview" className="cta-button">
              Explore Wellness
            </a>

            <Link
              href="/contact"
              className="outline-button !border-white/35 !text-white"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </VideoHero>

      <section id="wellness-overview" className="py-24 md:py-30">
        <div className="container grid gap-14 md:grid-cols-[1.02fr_0.98fr] md:items-end">
          <div>
            <div className="eyebrow">Wellness Philosophy</div>
            <h2 className="section-title mt-4">
              A sanctuary of calm
              <br />
              within the resort
              <br />
              experience.
            </h2>
          </div>

          <div>
            <p className="section-copy">
              The wellness identity of the resort is centered around Armonia
              Spa, operated by Aegeo Spas, with a clear emphasis on tranquility,
              expert care, and a more restorative luxury rhythm throughout the
              stay.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-30">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-3">
            {wellnessSpaces.map((item) => (
              <article
                key={item.title}
                className="group overflow-hidden rounded-[34px] bg-white transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_70px_rgba(0,0,0,0.08)]"
                style={{ border: "1px solid var(--border)" }}
              >
                <div className="relative h-80 overflow-hidden bg-[#d7d0c5]">
                  <div
                    className="absolute inset-0 transition duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                    style={{
                      backgroundImage: `url(${pageMedia.wellness.cards[item.key]})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/34 via-black/8 to-transparent" />

                  <div className="absolute left-6 top-6">
                    <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-white/90 backdrop-blur-md">
                      {item.subtitle}
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-[2rem] font-light leading-[1.04] tracking-[-0.04em] text-white">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <div className="p-8 md:p-9">
                  <p className="text-[0.98rem] leading-8 text-neutral-500">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-30">
        <div className="container grid gap-12 md:grid-cols-[0.95fr_1.05fr] md:items-center">
          <div className="relative">
            <div
              className="min-h-[38rem] rounded-[38px] bg-[#d7d0c5]"
              style={{
                backgroundImage: `url(${pageMedia.wellness.featureImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            <div className="absolute bottom-6 left-6 rounded-[22px] bg-white/92 px-5 py-4 backdrop-blur-md shadow-[0_14px_40px_rgba(0,0,0,0.08)]">
              <div className="eyebrow">Armonia Spa</div>
              <p className="mt-2 text-sm leading-7 text-neutral-600">
                A more inward layer of the stay, shaped by restoration,
                atmosphere, and refined care.
              </p>
            </div>
          </div>

          <div>
            <div className="eyebrow">Spa Infrastructure</div>
            <h2 className="section-title mt-4">
              Real spa
              <br />
              infrastructure,
              <br />
              clearly presented.
            </h2>

            <p className="section-copy mt-6 max-w-xl">
              Armonia Spa stands as a core wellness pillar of the resort, supported by a complete indoor spa environment.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {spaFacilities.map((item) => (
                <div
                  key={item}
                  className="rounded-[20px] border bg-white px-5 py-5 text-base text-neutral-700"
                  style={{ borderColor: "var(--border)" }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-30">
        <div className="container grid gap-12 md:grid-cols-[1.02fr_0.98fr] md:items-start">
          <div>
            <div className="eyebrow">Fitness &amp; Movement</div>
            <h2 className="section-title mt-4">
              A broader wellbeing
              <br />
              layer beyond
              <br />
              spa rituals.
            </h2>

            <p className="section-copy mt-6 max-w-xl">
              The wider resort directory also points to a movement-oriented
              wellness layer with dedicated fitness and yoga spaces, plus the
              option to request a personal trainer.
            </p>
          </div>

          <div className="grid gap-6">
            <div
              className="rounded-[36px] bg-white p-8 md:p-10"
              style={{ border: "1px solid var(--border)" }}
            >
              <div className="eyebrow">Movement Facilities</div>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {movementFacilities.map((item) => (
                  <div
                    key={item}
                    className="rounded-[18px] border px-4 py-4 text-base text-neutral-700"
                    style={{ borderColor: "var(--border)" }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div
              className="rounded-[36px] bg-white p-8 md:p-10"
              style={{ border: "1px solid var(--border)" }}
            >
              <div className="eyebrow">Operational Notes</div>
              <div className="mt-6 space-y-4 text-base leading-8 text-neutral-700">
                <p>
                  Personal trainer sessions are available on request and should
                  be arranged in advance.
                </p>
                <p>
                  Guests can contact Armonia Spa Reception through the room
                  telephone using the dedicated Health/Spa button.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://cayoresort.reserve-online.net/"
                target="_blank"
                rel="noreferrer"
                className="outline-button"
              >
                Check Availability
              </a>

              <Link href="/contact" className="outline-button">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-24">
        <div className="container overflow-hidden rounded-[40px] bg-[#171717] text-white">
          <div className="grid gap-0 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="px-8 py-12 md:px-12 md:py-14">
              <div className="eyebrow text-white/60">Wellness Perspective</div>
              <h2 className="mt-4 text-[clamp(2.5rem,4.9vw,4.8rem)] font-light leading-[0.96] tracking-[-0.04em]">
                Wellness should feel
                <br />
                like a slower,
                <br />
                more inward layer
                <br />
                of the stay.
              </h2>
            </div>

            <div className="px-8 py-12 md:px-12 md:py-14">
              <p className="max-w-xl text-base leading-8 text-white/72 md:text-lg">
                Across spa rituals, indoor facilities, movement spaces, and
                restorative care, wellness becomes one of the resort’s most
                distinctive expressions of quiet luxury.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="https://cayoresort.reserve-online.net/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-[3.25rem] items-center justify-center rounded-full bg-white px-6 text-sm text-black transition duration-300 hover:opacity-90"
                >
                  Book Your Stay
                </a>

                <Link
                  href="/contact"
                  className="inline-flex min-h-[3.25rem] items-center justify-center rounded-full border border-white/30 bg-transparent px-6 text-sm text-white transition duration-300 hover:bg-white hover:text-black"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}