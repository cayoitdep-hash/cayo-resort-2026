"use client";

import { socialProofData } from "../../data/social-proof";

export default function AwardsSection() {
  const recognitions = socialProofData.recognitions;
  const loop = [...recognitions, ...recognitions, ...recognitions];

  return (
    <section className="py-14 md:py-20">
      <div className="container">
        <div className="mx-auto max-w-6xl overflow-hidden">
          <div className="relative flex items-center">
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-[var(--background)] to-transparent md:w-36" />
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-[var(--background)] to-transparent md:w-36" />

            <div className="awards-strip-track flex w-max items-center gap-16 md:gap-24">
              {loop.map((item, index) => {
                const logo = (
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="h-12 w-auto max-w-[150px] shrink-0 object-contain opacity-70 transition duration-500 hover:opacity-100 md:h-14 md:max-w-[175px]"
                  />
                );

                if (item.href && item.href !== "#") {
                  return (
                    <a
                      key={`${item.title}-${item.year}-${index}`}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${item.title} ${item.year}`}
                      className="flex shrink-0 items-center justify-center"
                    >
                      {logo}
                    </a>
                  );
                }

                return (
                  <div
                    key={`${item.title}-${item.year}-${index}`}
                    className="flex shrink-0 items-center justify-center"
                  >
                    {logo}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .awards-strip-track {
          animation: awards-strip-scroll 55s linear infinite;
          will-change: transform;
        }

        .awards-strip-track:hover {
          animation-play-state: paused;
        }

        @keyframes awards-strip-scroll {
          from {
            transform: translate3d(0, 0, 0);
          }

          to {
            transform: translate3d(-33.333%, 0, 0);
          }
        }

        @media (max-width: 768px) {
          .awards-strip-track {
            animation-duration: 38s;
          }
        }
      `}</style>
    </section>
  );
}