import React from "react";

export default function Logo({
  className = "",
  size = 48,
  label = true,
}: {
  className?: string;
  size?: number;
  label?: boolean;
}) {
  return (
    <span
      className={`flex items-center gap-3 font-bold text-primary text-lg ${className}`}
      aria-label="Orinowo logo"
    >
      <svg
        width={size}
        height={size * 0.67}
        viewBox="0 0 480 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          display: "inline-block",
          verticalAlign: "middle",
          borderRadius: "8px",
        }}
      >
        <rect width="480" height="320" rx="48" fill="#0B1220" />
        <rect x="120" y="220" width="240" height="24" rx="8" fill="#161a31" />
        <rect x="140" y="244" width="200" height="12" rx="6" fill="#1f2443" />
        <ellipse cx="240" cy="200" rx="32" ry="40" fill="#7C5CFA" />
        <circle
          cx="240"
          cy="180"
          r="20"
          fill="#FFC649"
          stroke="#7C5CFA"
          strokeWidth="4"
        />
        <ellipse
          cx="240"
          cy="180"
          rx="22"
          ry="22"
          fill="none"
          stroke="#14B8A6"
          strokeWidth="4"
        />
        <rect x="222" y="170" width="12" height="24" rx="6" fill="#7C5CFA" />
        <rect x="246" y="170" width="12" height="24" rx="6" fill="#7C5CFA" />
        <path
          d="M240 180 C260 140, 320 120, 380 100"
          stroke="#8B5CF6"
          strokeWidth="4"
          fill="none"
        />
        <path
          d="M240 180 C220 140, 160 120, 100 100"
          stroke="#F59E0B"
          strokeWidth="4"
          fill="none"
        />
        <path
          d="M240 180 C250 160, 270 150, 320 140"
          stroke="#10B981"
          strokeWidth="3"
          fill="none"
        />
        <path
          d="M380 100 Q390 90, 400 100 Q410 110, 420 100"
          stroke="#3B82F6"
          strokeWidth="3"
          fill="none"
        />
        <path
          d="M100 100 Q110 90, 120 100 Q130 110, 140 100"
          stroke="#F43F5E"
          strokeWidth="3"
          fill="none"
        />
        <ellipse cx="390" cy="90" rx="6" ry="3" fill="#FFC649" />
        <ellipse cx="110" cy="90" rx="6" ry="3" fill="#14B8A6" />
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7C5CFA" />
            <stop offset="100%" stopColor="#14B8A6" />
          </linearGradient>
        </defs>
      </svg>
      {label && <span className="ml-1">ORINOWO</span>}
    </span>
  );
}
