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

export default function BookingCTA() {
  const locale = useLocale();
  const t = getDictionary(locale).bookingCTA;

  return (
    <section className="pb-24 md:pb-32">
      <div className="container">
        <div className="overflow-hidden rounded-[42px] bg-[#171717] text-white">
          <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
            
            {/* LEFT */}
            <div
              className="relative min-h-[26rem] bg-[#1e1e1e]"
              style={{
                backgroundImage: "url('/images/home/booking-cta.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/42 via-black/18 to-transparent" />

              <div className="absolute left-8 right-8 top-8 flex items-start justify-between">
                <span className="rounded-full border border-white/20 bg-white/8 px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-white/82 backdrop-blur-md">
                  {t.badge}
                </span>
              </div>

              <div className="absolute bottom-8 left-8 right-8">
                <div className="eyebrow text-white/60">{t.eyebrow}</div>

                <h2 className="mt-4 text-[clamp(2.4rem,4.5vw,4.4rem)] font-light leading-[0.95] tracking-[-0.05em]">
                  {splitTitle(t.title)}
                </h2>
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex items-center px-8 py-12 md:px-12 md:py-14">
              <div className="max-w-xl">
                <div className="eyebrow text-white/60">
                  {t.rightEyebrow}
                </div>

                <p className="mt-6 text-[1.02rem] leading-8 text-white/72">
                  {t.copy1}
                </p>

                <p className="mt-6 text-[1.02rem] leading-8 text-white/72">
                  {t.copy2}
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    href="https://cayoresort.reserve-online.net/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-[3.25rem] items-center justify-center rounded-full bg-white px-6 text-sm text-black transition duration-300 hover:opacity-90"
                  >
                    {t.ctaPrimary}
                  </a>

                  <Link
                    href="/contact"
                    className="inline-flex min-h-[3.25rem] items-center justify-center rounded-full border border-white/25 bg-transparent px-6 text-sm text-white transition duration-300 hover:bg-white hover:text-black"
                  >
                    {t.ctaSecondary}
                  </Link>
                </div>

                <div className="mt-10 border-t border-white/10 pt-6 text-sm leading-7 text-white/50">
                  {t.footer}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}