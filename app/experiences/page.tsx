import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Link from "next/link";
import VideoHero from "../../components/ui/VideoHero";
import { pageMedia } from "../../data/page-media";
import { bookingLinks } from "../../data/booking";

const experiencePillars = [
  {
    key: "seaWatersports",
    title: "Sea & Watersports",
    subtitle: "Activities",
    description:
      "The public resort activity narrative includes wakeboarding, diving, and a broader world of watersports for guests who want the sea to become part of the stay experience.",
  },
  {
    key: "boatExcursions",
    title: "Boat Excursions & Hidden Gems",
    subtitle: "Experiences",
    description:
      "Guests are invited to discover the area by sea, from private boat moments to excursions toward hidden gems, secluded coves, and the wider coastline around Plaka and Elounda.",
  },
  {
    key: "natureDiscovery",
    title: "Nature, Culture & Discovery",
    subtitle: "Attractions",
    description:
      "The wider destination narrative also includes scenic hiking trails, cycling paths, climbing locations, old villages, historic monasteries, and archaeological sites.",
  },
] as const;

const activityHighlights = [
  "Visit to Spinalonga Island",
  "Private boat cruise",
  "Caique cruise",
  "Cretan wine tasting",
  "Olive oil tasting",
  "Cretan cheese making experience",
  "Cretan cooking experience",
  "Botanical exploration of Crete",
  "Rakokazano tradition",
  "Scenic hiking trails",
  "Cycling routes",
  "Historic monasteries & villages",
];

export default function ExperiencesPage() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <Header />

      <VideoHero
        video={pageMedia.experiences.heroVideo}
        image={pageMedia.experiences.heroImage}
      >
        <div className="max-w-5xl">
          <div className="eyebrow text-white/70">Activities</div>

          <h1 className="mt-4 text-[clamp(3.2rem,7vw,6.5rem)] font-light leading-[0.9] tracking-[-0.05em] text-white">
            Experiences shaped
            <br />
            by sea, landscape,
            <br />
            and discovery.
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-white/82 md:text-lg">
            The destination experience extends far beyond the resort itself,
            from watersports and cultural discovery to boat excursions and
            direct experiences connected to the island of Spinalonga.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#destination-layer" className="cta-button">
              Explore Experiences
            </a>

            <Link
              href="/the-resort"
              className="outline-button !border-white/35 !text-white"
            >
              Explore the Resort
            </Link>
          </div>
        </div>
      </VideoHero>

      <section id="destination-layer" className="py-24 md:py-30">
        <div className="container grid gap-14 md:grid-cols-[1.02fr_0.98fr] md:items-end">
          <div>
            <div className="eyebrow">Destination Layer</div>
            <h2 className="section-title mt-4">
              A stay experience
              <br />
              that extends far
              <br />
              beyond the room.
            </h2>
          </div>

          <div>
            <p className="section-copy">
              The destination narrative of the resort moves across sea,
              excursions, local culture, and natural discovery, giving the stay
              a broader sense of place, movement, and connection to Crete.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-30">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-3">
            {experiencePillars.map((item) => (
              <article
                key={item.title}
                className="group overflow-hidden rounded-[34px] bg-white transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_70px_rgba(0,0,0,0.08)]"
                style={{ border: "1px solid var(--border)" }}
              >
                <div className="relative h-80 overflow-hidden bg-[#d8d1c7]">
                  <div
                    className="absolute inset-0 transition duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                    style={{
                      backgroundImage: `url(${pageMedia.experiences.cards[item.key]})`,
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
              className="min-h-[38rem] rounded-[38px] bg-[#cec6ba]"
              style={{
                backgroundImage: `url(${pageMedia.experiences.featureImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            <div className="absolute bottom-6 left-6 rounded-[22px] bg-white/92 px-5 py-4 backdrop-blur-md shadow-[0_14px_40px_rgba(0,0,0,0.08)]">
              <div className="eyebrow">Guest Discovery</div>
              <p className="mt-2 text-sm leading-7 text-neutral-600">
                Sea adventures, local traditions, and cultural moments that
                expand the rhythm of the stay.
              </p>
            </div>
          </div>

          <div>
            <div className="eyebrow">What Guests Can Explore</div>
            <h2 className="section-title mt-4">
              Sea adventures,
              <br />
              local traditions,
              <br />
              and cultural discovery.
            </h2>

            <p className="section-copy mt-6 max-w-xl">
              The resort activity layer goes beyond generic excursions. It
              includes direct experiences connected to Spinalonga, sea
              discovery, local produce, food culture, and traditional Cretan
              life.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {activityHighlights.map((item) => (
                <div
                  key={item}
                  className="rounded-[20px] border bg-white px-5 py-5 text-base text-neutral-700"
                  style={{ borderColor: "var(--border)" }}
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-8">
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
              <div className="eyebrow text-white/60">Spinalonga</div>
              <h2 className="mt-4 text-[clamp(2.5rem,4.9vw,4.8rem)] font-light leading-[0.96] tracking-[-0.04em]">
                One of the most
                <br />
                powerful destination
                <br />
                anchors of the stay.
              </h2>
            </div>

            <div className="px-8 py-12 md:px-12 md:py-14">
              <p className="max-w-xl text-base leading-8 text-white/72 md:text-lg">
                Spinalonga is not simply part of the view. It is one of the most
                defining elements of the destination experience, connecting
                accommodation outlooks, gastronomy, excursions, and the wider
                emotional identity of the resort.
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
                  href="/the-resort"
                  className="inline-flex min-h-[3.25rem] items-center justify-center rounded-full border border-white/30 bg-transparent px-6 text-sm text-white transition duration-300 hover:bg-white hover:text-black"
                >
                  Explore the Resort
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