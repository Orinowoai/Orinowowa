"use client";

import { loadStripe } from "@stripe/stripe-js";

// Load Stripe with your publishable key
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const plans = [
{
name: "Starter",
price: "£4.99/mo",
env: "STARTER_PRICE_ID",
perks: ["200 generations", "Basic rights"],
},
{
name: "Pro",
price: "£9.99/mo",
env: "PRO_PRICE_ID",
perks: ["800 generations", "Extended rights"],
},
{
name: "Elite",
price: "£19.99/mo",
env: "ELITE_PRICE_ID",
perks: ["Unlimited", "Commercial rights"],
},
];

export default function PricingPage() {
// Handles clicking the Subscribe button
const handleCheckout = async (priceId: string) => {
const stripe = await stripePromise;

// Call your API to create a Checkout Session
const res = await fetch("/api/checkout", {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({ priceId }),
});

const data = await res.json();

if (data.sessionId) {
stripe?.redirectToCheckout({ sessionId: data.sessionId });
} else {
alert("Something went wrong creating the checkout session.");
}
};

return (
<div>
<h1>Choose Your Plan</h1>
<div>
{plans.map((plan) => (
<div key={plan.name}>
<h2>{plan.name}</h2>
<p>{plan.price}</p>
<ul>
{plan.perks.map((perk) => (
<li key={perk}>{perk}</li>
))}
</ul>
<button onClick={() => handleCheckout(plan.env)}>
Subscribe
</button>
</div>
))}
</div>
</div>
);
}