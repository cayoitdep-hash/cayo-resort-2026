import Header from "../../../../components/layout/Header";
import Footer from "../../../../components/layout/Footer";
import Link from "next/link";

const roomHighlights = [
  "Sea view orientation",
  "Private outdoor living",
  "Contemporary interior design",
  "Calm spatial flow",
];

const roomAmenities = [
  "King-size bed",
  "Private terrace",
  "Luxury bathroom",
  "High-speed Wi-Fi",
  "Air conditioning",
  "Coffee facilities",
  "Smart TV",
  "In-room safe",
];

export default function DeluxeRoomPage() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <Header />

      <section className="relative flex min-h-[78vh] items-end overflow-hidden bg-[#1b1b1b] text-white">
        <div
          className="hero-overlay absolute inset-0"
          style={{
            backgroundImage:
              "url('https://www.cayoresort.com/wp-content/uploads/2022/04/Cayo-Exclusive-Resort-Spa-Elounda-Crete-1.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundBlendMode: "overlay",
          }}
        />

        <div className="container relative z-10 pb-16 pt-40 md:pb-24">
          <div className="max-w-5xl">
            <div className="eyebrow text-white/70">
              Accommodation / Rooms / Deluxe Room
            </div>

            <h1 className="mt-4 text-[clamp(3rem,7vw,6.4rem)] font-light leading-[0.92] tracking-[-0.04em]">
              Deluxe Room
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/80 md:text-lg">
              A refined room category shaped around comfort, calm, and a more
              elevated sense of stay, with architecture and atmosphere working
              together in quiet balance.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#booking" className="cta-button">
                Check Availability
              </a>
              <Link
                href="/accommodation/rooms"
                className="inline-flex min-h-12 items-center justify-center px-6 text-white/88"
              >
                Back to Rooms
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div
          className="container grid gap-6 rounded-[32px] bg-white p-6 md:grid-cols-4 md:p-8"
          style={{ border: "1px solid var(--border)" }}
        >
          <div>
            <div className="eyebrow">Category</div>
            <p className="mt-3 text-xl font-light">Room</p>
          </div>

          <div>
            <div className="eyebrow">Occupancy</div>
            <p className="mt-3 text-xl font-light">2 Guests</p>
          </div>

          <div>
            <div className="eyebrow">View</div>
            <p className="mt-3 text-xl font-light">Sea View</p>
          </div>

          <div>
            <div className="eyebrow">Outdoor Space</div>
            <p className="mt-3 text-xl font-light">Private Terrace</p>
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="container grid gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-end">
          <div>
            <div className="eyebrow">Overview</div>
            <h2 className="section-title mt-4">
              A quieter expression of contemporary luxury.
            </h2>
          </div>

          <div>
            <p className="section-copy">
              This template is the model for all individual accommodation
              detail pages. Later, each room will receive its real photography,
              dimensions, occupancy, amenities, and booking logic. For now,
              we are locking the structure and premium presentation style.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="container grid gap-6 md:grid-cols-[1.15fr_0.85fr]">
          <div className="grid gap-6">
            <div className="min-h-[520px] rounded-[32px] bg-[#d8d1c6]" />
            <div className="grid gap-6 md:grid-cols-2">
              <div className="min-h-[250px] rounded-[28px] bg-[#dcd5ca]" />
              <div className="min-h-[250px] rounded-[28px] bg-[#d7d0c4]" />
            </div>
          </div>

          <div
            className="rounded-[32px] bg-white p-8 md:p-10"
            style={{ border: "1px solid var(--border)" }}
          >
            <div className="eyebrow">Highlights</div>

            <div className="mt-6 space-y-5">
              {roomHighlights.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center justify-between border-b pb-5"
                  style={{ borderColor: "var(--border)" }}
                >
                  <span className="text-lg font-light">{item}</span>
                  <span className="text-sm text-neutral-400">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <div className="eyebrow">Design Note</div>
              <p className="section-copy mt-4">
                Each room page should feel more like a private editorial
                presentation than a plain booking card. That is what creates
                premium perception before the user even reaches the booking
                engine.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="container grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <div>
            <div className="eyebrow">Amenities</div>
            <h2 className="section-title mt-4">
              Everything needed for a seamless stay.
            </h2>
            <p className="section-copy mt-6 max-w-xl">
              Amenities are carefully curated to support comfort, functionality, and a seamless stay experience.
            </p>
          </div>

          <div
            className="rounded-[32px] bg-white p-8 md:p-10"
            style={{ border: "1px solid var(--border)" }}
          >
            <div className="grid gap-4 md:grid-cols-2">
              {roomAmenities.map((item) => (
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

      <section className="pb-20 md:pb-28">
        <div className="container rounded-[36px] bg-[#171717] px-8 py-14 text-white md:px-14 md:py-20">
          <div className="grid gap-10 md:grid-cols-[1fr_1fr] md:items-end">
            <div>
              <div className="eyebrow text-white/60">Booking</div>
              <h2 className="mt-4 text-[clamp(2.4rem,5vw,5rem)] font-light leading-[0.95] tracking-[-0.04em]">
                Designed to inspire,
                <br />
                then convert.
              </h2>
            </div>

            <div>
              <p className="max-w-xl text-base leading-8 text-white/72 md:text-lg">
                Later this section will connect directly to the booking flow for
                the specific room category, with stronger intent and clearer room
                context than the current experience.
              </p>

              <div className="mt-8 flex flex-wrap gap-4" id="booking">
                <a href="#" className="cta-button">
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

      <section className="pb-20 md:pb-28">
        <div className="container">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="eyebrow">Related Stay Options</div>
              <h2 className="section-title mt-4">
                Continue exploring accommodation.
              </h2>
            </div>

            <Link href="/accommodation" className="outline-button">
              View All Accommodation
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <article
              className="overflow-hidden rounded-[28px] bg-white"
              style={{ border: "1px solid var(--border)" }}
            >
              <div className="h-72 bg-[#d8d0c4]" />
              <div className="p-8">
                <div className="eyebrow">Rooms</div>
                <h3 className="mt-4 text-3xl font-light">Family Retreat Room</h3>
                <Link href="/accommodation/rooms" className="outline-button mt-8">
                  Explore
                </Link>
              </div>
            </article>

            <article
              className="overflow-hidden rounded-[28px] bg-white"
              style={{ border: "1px solid var(--border)" }}
            >
              <div className="h-72 bg-[#d7d0c4]" />
              <div className="p-8">
                <div className="eyebrow">Suites</div>
                <h3 className="mt-4 text-3xl font-light">Junior Suite</h3>
                <Link href="/accommodation/suites" className="outline-button mt-8">
                  Explore
                </Link>
              </div>
            </article>

            <article
              className="overflow-hidden rounded-[28px] bg-white"
              style={{ border: "1px solid var(--border)" }}
            >
              <div className="h-72 bg-[#d9d1c6]" />
              <div className="p-8">
                <div className="eyebrow">Villas</div>
                <h3 className="mt-4 text-3xl font-light">Private Villa</h3>
                <Link href="/accommodation/villas" className="outline-button mt-8">
                  Explore
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}