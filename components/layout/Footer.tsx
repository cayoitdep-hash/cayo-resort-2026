import Link from "next/link";

const mediaKitUrl =
  "https://cayoresort.sharepoint.com/sites/ExternalDocumentCenter/Shared%20Documents/Forms/Media%20Kit.aspx?id=%2Fsites%2FExternalDocumentCenter%2FShared%20Documents%2FMediaKit&viewid=7f8c221c%2D35b9%2D4dc8%2D8d64%2D1f3b1fcf5c2f&view=0";

const socialLinks = [
  {
    href: "https://www.facebook.com/cayoresort/",
    label: "Facebook",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-[18px] w-[18px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 8h2.5V4.5H14c-2.6 0-4.5 1.8-4.5 4.7V11H7v3.3h2.5V20H13v-5.7h3.1L16.6 11H13V9.5c0-1 .6-1.5 1-1.5Z" />
      </svg>
    ),
  },
  {
    href: "https://www.instagram.com/cayoresort/",
    label: "Instagram",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-[18px] w-[18px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="4.5" y="4.5" width="15" height="15" rx="4.2" />
        <circle cx="12" cy="12" r="3.6" />
        <circle cx="17.2" cy="6.8" r="0.7" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    href: "https://www.youtube.com/channel/UCNyEo54LO2FV1HUYEp7c_pA",
    label: "YouTube",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-[18px] w-[18px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 12.2c0 2.1-.2 3.5-.6 4.2-.3.6-.8 1-1.4 1.2-1.4.4-4.2.4-7 .4s-5.6 0-7-.4c-.6-.2-1.1-.6-1.4-1.2C3.2 15.7 3 14.3 3 12.2s.2-3.5.6-4.2c.3-.6.8-1 1.4-1.2C6.4 6.4 9.2 6.4 12 6.4s5.6 0 7 .4c.6.2 1.1.6 1.4 1.2.4.7.6 2.1.6 4.2Z" />
        <path d="m10 9 5 3-5 3V9Z" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    href: "https://www.linkedin.com/company/80068982/",
    label: "LinkedIn",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-[18px] w-[18px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M7.2 9.3V18" />
        <path d="M7.2 6.4h.01" />
        <path d="M11.2 18v-4.9c0-1.9 1-3.1 2.8-3.1 1.7 0 2.5 1.1 2.5 3V18" />
        <path d="M11.2 11v-1.7" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-[#f7f3ec]">
      <div className="container py-20 md:py-24">
        <div className="grid gap-14 lg:grid-cols-[1.15fr_0.75fr_0.85fr]">
          {/* Brand / contact */}
          <div>
            <div className="eyebrow">Cayo Exclusive Resort &amp; Spa</div>

            <h2 className="mt-5 text-[clamp(2.6rem,5vw,4.8rem)] font-light leading-[0.95] tracking-[-0.05em]">
              A refined expression
              <br />
              of Cretan luxury.
            </h2>

            <p className="mt-8 max-w-xl text-[1rem] leading-8 text-neutral-600">
              Architecture, privacy, gastronomy, wellness, and uninterrupted
              views over Spinalonga come together in one immersive resort
              experience above Elounda.
            </p>

            <div className="mt-10 space-y-3 text-[1rem] text-neutral-700">
              <p>
                <a href="tel:+302841044700" className="hover:opacity-70">
                  +30 28410 44700
                </a>
              </p>
              <p>
                <a href="mailto:info@cayoresort.com" className="hover:opacity-70">
                  info@cayoresort.com
                </a>
              </p>
              <p>
                <a
                  href="mailto:reservations@cayoresort.com"
                  className="hover:opacity-70"
                >
                  reservations@cayoresort.com
                </a>
              </p>
              <p>Schisma Elounda PO Box 108 – Plaka 72053 Crete Island – Greece</p>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="group inline-flex h-[58px] w-[58px] items-center justify-center rounded-full border transition duration-300 hover:-translate-y-0.5"
                  style={{
                    borderColor: "rgba(186, 164, 149, 0.72)",
                    color: "rgba(186, 164, 149, 0.92)",
                  }}
                >
                  <span className="transition duration-300 group-hover:scale-[1.06]">
                    {item.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <div className="eyebrow">Explore</div>

            <nav className="mt-6 flex flex-col gap-4 text-[0.98rem] text-neutral-700">
              <Link href="/the-resort" className="hover:opacity-70">
                The Resort
              </Link>
              <Link href="/accommodation" className="hover:opacity-70">
                Accommodation
              </Link>
              <Link href="/facilities" className="hover:opacity-70">
                Facilities
              </Link>
              <Link href="/dining" className="hover:opacity-70">
                Gastronomy
              </Link>
              <Link href="/wellness" className="hover:opacity-70">
                Wellness
              </Link>
              <Link href="/experiences" className="hover:opacity-70">
                Experiences
              </Link>
              <Link href="/events" className="hover:opacity-70">
                Events
              </Link>
              <Link href="/offers" className="hover:opacity-70">
                Exclusive Offers
              </Link>
              <Link href="/guest-information" className="hover:opacity-70">
                Guest Information
              </Link>
              <Link href="/rent-an-ev" className="hover:opacity-70">
                Rent an EV
              </Link>
              <Link href="/contact" className="hover:opacity-70">
                Contact
              </Link>
            </nav>
          </div>

          {/* Policies / utility */}
          <div>
            <div className="eyebrow">Useful Links</div>

            <nav className="mt-6 flex flex-col gap-4 text-[0.98rem] text-neutral-700">
              <Link href="/contact" className="hover:opacity-70">
                Contact Us
              </Link>
              <Link href="/cookie-policy" className="hover:opacity-70">
                Cookie Policy
              </Link>
              <Link href="/privacy-policy" className="hover:opacity-70">
                Privacy Policy
              </Link>
              <Link
                href="/environmental-policy-sustainability"
                className="hover:opacity-70"
              >
                Environmental Policy &amp; Sustainability
              </Link>
              <Link href="/website-terms-of-use" className="hover:opacity-70">
                Website Terms of Use
              </Link>
              <Link
                href="/policy-on-the-prevention-and-combating-of-violence-and-harassment"
                className="hover:opacity-70"
              >
                Policy on the Prevention and Combating of Violence and Harassment
              </Link>
              <Link href="/career-opportunities" className="hover:opacity-70">
                Career Opportunities
              </Link>

              <a
                href={mediaKitUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:opacity-70"
              >
                <span>Media Kit</span>
                <span aria-hidden="true">↗</span>
              </a>
            </nav>
          </div>
        </div>

        <div className="mt-16 border-t border-black/6 pt-7">
          <div className="flex flex-col gap-4 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between">
            <div>© 2026 Cayo Exclusive Resort &amp; Spa</div>
            <div>Check-in 15:00 / Check-out 11:00</div>
          </div>
        </div>
      </div>
    </footer>
  );
}