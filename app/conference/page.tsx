import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Link from "next/link";
import VideoHero from "../../components/ui/VideoHero";

const conferenceStrengths = [
  "Versatile meeting spaces with cutting-edge technology",
  "Support for live, virtual, and hybrid event organization",
  "In-house IT support",
  "Dedicated event coordinators",
];

const conferenceRooms = [
  "Orion – main conference room",
  "Sirios – meeting room",
  "Epicuros – meeting room",
  "Adjoining foyer for break moments",
  "Layouts for a variety of setups",
  "Up to 120 guests across the conference facilities",
];

export default function ConferencePage() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <Header />

      <VideoHero
        video="/videos/conference/conference-hero.mp4"
        image="/images/conference/conference-hero.jpg"
      >
        <div className="max-w-5xl">
          <div className="eyebrow text-white/70">Conference Facilities</div>

          <h1 className="mt-4 text-[clamp(3rem,7vw,6.4rem)] font-light leading-[0.92] tracking-[-0.04em]">
            Business and
            <br />
            hospitality in
            <br />
            one destination.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/80 md:text-lg">
            The public site presents conference facilities as a seamless blend
            of leisure and business, with versatile spaces, technology support,
            and a dedicated event team.
          </p>
        </div>
      </VideoHero>

      <section className="py-20 md:py-28">
        <div className="container grid gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-end">
          <div>
            <div className="eyebrow">Conference Positioning</div>
            <h2 className="section-title mt-4">
              State-of-the-art conference facilities.
            </h2>
          </div>
          <div>
            <p className="section-copy">
              Conference facilities are presented as a seamless blend of professional functionality and refined hospitality.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="container grid gap-10 md:grid-cols-[0.95fr_1.05fr] md:items-start">
          <div
            className="min-h-[520px] rounded-[32px] bg-[#d8d1c6]"
            style={{
              backgroundImage: "url('/images/conference/conference-1.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="grid gap-6">
            <div
              className="rounded-[32px] bg-white p-8 md:p-10"
              style={{ border: "1px solid var(--border)" }}
            >
              <div className="eyebrow">Capabilities</div>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {conferenceStrengths.map((item) => (
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

            <div
              className="rounded-[32px] bg-white p-8 md:p-10"
              style={{ border: "1px solid var(--border)" }}
            >
              <div className="eyebrow">Spaces</div>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {conferenceRooms.map((item) => (
                  <div
                    key={item}
                    className="rounded-[18px] border px-4 py-4 text-base text-neutral-700"
                    style={{ borderColor: "var(--border)" }}
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-[18px] border px-4 py-4 text-base text-neutral-700" style={{ borderColor: "var(--border)" }}>
                Orion is publicly listed as the main conference room and is also
                referenced with a capacity of 100 guests, while the wider
                conference facilities are described as accommodating settings up
                to 120 guests.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="container rounded-[36px] bg-[#171717] px-8 py-14 text-white md:px-14 md:py-20">
          <div className="grid gap-10 md:grid-cols-[1fr_1fr] md:items-end">
            <div>
              <div className="eyebrow text-white/60">Event Enquiries</div>
              <h2 className="mt-4 text-[clamp(2.4rem,5vw,5rem)] font-light leading-[0.95] tracking-[-0.04em]">
                Professional clarity,
                <br />
                premium setting,
                <br />
                direct contact path.
              </h2>
            </div>

            <div>
              <p className="max-w-xl text-base leading-8 text-white/72 md:text-lg">
                The new version should continue to support direct event
                enquiries, but now with clearer room naming, stronger capability
                presentation, and more premium visual pacing than the current
                structure.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact" className="outline-button">
                  Enquire Now
                </Link>
                <Link href="/events" className="outline-button">
                  Back to Events
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