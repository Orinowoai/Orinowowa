"use client";

import { useSearchParams } from "next/navigation";

export default function SuccessPage() {
const searchParams = useSearchParams();
const plan = searchParams.get("plan");

return (
<div style={{ textAlign: "center", marginTop: "100px" }}>
<h1>✅ Payment Successful!</h1>
{plan ? (
<p>You have successfully subscribed to the <strong>{plan}</strong> plan.</p>
) : (
<p>Subscription successful. Thank you for your purchase!</p>
)}
</div>
);
}