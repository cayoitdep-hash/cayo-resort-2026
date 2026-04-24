import Link from "next/link";

const diningHighlights = [
  "Ambrosia",
  "Kelari Gourmet Restaurant",
  "Sage & Thyme",
  "Stone Beach by Cayo",
];

export default function DiningPreview() {
  return (
    <section className="pb-28 md:pb-36">
      <div className="container">
        <div className="grid gap-14 md:grid-cols-[1.02fr_0.98fr] md:items-center">
          {/* IMAGE SIDE */}
          <div className="relative">
            <div
              className="h-[40rem] rounded-[38px] bg-[#d8d1c6]"
              style={{
                backgroundImage: "url('/images/dining/preview-feature.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            <div className="absolute inset-0 rounded-[38px] bg-gradient-to-t from-black/18 via-black/0 to-transparent" />

            <div className="absolute bottom-6 left-6 rounded-[22px] bg-white/92 px-5 py-4 backdrop-blur-md shadow-[0_14px_40px_rgba(0,0,0,0.08)]">
              <div className="eyebrow">Signature Dining</div>
              <p className="mt-2 text-sm leading-7 text-neutral-600">
                Sea-facing tables, destination atmosphere, and refined
                Mediterranean energy.
              </p>
            </div>
          </div>

          {/* TEXT SIDE */}
          <div>
            <div className="eyebrow">Gastronomy</div>

            <h2 className="mt-5 text-[clamp(3rem,6vw,5.8rem)] font-light leading-[0.92] tracking-[-0.05em]">
              Dining shaped
              <br />
              by atmosphere,
              <br />
              view, and
              <br />
              destination.
            </h2>

            <p className="mt-8 max-w-xl text-[1.05rem] leading-8 text-neutral-600">
              Gastronomy at Cayo unfolds through distinct dining settings, from
              elevated evening experiences to relaxed all-day moments by the
              sea, each one designed to feel immersive and memorable.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {diningHighlights.map((item) => (
                <div
                  key={item}
                  className="rounded-full border px-5 py-3 text-sm text-neutral-700"
                  style={{ borderColor: "var(--border)" }}
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/dining" className="cta-button">
                Explore Gastronomy
              </Link>

              <Link href="/contact" className="outline-button">
                Reserve Your Stay
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}