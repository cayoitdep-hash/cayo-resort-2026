import Header from "../../../components/layout/Header";
import Footer from "../../../components/layout/Footer";
import Link from "next/link";
import VideoHero from "../../../components/ui/VideoHero";
import { rooms } from "../../../data/rooms";
import { bookingLinks } from "../../../data/booking";

export default function RoomsPage() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <Header />

      <VideoHero
        video="/videos/rooms/hero.mp4"
        image="/images/rooms/hero.jpg"
      >
        <div className="max-w-5xl">
          <div className="eyebrow text-white/70">Accommodation / Rooms</div>

          <h1 className="mt-4 text-[clamp(3rem,7vw,6.2rem)] font-light leading-[0.9] tracking-[-0.05em] text-white">
            Rooms designed
            <br />
            for effortless,
            <br />
            elevated stays.
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-white/82 md:text-lg">
            The room collection reflects the real public structure of the
            resort, reorganised into a cleaner and more premium browsing
            experience.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#rooms-collection" className="cta-button">
              Explore Rooms
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
            <div className="eyebrow">Rooms Collection</div>
            <h2 className="section-title mt-4">
              Eight room
              <br />
              categories,
              <br />
              each with clearer
              <br />
              visual hierarchy.
            </h2>
          </div>

          <div>
            <p className="section-copy max-w-md">
              From sea-view rooms to private-pool family formats, the
              collection is structured for faster browsing, clearer
              differentiation, and a more premium transition into each room
              experience.
            </p>
          </div>
        </div>
      </section>

      <section id="rooms-collection" className="pb-24 md:pb-30">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {rooms.map((room) => (
              <Link
                key={room.slug}
                href={`/accommodation/rooms/${room.slug}`}
                className="group block"
              >
                <article
                  className="flex h-full flex-col overflow-hidden rounded-[34px] bg-white transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_70px_rgba(0,0,0,0.08)]"
                  style={{ border: "1px solid var(--border)" }}
                >
                  <div className="relative h-[20rem] overflow-hidden bg-[#d8d1c6]">
                    <div
                      className="absolute inset-0 transition duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                      style={{
                        backgroundImage: `url(/images/rooms/${room.slug}/listing.jpg)`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/34 via-black/8 to-transparent" />

                    <div className="absolute left-6 top-6">
                      <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-white/90 backdrop-blur-md">
                        Room Type
                      </span>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-[1.9rem] font-light leading-[1.05] tracking-[-0.04em] text-white">
                        {room.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-7 md:p-8">
                    <p className="text-[0.98rem] leading-8 text-neutral-500">
                      {room.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {room.view ? (
                        <span
                          className="rounded-full border px-3 py-2 text-[11px] uppercase tracking-[0.14em] text-neutral-600"
                          style={{ borderColor: "var(--border)" }}
                        >
                          {room.view}
                        </span>
                      ) : null}

                      {room.outdoorSpace ? (
                        <span
                          className="rounded-full border px-3 py-2 text-[11px] uppercase tracking-[0.14em] text-neutral-600"
                          style={{ borderColor: "var(--border)" }}
                        >
                          {room.outdoorSpace}
                        </span>
                      ) : null}

                      {room.poolSize ? (
                        <span
                          className="rounded-full border px-3 py-2 text-[11px] uppercase tracking-[0.14em] text-neutral-600"
                          style={{ borderColor: "var(--border)" }}
                        >
                          Private Pool
                        </span>
                      ) : null}
                    </div>

                    <div className="mt-8 inline-flex items-center gap-2 text-sm text-black/72 transition duration-300 group-hover:translate-x-1 group-hover:text-black">
                      View Room <span aria-hidden="true">→</span>
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
                Each room opens
                <br />
                from one shared
                <br />
                detail system.
              </h2>

              <p className="section-copy mt-6">
                Browse the collection, compare room types more easily, and move
                directly into availability and detail pages with a cleaner
                booking flow.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/accommodation" className="outline-button">
                Back to Accommodation
              </Link>

              <Link href="/accommodation/suites" className="outline-button">
                Explore Suites
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