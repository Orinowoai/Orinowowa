"use client";

const plans = [
{
name: "Starter",
price: "£4.99/mo",
priceId: process.env.STARTER_PRICE_ID!,
perks: ["200 generations", "Basic rights"],
},
{
name: "Pro",
price: "£9.99/mo",
priceId: process.env.PRO_PRICE_ID!,
perks: ["800 generations", "Extended rights"],
},
{
name: "Elite",
price: "£19.99/mo",
priceId: process.env.ELITE_PRICE_ID!,
perks: ["Unlimited", "Commercial rights"],
},
];

export default function PricingPage() {
const handleCheckout = async (priceId: string, planName: string) => {
try {
const res = await fetch("/api/checkout", {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({ priceId, planName }),
});
const data = await res.json();
if (data.url) {
window.location.href = data.url;
} else {
alert(data.error || "Error creating checkout session.");
}
} catch (err) {
console.error("Error in checkout request:", err);
alert("Something went wrong, please try again.");
}
};

return (
<div style={{ padding: "2rem", textAlign: "center", color: "white" }}>
<h1>Choose Your Plan</h1>
<div style={{ display: "flex", gap: "2rem", justifyContent: "center", marginTop: "2rem" }}>
{plans.map((plan) => (
<div
key={plan.name}
style={{
border: "1px solid #555",
borderRadius: "8px",
padding: "1rem",
width: "220px",
backgroundColor: "#111",
}}
>
<h2>{plan.name}</h2>
<p>{plan.price}</p>
<ul style={{ listStyle: "none", padding: 0 }}>
{plan.perks.map((p, i) => (
<li key={i}>{p}</li>
))}
</ul>
<button
onClick={() => handleCheckout(plan.priceId, plan.name)}
style={{
marginTop: "1rem",
padding: "0.5rem 1rem",
background: "#FFD700",
color: "#000",
border: "none",
borderRadius: "4px",
cursor: "pointer",
}}
>
Subscribe
</button>
</div>
))}
</div>
</div>
);
}