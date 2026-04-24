"use client";

import Link from "../ui/LocalizedLink";
import { useLocale } from "../../lib/useLocale";
import { getDictionary } from "../../lib/getDictionary";

function splitTitle(title: string) {
  return title.split("\n").map((line, index, lines) => (
    <span key={`${line}-${index}`}>
      {line}
      {index < lines.length - 1 ? <br /> : null}
    </span>
  ));
}

export default function AccommodationPreview() {
  const locale = useLocale();
  const t = getDictionary(locale).accommodationPreview;

  return (
    <section className="pb-28 md:pb-36">
      <div className="container">
        <div className="grid gap-12 md:grid-cols-[0.95fr_1.05fr] md:items-end">
          <div>
            <div className="eyebrow">{t.eyebrow}</div>

            <h2 className="mt-5 text-[clamp(3rem,6vw,5.8rem)] font-light leading-[0.92] tracking-[-0.05em]">
              {splitTitle(t.title)}
            </h2>
          </div>

          <div>
            <p className="max-w-xl text-[1.05rem] leading-8 text-neutral-600">
              {t.copy}
            </p>

            <div className="mt-8">
              <Link href="/accommodation" className="outline-button">
                {t.cta}
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <article
            className="group overflow-hidden rounded-[38px] bg-white"
            style={{ border: "1px solid var(--border)" }}
          >
            <Link href="/accommodation/rooms" className="block">
              <div className="relative h-[32rem] overflow-hidden bg-[#d9d2c7]">
                <div
                  className="absolute inset-0 transition duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                  style={{
                    backgroundImage:
                      "url('/images/accommodation/rooms-preview.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />

                <div className="absolute left-7 right-7 top-7 flex items-start justify-between">
                  <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-white/88 backdrop-blur-md">
                    {t.rooms}
                  </span>

                  <span className="rounded-full border border-white/20 bg-black/15 px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-white/78 backdrop-blur-md">
                    {t.roomsCount}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-7 md:p-8">
                  <h3 className="text-[2.3rem] font-light leading-[0.98] tracking-[-0.04em] text-white md:text-[2.7rem]">
                    {t.rooms}
                  </h3>

                  <p className="mt-4 max-w-md text-sm leading-7 text-white/78">
                    {t.roomsCopy}
                  </p>

                  <div className="mt-6 inline-flex items-center gap-3 text-sm text-white/92">
                    <span>{t.roomsCta}</span>
                    <span
                      className="transition duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </article>

          <article
            className="group overflow-hidden rounded-[38px] bg-white"
            style={{ border: "1px solid var(--border)" }}
          >
            <Link href="/accommodation/suites" className="block">
              <div className="relative h-[32rem] overflow-hidden bg-[#d7d0c5]">
                <div
                  className="absolute inset-0 transition duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                  style={{
                    backgroundImage:
                      "url('/images/accommodation/suites-preview.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />

                <div className="absolute left-7 right-7 top-7 flex items-start justify-between">
                  <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-white/88 backdrop-blur-md">
                    {t.suites}
                  </span>

                  <span className="rounded-full border border-white/20 bg-black/15 px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-white/78 backdrop-blur-md">
                    {t.suitesCount}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-7 md:p-8">
                  <h3 className="text-[2.3rem] font-light leading-[0.98] tracking-[-0.04em] text-white md:text-[2.7rem]">
                    {t.suites}
                  </h3>

                  <p className="mt-4 max-w-md text-sm leading-7 text-white/78">
                    {t.suitesCopy}
                  </p>

                  <div className="mt-6 inline-flex items-center gap-3 text-sm text-white/92">
                    <span>{t.suitesCta}</span>
                    <span
                      className="transition duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}