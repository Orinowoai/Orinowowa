"use client";

import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const plans = [
  { 
    name: "Starter", 
    price: "£4.99/mo", 
    env: "STARTER_PRICE_ID", 
    perks: ["200 generations", "Basic rights"] 
  },
  { 
    name: "Pro", 
    price: "£9.99/mo", 
    env: "PRO_PRICE_ID", 
    perks: ["800 generations", "Extended rights"] 
  },
  { 
    name: "Elite", 
    price: "£19.99/mo", 
    env: "ELITE_PRICE_ID", 
    perks: ["Unlimited*", "Commercial rights"] 
  }
];

export default function PricingPage() {
  const checkout = async (envKey: string) => {
    const stripe = await stripePromise;
    const res = await fetch("/api/checkout", { 
      method: "POST", 
      headers: { "Content-Type": "application/json" }, 
      body: JSON.stringify({ envKey }) 
    });
    const { id, error } = await res.json();
    if (error) return alert(error);
    await stripe?.redirectToCheckout({ sessionId: id });
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-14">
      <h1 className="text-4xl font-bold text-luxuryGold">Pricing (Aggressively Affordable)</h1>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {plans.map(p => (
          <div key={p.name} className="card">
            <h3 className="text-2xl font-semibold">{p.name}</h3>
            <ul className="mt-3 space-y-1 opacity-90 list-disc list-inside">
              {p.perks.map(x => <li key={x}>{x}</li>)}
            </ul>
            <p className="mt-5 text-3xl text-luxuryGold font-extrabold">{p.price}</p>
            <button 
              onClick={() => checkout(p.env)} 
              className="btn-gold mt-6 w-full"
            >
              Subscribe
            </button>
          </div>
        ))}
      </div>
      <p className="mt-6 text-xs opacity-70">
        Stripe Checkout • Cancel anytime • Under market to win share fast.
      </p>
    </section>
  );
}
