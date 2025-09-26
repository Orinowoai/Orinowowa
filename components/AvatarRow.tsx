import React from "react";

const COLORS = [
  "bg-primary",
  "bg-secondary",
  "bg-accent",
  "bg-success",
  "bg-warn",
  "bg-danger",
  "bg-base",
  "bg-surface",
  "bg-card",
  "bg-primary",
  "bg-secondary",
  "bg-accent",
];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export default function AvatarRow({ names = [] }: { names?: string[] }) {
  const fallbackNames = [
    "Ada Lovelace",
    "Sun Ra",
    "Bjork",
    "Daft Punk",
    "Grimes",
    "Aphex Twin",
    "SOPHIE",
    "J Dilla",
    "Imogen Heap",
    "Brian Eno",
    "St. Vincent",
    "Flying Lotus",
  ];
  const displayNames =
    names && names.length >= 12 ? names.slice(0, 12) : fallbackNames;
  return (
    <div className="flex gap-3 flex-wrap justify-center py-2">
      {displayNames.map((name, i) => (
        <span
          key={name}
          className={`w-10 h-10 flex items-center justify-center rounded-full ring-2 ring-offset-2 ring-primary shadow-lg text-white font-bold text-lg scale-100 hover:scale-105 transition-transform animate-glowPulse ${COLORS[i % COLORS.length]}`}
          title={name}
          aria-label={`Avatar for ${name}`}
        >
          {getInitials(name)}
        </span>
      ))}
    </div>
  );
}
