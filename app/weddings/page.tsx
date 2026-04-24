import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Link from "next/link";
import VideoHero from "../../components/ui/VideoHero";

const weddingPillars = [
  "Dedicated Weddings & Ceremonies category on the public site",
  "Destination setting within Cayo Exclusive Resort & Spa",
  "Natural connection to the resort’s view, atmosphere, and hospitality",
  "Clear path for direct enquiry through Contact",
];

export default function WeddingsPage() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <Header />

      <VideoHero
        video="/videos/weddings/weddings-hero.mp4"
        image="/images/weddings/weddings-hero.jpg"
      >
        <div className="max-w-5xl">
          <div className="eyebrow text-white/70">Weddings &amp; Ceremonies</div>

          <h1 className="mt-4 text-[clamp(3rem,7vw,6.4rem)] font-light leading-[0.92] tracking-[-0.04em]">
            Celebrations framed
            <br />
            by place, view,
            <br />
            and emotion.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/80 md:text-lg">
            The current site clearly positions Weddings &amp; Ceremonies as a
            dedicated event path. This page keeps that factual structure while
            giving it a more premium and emotionally resonant presentation.
          </p>
        </div>
      </VideoHero>

      <section className="py-20 md:py-28">
        <div className="container grid gap-10 md:grid-cols-[0.95fr_1.05fr] md:items-center">
          <div
            className="min-h-[520px] rounded-[32px] bg-[#d8d1c6]"
            style={{
              backgroundImage: "url('/images/weddings/weddings-feature.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div>
            <div className="eyebrow">Wedding Direction</div>
            <h2 className="section-title mt-4">
              A destination celebration layer inside the resort.
            </h2>
            <p className="section-copy mt-6 max-w-xl">
              From the public navigation and event structure, Weddings &amp;
              Ceremonies is clearly presented as a distinct event category. The
              new page should support enquiries, visual storytelling, and a
              stronger luxury identity without inventing unsupported package
              details.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="container rounded-[36px] bg-[#171717] px-8 py-14 text-white md:px-14 md:py-20">
          <div className="space-y-5">
            {weddingPillars.map((item, index) => (
              <div
                key={item}
                className="flex items-center justify-between border-b pb-5"
                style={{ borderColor: "rgba(255,255,255,0.12)" }}
              >
                <span className="text-lg font-light">{item}</span>
                <span className="text-sm text-white/40">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/contact" className="outline-button">
              Enquire Now
            </Link>
            <Link href="/events" className="outline-button">
              Back to Events
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}