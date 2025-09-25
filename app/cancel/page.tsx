
"use client";
import BackHome from "../../components/BackHome";

export default function CancelPage() {
  return (
    <main className="card rounded-2xl p-10 text-center">
      <h1 className="text-2xl font-semibold text-danger mb-2">❌ Payment Cancelled</h1>
      <p className="mb-4 text-text/80">Your checkout was cancelled. Please try again.</p>
      <a href="/plans" className="btn btn-primary" aria-label="Retry">Retry</a>
      <BackHome className="mt-6" />
    </main>
  );
}
