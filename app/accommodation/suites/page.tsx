import Header from "../../../components/layout/Header";
import Footer from "../../../components/layout/Footer";
import Link from "next/link";
import VideoHero from "../../../components/ui/VideoHero";
import { suites } from "../../../data/suites";
import { bookingLinks } from "../../../data/booking";

export default function SuitesPage() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <Header />

      <VideoHero
        video="/videos/suites/hero.mp4"
        image="/images/suites/hero.jpg"
      >
        <div className="max-w-5xl">
          <div className="eyebrow text-white/70">Accommodation / Suites</div>

          <h1 className="mt-4 text-[clamp(3rem,7vw,6.2rem)] font-light leading-[0.9] tracking-[-0.05em] text-white">
            Suites defined
            <br />
            by space,
            <br />
            privacy, and view.
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-white/82 md:text-lg">
            A more elevated collection shaped by private pools, larger spatial
            flow, and a stronger sense of exclusivity across the resort.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#suites-collection" className="cta-button">
              Explore Suites
            </a>

            <Link
              href="/accommodation"
              className="outline-button !border-white/35 !text-white"
            >
              Back to Accommodation
            </Link>
          </div>
        </div>
      </VideoHero>

      <section className="py-24 md:py-30">
        <div className="container grid gap-12 md:grid-cols-[1.02fr_0.98fr] md:items-end">
          <div>
            <div className="eyebrow">Suites Collection</div>
            <h2 className="section-title mt-4">
              Three suite
              <br />
              categories,
              <br />
              positioned at a
              <br />
              higher level.
            </h2>
          </div>

          <div>
            <p className="section-copy max-w-md">
              Suites introduce a more expansive spatial experience, combining
              privacy, outdoor living, and premium architectural positioning
              within the resort.
            </p>
          </div>
        </div>
      </section>

      <section id="suites-collection" className="pb-24 md:pb-30">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {suites.map((suite) => (
              <Link
                key={suite.slug}
                href={`/accommodation/suites/${suite.slug}`}
                className="group block"
              >
                <article
                  className="flex h-full flex-col overflow-hidden rounded-[34px] bg-white transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_70px_rgba(0,0,0,0.08)]"
                  style={{ border: "1px solid var(--border)" }}
                >
                  {/* IMAGE */}
                  <div className="relative h-[20rem] overflow-hidden bg-[#d7d0c5]">
                    <div
                      className="absolute inset-0 transition duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                      style={{
                        backgroundImage: `url(/images/suites/${suite.slug}/listing.jpg)`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/34 via-black/8 to-transparent" />

                    <div className="absolute left-6 top-6">
                      <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-white/90 backdrop-blur-md">
                        Suite Collection
                      </span>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-[1.9rem] font-light leading-[1.05] tracking-[-0.04em] text-white">
                        {suite.title}
                      </h3>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="flex flex-1 flex-col p-7 md:p-8">
                    <p className="text-[0.98rem] leading-8 text-neutral-500">
                      {suite.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {suite.view ? (
                        <span
                          className="rounded-full border px-3 py-2 text-[11px] uppercase tracking-[0.14em] text-neutral-600"
                          style={{ borderColor: "var(--border)" }}
                        >
                          {suite.view}
                        </span>
                      ) : null}

                      {suite.outdoorSpace ? (
                        <span
                          className="rounded-full border px-3 py-2 text-[11px] uppercase tracking-[0.14em] text-neutral-600"
                          style={{ borderColor: "var(--border)" }}
                        >
                          {suite.outdoorSpace}
                        </span>
                      ) : null}

                      {suite.poolSize ? (
                        <span
                          className="rounded-full border px-3 py-2 text-[11px] uppercase tracking-[0.14em] text-neutral-600"
                          style={{ borderColor: "var(--border)" }}
                        >
                          Private Pool
                        </span>
                      ) : null}
                    </div>

                    <div className="mt-8 inline-flex items-center gap-2 text-sm text-black/72 transition duration-300 group-hover:translate-x-1 group-hover:text-black">
                      View Suite <span aria-hidden="true">→</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-24">
        <div
          className="container rounded-[40px] bg-white px-8 py-14 md:px-12 md:py-16"
          style={{ border: "1px solid var(--border)" }}
        >
          <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <div className="eyebrow">Next Step</div>
              <h2 className="section-title mt-4">
                Suites move the
                <br />
                experience into a
                <br />
                more private level.
              </h2>

              <p className="section-copy mt-6">
                Move deeper into each suite, explore layouts and features, and
                transition seamlessly into availability and booking.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/accommodation" className="outline-button">
                Back to Accommodation
              </Link>

              <Link href="/accommodation/rooms" className="outline-button">
                Explore Rooms
              </Link>

              <a
                href={bookingLinks.general}
                target="_blank"
                rel="noreferrer"
                className="cta-button"
              >
                Check Availability
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}