import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Link from "next/link";
import VideoHero from "../../components/ui/VideoHero";
import { bookingLinks } from "../../data/booking";

const resortPillars = [
  {
    title: "Architecture & Design",
    description:
      "An eco-friendly terraced design that blends into the landscape, paired with interiors shaped by a more expressive design language.",
    image: "/images/resort/card-architecture.jpg",
    href: "#design-story",
  },
  {
    title: "Prestigious Facilities",
    description:
      "Infinity pools, gastronomy, rejuvenating wellness spaces, fitness, and layered resort amenities define the public identity of the property.",
    image: "/images/resort/card-facilities.jpg",
    href: "/facilities",
  },
  {
    title: "Life the Cayo Way",
    description:
      "A stay experience shaped by privacy, destination, gastronomy, wellness, and a refined connection to the landscape.",
    image: "/images/resort/card-cayo-way.jpg",
    href: "#cayo-way",
  },
];

const resortExperienceItems = [
  "Elounda setting with views to Spinalonga",
  "Eco-friendly terraced architecture",
  "Warm Cretan hospitality",
  "Luxury shaped by privacy and atmosphere",
];

export default function ResortPage() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <Header />

      <VideoHero
        video="/videos/resort/hero.mp4"
        image="/images/resort/hero.jpg"
      >
        <div className="max-w-5xl">
          <div className="eyebrow text-white/70">Explore the Resort</div>

          <h1 className="mt-4 text-[clamp(3.2rem,7vw,6.6rem)] font-light leading-[0.9] tracking-[-0.05em] text-white">
            A warm welcome
            <br />
            to refined Cretan
            <br />
            hospitality.
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-white/82 md:text-lg">
            Set above Elounda with commanding views toward Spinalonga, Cayo
            Exclusive Resort &amp; Spa is conceived as an elegant world of
            privacy, atmosphere, architecture, and elevated resort living.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#overview" className="cta-button">
              Explore the Resort
            </a>

            <Link
              href="/accommodation"
              className="outline-button !border-white/35 !text-white"
            >
              View Accommodation
            </Link>
          </div>
        </div>
      </VideoHero>

      <section id="overview" className="py-24 md:py-30">
        <div className="container grid gap-14 md:grid-cols-[1.02fr_0.98fr] md:items-end">
          <div>
            <div className="eyebrow">Overview</div>
            <h2 className="section-title mt-4">
              A resort identity built
              <br />
              around elegance,
              <br />
              privacy, and place.
            </h2>
          </div>

          <div>
            <p className="section-copy">
              Explore the Resort is where the broader identity of the property
              becomes clear before the guest even chooses a room. It brings
              together destination, architecture, hospitality, and atmosphere
              into one coherent luxury narrative.
            </p>

            <div className="mt-8">
              <a href="#pillars" className="outline-button">
                Discover the Resort Experience
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="design-story" className="pb-24 md:pb-30">
        <div className="container grid gap-12 md:grid-cols-[0.95fr_1.05fr] md:items-center">
          <div className="relative">
            <div
              className="min-h-[36rem] rounded-[38px] bg-[#cfc7ba]"
              style={{
                backgroundImage: "url('/images/resort/designer.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            <div className="absolute bottom-6 left-6 rounded-[22px] bg-white/92 px-5 py-4 backdrop-blur-md shadow-[0_14px_40px_rgba(0,0,0,0.08)]">
              <div className="eyebrow">Creative Direction</div>
              <p className="mt-2 text-sm leading-7 text-neutral-600">
                Contemporary refinement shaped through materiality, proportion,
                and a stronger connection to landscape and light.
              </p>
            </div>
          </div>

          <div>
            <div className="eyebrow">Design &amp; Architecture</div>
            <h2 className="section-title mt-4">
              Designed by
              <br />
              Gian Paolo
              <br />
              Venier.
            </h2>

            <p className="section-copy mt-6 max-w-xl">
              The resort’s architectural and interior design direction has been
              shaped by Italian designer Gian Paolo Venier, blending
              contemporary aesthetics with Greek and Cretan influences into a
              cohesive luxury environment.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/facilities" className="outline-button">
                Explore Architecture &amp; Facilities
              </Link>

              <Link href="/accommodation" className="outline-button">
                View Accommodation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="pillars" className="pb-24 md:pb-30">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-3">
            {resortPillars.map((item) => {
              const isAnchor = item.href.startsWith("#");

              const cardContent = (
                <article
                  className="group overflow-hidden rounded-[34px] bg-white transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_70px_rgba(0,0,0,0.08)]"
                  style={{ border: "1px solid var(--border)" }}
                >
                  <div className="relative h-80 overflow-hidden bg-[#d8d1c6]">
                    <div
                      className="absolute inset-0 transition duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                      style={{
                        backgroundImage: `url(${item.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/34 via-black/8 to-transparent" />

                    <div className="absolute left-6 top-6">
                      <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-white/90 backdrop-blur-md">
                        Resort Pillar
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

                    <div className="mt-8 inline-flex items-center gap-2 text-sm text-black/72 transition duration-300 group-hover:translate-x-1 group-hover:text-black">
                      Explore <span aria-hidden="true">→</span>
                    </div>
                  </div>
                </article>
              );

              if (isAnchor) {
                return (
                  <a key={item.title} href={item.href} className="block">
                    {cardContent}
                  </a>
                );
              }

              return (
                <Link key={item.title} href={item.href} className="block">
                  {cardContent}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-30">
        <div className="container grid gap-12 md:grid-cols-[0.95fr_1.05fr] md:items-center">
          <div
            className="min-h-[38rem] rounded-[38px] bg-[#cfc7ba]"
            style={{
              backgroundImage: "url('/images/resort/feature.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <div>
            <div className="eyebrow">Architecture &amp; Design</div>
            <h2 className="section-title mt-4">
              Contemporary design
              <br />
              shaped by the land
              <br />
              and the light.
            </h2>

            <p className="section-copy mt-6 max-w-xl">
              The architectural story is one of terraced integration, strong
              outlooks, and a design language that bridges contemporary
              refinement with Greek and Cretan references.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div
                className="rounded-full border px-5 py-3 text-sm text-neutral-700"
                style={{ borderColor: "var(--border)" }}
              >
                Terraced resort architecture
              </div>
              <div
                className="rounded-full border px-5 py-3 text-sm text-neutral-700"
                style={{ borderColor: "var(--border)" }}
              >
                Sea-facing orientation
              </div>
              <div
                className="rounded-full border px-5 py-3 text-sm text-neutral-700"
                style={{ borderColor: "var(--border)" }}
              >
                Greek &amp; Cretan references
              </div>
              <div
                className="rounded-full border px-5 py-3 text-sm text-neutral-700"
                style={{ borderColor: "var(--border)" }}
              >
                Contemporary interior language
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/wellness" className="outline-button">
                Explore Wellness
              </Link>

              <Link href="/experiences" className="outline-button">
                Explore Activities
              </Link>

              <Link href="/accommodation/rooms" className="outline-button">
                View Rooms
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="cayo-way" className="pb-20 md:pb-24">
        <div className="container overflow-hidden rounded-[40px] bg-[#171717] text-white">
          <div className="grid gap-0 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="px-8 py-12 md:px-12 md:py-14">
              <div className="eyebrow text-white/60">Life the Cayo Way</div>
              <h2 className="mt-4 text-[clamp(2.5rem,4.9vw,4.8rem)] font-light leading-[0.96] tracking-[-0.04em]">
                A resort
                <br />
                experience
                <br />
                defined by detail,
                <br />
                rhythm, and view.
              </h2>
            </div>

            <div className="px-8 py-12 md:px-12 md:py-14">
              <div className="space-y-5">
                {resortExperienceItems.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center justify-between border-b pb-5"
                    style={{ borderColor: "rgba(255,255,255,0.12)" }}
                  >
                    <span className="text-lg font-light">{item}</span>
                    <span className="text-sm text-white/40">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                ))}
              </div>

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