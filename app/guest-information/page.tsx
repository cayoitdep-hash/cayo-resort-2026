import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Link from "next/link";
import VideoHero from "../../components/ui/VideoHero";
import { bookingLinks } from "../../data/booking";

const stayInformation = [
  {
    title: "Arrival & Departure",
    items: [
      "Check-in from 15:00",
      "Check-out by 11:00",
      "Early check-in and late check-out are subject to availability",
      "Front Office can assist with arrival and departure arrangements",
    ],
    image: "/images/guest-information/arrival-departure.jpg",
  },
  {
    title: "Room Comfort",
    items: [
      "Air conditioning available in guest accommodation",
      "Adaptors / electricity: 220–230V",
      "Baby cots available on request",
      "Additional baby equipment can be arranged on request",
    ],
    image: "/images/guest-information/room-comfort.jpg",
  },
  {
    title: "Housekeeping & Service",
    items: [
      "Daily housekeeping service",
      "Room service available",
      "Concierge assistance available",
      "Selected suite services may be arranged on request",
    ],
    image: "/images/guest-information/housekeeping-service.jpg",
  },
  {
    title: "Family Services",
    items: [
      "Babysitting can be arranged on request",
      "Family-friendly accommodation options available",
      "Children’s play area within the resort",
      "Family stay assistance through Front Office / Concierge",
    ],
    image: "/images/guest-information/family-services.jpg",
  },
  {
    title: "Resort Facilities",
    items: [
      "3 outdoor pools",
      "5 restaurants",
      "3 bars",
      "Armonia Spa",
      "Conference facilities",
      "Open-air amphitheater",
    ],
    image: "/images/guest-information/resort-facilities.jpg",
  },
  {
    title: "Mobility & Access",
    items: [
      "2 cable railways (funiculars)",
      "Private parking available",
      "EV charging stations available",
      "Rent an EV service available",
    ],
    image: "/images/guest-information/mobility-access.jpg",
  },
] as const;

const practicalNotes = [
  "Cayo’s spot on the beach of Plaka forms part of the wider resort experience.",
  "Stone Beach by Cayo connects beach access, drinks, dining, and views toward Spinalonga.",
  "Nearby ATM / banking access can be reached within the wider Elounda / Plaka area.",
  "Dress code may apply in selected dining venues during evening service.",
];

export default function GuestInformationPage() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <Header />

      <VideoHero
        video="/videos/guest-information/hero.mp4"
        image="/images/guest-information/hero.jpg"
        heightClassName="min-h-[72vh] md:min-h-[84vh]"
      >
        <div className="max-w-5xl">
          <div className="eyebrow text-white/70">Guest Information</div>

          <h1 className="mt-4 text-[clamp(3.1rem,7vw,6.3rem)] font-light leading-[0.9] tracking-[-0.05em] text-white">
            Practical guidance,
            <br />
            presented with
            <br />
            premium clarity.
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-white/82 md:text-lg">
            Essential stay information gathered into one clear destination page,
            designed to support arrival, comfort, service, and a smoother guest
            experience from the very beginning.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#stay-information" className="cta-button">
              Explore Information
            </a>

            <Link
              href="/contact"
              className="outline-button !border-white/35 !text-white"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </VideoHero>

      <section id="stay-information" className="py-24 md:py-30">
        <div className="container grid gap-14 md:grid-cols-[1.02fr_0.98fr] md:items-end">
          <div>
            <div className="eyebrow">Stay Information</div>
            <h2 className="section-title mt-4">
              Everything a guest
              <br />
              should know before
              <br />
              and during the stay.
            </h2>
          </div>

          <div>
            <p className="section-copy">
              This page brings together key operational and stay-related
              information, from arrival timing and in-room comfort to family
              support, practical mobility, and resort-wide facilities.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-30">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2">
            {stayInformation.map((group) => (
              <article
                key={group.title}
                className="group overflow-hidden rounded-[34px] bg-white transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_70px_rgba(0,0,0,0.08)]"
                style={{ border: "1px solid var(--border)" }}
              >
                <div className="relative h-[16rem] overflow-hidden bg-[#d8d1c6]">
                  <div
                    className="absolute inset-0 transition duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                    style={{
                      backgroundImage: `url(${group.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/34 via-black/8 to-transparent" />

                  <div className="absolute left-6 top-6">
                    <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-white/90 backdrop-blur-md">
                      Guest Information
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-[2rem] font-light leading-[1.04] tracking-[-0.04em] text-white">
                      {group.title}
                    </h3>
                  </div>
                </div>

                <div className="p-8 md:p-9">
                  <div className="grid gap-4">
                    {group.items.map((item) => (
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
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-30">
        <div className="container grid gap-12 md:grid-cols-[0.95fr_1.05fr] md:items-start">
          <div>
            <div className="eyebrow">Practical Notes</div>
            <h2 className="section-title mt-4">
              Useful context for
              <br />
              a smoother guest
              <br />
              journey.
            </h2>

            <p className="section-copy mt-6 max-w-xl">
              Beyond the essentials, a few practical notes help connect the
              wider resort experience with beach access, dining rhythm, local
              context, and stay preparation.
            </p>
          </div>

          <div className="grid gap-4">
            {practicalNotes.map((item) => (
              <div
                key={item}
                className="rounded-[20px] border bg-white px-5 py-5 text-base text-neutral-700"
                style={{ borderColor: "var(--border)" }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-24">
        <div className="container overflow-hidden rounded-[40px] bg-[#171717] text-white">
          <div className="grid gap-0 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="px-8 py-12 md:px-12 md:py-14">
              <div className="eyebrow text-white/60">Need Assistance</div>
              <h2 className="mt-4 text-[clamp(2.5rem,4.9vw,4.8rem)] font-light leading-[0.96] tracking-[-0.04em]">
                For tailored
                <br />
                requests, the team
                <br />
                is here to help.
              </h2>
            </div>

            <div className="px-8 py-12 md:px-12 md:py-14">
              <p className="max-w-xl text-base leading-8 text-white/72 md:text-lg">
                For arrival planning, family requests, dining guidance,
                accommodation questions, or special arrangements, guests can
                contact the resort directly before arrival.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex min-h-[3.25rem] items-center justify-center rounded-full border border-white/30 bg-transparent px-6 text-sm text-white transition duration-300 hover:bg-white hover:text-black"
                >
                  Contact Us
                </Link>

                <a
                  href="mailto:reservations@cayoresort.com"
                  className="inline-flex min-h-[3.25rem] items-center justify-center rounded-full bg-white px-6 text-sm text-black transition duration-300 hover:opacity-90"
                >
                  Email Reservations
                </a>

                <a
                  href={bookingLinks.general}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-[3.25rem] items-center justify-center rounded-full border border-white/30 bg-transparent px-6 text-sm text-white transition duration-300 hover:bg-white hover:text-black"
                >
                  Check Availability
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}