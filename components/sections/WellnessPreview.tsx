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

export default function WellnessPreview() {
  const locale = useLocale();
  const t = getDictionary(locale).wellnessPreview;

  return (
    <section className="pb-28 md:pb-36">
      <div className="container">
        <div className="grid gap-14 md:grid-cols-[0.98fr_1.02fr] md:items-center">
          <div>
            <div className="eyebrow">{t.eyebrow}</div>

            <h2 className="mt-5 text-[clamp(3rem,6vw,5.8rem)] font-light leading-[0.92] tracking-[-0.05em]">
              {splitTitle(t.title)}
            </h2>

            <p className="mt-8 max-w-xl text-[1.05rem] leading-8 text-neutral-600">
              {t.copy}
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {t.highlights.map((item) => (
                <div
                  key={item}
                  className="rounded-full border px-5 py-3 text-sm text-neutral-700"
                  style={{ borderColor: "var(--border)" }}
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/wellness" className="cta-button">
                {t.ctaPrimary}
              </Link>

              <Link href="/contact" className="outline-button">
                {t.ctaSecondary}
              </Link>
            </div>
          </div>

          <div className="relative">
            <div
              className="h-[40rem] rounded-[38px] bg-[#d7d0c5]"
              style={{
                backgroundImage: "url('/images/wellness/preview-feature.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            <div className="absolute inset-0 rounded-[38px] bg-gradient-to-t from-black/16 via-black/0 to-transparent" />

            <div className="absolute bottom-6 left-6 rounded-[22px] bg-white/92 px-5 py-4 shadow-[0_14px_40px_rgba(0,0,0,0.08)] backdrop-blur-md">
              <div className="eyebrow">{t.imageEyebrow}</div>
              <p className="mt-2 text-sm leading-7 text-neutral-600">
                {t.imageCopy}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}