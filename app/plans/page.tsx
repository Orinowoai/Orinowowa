"use client";
import React, { useEffect, useState } from "react";

const PRICING_TABLE_ID = "REPLACE_WITH_LIVE_TABLE_ID";
const PUBLISHABLE_KEY =
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "pk_test_SAMPLE";

export default function PlansPage() {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const SRC = "https://js.stripe.com/v3/pricing-table.js";
    if (!document.querySelector(`script[src="${SRC}"]`)) {
      const s = document.createElement("script");
      s.src = SRC;
      s.async = true;
      s.onload = () => setScriptLoaded(true);
      document.body.appendChild(s);
    } else {
      setScriptLoaded(true);
    }
  }, []);

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <section className="glass gold-border rounded-2xl p-6 md:p-10">
        <header className="mb-6 md:mb-8 flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-semibold text-neonViolet">
            Choose your plan
          </h1>
          <p className="text-xs md:text-sm text-white/70">
            Free trial • Cancel anytime
          </p>
        </header>
        <div
          id="stripe-pricing-table"
          data-publishable-key={PUBLISHABLE_KEY}
          data-pricing-table-id={PRICING_TABLE_ID}
          className="min-h-[520px]"
        >
          {!scriptLoaded && <div className="skeleton h-[520px] w-full" />}
        </div>
      </section>
    </main>
  );
}
