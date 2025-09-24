"use client";

export const dynamic = "force-dynamic";

export default function CancelPage() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>❌ Payment Cancelled</h1>
      <p>Your checkout was cancelled. Please try again.</p>
    </div>
  );
}
