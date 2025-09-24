'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function SuccessContent() {
const searchParams = useSearchParams();
const [plan, setPlan] = useState<string | null>(null);

useEffect(() => {
const sessionId = searchParams.get('session_id');
const purchasedPlan = searchParams.get('plan');
if (sessionId) {
setPlan(purchasedPlan);
}
}, [searchParams]);

return (
<div>
{plan ? (
<div>
<h2>Welcome to Orinowo!</h2>
<p>Your <strong>{plan}</strong> subscription is now active.</p>
</div>
) : (
<div>Verifying your payment...</div>
)}
</div>
);
}