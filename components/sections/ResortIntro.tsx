import Link from "next/link";

export default function ResortIntro() {
  return (
    <section className="relative py-28 md:py-36">
      <div className="container">
        <div className="grid gap-16 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          
          {/* TEXT BLOCK */}
          <div>
            <div className="eyebrow">The Resort</div>

            <h2 className="mt-5 text-[clamp(3rem,6vw,6rem)] font-light leading-[0.92] tracking-[-0.05em]">
              A destination
              <br />
              shaped by
              <br />
              architecture,
              <br />
              privacy, and view.
            </h2>

            <p className="mt-8 max-w-xl text-[1.05rem] leading-8 text-neutral-600">
              Rising above Elounda, Cayo Exclusive Resort &amp; Spa introduces a
              more architectural expression of luxury, where space, material,
              and landscape create a seamless connection between stay,
              experience, and place.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/the-resort" className="cta-button">
                Discover the Resort
              </Link>

              <Link href="/contact" className="outline-button">
                Contact Concierge
              </Link>
            </div>
          </div>

          {/* IMAGE BLOCK */}
          <div className="relative">
            <div
              className="h-[38rem] rounded-[38px] bg-[#d9d2c7]"
              style={{
                backgroundImage: "url('/images/resort/intro.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            {/* FLOATING DETAIL */}
            <div className="absolute -bottom-10 left-6 right-6 rounded-[24px] bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
              <div className="eyebrow">Location</div>
              <p className="mt-2 text-sm text-neutral-600 leading-7">
                Elevated above Plaka village, overlooking the island of
                Spinalonga and the Mirabello Bay.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}