"use client";

import { useEffect, useState } from "react";

export default function PageReveal({
  children,
}: {
  children: React.ReactNode;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const id = window.requestAnimationFrame(() => setVisible(true));
    return () => window.cancelAnimationFrame(id);
  }, []);

  return (
    <div className={`page-reveal ${visible ? "page-reveal-visible" : ""}`}>
      {children}
    </div>
  );
}