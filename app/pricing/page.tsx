"use client";

import { useState } from "react";

export default function PricingPage() {
const [loading, setLoading] = useState(false);

async function handleCheckout(plan: string) {
try {
setLoading(true);
const res = await fetch("/api/checkout", {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({ plan }),
});

const data = await res.json();
if (data.url) {
window.location.href = data.url;
} else {
alert("Something went wrong creating the checkout session.");
}
} catch (err) {
console.error("Checkout error:", err);
alert("Something went wrong. Please try again.");
} finally {
setLoading(false);
}
}

const plans = [
{
name: "Starter",
price: "£4.99/mo",
perks: ["200 generations", "Basic rights"],
},
{
name: "Pro",
price: "£9.99/mo",
perks: ["800 generations", "Extended rights"],
},
{
name: "Elite",
price: "£19.99/mo",
perks: ["Unlimited generations", "Commercial rights"],
},
];

return (
<div style={{ padding: "40px", color: "white", textAlign: "center" }}>
<h1>Choose Your Plan</h1>
<div style={{ display: "flex", gap: "20px", justifyContent: "center", marginTop: "30px" }}>
{plans.map((plan) => (
<div
key={plan.name}
style={{
border: "1px solid #555",
borderRadius: "8px",
padding: "20px",
width: "250px",
backgroundColor: "#111",
}}
>
<h2>{plan.name}</h2>
<p>{plan.price}</p>
<ul style={{ listStyle: "none", padding: 0 }}>
{plan.perks.map((perk, i) => (
<li key={i}>{perk}</li>
))}
</ul>
<button
onClick={() => handleCheckout(plan.name)}
disabled={loading}
style={{
marginTop: "15px",
padding: "10px 20px",
background: "#FFD700",
color: "#000",
border: "none",
borderRadius: "5px",
cursor: "pointer",
fontWeight: "bold",
}}
>
{loading ? "Processing..." : "Subscribe"}
</button>
</div>
))}
</div>
</div>
);
}