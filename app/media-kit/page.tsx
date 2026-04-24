import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Link from "next/link";
import { siteContent } from "../../data/site-content";

const mediaKitIncludes = [
  "Brand imagery and approved visual assets",
  "Resort overview and key property information",
  "Accommodation, gastronomy, wellness, and destination highlights",
  "Selected press, marketing, and partner-use material",
];

const usageNotes = [
  "The media kit is hosted in the resort’s external document center.",
  "Access opens in a separate SharePoint environment.",
  "For specific press or partnership requests, direct contact remains recommended.",
];

export default function MediaKitPage() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <Header />

      <section
        className="border-b pt-40 pb-20 md:pt-48 md:pb-24"
        style={{ borderColor: "var(--border)" }}
      >
        <div className="container">
          <div className="grid gap-12 md:grid-cols-[1.05fr_0.95fr] md:items-end">
            <div>
              <div className="eyebrow">Media Kit</div>
              <h1 className="section-title mt-4">
                Brand assets,
                <br />
                press material,
                <br />
                and resort media.
              </h1>
            </div>

            <div>
              <p className="section-copy">
                This page provides direct access to the official Cayo Exclusive
                Resort &amp; Spa media kit, hosted in the external document
                center for partners, media, and approved brand use.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={siteContent.externalLinks.mediaKit}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-button"
                >
                  Access Media Kit
                </a>

                <Link href="/contact" className="outline-button">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container grid gap-10 md:grid-cols-[0.95fr_1.05fr] md:items-start">
          <div>
            <div className="eyebrow">Overview</div>
            <h2 className="section-title mt-4">
              A cleaner access
              <br />
              point for media
              <br />
              and brand files.
            </h2>
          </div>

          <div>
            <p className="section-copy">
              Rather than moving visitors directly into an external platform
              without context, this page creates a branded transition point for
              approved resort assets, visual material, and selected media-use
              documents.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="container grid gap-6 md:grid-cols-[0.95fr_1.05fr]">
          <div
            className="rounded-[36px] bg-white p-8 md:p-10"
            style={{ border: "1px solid var(--border)" }}
          >
            <div className="eyebrow">Included</div>
            <h2 className="mt-4 text-[2rem] font-light leading-tight md:text-[2.6rem]">
              What the media kit
              <br />
              may include.
            </h2>

            <div className="mt-8 space-y-4">
              {mediaKitIncludes.map((item) => (
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

          <div className="grid gap-6">
            <div
              className="rounded-[36px] bg-white p-8 md:p-10"
              style={{ border: "1px solid var(--border)" }}
            >
              <div className="eyebrow">Access Notes</div>

              <div className="mt-6 space-y-4">
                {usageNotes.map((item) => (
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
              className="rounded-[36px] bg-white p-8 md:p-10"
              style={{ border: "1px solid var(--border)" }}
            >
              <div className="eyebrow">Support</div>
              <p className="section-copy mt-4 max-w-none">
                For press enquiries, collaborations, partnership material, or
                tailored media requests, use the contact page for direct resort
                communication.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={siteContent.externalLinks.mediaKit}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="outline-button"
                >
                  Open External Media Kit
                </a>

                <Link href="/contact" className="outline-button">
                  Contact the Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="container dark-surface rounded-[40px] bg-[#171717] px-8 py-14 text-white md:px-14 md:py-20">
          <div className="grid gap-10 md:grid-cols-[1fr_1fr] md:items-end">
            <div>
              <div className="eyebrow text-white/60">
                External Document Center
              </div>
              <h2 className="mt-4 text-[clamp(2.5rem,5vw,5rem)] font-light leading-[0.95] tracking-[-0.04em]">
                Continue to
                <br />
                the official
                <br />
                media access point.
              </h2>
            </div>

            <div>
              <p className="max-w-xl text-base leading-8 text-white/72 md:text-lg">
                Use the external document center to access the official Cayo
                Exclusive Resort &amp; Spa media kit and associated material.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={siteContent.externalLinks.mediaKit}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[3.25rem] items-center justify-center rounded-full bg-white px-6 text-sm text-black transition duration-300 hover:opacity-90"
                >
                  Access Media Kit
                </a>

                <Link
                  href="/contact"
                  className="inline-flex min-h-[3.25rem] items-center justify-center rounded-full border border-white/30 bg-transparent px-6 text-sm text-white transition duration-300 hover:bg-white hover:text-black"
                >
                  Contact Us
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