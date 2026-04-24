import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Link from "next/link";
import VideoHero from "../../components/ui/VideoHero";
import { pageMedia } from "../../data/page-media";
import { bookingLinks } from "../../data/booking";

const facilityCategories = [
  {
    title: "Pools & Outdoor Living",
    items: [
      "3 Outdoor Pools",
      "Sunbeds & relaxation areas",
      "Panoramic outlooks toward Spinalonga",
    ],
    image: "/images/facilities/pools-outdoor-living.jpg",
  },
  {
    title: "Gastronomy",
    items: [
      "5 Restaurants",
      "3 Bars",
      "Stone Beach by Cayo at Plaka",
    ],
    image: "/images/facilities/gastronomy.jpg",
  },
  {
    title: "Wellness & Fitness",
    items: ["Armonia Spa", "Fitness Suite", "Yoga Studio"],
    image: "/images/facilities/wellness-fitness.jpg",
  },
  {
    title: "Events & Public Spaces",
    items: [
      "Conference Center",
      "Open-air Amphitheater",
      "Children’s Play Area",
    ],
    image: "/images/facilities/events-public-spaces.jpg",
  },
  {
    title: "Resort Convenience",
    items: [
      "Elegant Boutique",
      "2 Cable Railways",
      "Private Parking with EV Charging",
    ],
    image: "/images/facilities/resort-convenience.jpg",
  },
] as const;

const facilityHighlights = [
  "Outdoor pools and panoramic outlooks",
  "Restaurants, bars, and beach dining",
  "Wellness, movement, and spa rituals",
  "Events, convenience, and family-friendly spaces",
];

export default function FacilitiesPage() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <Header />

      <VideoHero
        video={pageMedia.resort.heroVideo}
        image={pageMedia.resort.heroImage}
      >
        <div className="max-w-5xl">
          <div className="eyebrow text-white/70">Facilities</div>

          <h1 className="mt-4 text-[clamp(3rem,7vw,6.2rem)] font-light leading-[0.9] tracking-[-0.05em] text-white">
            A complete
            <br />
            resort ecosystem.
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-white/82 md:text-lg">
            Every aspect of Cayo Exclusive Resort &amp; Spa is designed to
            create a layered destination experience, from pools and gastronomy
            to wellness, events, and beach access.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#facilities-overview" className="cta-button">
              Explore Facilities
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

      <section id="facilities-overview" className="py-24 md:py-30">
        <div className="container grid gap-14 md:grid-cols-[1.02fr_0.98fr] md:items-end">
          <div>
            <div className="eyebrow">Facilities Overview</div>
            <h2 className="section-title mt-4">
              The infrastructure
              <br />
              that shapes the
              <br />
              resort experience.
            </h2>
          </div>

          <div>
            <p className="section-copy">
              The facilities layer brings together outdoor living, gastronomy,
              wellness, event capability, family-friendly spaces, and practical
              resort convenience into one integrated hospitality environment.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {facilityHighlights.map((item) => (
                <div
                  key={item}
                  className="rounded-full border px-5 py-3 text-sm text-neutral-700"
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
        <div className="container grid gap-6 md:grid-cols-2">
          {facilityCategories.map((category) => (
            <article
              key={category.title}
              className="group overflow-hidden rounded-[34px] bg-white transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_70px_rgba(0,0,0,0.08)]"
              style={{ border: "1px solid var(--border)" }}
            >
              <div className="relative h-[18rem] overflow-hidden bg-[#d8d1c6]">
                <div
                  className="absolute inset-0 transition duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                  style={{
                    backgroundImage: `url(${category.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/34 via-black/8 to-transparent" />

                <div className="absolute left-6 top-6">
                  <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-white/90 backdrop-blur-md">
                    Facilities
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-[2rem] font-light leading-[1.04] tracking-[-0.04em] text-white">
                    {category.title}
                  </h3>
                </div>
              </div>

              <div className="p-8 md:p-9">
                <div className="grid gap-4">
                  {category.items.map((item) => (
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
            </article>
          ))}
        </div>
      </section>

      <section className="pb-24 md:pb-30">
        <div className="container grid gap-12 md:grid-cols-[0.95fr_1.05fr] md:items-center">
          <div className="relative">
            <div
              className="min-h-[38rem] rounded-[38px] bg-[#cec6ba]"
              style={{
                backgroundImage: "url('/images/facilities/beach-plaka.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            <div className="absolute bottom-6 left-6 rounded-[22px] bg-white/92 px-5 py-4 backdrop-blur-md shadow-[0_14px_40px_rgba(0,0,0,0.08)]">
              <div className="eyebrow">Beach of Plaka</div>
              <p className="mt-2 text-sm leading-7 text-neutral-600">
                A sea-connected extension of the resort experience, shaped by
                relaxation, dining, and uninterrupted views.
              </p>
            </div>
          </div>

          <div>
            <div className="eyebrow">Beach of Plaka</div>
            <h2 className="section-title mt-4">
              The sea becomes
              <br />
              part of the
              <br />
              daily resort rhythm.
            </h2>

            <p className="section-copy mt-6 max-w-2xl">
              Guests also have access to Cayo’s spot on the beach of Plaka,
              where Stone Beach by Cayo connects relaxation, drinks, dining,
              and uninterrupted views toward Spinalonga.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/dining" className="outline-button">
                Explore Gastronomy
              </Link>

              <Link href="/experiences" className="outline-button">
                Explore Activities
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-24">
        <div className="container overflow-hidden rounded-[40px] bg-[#171717] text-white">
          <div className="grid gap-0 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="px-8 py-12 md:px-12 md:py-14">
              <div className="eyebrow text-white/60">Stay Experience</div>
              <h2 className="mt-4 text-[clamp(2.5rem,4.9vw,4.8rem)] font-light leading-[0.96] tracking-[-0.04em]">
                More than a stay,
                <br />
                a fully layered
                <br />
                resort destination.
              </h2>
            </div>

            <div className="px-8 py-12 md:px-12 md:py-14">
              <p className="max-w-xl text-base leading-8 text-white/72 md:text-lg">
                The facilities of Cayo Exclusive Resort &amp; Spa support the
                entire guest journey, from arrival and relaxation to dining,
                wellness, event hosting, and destination discovery.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href={bookingLinks.general}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-[3.25rem] items-center justify-center rounded-full bg-white px-6 text-sm text-black transition duration-300 hover:opacity-90"
                >
                  Check Availability
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