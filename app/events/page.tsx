import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Link from "next/link";
import VideoHero from "../../components/ui/VideoHero";
import { bookingLinks } from "../../data/booking";

const eventSpaces = [
  {
    title: "Weddings & Ceremonies",
    subtitle: "Celebrations",
    description:
      "Elegant celebrations shaped by setting, view, atmosphere, and a stronger sense of occasion.",
    href: "/weddings",
    image: "/images/events/events-1.jpg",
  },
  {
    title: "Conference Facilities",
    subtitle: "Business Events",
    description:
      "Professional events and meetings framed within a more refined hospitality experience.",
    href: "/conference",
    image: "/images/events/events-2.jpg",
  },
] as const;

const eventHighlights = [
  "Wedding ceremonies with panoramic views",
  "Private celebrations and meaningful gatherings",
  "Conference and meeting facilities",
  "Resort hospitality with elevated service tone",
];

export default function EventsPage() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <Header />

      <VideoHero
        video="/videos/events/events-hero.mp4"
        image="/images/events/events-hero.jpg"
      >
        <div className="max-w-5xl">
          <div className="eyebrow text-white/70">Events</div>

          <h1 className="mt-4 text-[clamp(3rem,7vw,6.4rem)] font-light leading-[0.9] tracking-[-0.05em] text-white">
            Celebrations,
            <br />
            gatherings, and
            <br />
            meaningful moments.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/80 md:text-lg">
            The events dimension of Cayo brings together weddings, ceremonies,
            and conference facilities within a hospitality setting shaped by
            atmosphere, view, and refined service.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#events-overview" className="cta-button">
              Explore Events
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

      <section id="events-overview" className="py-24 md:py-30">
        <div className="container grid gap-14 md:grid-cols-[1.02fr_0.98fr] md:items-end">
          <div>
            <div className="eyebrow">Overview</div>
            <h2 className="section-title mt-4">
              Event hospitality
              <br />
              framed through
              <br />
              premium resort
              <br />
              identity.
            </h2>
          </div>

          <div>
            <p className="section-copy">
              Weddings, ceremonies, and conference facilities are presented here
              as part of a broader resort environment where service, setting,
              and atmosphere shape every gathering more elegantly.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {eventHighlights.map((item) => (
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
          {eventSpaces.map((item) => (
            <Link key={item.title} href={item.href} className="group block">
              <article
                className="overflow-hidden rounded-[34px] bg-white transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_70px_rgba(0,0,0,0.08)]"
                style={{ border: "1px solid var(--border)" }}
              >
                <div className="relative h-96 overflow-hidden bg-[#d8d1c6]">
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

                  <div className="mt-8 inline-flex items-center gap-2 text-sm text-black/72 transition duration-300 group-hover:translate-x-1 group-hover:text-black">
                    Explore <span aria-hidden="true">→</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      <section className="pb-24 md:pb-30">
        <div className="container grid gap-12 md:grid-cols-[0.95fr_1.05fr] md:items-center">
          <div className="relative">
            <div
              className="min-h-[38rem] rounded-[38px] bg-[#cec6ba]"
              style={{
                backgroundImage: "url('/images/events/events-feature.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            <div className="absolute bottom-6 left-6 rounded-[22px] bg-white/92 px-5 py-4 backdrop-blur-md shadow-[0_14px_40px_rgba(0,0,0,0.08)]">
              <div className="eyebrow">Occasion & Setting</div>
              <p className="mt-2 text-sm leading-7 text-neutral-600">
                A destination backdrop that supports both private celebration
                and professional gathering with equal refinement.
              </p>
            </div>
          </div>

          <div>
            <div className="eyebrow">Event Experience</div>
            <h2 className="section-title mt-4">
              The setting
              <br />
              becomes part of
              <br />
              the occasion itself.
            </h2>

            <p className="section-copy mt-6 max-w-xl">
              Whether the moment is personal or professional, the wider resort
              environment adds atmosphere, view, hospitality, and a stronger
              sense of arrival to the experience.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/weddings" className="outline-button">
                Explore Weddings
              </Link>

              <Link href="/conference" className="outline-button">
                Explore Conference Facilities
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-24">
        <div className="container overflow-hidden rounded-[40px] bg-[#171717] text-white">
          <div className="grid gap-0 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="px-8 py-12 md:px-12 md:py-14">
              <div className="eyebrow text-white/60">Event Perspective</div>
              <h2 className="mt-4 text-[clamp(2.5rem,4.9vw,4.8rem)] font-light leading-[0.96] tracking-[-0.04em]">
                Events should feel
                <br />
                like a natural
                <br />
                extension of the
                <br />
                resort story.
              </h2>
            </div>

            <div className="px-8 py-12 md:px-12 md:py-14">
              <p className="max-w-xl text-base leading-8 text-white/72 md:text-lg">
                Through weddings, celebrations, and professional gatherings,
                Cayo offers an event layer shaped by view, atmosphere, and the
                same elevated hospitality language that defines the stay.
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