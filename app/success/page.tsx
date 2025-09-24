"use client";

import { useSearchParams } from "next/navigation";

export default function SuccessPage() {
const searchParams = useSearchParams();
const plan = searchParams.get("plan");

return (
<div style={{ padding: "40px", textAlign: "center", color: "white" }}>
<h1>🎉 Payment Successful!</h1>
<p>Thank you for subscribing{plan ? ` to the ${plan} plan` : ""}.</p>
<a href="/" style={{ color: "#FFD700", marginTop: "20px", display: "inline-block" }}>
Go back to home
</a>
</div>
);
}