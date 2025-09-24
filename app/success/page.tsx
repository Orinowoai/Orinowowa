"use client";

import { useSearchParams } from "next/navigation";

export default function SuccessPage() {
const params = useSearchParams();
const plan = params.get("plan");

return (
<div style={{ padding: "2rem", textAlign: "center", color: "white" }}>
<h1>🎉 Payment Successful!</h1>
{plan ? (
<p>Your <strong>{plan}</strong> plan is now active.</p>
) : (
<p>Your subscription was successful.</p>
)}
<a href="/" style={{ marginTop: "1rem", display: "inline-block", color: "#FFD700" }}>
Go Home
</a>
</div>
);
}