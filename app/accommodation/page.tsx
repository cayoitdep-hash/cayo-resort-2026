import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Link from "next/link";
import { roomItems, suiteItems } from "../../data/accommodation";
import { listingMedia } from "../../data/listing-media";
import VideoHero from "../../components/ui/VideoHero";
import AccommodationHeroBookingBar from "../../components/ui/AccommodationHeroBookingBar";

export default function AccommodationPage() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <Header />

      <VideoHero
        video={listingMedia.accommodation.heroVideo}
        image={listingMedia.accommodation.heroImage}
      >
        <AccommodationHeroBookingBar />

        <div className="max-w-5xl pt-28 md:pt-36">
          <div className="eyebrow text-white/70">Accommodation</div>

          <h1 className="mt-4 text-[clamp(3.2rem,7vw,6.6rem)] font-light leading-[0.9] tracking-[-0.05em] text-white">
            Accommodation
            <br />
            shaped by privacy,
            <br />
            comfort, and view.
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-white/82 md:text-lg">
            The accommodation collection includes 116 custom-designed rooms and
            suites, many featuring private pools, furnished verandas, and
            uninterrupted views toward Spinalonga.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/accommodation/rooms" className="cta-button">
              Explore Rooms
            </Link>

            <Link
              href="/accommodation/suites"
              className="outline-button !border-white/35 !text-white"
            >
              Explore Suites
            </Link>
          </div>
        </div>
      </VideoHero>

      <section className="py-24 md:py-32">
        <div className="container grid gap-12 md:grid-cols-[1.05fr_0.95fr] md:items-end">
          <div>
            <div className="eyebrow">Overview</div>
            <h2 className="section-title mt-4">
              Eleven accommodation
              <br />
              types, presented with
              <br />
              stronger clarity.
            </h2>
          </div>

          <div>
            <p className="section-copy">
              The structure reflects the real public accommodation collection:
              eight room categories and three suite categories. The new version
              does not change the offer — it presents it with stronger hierarchy,
              clearer differentiation, and a more premium browsing flow.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="container grid gap-6 md:grid-cols-2">
          <article
            className="overflow-hidden rounded-[36px] bg-white"
            style={{ border: "1px solid var(--border)" }}
          >
            <div
              className="h-[30rem] bg-[#d8d1c6]"
              style={{
                backgroundImage: `url(${listingMedia.rooms.heroImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="p-8 md:p-10">
              <div className="eyebrow">Rooms</div>
              <h3 className="mt-4 text-[2.3rem] font-light leading-tight">
                {roomItems.length} room categories
              </h3>
              <p className="section-copy mt-4">
                From sea-view stays to private-pool family formats, the room
                collection anchors the broader accommodation experience of the
                resort.
              </p>
              <Link href="/accommodation/rooms" className="outline-button mt-8">
                Explore Rooms
              </Link>
            </div>
          </article>

          <article
            className="overflow-hidden rounded-[36px] bg-white"
            style={{ border: "1px solid var(--border)" }}
          >
            <div
              className="h-[30rem] bg-[#d7d0c5]"
              style={{
                backgroundImage: `url(${listingMedia.suites.heroImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="p-8 md:p-10">
              <div className="eyebrow">Suites</div>
              <h3 className="mt-4 text-[2.3rem] font-light leading-tight">
                {suiteItems.length} suite categories
              </h3>
              <p className="section-copy mt-4">
                Suites introduce a more elevated spatial rhythm built around
                privacy, outdoor living, and stronger premium positioning.
              </p>
              <Link
                href="/accommodation/suites"
                className="outline-button mt-8"
              >
                Explore Suites
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="booking-bar-hide-zone pb-20 md:pb-28">
        <div className="container rounded-[40px] bg-[#171717] px-8 py-14 text-white md:px-14 md:py-20">
          <div className="grid gap-10 md:grid-cols-[1fr_1fr] md:items-end">
            <div>
              <div className="eyebrow text-white/60">Booking</div>
              <h2 className="mt-4 text-[clamp(2.5rem,5vw,5.1rem)] font-light leading-[0.95] tracking-[-0.04em]">
                Choose the stay
                <br />
                experience that fits
                <br />
                your rhythm.
              </h2>
            </div>

            <div>
              <p className="max-w-xl text-base leading-8 text-white/72 md:text-lg">
                The accommodation structure is designed to help guests
                understand the collection more quickly before they move into
                room details and availability.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://cayoresort.reserve-online.net/"
                  target="_blank"
                  rel="noreferrer"
                  className="cta-button"
                >
                  Check Availability
                </a>

                <Link
                  href="/contact"
                  className="outline-button !border-white/30 !text-white"
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