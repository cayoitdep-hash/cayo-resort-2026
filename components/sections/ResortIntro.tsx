"use client";

import Link from "next/link";
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

export default function ResortIntro() {
  const locale = useLocale();
  const t = getDictionary(locale);

  return (
    <section className="relative py-28 md:py-36">
      <div className="container">
        <div className="grid gap-16 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          
          {/* TEXT */}
          <div>
            <div className="eyebrow">{t.resortIntro.eyebrow}</div>

            <h2 className="mt-5 text-[clamp(3rem,6vw,6rem)] font-light leading-[0.92] tracking-[-0.05em]">
              {splitTitle(t.resortIntro.title)}
            </h2>

            <p className="mt-8 max-w-xl text-[1.05rem] leading-8 text-neutral-600">
              {t.resortIntro.copy}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/the-resort" className="cta-button">
                {t.resortIntro.ctaPrimary}
              </Link>

              <Link href="/contact" className="outline-button">
                {t.resortIntro.ctaSecondary}
              </Link>
            </div>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div
              className="h-[38rem] rounded-[38px] bg-[#d9d2c7]"
              style={{
                backgroundImage: "url('/images/resort/intro.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            <div className="absolute -bottom-10 left-6 right-6 rounded-[24px] bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
              <div className="eyebrow">{t.resortIntro.locationTitle}</div>
              <p className="mt-2 text-sm text-neutral-600 leading-7">
                {t.resortIntro.locationCopy}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}