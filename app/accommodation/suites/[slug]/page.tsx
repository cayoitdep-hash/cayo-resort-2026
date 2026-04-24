import type { Metadata } from "next";
import Header from "../../../../components/layout/Header";
import Footer from "../../../../components/layout/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";
import { suites } from "../../../../data/suites";
import { accommodationMedia } from "../../../../data/accommodation-media";
import { getSuiteBookingLink, bookingLinks } from "../../../../data/booking";
import { buildMetadata } from "../../../../data/metadata";
import VideoHero from "../../../../components/ui/VideoHero";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return suites.map((suite) => ({
    slug: suite.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const suite = suites.find((item) => item.slug === slug);

  if (!suite) {
    return buildMetadata({
      title: "Suite not found",
      description:
        "The requested suite page could not be found at Cayo Exclusive Resort & Spa.",
      path: "/accommodation/suites",
      image: "/images/og/suites.jpg",
    });
  }

  const media = accommodationMedia[suite.slug];

  return buildMetadata({
    title: suite.title,
    description:
      suite.shortDescription ||
      suite.description ||
      "Explore a refined suite category at Cayo Exclusive Resort & Spa, shaped by privacy, space, outdoor living, and sea-facing luxury.",
    path: `/accommodation/suites/${suite.slug}`,
    image: media?.heroImage || media?.gallery?.[0] || "/images/og/suites.jpg",
  });
}

export default async function SuiteDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const suite = suites.find((item) => item.slug === slug);

  if (!suite) {
    notFound();
  }

  const media = accommodationMedia[suite.slug];
  const bookingLink = getSuiteBookingLink(suite.slug);

  const similarSuites = suites
    .filter((item) => item.slug !== suite.slug)
    .slice(0, 3);

  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <Header />

      <VideoHero
        video={media?.heroVideo}
        image={media?.heroImage || "/images/hero-fallback.jpg"}
      >
        <div className="max-w-5xl pt-24 md:pt-32">
          <div className="eyebrow text-white/70">
            Accommodation / Suites / {suite.title}
          </div>

          <h1 className="mt-4 text-[clamp(3rem,7vw,6.4rem)] font-light leading-[0.92] tracking-[-0.04em] text-white">
            {suite.title}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/80 md:text-lg">
            {suite.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={bookingLink}
              target="_blank"
              rel="noreferrer"
              className="cta-button"
            >
              Check Availability
            </a>

            <Link
              href="/accommodation/suites"
              className="outline-button !border-white/35 !text-white"
            >
              Back to Suites
            </Link>
          </div>
        </div>
      </VideoHero>

      <section className="py-16 md:py-20">
        <div
          className="container rounded-[34px] bg-white p-6 md:p-8"
          style={{ border: "1px solid var(--border)" }}
        >
          <div className="grid gap-6 md:grid-cols-4">
            <div>
              <div className="eyebrow">Occupancy</div>
              <p className="mt-3 text-[1.35rem] font-light">
                {suite.occupancy}
              </p>
            </div>

            <div>
              <div className="eyebrow">Interior</div>
              <p className="mt-3 text-[1.35rem] font-light">
                {suite.interiorSize || suite.size}
              </p>
            </div>

            <div>
              <div className="eyebrow">View</div>
              <p className="mt-3 text-[1.35rem] font-light">{suite.view}</p>
            </div>

            <div>
              <div className="eyebrow">Outdoor Space</div>
              <p className="mt-3 text-[1.35rem] font-light">
                {suite.outdoorSpace}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="container grid gap-12 md:grid-cols-[1.02fr_0.98fr] md:items-end">
          <div>
            <div className="eyebrow">Overview</div>
            <h2 className="section-title mt-4">
              Suite details,
              <br />
              presented with
              <br />
              stronger premium
              <br />
              clarity.
            </h2>
          </div>

          <div>
            <p className="section-copy">
              This suite page brings together atmosphere, space, privacy, and
              stay details, helping guests move from inspiration into selection
              with greater confidence.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="container grid gap-6 md:grid-cols-[1.15fr_0.85fr]">
          <div className="grid gap-6">
            <div
              className="min-h-[560px] rounded-[34px] bg-[#d7d0c5]"
              style={{
                backgroundImage: media?.gallery?.[0]
                  ? `url(${media.gallery[0]})`
                  : "none",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            <div className="grid gap-6 md:grid-cols-2">
              <div
                className="min-h-[260px] rounded-[28px] bg-[#dcd5ca]"
                style={{
                  backgroundImage: media?.gallery?.[1]
                    ? `url(${media.gallery[1]})`
                    : "none",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />

              <div
                className="min-h-[260px] rounded-[28px] bg-[#d7d0c4]"
                style={{
                  backgroundImage: media?.gallery?.[2]
                    ? `url(${media.gallery[2]})`
                    : "none",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>
          </div>

          <div
            className="rounded-[34px] bg-white p-8 md:p-10"
            style={{ border: "1px solid var(--border)" }}
          >
            <div className="eyebrow">Suite Details</div>

            <div className="mt-6 space-y-5">
              {suite.interiorSize && (
                <div
                  className="flex items-start justify-between gap-6 border-b pb-5"
                  style={{ borderColor: "var(--border)" }}
                >
                  <span className="text-lg font-light">Interior</span>
                  <span className="text-right text-sm text-neutral-500">
                    {suite.interiorSize}
                  </span>
                </div>
              )}

              {suite.exteriorSize && (
                <div
                  className="flex items-start justify-between gap-6 border-b pb-5"
                  style={{ borderColor: "var(--border)" }}
                >
                  <span className="text-lg font-light">Exterior</span>
                  <span className="text-right text-sm text-neutral-500">
                    {suite.exteriorSize}
                  </span>
                </div>
              )}

              {suite.poolSize && (
                <div
                  className="flex items-start justify-between gap-6 border-b pb-5"
                  style={{ borderColor: "var(--border)" }}
                >
                  <span className="text-lg font-light">Swimming Pool</span>
                  <span className="text-right text-sm text-neutral-500">
                    {suite.poolSize}
                  </span>
                </div>
              )}

              {suite.beds && (
                <div
                  className="flex items-start justify-between gap-6 border-b pb-5"
                  style={{ borderColor: "var(--border)" }}
                >
                  <span className="text-lg font-light">Beds</span>
                  <span className="text-right text-sm text-neutral-500">
                    {suite.beds}
                  </span>
                </div>
              )}

              {suite.extraBeds && (
                <div
                  className="flex items-start justify-between gap-6 border-b pb-5"
                  style={{ borderColor: "var(--border)" }}
                >
                  <span className="text-lg font-light">Extra Beds</span>
                  <span className="text-right text-sm text-neutral-500">
                    {suite.extraBeds}
                  </span>
                </div>
              )}

              {(suite.checkIn || suite.checkOut) && (
                <div
                  className="flex items-start justify-between gap-6 border-b pb-5"
                  style={{ borderColor: "var(--border)" }}
                >
                  <span className="text-lg font-light">Stay Times</span>
                  <span className="text-right text-sm text-neutral-500">
                    Check-in {suite.checkIn || "—"} / Check-out{" "}
                    {suite.checkOut || "—"}
                  </span>
                </div>
              )}
            </div>

            {suite.poolHeatingPolicy && (
              <div className="mt-10 rounded-[24px] bg-[#faf8f4] p-5">
                <div className="eyebrow">Pool Heating Policy</div>
                <p className="mt-3 text-sm leading-7 text-neutral-500">
                  {suite.poolHeatingPolicy}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="container grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <div>
            <div className="eyebrow">Amenities</div>
            <h2 className="section-title mt-4">
              Everything needed
              <br />
              for a seamless,
              <br />
              elevated suite stay.
            </h2>

            <p className="section-copy mt-6 max-w-xl">
              The suite experience is presented through the essentials that
              shape comfort, privacy, outdoor living, and a fuller premium stay.
            </p>
          </div>

          <div
            className="rounded-[34px] bg-white p-8 md:p-10"
            style={{ border: "1px solid var(--border)" }}
          >
            <div className="grid gap-4 md:grid-cols-2">
              {suite.amenities.map((item) => (
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
        </div>
      </section>

      {suite.highlights?.length ? (
        <section className="pb-20 md:pb-28">
          <div className="container">
            <div
              className="rounded-[34px] bg-white p-8 md:p-10"
              style={{ border: "1px solid var(--border)" }}
            >
              <div className="eyebrow">Highlights</div>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {suite.highlights.map((item) => (
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
          </div>
        </section>
      ) : null}

      {similarSuites.length ? (
        <section className="pb-20 md:pb-28">
          <div className="container">
            <div className="mb-10 grid gap-10 md:grid-cols-[1fr_1fr] md:items-end">
              <div>
                <div className="eyebrow">Similar Suites</div>
                <h2 className="section-title mt-4">
                  Continue exploring
                  <br />
                  the suite collection.
                </h2>
              </div>

              <div>
                <p className="section-copy max-w-xl">
                  Guests often compare multiple suite categories before moving
                  into availability. These selections keep that journey clear
                  and premium.
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {similarSuites.map((item) => {
                const itemMedia = accommodationMedia[item.slug];

                return (
                  <Link
                    key={item.slug}
                    href={`/accommodation/suites/${item.slug}`}
                    className="group block"
                  >
                    <article
                      className="overflow-hidden rounded-[32px] bg-white transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_70px_rgba(0,0,0,0.08)]"
                      style={{ border: "1px solid var(--border)" }}
                    >
                      <div className="relative h-72 overflow-hidden bg-[#d7d0c5]">
                        <div
                          className="absolute inset-0 transition duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                          style={{
                            backgroundImage: itemMedia?.heroImage
                              ? `url(${itemMedia.heroImage})`
                              : itemMedia?.gallery?.[0]
                              ? `url(${itemMedia.gallery[0]})`
                              : "none",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }}
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/34 via-black/8 to-transparent" />

                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <h3 className="text-[1.6rem] font-light leading-[1.05] tracking-[-0.04em] text-white">
                            {item.title}
                          </h3>
                        </div>
                      </div>

                      <div className="p-7">
                        <p className="text-[0.96rem] leading-8 text-neutral-500">
                          {item.shortDescription}
                        </p>

                        <div className="mt-6 inline-flex items-center gap-2 text-sm text-black/72 transition duration-300 group-hover:translate-x-1 group-hover:text-black">
                          View Suite <span aria-hidden="true">→</span>
                        </div>
                      </div>
                    </article>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      ) : null}

      <section className="pb-20 md:pb-28">
        <div className="container overflow-hidden rounded-[40px] bg-[#171717] text-white">
          <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
            <div
              className="relative min-h-[22rem] bg-[#1e1e1e]"
              style={{
                backgroundImage: media?.gallery?.[0]
                  ? `url(${media.gallery[0]})`
                  : media?.heroImage
                  ? `url(${media.heroImage})`
                  : "none",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/42 via-black/18 to-transparent" />

              <div className="absolute bottom-8 left-8 right-8">
                <div className="eyebrow text-white/60">Booking</div>
                <h2 className="mt-4 text-[clamp(2.3rem,4.8vw,4.5rem)] font-light leading-[0.95] tracking-[-0.05em]">
                  Reserve the suite
                  <br />
                  experience now.
                </h2>
              </div>
            </div>

            <div className="flex items-center px-8 py-12 md:px-12 md:py-14">
              <div className="max-w-xl">
                <p className="text-[1.02rem] leading-8 text-white/72">
                  Explore availability, move directly into the booking flow, and
                  complete the stay with greater clarity and confidence.
                </p>

                <div className="mt-10 flex flex-wrap gap-4" id="booking">
                  <a
                    href={bookingLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-[3.25rem] items-center justify-center rounded-full bg-white px-6 text-sm text-black transition duration-300 hover:opacity-90"
                  >
                    Check Availability
                  </a>

                  <Link
                    href={bookingLinks.contact}
                    className="inline-flex min-h-[3.25rem] items-center justify-center rounded-full border border-white/25 bg-transparent px-6 text-sm text-white transition duration-300 hover:bg-white hover:text-black"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}