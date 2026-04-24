import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Link from "next/link";
import VideoHero from "../../components/ui/VideoHero";

const evHighlights = [
  "A practical guest utility reframed with premium design",
  "Supports sustainable and independent exploration",
  "Clear path for inquiry or booking",
  "Fits naturally into the destination experience",
];

export default function RentAnEvPage() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <Header />

      <VideoHero
        video="/videos/ev/ev-hero.mp4"
        image="/images/ev/ev-hero.jpg"
      >
        <div className="max-w-5xl">
          <div className="eyebrow text-white/70">Rent an EV</div>

          <h1 className="mt-4 text-[clamp(3rem,7vw,6.4rem)] font-light leading-[0.92] tracking-[-0.04em]">
            Explore with
            <br />
            more freedom,
            <br />
            quietly and easily.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/80 md:text-lg">
            Rent an EV should feel like an integrated part of the modern resort
            experience, supporting discovery with clarity, ease, and a more
            contemporary guest journey.
          </p>
        </div>
      </VideoHero>

      <section className="py-20 md:py-28">
        <div className="container grid gap-10 md:grid-cols-[0.95fr_1.05fr] md:items-center">
          <div
            className="min-h-[520px] rounded-[32px] bg-[#d8d1c6]"
            style={{
              backgroundImage: "url('/images/ev/ev-feature.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div>
            <div className="eyebrow">Mobility</div>
            <h2 className="section-title mt-4">
              A utility page, elevated into the luxury journey.
            </h2>
            <p className="section-copy mt-6 max-w-xl">
              Weddings & ceremonies are positioned as a refined destination experience, shaped by setting, atmosphere, and a strong sense of occasion.
            </p>

            <div className="mt-8 space-y-5">
              {evHighlights.map((item, index) => (
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

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="outline-button">
                Enquire Now
              </Link>
              <Link href="/experiences" className="outline-button">
                Explore Experiences
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}