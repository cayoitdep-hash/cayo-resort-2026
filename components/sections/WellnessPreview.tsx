import Link from "next/link";

const wellnessHighlights = [
  "Armonia Spa",
  "Large indoor pool",
  "Steam room & sauna",
  "Fitness & yoga spaces",
];

export default function WellnessPreview() {
  return (
    <section className="pb-28 md:pb-36">
      <div className="container">
        <div className="grid gap-14 md:grid-cols-[0.98fr_1.02fr] md:items-center">
          {/* TEXT SIDE */}
          <div>
            <div className="eyebrow">Wellness</div>

            <h2 className="mt-5 text-[clamp(3rem,6vw,5.8rem)] font-light leading-[0.92] tracking-[-0.05em]">
              A slower rhythm
              <br />
              of care,
              <br />
              balance, and
              <br />
              restoration.
            </h2>

            <p className="mt-8 max-w-xl text-[1.05rem] leading-8 text-neutral-600">
              Wellness at Cayo is shaped by ritual, stillness, movement, and
              recovery, creating a calmer layer of the resort experience where
              body, atmosphere, and place move in harmony.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {wellnessHighlights.map((item) => (
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
              <Link href="/wellness" className="cta-button">
                Explore Wellness
              </Link>

              <Link href="/contact" className="outline-button">
                Plan Your Stay
              </Link>
            </div>
          </div>

          {/* IMAGE SIDE */}
          <div className="relative">
            <div
              className="h-[40rem] rounded-[38px] bg-[#d7d0c5]"
              style={{
                backgroundImage: "url('/images/wellness/preview-feature.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            <div className="absolute inset-0 rounded-[38px] bg-gradient-to-t from-black/16 via-black/0 to-transparent" />

            <div className="absolute bottom-6 left-6 rounded-[22px] bg-white/92 px-5 py-4 backdrop-blur-md shadow-[0_14px_40px_rgba(0,0,0,0.08)]">
              <div className="eyebrow">Restorative Atmosphere</div>
              <p className="mt-2 text-sm leading-7 text-neutral-600">
                A spa and wellness experience designed to feel slower, quieter,
                and deeply immersive.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}