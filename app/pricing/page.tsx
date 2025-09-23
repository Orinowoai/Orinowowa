"use client";

import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const plans = [
{
name: "Starter",
price: "£4.99/mo",
env: process.env.STARTER_PRICE_ID!,
perks: ["200 generations", "Basic rights"],
},
{
name: "Pro",
price: "£9.99/mo",
env: process.env.PRO_PRICE_ID!,
perks: ["800 generations", "Extended rights"],
},
{
name: "Elite",
price: "£19.99/mo",
env: process.env.ELITE_PRICE_ID!,
perks: ["Unlimited", "Commercial rights"],
},
];

export default function PricingPage() {
const handleCheckout = async (priceId: string, planName: string) => {
const stripe = await stripePromise;

const res = await fetch("/api/checkout", {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({ priceId, planName }),
});

const session = await res.json();

if (stripe) {
await stripe.redirectToCheckout({ sessionId: session.id });
}
};

return (
<div style={{ padding: "2rem", textAlign: "center" }}>
<h1>Choose Your Plan</h1>
<div style={{ display: "flex", justifyContent: "center", gap: "2rem" }}>
{plans.map((plan) => (
<div key={plan.name} style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "8px" }}>
<h2>{plan.name}</h2>
<p>{plan.price}</p>
<ul>
{plan.perks.map((perk) => (
<li key={perk}>{perk}</li>
))}
</ul>
<button
onClick={() => handleCheckout(plan.env, plan.name)}
style={{ marginTop: "1rem", padding: "0.5rem 1rem", background: "black", color: "white", borderRadius: "4px" }}
>
Subscribe
</button>
</div>
))}
</div>
</div>
);
}