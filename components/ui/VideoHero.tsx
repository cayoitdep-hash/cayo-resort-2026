"use client";

import { useMemo } from "react";

type VideoHeroProps = {
  video?: string;
  image?: string;
  children: React.ReactNode;
  heightClassName?: string;
  overlayClassName?: string;
};

export default function VideoHero({
  video,
  image,
  children,
  heightClassName = "min-h-[88vh] md:min-h-[96vh]",
  overlayClassName = "",
}: VideoHeroProps) {
  const hasVideo = useMemo(() => Boolean(video), [video]);

  return (
    <section
      className={`relative flex items-end overflow-hidden bg-[#141414] text-white ${heightClassName}`}
    >
      <div className="absolute inset-0">
        {hasVideo ? (
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={image}
          >
            <source src={video} />
          </video>
        ) : image ? (
          <div
            className="absolute inset-0 h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          />
        ) : null}

        <div className={`hero-overlay absolute inset-0 ${overlayClassName}`} />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(8,10,12,0.62) 0%, rgba(8,10,12,0.34) 34%, rgba(8,10,12,0.14) 58%, rgba(8,10,12,0.04) 100%)",
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 18% 68%, rgba(0,0,0,0.28) 0%, rgba(0,0,0,0.14) 28%, rgba(0,0,0,0) 60%)",
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0.03) 26%, rgba(0,0,0,0) 52%)",
          }}
        />
      </div>

      <div className="container relative z-10 w-full pb-18 pt-40 md:pb-24 md:pt-44">
        {children}
      </div>
    </section>
  );
}