"use client";

import Link from "../ui/LocalizedLink";
import { useEffect, useState } from "react";
import { bookingLinks } from "../../data/booking";
import { siteContent } from "../../data/site-content";
import LanguageSwitcher from "../ui/LanguageSwitcher";
import { useLocale } from "../../lib/useLocale";
import { getDictionary } from "../../lib/getDictionary";

export default function Header() {
  const locale = useLocale();
  const t = getDictionary(locale);

  const [scrolled, setScrolled] = useState(false);
  const [accommodationOpen, setAccommodationOpen] = useState(false);
  const [eventsOpen, setEventsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAccommodationOpen, setMobileAccommodationOpen] = useState(false);
  const [mobileEventsOpen, setMobileEventsOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 26);

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const DesktopLogo = () => (
    <Link
      href="/"
      aria-label={siteContent.brand.name}
      className="flex flex-col items-center justify-center text-center"
    >
      {!logoError ? (
        <img
          src="/logo/cayo-logo.svg"
          alt={siteContent.brand.name}
          className="h-[42px] w-auto object-contain md:h-[50px]"
          onError={() => setLogoError(true)}
        />
      ) : (
        <>
          <div
            className="text-[1.75rem] leading-none tracking-[0.28em]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            CAYO
          </div>
          <div className="mt-1 text-[10px] tracking-[0.34em] text-black/70">
            EXCLUSIVE RESORT &amp; SPA
          </div>
        </>
      )}
    </Link>
  );

  const MobileLogo = () => (
    <Link
      href="/"
      aria-label={siteContent.brand.name}
      className="flex items-center"
      onClick={() => setMobileOpen(false)}
    >
      {!logoError ? (
        <img
          src="/logo/cayo-logo.svg"
          alt={siteContent.brand.name}
          className="h-10 w-auto object-contain"
          onError={() => setLogoError(true)}
        />
      ) : (
        <div className="pt-1">
          <div className="text-sm tracking-[0.35em]">CAYO</div>
          <div className="mt-1 text-[9px] tracking-[0.22em] text-black/65">
            EXCLUSIVE RESORT &amp; SPA
          </div>
        </div>
      )}
    </Link>
  );

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "border-b bg-white/88 shadow-[0_10px_34px_rgba(0,0,0,0.04)] backdrop-blur-xl"
          : "bg-white/62 backdrop-blur-md"
      }`}
      style={{ borderColor: "var(--border)" }}
    >
      <div className="container hidden xl:grid xl:grid-cols-[1fr_auto_1fr] xl:items-center xl:gap-8 xl:py-5">
        <div className="flex items-center gap-7">
          <Link href="/the-resort" className="nav-link whitespace-nowrap">
            {t.nav.resort}
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setAccommodationOpen(true)}
            onMouseLeave={() => setAccommodationOpen(false)}
          >
            <button className="nav-link flex items-center gap-2 whitespace-nowrap">
              {t.nav.accommodation}
              <span className="text-[10px]">▾</span>
            </button>

            <div
              className={`absolute left-0 top-full mt-5 w-[820px] rounded-[30px] border bg-white/96 p-5 shadow-[0_30px_90px_rgba(0,0,0,0.10)] backdrop-blur-xl transition-all duration-300 ${
                accommodationOpen
                  ? "visible translate-y-0 opacity-100"
                  : "invisible -translate-y-2 opacity-0"
              }`}
              style={{ borderColor: "var(--border)" }}
            >
              <div className="grid gap-5 md:grid-cols-[1.02fr_0.98fr]">
                <div className="grid gap-5">
                  <div
                    className="min-h-[280px] rounded-[24px] bg-[#d8d1c6]"
                    style={{
                      backgroundImage: "url('/images/rooms/room-listing.jpg')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />

                  <div
                    className="rounded-[22px] border bg-[#faf8f3] p-5"
                    style={{ borderColor: "var(--border)" }}
                  >
                    <div className="eyebrow">
                      {t.mega.accommodationEyebrow}
                    </div>
                    <p className="mt-3 text-[0.96rem] leading-7 text-neutral-600">
                      {t.mega.accommodationCopy}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col justify-between">
                  <div>
                    <div className="eyebrow">{t.mega.stayExperience}</div>
                    <h3 className="mt-3 text-[2.2rem] font-light leading-[1.02] tracking-[-0.04em]">
                      {t.mega.stayTitle}
                    </h3>
                  </div>

                  <div className="mt-8 grid gap-4">
                    <Link
                      href="/accommodation"
                      className="mega-link rounded-[22px] border p-5"
                      style={{ borderColor: "var(--border)" }}
                    >
                      <div className="text-2xl font-light">
                        {t.nav.accommodationOverview}
                      </div>
                      <p className="mt-2 text-sm leading-6 text-neutral-600">
                        {t.mega.overviewCopy}
                      </p>
                    </Link>

                    <Link
                      href="/accommodation/rooms"
                      className="mega-link rounded-[22px] border p-5"
                      style={{ borderColor: "var(--border)" }}
                    >
                      <div className="text-2xl font-light">{t.nav.rooms}</div>
                      <p className="mt-2 text-sm leading-6 text-neutral-600">
                        {t.mega.roomsCopy}
                      </p>
                    </Link>

                    <Link
                      href="/accommodation/suites"
                      className="mega-link rounded-[22px] border p-5"
                      style={{ borderColor: "var(--border)" }}
                    >
                      <div className="text-2xl font-light">{t.nav.suites}</div>
                      <p className="mt-2 text-sm leading-6 text-neutral-600">
                        {t.mega.suitesCopy}
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Link href="/dining" className="nav-link whitespace-nowrap">
            {t.nav.dining}
          </Link>

          <Link href="/wellness" className="nav-link whitespace-nowrap">
            {t.nav.wellness}
          </Link>
        </div>

        <div className="flex justify-center">
          <DesktopLogo />
        </div>

        <div className="flex items-center justify-end gap-7">
          <Link href="/experiences" className="nav-link whitespace-nowrap">
            {t.nav.activities}
          </Link>

          <Link href="/facilities" className="nav-link whitespace-nowrap">
            {t.nav.facilities}
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setEventsOpen(true)}
            onMouseLeave={() => setEventsOpen(false)}
          >
            <button className="nav-link flex items-center gap-2 whitespace-nowrap">
              {t.nav.events}
              <span className="text-[10px]">▾</span>
            </button>

            <div
              className={`absolute right-0 top-full mt-5 w-[720px] rounded-[30px] border bg-white/96 p-5 shadow-[0_30px_90px_rgba(0,0,0,0.10)] backdrop-blur-xl transition-all duration-300 ${
                eventsOpen
                  ? "visible translate-y-0 opacity-100"
                  : "invisible -translate-y-2 opacity-0"
              }`}
              style={{ borderColor: "var(--border)" }}
            >
              <div className="grid gap-5 md:grid-cols-[1fr_1fr]">
                <Link
                  href="/weddings"
                  className="mega-link rounded-[22px] border p-5"
                  style={{ borderColor: "var(--border)" }}
                >
                  <div className="eyebrow">{t.mega.celebrations}</div>
                  <div className="mt-3 text-2xl font-light">
                    {t.nav.weddings}
                  </div>
                  <p className="mt-2 text-sm leading-6 text-neutral-600">
                    {t.mega.weddingsCopy}
                  </p>
                </Link>

                <Link
                  href="/conference"
                  className="mega-link rounded-[22px] border p-5"
                  style={{ borderColor: "var(--border)" }}
                >
                  <div className="eyebrow">{t.mega.businessEvents}</div>
                  <div className="mt-3 text-2xl font-light">
                    {t.nav.conference}
                  </div>
                  <p className="mt-2 text-sm leading-6 text-neutral-600">
                    {t.mega.conferenceCopy}
                  </p>
                </Link>
              </div>

              <div className="mt-5">
                <Link
                  href="/events"
                  className="inline-flex min-h-12 items-center justify-center rounded-[18px] border px-5 text-sm text-black/75 transition hover:text-black"
                  style={{ borderColor: "var(--border)" }}
                >
                  {t.nav.eventsOverview}
                </Link>
              </div>
            </div>
          </div>

          <a
            href={siteContent.externalLinks.rentAnEv}
            target="_blank"
            rel="noreferrer"
            className="nav-link whitespace-nowrap"
          >
            {t.nav.rentEv}
          </a>

          <Link href="/offers" className="nav-link whitespace-nowrap">
            {t.nav.offers}
          </Link>

          <Link
            href="/contact"
            className="whitespace-nowrap text-sm text-black/70 transition hover:text-black"
          >
            {t.nav.contact}
          </Link>

          <LanguageSwitcher />

          <a
            href={bookingLinks.general}
            target="_blank"
            rel="noreferrer"
            className="cta-button whitespace-nowrap text-sm"
          >
            {t.nav.bookNow}
          </a>
        </div>
      </div>

      <div className="container hidden items-center justify-between py-4 md:flex xl:hidden">
        <div className="flex items-center gap-5">
          <DesktopLogo />
        </div>

        <div className="flex items-center gap-3">
          <Link href="/accommodation" className="nav-link whitespace-nowrap">
            {t.nav.accommodation}
          </Link>

          <Link href="/dining" className="nav-link whitespace-nowrap">
            {t.nav.dining}
          </Link>

          <Link href="/wellness" className="nav-link whitespace-nowrap">
            {t.nav.wellness}
          </Link>

          <LanguageSwitcher />

          <button
            className="inline-flex h-11 items-center justify-center rounded-full border px-4 text-sm"
            style={{ borderColor: "var(--border)" }}
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            {t.nav.menu}
          </button>
        </div>
      </div>

      <div className="container flex items-center justify-between py-4 md:hidden">
        <MobileLogo />

        <div className="flex items-center gap-4">
          <LanguageSwitcher />

          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border"
            style={{ borderColor: "var(--border)" }}
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <span className="text-xl">☰</span>
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-[60] bg-black/40 transition ${
          mobileOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      <div
        className={`fixed right-0 top-0 z-[70] h-screen w-[88vw] max-w-[430px] bg-white px-6 py-6 transition-transform duration-300 ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <MobileLogo />

          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border"
            style={{ borderColor: "var(--border)" }}
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <span className="text-xl">×</span>
          </button>
        </div>

        <div className="mt-10 flex flex-col gap-1">
          <Link
            href="/the-resort"
            className="mobile-nav-link"
            onClick={() => setMobileOpen(false)}
          >
            {t.nav.resort}
          </Link>

          <button
            className="mobile-nav-link flex items-center justify-between"
            onClick={() =>
              setMobileAccommodationOpen(!mobileAccommodationOpen)
            }
          >
            <span>{t.nav.accommodation}</span>
            <span className="text-xs">
              {mobileAccommodationOpen ? "−" : "+"}
            </span>
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ${
              mobileAccommodationOpen
                ? "max-h-96 opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div
              className="mt-2 rounded-[22px] border bg-[#faf8f3] p-4"
              style={{ borderColor: "var(--border)" }}
            >
              <Link
                href="/accommodation"
                className="mobile-sub-link"
                onClick={() => setMobileOpen(false)}
              >
                {t.nav.accommodationOverview}
              </Link>

              <Link
                href="/accommodation/rooms"
                className="mobile-sub-link"
                onClick={() => setMobileOpen(false)}
              >
                {t.nav.rooms}
              </Link>

              <Link
                href="/accommodation/suites"
                className="mobile-sub-link"
                onClick={() => setMobileOpen(false)}
              >
                {t.nav.suites}
              </Link>
            </div>
          </div>

          <Link
            href="/dining"
            className="mobile-nav-link"
            onClick={() => setMobileOpen(false)}
          >
            {t.nav.dining}
          </Link>

          <Link
            href="/wellness"
            className="mobile-nav-link"
            onClick={() => setMobileOpen(false)}
          >
            {t.nav.wellness}
          </Link>

          <Link
            href="/experiences"
            className="mobile-nav-link"
            onClick={() => setMobileOpen(false)}
          >
            {t.nav.activities}
          </Link>

          <Link
            href="/facilities"
            className="mobile-nav-link"
            onClick={() => setMobileOpen(false)}
          >
            {t.nav.facilities}
          </Link>

          <button
            className="mobile-nav-link flex items-center justify-between"
            onClick={() => setMobileEventsOpen(!mobileEventsOpen)}
          >
            <span>{t.nav.events}</span>
            <span className="text-xs">{mobileEventsOpen ? "−" : "+"}</span>
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ${
              mobileEventsOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div
              className="mt-2 rounded-[22px] border bg-[#faf8f3] p-4"
              style={{ borderColor: "var(--border)" }}
            >
              <Link
                href="/events"
                className="mobile-sub-link"
                onClick={() => setMobileOpen(false)}
              >
                {t.nav.eventsOverview}
              </Link>

              <Link
                href="/weddings"
                className="mobile-sub-link"
                onClick={() => setMobileOpen(false)}
              >
                {t.nav.weddings}
              </Link>

              <Link
                href="/conference"
                className="mobile-sub-link"
                onClick={() => setMobileOpen(false)}
              >
                {t.nav.conference}
              </Link>
            </div>
          </div>

          <a
            href={siteContent.externalLinks.rentAnEv}
            target="_blank"
            rel="noreferrer"
            className="mobile-nav-link"
            onClick={() => setMobileOpen(false)}
          >
            {t.nav.rentEv}
          </a>

          <Link
            href="/offers"
            className="mobile-nav-link"
            onClick={() => setMobileOpen(false)}
          >
            {t.nav.offers}
          </Link>

          <Link
            href="/guest-information"
            className="mobile-nav-link"
            onClick={() => setMobileOpen(false)}
          >
            {t.nav.guestInformation}
          </Link>

          <Link
            href="/contact"
            className="mobile-nav-link"
            onClick={() => setMobileOpen(false)}
          >
            {t.nav.contact}
          </Link>
        </div>

        <div className="mt-8 flex justify-center">
          <LanguageSwitcher />
        </div>

        <div className="mt-8">
          <a
            href={bookingLinks.general}
            target="_blank"
            rel="noreferrer"
            className="outline-button w-full justify-center"
            onClick={() => setMobileOpen(false)}
          >
            {t.nav.bookNow}
          </a>
        </div>
      </div>
    </header>
  );
}