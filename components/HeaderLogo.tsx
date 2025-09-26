"use client";

export default function HeaderLogo() {
  return (
    <img
      src="/orinowo-hoodie.png"
      alt="Orinowo"
      className="h-8 w-8 rounded-md object-cover ring-2 ring-gold-500/50"
      onError={(e) => {
        (e.currentTarget as HTMLImageElement).src = "/orinowo-favicon.svg";
      }}
    />
  );
}