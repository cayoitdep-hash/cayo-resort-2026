import type { Metadata } from "next";
import Header from "../../../../components/layout/Header";
import Footer from "../../../../components/layout/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";
import { rooms } from "../../../../data/rooms";
import { accommodationMedia } from "../../../../data/accommodation-media";
import { getRoomBookingLink, bookingLinks } from "../../../../data/booking";
import { buildMetadata } from "../../../../data/metadata";
import VideoHero from "../../../../components/ui/VideoHero";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return rooms.map((room) => ({
    slug: room.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const room = rooms.find((item) => item.slug === slug);

  if (!room) {
    return buildMetadata({
      title: "Room not found",
      description:
        "The requested room page could not be found at Cayo Exclusive Resort & Spa.",
      path: "/accommodation/rooms",
      image: "/images/og/rooms.jpg",
    });
  }

  const media = accommodationMedia[room.slug];

  return buildMetadata({
    title: room.title,
    description:
      room.shortDescription ||
      room.description ||
      "Explore a refined room category at Cayo Exclusive Resort & Spa, shaped by comfort, privacy, and sea-facing luxury.",
    path: `/accommodation/rooms/${room.slug}`,
    image: media?.heroImage || media?.gallery?.[0] || "/images/og/rooms.jpg",
  });
}

export default async function RoomDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const room = rooms.find((item) => item.slug === slug);

  if (!room) {
    notFound();
  }

  const media = accommodationMedia[room.slug];
  const bookingLink = getRoomBookingLink(room.slug);

  const similarRooms = rooms
    .filter((item) => item.slug !== room.slug)
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
            Accommodation / Rooms / {room.title}
          </div>

          <h1 className="mt-4 text-[clamp(3rem,7vw,6.4rem)] font-light leading-[0.92] tracking-[-0.04em] text-white">
            {room.title}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/80 md:text-lg">
            {room.description}
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
              href="/accommodation/rooms"
              className="outline-button !border-white/35 !text-white"
            >
              Back to Rooms
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
                {room.occupancy}
              </p>
            </div>

            <div>
              <div className="eyebrow">Interior</div>
              <p className="mt-3 text-[1.35rem] font-light">
                {room.interiorSize || room.size}
              </p>
            </div>

            <div>
              <div className="eyebrow">View</div>
              <p className="mt-3 text-[1.35rem] font-light">{room.view}</p>
            </div>

            <div>
              <div className="eyebrow">Outdoor Space</div>
              <p className="mt-3 text-[1.35rem] font-light">
                {room.outdoorSpace}
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
              Accommodation
              <br />
              details, presented
              <br />
              with premium clarity.
            </h2>
          </div>

          <div>
            <p className="section-copy">
              This room page brings together atmosphere, comfort, and stay
              details, helping guests move from inspiration into selection with
              greater confidence.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="container grid gap-6 md:grid-cols-[1.15fr_0.85fr]">
          <div className="grid gap-6">
            <div
              className="min-h-[560px] rounded-[34px] bg-[#d8d1c6]"
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
            <div className="eyebrow">Room Details</div>

            <div className="mt-6 space-y-5">
              {room.interiorSize && (
                <div
                  className="flex items-start justify-between gap-6 border-b pb-5"
                  style={{ borderColor: "var(--border)" }}
                >
                  <span className="text-lg font-light">Interior</span>
                  <span className="text-right text-sm text-neutral-500">
                    {room.interiorSize}
                  </span>
                </div>
              )}

              {room.exteriorSize && (
                <div
                  className="flex items-start justify-between gap-6 border-b pb-5"
                  style={{ borderColor: "var(--border)" }}
                >
                  <span className="text-lg font-light">Exterior</span>
                  <span className="text-right text-sm text-neutral-500">
                    {room.exteriorSize}
                  </span>
                </div>
              )}

              {room.poolSize && (
                <div
                  className="flex items-start justify-between gap-6 border-b pb-5"
                  style={{ borderColor: "var(--border)" }}
                >
                  <span className="text-lg font-light">Swimming Pool</span>
                  <span className="text-right text-sm text-neutral-500">
                    {room.poolSize}
                  </span>
                </div>
              )}

              {room.beds && (
                <div
                  className="flex items-start justify-between gap-6 border-b pb-5"
                  style={{ borderColor: "var(--border)" }}
                >
                  <span className="text-lg font-light">Beds</span>
                  <span className="text-right text-sm text-neutral-500">
                    {room.beds}
                  </span>
                </div>
              )}

              {room.extraBeds && (
                <div
                  className="flex items-start justify-between gap-6 border-b pb-5"
                  style={{ borderColor: "var(--border)" }}
                >
                  <span className="text-lg font-light">Extra Beds</span>
                  <span className="text-right text-sm text-neutral-500">
                    {room.extraBeds}
                  </span>
                </div>
              )}

              {(room.checkIn || room.checkOut) && (
                <div
                  className="flex items-start justify-between gap-6 border-b pb-5"
                  style={{ borderColor: "var(--border)" }}
                >
                  <span className="text-lg font-light">Stay Times</span>
                  <span className="text-right text-sm text-neutral-500">
                    Check-in {room.checkIn || "—"} / Check-out{" "}
                    {room.checkOut || "—"}
                  </span>
                </div>
              )}
            </div>

            {room.poolHeatingPolicy && (
              <div className="mt-10 rounded-[24px] bg-[#faf8f4] p-5">
                <div className="eyebrow">Pool Heating Policy</div>
                <p className="mt-3 text-sm leading-7 text-neutral-500">
                  {room.poolHeatingPolicy}
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
              elevated stay.
            </h2>

            <p className="section-copy mt-6 max-w-xl">
              The room experience is presented through the essentials that shape
              comfort, privacy, and everyday ease throughout the stay.
            </p>
          </div>

          <div
            className="rounded-[34px] bg-white p-8 md:p-10"
            style={{ border: "1px solid var(--border)" }}
          >
            <div className="grid gap-4 md:grid-cols-2">
              {room.amenities.map((item) => (
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

      {room.highlights?.length ? (
        <section className="pb-20 md:pb-28">
          <div className="container">
            <div
              className="rounded-[34px] bg-white p-8 md:p-10"
              style={{ border: "1px solid var(--border)" }}
            >
              <div className="eyebrow">Highlights</div>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {room.highlights.map((item) => (
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

      {similarRooms.length ? (
        <section className="pb-20 md:pb-28">
          <div className="container">
            <div className="mb-10 grid gap-10 md:grid-cols-[1fr_1fr] md:items-end">
              <div>
                <div className="eyebrow">Similar Rooms</div>
                <h2 className="section-title mt-4">
                  Continue exploring
                  <br />
                  the room collection.
                </h2>
              </div>

              <div>
                <p className="section-copy max-w-xl">
                  Guests often compare multiple room categories before moving
                  into availability. These selections keep that journey clear
                  and premium.
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {similarRooms.map((item) => {
                const itemMedia = accommodationMedia[item.slug];

                return (
                  <Link
                    key={item.slug}
                    href={`/accommodation/rooms/${item.slug}`}
                    className="group block"
                  >
                    <article
                      className="overflow-hidden rounded-[32px] bg-white transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_70px_rgba(0,0,0,0.08)]"
                      style={{ border: "1px solid var(--border)" }}
                    >
                      <div className="relative h-72 overflow-hidden bg-[#d8d1c6]">
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
                          View Room <span aria-hidden="true">→</span>
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
                  Reserve the room
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