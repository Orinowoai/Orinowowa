"use client";

import { useState } from "react";

const plans = [
{
name: "Starter",
price: "£4.99/mo",
priceId: process.env.NEXT_PUBLIC_STARTER_PRICE_ID!,
perks: ["200 generations", "Basic rights"],
},
{
name: "Pro",
price: "£9.99/mo",
priceId: process.env.NEXT_PUBLIC_PRO_PRICE_ID!,
perks: ["800 generations", "Extended rights"],
},
{
name: "Elite",
price: "£19.99/mo",
priceId: process.env.NEXT_PUBLIC_ELITE_PRICE_ID!,
perks: ["Unlimited", "Commercial rights"],
},
];

export default function PricingPage() {
const [loading, setLoading] = useState(false);

async function handleSubscribe(plan: any) {
try {
setLoading(true);
const res = await fetch("/api/checkout", {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({ priceId: plan.priceId, plan: plan.name }),
});

const data = await res.json();
if (data.url) {
window.location.href = data.url;
} else {
alert("Something went wrong creating the checkout session.");
}
} catch (err) {
alert("Checkout failed.");
console.error(err);
} finally {
setLoading(false);
}
}

return (
<div style={{ padding: "2rem" }}>
<h1>Choose Your Plan</h1>
{plans.map((plan) => (
<div key={plan.name} style={{ marginBottom: "2rem" }}>
<h2>{plan.name}</h2>
<p>{plan.price}</p>
<ul>
{plan.perks.map((perk) => (
<li key={perk}>{perk}</li>
))}
</ul>
<button onClick={() => handleSubscribe(plan)} disabled={loading}>
{loading ? "Processing..." : "Subscribe"}
</button>
</div>
))}
</div>
);
}