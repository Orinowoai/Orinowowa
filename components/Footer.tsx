"use client";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      style={{
        marginTop: "4rem",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        background: "rgba(8,12,20,0.8)",
        backdropFilter: "blur(8px)",
      }}
    >
      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "24px 16px",
          display: "grid",
          gap: 16,
          gridTemplateColumns: "1fr",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            flexWrap: "wrap",
          }}
        >
          <img
            src="/orinowo-logo.png"
            alt="Orinowo"
            width={28}
            height={28}
            style={{ borderRadius: 8, opacity: 0.95 }}
          />
          <strong style={{ letterSpacing: 0.5 }}>ORINOWO</strong>
          <span style={{ opacity: 0.6, fontSize: 12 }}>
            © {year} Orinowo • Luxury AI Music Studio
          </span>
        </div>
        <nav style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <Link href="/plans">Pricing</Link>
          <Link href="/leaderboard">Leaderboard</Link>
          <Link href="/spotlight">Spotlight</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/privacy">Privacy</Link>
        </nav>
      </div>
    </footer>
  );
}
