import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Link from "next/link";
import VideoHero from "../../components/ui/VideoHero";
import { pageMedia } from "../../data/page-media";
import { bookingLinks } from "../../data/booking";

const diningVenues = [
  {
    key: "ambrosia",
    title: "Ambrosia",
    subtitle: "Main Buffet Restaurant",
    description:
      "Cayo’s main buffet restaurant, shaping the breakfast and half-board dining rhythm of the stay experience.",
    hours: [
      "Breakfast on buffet basis: 07:30 – 10:30",
      "Dinner (Half board) on buffet basis: 18:30 – 21:30",
    ],
  },
  {
    key: "sageThyme",
    title: "Sage & Thyme",
    subtitle: "Mediterranean Restaurant",
    description:
      "An elegant poolside dining setting offering snacks, à la carte lunch, and Mediterranean flavors with views toward Spinalonga.",
    hours: [
      "Lunch & Snack: 11:00 – 16:30",
      "Dinner: 19:00 – 22:30",
    ],
  },
  {
    key: "kelari",
    title: "Kelari Gourmet Restaurant",
    subtitle: "Fine Dining",
    description:
      "A refined fine-dining setting where Michelin-starred Chef Lefteris Lazarou presents innovative interpretations of timeless Greek and Cretan recipes.",
    hours: ["Dinner à la carte: 19:30 – 22:00"],
  },
  {
    key: "stoneBeach",
    title: "Stone Beach by Cayo",
    subtitle: "Beachfront Dining & Drinks",
    description:
      "A few steps from Cayo’s beach spot in Plaka, combining drinks, refreshments, and dining with a direct view to the village and Spinalonga.",
    hours: [
      "Lunch & Snack: 11:00 – 16:30",
      "Dinner: 19:00 – 22:30",
    ],
  },
  {
    key: "filema",
    title: "Filema",
    subtitle: "Event & Culinary Experience Space",
    description:
      "A newer addition overlooking a communal pool, used for local-flavor culinary events, theme nights, wedding ceremonies, and corporate events.",
    hours: ["Greek Night: 18:30 – 21:30"],
  },
  {
    key: "emeraldBar",
    title: "Emerald Bar",
    subtitle: "Lobby Bar",
    description:
      "Cayo’s lobby bar with sweeping views across Spinalonga and a broad beverage selection including cocktails, beers, and premium wines.",
    hours: ["Opening hours: 11:00 – 23:00"],
  },
  {
    key: "enastronBar",
    title: "Enastron Bar",
    subtitle: "Poolside Bar",
    description:
      "Adjacent to the communal pools, with a relaxed ambiance, wide beverage offering, and views that support the resort’s slower rhythm.",
    hours: ["Opening hours: 11:00 – 18:00"],
  },
  {
    key: "avraBar",
    title: "Avra Bar",
    subtitle: "Bar Experience",
    description:
      "A newer bar concept with an inviting atmosphere, mixed cocktails, wines, and a more relaxed social layer within the resort experience.",
    hours: ["Opening hours: 11:00 – 18:00"],
  },
] as const;

const signatureHighlights = [
  "Mediterranean dining with panoramic views",
  "Michelin-led culinary direction",
  "Beachfront and poolside moments",
  "Restaurants, bars, and event dining settings",
];

