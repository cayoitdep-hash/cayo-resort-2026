import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Link from "next/link";
import { siteContent } from "../../data/site-content";
import { pageMedia } from "../../data/page-media";

export default function ContactPage() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <Header />

      <section className="relative flex min-h-[72vh] items-end overflow-hidden text-white">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${pageMedia.contact.heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="hero-overlay absolute inset-0" />

        <div className="container relative z-10 pb-16 pt-40 md:pb-24">
          <div className="max-w-4xl">
            <div className="eyebrow text-white/70">Contact</div>

            <h1 className="mt-4 text-[clamp(3.2rem,7vw,6.4rem)] font-light leading-[0.9] tracking-[-0.05em] text-white">
              Let’s plan
              <br />
              your stay at
              <br />
              {siteContent.brand.name}.
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-white/82 md:text-lg">
              Get in touch for general information, reservations, directions,
              and stay-related enquiries presented with the same calm luxury
              language as the rest of the resort experience.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#contact-details" className="cta-button">
                Contact Details
              </a>

              <a
                href={siteContent.contact.reservationsEmailHref}
                className="outline-button !border-white/35 !text-white"
              >
                Email Reservations
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact-details" className="py-24 md:py-30">
        <div className="container grid gap-14 md:grid-cols-[0.92fr_1.08fr]">
          <div>
            <div className="eyebrow">Get in Touch</div>
            <h2 className="section-title mt-4">
              A clear and elegant
              <br />
              contact experience.
            </h2>

            <p className="section-copy mt-6 max-w-xl">
              Whether the request concerns reservations, arrival planning,
              directions, or stay-related arrangements, the team is available to
              guide guests with clarity and care.
            </p>

            <div className="mt-10 space-y-8 text-base text-neutral-700">
              <div>
                <div className="eyebrow">Telephone</div>
                <p className="mt-2 text-lg">
                  <a href={siteContent.contact.phoneHref}>
                    {siteContent.contact.phoneDisplay}
                  </a>
                </p>
              </div>

              <div>
                <div className="eyebrow">For Information</div>
                <p className="mt-2 text-lg">
                  <a href={siteContent.contact.infoEmailHref}>
                    {siteContent.contact.infoEmail}
                  </a>
                </p>
              </div>

              <div>
                <div className="eyebrow">For Reservations</div>
                <p className="mt-2 text-lg">
                  <a href={siteContent.contact.reservationsEmailHref}>
                    {siteContent.contact.reservationsEmail}
                  </a>
                </p>
              </div>

              <div>
                <div className="eyebrow">Address</div>
                <p className="mt-2">{siteContent.contact.addressSingleLine}</p>
              </div>

              <div>
                <div className="eyebrow">Arrivals & Departures</div>
                <p className="mt-2">
                  Check-in: {siteContent.stay.checkIn}
                  <br />
                  Check-out: {siteContent.stay.checkOut}
                </p>
                <p className="mt-3 text-sm text-neutral-500">
                  Early arrival and late departure remain subject to
                  availability and operational confirmation.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            <div
              className="rounded-[36px] bg-white p-8 md:p-10"
              style={{ border: "1px solid var(--border)" }}
            >
              <div className="eyebrow">Enquiry Form</div>
              <h3 className="mt-4 text-[2rem] font-light">
                Send us a message
              </h3>

              <form className="mt-8 space-y-5">
                <div>
                  <label className="mb-2 block text-sm text-neutral-600">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-[18px] border px-4 py-3 outline-none"
                    style={{ borderColor: "var(--border)" }}
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-neutral-600">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full rounded-[18px] border px-4 py-3 outline-none"
                    style={{ borderColor: "var(--border)" }}
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-neutral-600">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-[18px] border px-4 py-3 outline-none"
                    style={{ borderColor: "var(--border)" }}
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-neutral-600">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    className="w-full rounded-[18px] border px-4 py-3 outline-none"
                    style={{ borderColor: "var(--border)" }}
                  />
                </div>

                <button type="submit" className="cta-button">
                  Send Enquiry
                </button>
              </form>
            </div>

            <div
              className="rounded-[36px] bg-white p-8 md:p-10"
              style={{ border: "1px solid var(--border)" }}
            >
              <div className="eyebrow">Direct Assistance</div>
              <h3 className="mt-4 text-[2rem] font-light">
                Prefer direct contact?
              </h3>

              <p className="mt-4 text-[0.98rem] leading-8 text-neutral-500">
                For reservation support, stay planning, special requests, or
                pre-arrival assistance, guests may contact the resort directly.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={siteContent.contact.reservationsEmailHref}
                  className="outline-button"
                >
                  Email Reservations
                </a>

                <a href={siteContent.contact.phoneHref} className="outline-button">
                  Call Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-24">
        <div className="container overflow-hidden rounded-[40px] bg-[#171717] text-white">
          <div className="grid gap-0 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="px-8 py-12 md:px-12 md:py-14">
              <div className="eyebrow text-white/60">Need Guidance</div>
              <h2 className="mt-4 text-[clamp(2.5rem,4.9vw,4.8rem)] font-light leading-[0.96] tracking-[-0.04em]">
                From the first
                <br />
                enquiry to the
                <br />
                final arrival.
              </h2>
            </div>

            <div className="px-8 py-12 md:px-12 md:py-14">
              <p className="max-w-xl text-base leading-8 text-white/72 md:text-lg">
                The contact experience should feel as calm and premium as the
                stay itself, offering direct support for reservations,
                directions, timings, and tailored arrangements.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/guest-information"
                  className="inline-flex min-h-[3.25rem] items-center justify-center rounded-full border border-white/30 bg-transparent px-6 text-sm text-white transition duration-300 hover:bg-white hover:text-black"
                >
                  Guest Information
                </Link>

                <Link
                  href="/accommodation"
                  className="inline-flex min-h-[3.25rem] items-center justify-center rounded-full bg-white px-6 text-sm text-black transition duration-300 hover:opacity-90"
                >
                  View Accommodation
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