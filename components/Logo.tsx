import React from 'react';

export default function Logo({ className = '' }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2 font-bold text-primary text-lg ${className}`} aria-label="Orinowo logo">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M2 12c2-6 6-6 8 0s6 6 8 0" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      ORINOWO
    </span>
  );
}
