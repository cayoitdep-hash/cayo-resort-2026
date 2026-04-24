"use client";

import { useEffect, useMemo, useState } from "react";

type GalleryLightboxProps = {
  images: string[];
  title: string;
  tone?: "room" | "suite";
};

export default function GalleryLightbox({
  images,
  title,
  tone = "room",
}: GalleryLightboxProps) {
  const validImages = useMemo(() => images.filter(Boolean), [images]);
  const [hiddenImages, setHiddenImages] = useState<string[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const visibleImages = useMemo(
    () => validImages.filter((src) => !hiddenImages.includes(src)),
    [validImages, hiddenImages]
  );

  const bgTone = tone === "suite" ? "bg-[#d7d0c5]" : "bg-[#d8d1c6]";

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }

      if (event.key === "ArrowRight") {
        setActiveIndex((prev) => {
          if (prev === null) return prev;
          return (prev + 1) % visibleImages.length;
        });
      }

      if (event.key === "ArrowLeft") {
        setActiveIndex((prev) => {
          if (prev === null) return prev;
          return (prev - 1 + visibleImages.length) % visibleImages.length;
        });
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, visibleImages.length]);

  const hideImage = (src: string) => {
    setHiddenImages((prev) => (prev.includes(src) ? prev : [...prev, src]));
  };

  const openLightbox = (index: number) => {
    setActiveIndex(index);
  };

  const closeLightbox = () => {
    setActiveIndex(null);
  };

  const goPrev = () => {
    setActiveIndex((prev) => {
      if (prev === null) return prev;
      return (prev - 1 + visibleImages.length) % visibleImages.length;
    });
  };

  const goNext = () => {
    setActiveIndex((prev) => {
      if (prev === null) return prev;
      return (prev + 1) % visibleImages.length;
    });
  };

  const primaryImages = visibleImages.slice(0, 5);
  const secondaryImages = visibleImages.slice(5);

  return (
    <>
      <div className="grid gap-6 md:grid-cols-12">
        {primaryImages.map((image, index) => {
          const spanClass =
            index === 0
              ? "md:col-span-7 min-h-[38rem]"
              : index === 1
                ? "md:col-span-5 min-h-[38rem]"
                : "md:col-span-4 min-h-[22rem]";

          return (
            <button
              key={`${image}-${index}`}
              type="button"
              onClick={() => openLightbox(index)}
              className={`group relative overflow-hidden rounded-[36px] ${bgTone} ${spanClass} text-left`}
            >
              <img
                src={image}
                alt={`${title} gallery ${index + 1}`}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                loading="lazy"
                onError={() => hideImage(image)}
              />
              <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/10" />
            </button>
          );
        })}
      </div>

      {secondaryImages.length > 0 && (
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {secondaryImages.map((image, index) => {
            const realIndex = index + 5;

            return (
              <button
                key={`${image}-${realIndex}`}
                type="button"
                onClick={() => openLightbox(realIndex)}
                className={`group relative min-h-[20rem] overflow-hidden rounded-[30px] ${bgTone} text-left`}
              >
                <img
                  src={image}
                  alt={`${title} gallery ${realIndex + 1}`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                  onError={() => hideImage(image)}
                />
                <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/10" />
              </button>
            );
          })}
        </div>
      )}

      {activeIndex !== null && visibleImages[activeIndex] && (
        <div className="fixed inset-0 z-[120] bg-black/92">
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute right-5 top-5 z-[130] inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 text-2xl text-white backdrop-blur-sm"
            aria-label="Close gallery"
          >
            ×
          </button>

          {visibleImages.length > 1 && (
            <>
              <button
                type="button"
                onClick={goPrev}
                className="absolute left-5 top-1/2 z-[130] inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/5 text-2xl text-white backdrop-blur-sm"
                aria-label="Previous image"
              >
                ‹
              </button>

              <button
                type="button"
                onClick={goNext}
                className="absolute right-5 top-1/2 z-[130] inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/5 text-2xl text-white backdrop-blur-sm"
                aria-label="Next image"
              >
                ›
              </button>
            </>
          )}

          <div
            className="absolute inset-0 z-[121]"
            onClick={closeLightbox}
            aria-hidden="true"
          />

          <div className="relative z-[122] flex h-full items-center justify-center px-6 py-20 md:px-16">
            <img
              src={visibleImages[activeIndex]}
              alt={`${title} full image ${activeIndex + 1}`}
              className="max-h-full max-w-full rounded-[20px] object-contain shadow-[0_20px_80px_rgba(0,0,0,0.45)]"
            />
          </div>

          <div className="absolute bottom-5 left-1/2 z-[130] -translate-x-1/2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur-sm">
            {activeIndex + 1} / {visibleImages.length}
          </div>
        </div>
      )}
    </>
  );
}