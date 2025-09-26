"use client";
import Link from "next/link";
import BackHome from "../../components/BackHome";

export default function Success() {
  return (
    <main className="card rounded-2xl p-10 text-center relative overflow-hidden">
      {/* Simple confetti animation */}
      <div className="absolute inset-0 pointer-events-none animate-particleFloat">
        <span className="absolute left-1/4 top-8 text-4xl text-accent">🎉</span>
        <span className="absolute right-1/4 top-16 text-3xl text-secondary">
          ✨
        </span>
        <span className="absolute left-1/2 bottom-8 text-4xl text-primary">
          🎊
        </span>
      </div>
      <h1 className="text-2xl font-semibold text-primary">
        Thanks! Subscription active.
      </h1>
      <p className="mt-2 text-sm text-text/80">
        Enjoy premium features. You’re officially VIP.
      </p>
      <Link href="/" className="mt-4 btn btn-accent">
        Go to studio
      </Link>
      <BackHome className="mt-6" />
    </main>
  );
}
