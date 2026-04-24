"use client";

import { useState } from "react";

type AutoHideImageProps = {
  src: string;
  alt: string;
  wrapperClassName?: string;
  imageClassName?: string;
  backgroundClassName?: string;
};

export default function AutoHideImage({
  src,
  alt,
  wrapperClassName = "",
  imageClassName = "",
  backgroundClassName = "",
}: AutoHideImageProps) {
  const [hidden, setHidden] = useState(false);

  if (hidden) return null;

  return (
    <div className={`${backgroundClassName} ${wrapperClassName}`}>
      <img
        src={src}
        alt={alt}
        className={imageClassName}
        loading="lazy"
        onError={() => setHidden(true)}
      />
    </div>
  );
}