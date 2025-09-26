"use client";

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc: string;
}

export default function ImageWithFallback({
  src,
  alt,
  className,
  fallbackSrc,
}: ImageWithFallbackProps) {
  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    (e.currentTarget as HTMLImageElement).src = fallbackSrc;
  };

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={handleError}
    />
  );
}