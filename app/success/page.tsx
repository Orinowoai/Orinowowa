"use client";

import { useSearchParams } from "next/navigation";

export const dynamic = "force-dynamic";

export default function SuccessPage() {
const searchParams = useSearchParams();
const plan = searchParams.get("plan");

return (
<div style={{ padding: "2rem", textAlign: "center" }}>
<h1>🎉 Payment Successful!</h1>
<p>Thank you for subscribing.</p>
{plan && <p>You purchased the <strong>{plan}</strong> plan.</p>}
</div>
);
}