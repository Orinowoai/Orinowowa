
"use client";
import React, { useEffect, useState } from "react";
import BackHome from "../../components/BackHome";

const PRICING_TABLE_ID = process.env.NEXT_PUBLIC_STRIPE_PRICING_TABLE_ID;
const PUBLISHABLE_KEY = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;

export default function PlansPage() {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  useEffect(() => {
    if (!PRICING_TABLE_ID || !PUBLISHABLE_KEY) return;
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
      <section className="card rounded-2xl p-6 md:p-10">
        <header className="mb-6 md:mb-8 flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-semibold text-primary">Choose your plan</h1>
          <p className="text-xs md:text-sm text-text/70">Free trial • Cancel anytime</p>
        </header>
        {PRICING_TABLE_ID && PUBLISHABLE_KEY ? (
          <div
            id="stripe-pricing-table"
            data-publishable-key={PUBLISHABLE_KEY}
            data-pricing-table-id={PRICING_TABLE_ID}
            className="min-h-[520px]"
          >
            {!scriptLoaded && <div className="skeleton h-[520px] w-full" />}
          </div>
        ) : (
          <div className="card p-8 text-center">
            <h2 className="text-lg font-bold text-warn mb-2">Pricing temporarily unavailable</h2>
            <p className="mb-4">Please contact <a href="mailto:support@orinowo.com" className="underline text-secondary">support@orinowo.com</a> for help.</p>
          </div>
        )}
        <BackHome className="mt-10" />
      </section>
    </main>
  );
}
