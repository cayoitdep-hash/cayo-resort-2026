import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Link from "next/link";
import { bookingLinks } from "../../data/booking";

const offers = [
  {
    title: "Early Booking Offer",
    description:
      "Secure your stay in advance and benefit from preferred rates combined with the full resort experience.",
    tag: "Limited Availability",
    image: "/images/offers/offer-1.jpg",
  },
  {
    title: "Stay Longer Experience",
    description:
      "Extend your stay and unlock a more immersive resort rhythm with enhanced value across multiple nights.",
    tag: "Extended Stay",
    image: "/images/offers/offer-2.jpg",
  },
  {
    title: "Romantic Escape",
    description:
      "A curated stay designed around privacy, atmosphere, and elevated moments for two.",
    tag: "Couples",
    image: "/images/offers/offer-3.jpg",
  },
];

export default function OffersPage() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <Header />

      {/* HERO */}
      <section className="relative flex min-h-[72vh] items-end overflow-hidden text-white">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/offers/hero.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="hero-overlay absolute inset-0" />

        <div className="container relative z-10 pb-16 pt-40 md:pb-24">
          <div className="max-w-4xl">
            <div className="eyebrow text-white/70">Exclusive Offers</div>

            <h1 className="mt-4 text-[clamp(3.2rem,7vw,6.4rem)] font-light leading-[0.9] tracking-[-0.05em]">
              Offers designed
              <br />
              to elevate the
              <br />
              stay experience.
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-white/82 md:text-lg">
              Carefully shaped stay opportunities that combine value,
              flexibility, and the full luxury identity of the resort.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#offers" className="cta-button">
                Explore Offers
              </a>

              <Link
                href="/contact"
                className="outline-button !border-white/35 !text-white"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 md:py-30">
        <div className="container grid gap-12 md:grid-cols-[1.05fr_0.95fr] md:items-end">
          <div>
            <div className="eyebrow">Offer Philosophy</div>
            <h2 className="section-title mt-4">
              Not discounts,
              <br />
              but curated
              <br />
              stay opportunities.
            </h2>
          </div>

          <div>
            <p className="section-copy">
              Offers are positioned as part of the premium experience, not as a
              transactional layer. Each one supports a different way of
              experiencing the resort — earlier, longer, or more privately.
            </p>
          </div>
        </div>
      </section>

      {/* OFFERS GRID */}
      <section id="offers" className="pb-24 md:pb-30">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {offers.map((offer) => (
              <article
                key={offer.title}
                className="group overflow-hidden rounded-[34px] bg-white transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_70px_rgba(0,0,0,0.08)]"
                style={{ border: "1px solid var(--border)" }}
              >
                {/* IMAGE */}
                <div className="relative h-[20rem] overflow-hidden bg-[#d7d0c5]">
                  <div
                    className="absolute inset-0 transition duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                    style={{
                      backgroundImage: `url(${offer.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/34 via-black/8 to-transparent" />

                  <div className="absolute left-6 top-6">
                    <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-white/90 backdrop-blur-md">
                      {offer.tag}
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-[1.9rem] font-light leading-[1.05] tracking-[-0.04em] text-white">
                      {offer.title}
                    </h3>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-7 md:p-8">
                  <p className="text-[0.98rem] leading-8 text-neutral-500">
                    {offer.description}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href={bookingLinks.general}
                      target="_blank"
                      rel="noreferrer"
                      className="cta-button"
                    >
                      Check Availability
                    </a>

                    <Link href="/contact" className="outline-button">
                      Enquire
                    </Link                  >
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURE STRIP */}
      <section className="pb-24 md:pb-30">
        <div className="container grid gap-12 md:grid-cols-[0.95fr_1.05fr] md:items-center">
          <div
            className="min-h-[38rem] rounded-[38px] bg-[#cec6ba]"
            style={{
              backgroundImage: "url('/images/offers/feature.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <div>
            <div className="eyebrow">Flexible Experience</div>
            <h2 className="section-title mt-4">
              Each offer supports
              <br />
              a different way
              <br />
              of staying.
            </h2>

            <p className="section-copy mt-6 max-w-xl">
              Whether the intention is early planning, longer immersion, or a
              more private escape, offers are structured to enhance—not reduce—
              the overall experience.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={bookingLinks.general}
                target="_blank"
                rel="noreferrer"
                className="cta-button"
              >
                Book Your Stay
              </a>

              <Link href="/accommodation" className="outline-button">
                View Accommodation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="pb-20 md:pb-24">
        <div className="container rounded-[40px] bg-[#171717] px-8 py-14 text-white md:px-14 md:py-20">
          <div className="grid gap-10 md:grid-cols-[1fr_1fr] md:items-end">
            <div>
              <div className="eyebrow text-white/60">Next Step</div>
              <h2 className="mt-4 text-[clamp(2.4rem,5vw,5rem)] font-light leading-[0.95] tracking-[-0.04em]">
                Move from offer
                <br />
                to experience.
              </h2>
            </div>

            <div>
              <p className="max-w-xl text-base leading-8 text-white/72 md:text-lg">
                Explore availability, compare accommodation options, and shape
                the stay that best matches your expectations.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={bookingLinks.general}
                  target="_blank"
                  rel="noreferrer"
                  className="cta-button"
                >
                  Check Availability
                </a>

                <Link href="/contact" className="outline-button">
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