export default function DiningPage() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <Header />

      <VideoHero
        video={pageMedia.dining.heroVideo}
        image={pageMedia.dining.heroImage}
      >
        <div className="max-w-5xl">
          <div className="eyebrow text-white/70">Dining</div>

          <h1 className="mt-4 text-[clamp(3rem,7vw,6.4rem)] font-light leading-[0.9] tracking-[-0.05em] text-white">
            Dining to a
            <br />
            breathtaking view.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/80 md:text-lg">
            The culinary identity of Cayo Exclusive Resort &amp; Spa combines
            buffet dining, Mediterranean restaurant experiences, fine dining,
            beachfront moments, and a fuller bar culture across the resort.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#venues" className="cta-button">
              Explore Dining
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

      <section className="py-24 md:py-30">
        <div className="container grid gap-14 md:grid-cols-[1.02fr_0.98fr] md:items-end">
          <div>
            <div className="eyebrow">Culinary Identity</div>
            <h2 className="section-title mt-4">
              Gastronomy shaped
              <br />
              by atmosphere,
              <br />
              setting, and
              <br />
              Greek creativity.
            </h2>
          </div>

          <div>
            <p className="section-copy">
              Dining stands as one of the defining pillars of the stay, moving
              from buffet breakfast and half-board service to Michelin-led fine
              dining, poolside lunches, beachfront moments, and a fuller bar
              culture across the resort.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {signatureHighlights.map((item) => (
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
        <div className="container grid gap-12 md:grid-cols-[0.95fr_1.05fr] md:items-center">
          <div className="relative">
            <div
              className="min-h-[36rem] rounded-[38px] bg-[#cfc7ba]"
              style={{
                backgroundImage: `url(${pageMedia.dining.featureImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            <div className="absolute bottom-6 left-6 rounded-[22px] bg-white/92 px-5 py-4 backdrop-blur-md shadow-[0_14px_40px_rgba(0,0,0,0.08)]">
              <div className="eyebrow">Signature Positioning</div>
              <p className="mt-2 text-sm leading-7 text-neutral-600">
                A dining story that moves between destination atmosphere,
                Mediterranean refinement, and a stronger gastronomic identity.
              </p>
            </div>
          </div>

          <div>
            <div className="eyebrow">Culinary Direction</div>
            <h2 className="section-title mt-4">
              Led by the
              <br />
              gastronomic direction
              <br />
              of Lefteris Lazarou.
            </h2>

            <p className="section-copy mt-6 max-w-xl">
              Cayo’s public dining narrative ties the resort’s culinary
              experience to Michelin-starred Chef Lefteris Lazarou, positioning
              gastronomy as one of the strongest luxury layers of the property.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
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

      <section id="venues" className="pb-24 md:pb-30">
        <div className="container">
          <div className="mb-12 grid gap-10 md:grid-cols-[1fr_1fr] md:items-end">
            <div>
              <div className="eyebrow">Dining Venues</div>
              <h2 className="section-title mt-4">
                Restaurants, bars,
                <br />
                and culinary settings
                <br />
                across the resort.
              </h2>
            </div>

            <div>
              <p className="section-copy max-w-xl">
                Each venue introduces its own rhythm, from relaxed daytime
                dining to beachfront moments, fine dining evenings, and bar
                experiences shaped by view and atmosphere.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {diningVenues.map((venue) => (
              <article
                key={venue.title}
                className="group overflow-hidden rounded-[34px] bg-white transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_70px_rgba(0,0,0,0.08)]"
                style={{ border: "1px solid var(--border)" }}
              >
                <div className="relative h-80 overflow-hidden bg-[#d8d1c6]">
                  <div
                    className="absolute inset-0 transition duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                    style={{
                      backgroundImage: `url(${pageMedia.dining.venues[venue.key]})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/34 via-black/8 to-transparent" />

                  <div className="absolute left-6 top-6">
                    <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-white/90 backdrop-blur-md">
                      {venue.subtitle}
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-[2rem] font-light leading-[1.04] tracking-[-0.04em] text-white">
                      {venue.title}
                    </h3>
                  </div>
                </div>

                <div className="p-8 md:p-9">
                  <p className="text-[0.98rem] leading-8 text-neutral-500">
                    {venue.description}
                  </p>

                  <div className="mt-6 space-y-2 text-sm leading-7 text-neutral-600">
                    {venue.hours.map((line) => (
                      <div key={line}>{line}</div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-24">
        <div className="container overflow-hidden rounded-[40px] bg-[#171717] text-white">
          <div className="grid gap-0 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="px-8 py-12 md:px-12 md:py-14">
              <div className="eyebrow text-white/60">Dining Perspective</div>
              <h2 className="mt-4 text-[clamp(2.5rem,4.9vw,4.8rem)] font-light leading-[0.96] tracking-[-0.04em]">
                Dining should feel
                <br />
                like a defining part
                <br />
                of the resort story.
              </h2>
            </div>

            <div className="px-8 py-12 md:px-12 md:py-14">
              <p className="max-w-xl text-base leading-8 text-white/72 md:text-lg">
                Across buffet dining, Mediterranean menus, Michelin-led
                fine dining, bars, and event-oriented culinary spaces,
                gastronomy becomes one of the strongest experiential layers
                of the stay.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href={bookingLinks.general}
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