import React from 'react';

export default function Logo({ className = '', size = 32, label = true }: { className?: string; size?: number; label?: boolean }) {
  return (
    <span className={`flex items-center gap-3 font-bold text-primary text-lg ${className}`} aria-label="Orinowo logo">
      <img src="/orinowo-logo.svg" alt="Orinowo merch logo" width={size} height={size * 0.67} style={{display:'inline-block',verticalAlign:'middle',borderRadius:'8px'}} />
      {label && <span className="ml-1">ORINOWO</span>}
    </span>
  );
}
