"use client";

import { useEffect } from "react";

export default function MotionInitializer() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const root = document.documentElement;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      root.classList.add("reduced-motion");
      return;
    }

    const selectors = [
      "main section .eyebrow",
      "main section .section-title",
      "main section .section-copy",
      "main section h2",
      "main section h3",
      "main section article",
      "main section .rounded-panel",
      "main section img",
      "main section video",
      "footer",
    ];

    const elements = new Set<HTMLElement>();

    selectors.forEach((selector) => {
      document.querySelectorAll<HTMLElement>(selector).forEach((el) => {
        elements.add(el);
      });
    });

    const targets = Array.from(elements).filter(
      (el) => el.dataset.motionReady !== "true"
    );

    targets.forEach((el, index) => {
      el.dataset.motionReady = "true";
      el.classList.add("motion-reveal");
      el.style.setProperty("--motion-delay", `${Math.min(index * 20, 220)}ms`);

      if (el.matches("img, video")) {
        el.classList.add("motion-image");
      } else if (el.matches("article, .rounded-panel")) {
        el.classList.add("motion-scale");
      } else {
        el.classList.add("motion-fade-up");
      }
    });

    if (!("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("motion-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            el.classList.add("motion-visible");
            observer.unobserve(el);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    targets.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}