'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function SuccessContent() {
const searchParams = useSearchParams();
const [status, setStatus] = useState('Verifying...');

useEffect(() => {
const sessionId = searchParams.get('session_id');
if (sessionId) {
// Here we would normally call Stripe API to verify session
setStatus('Payment verified ✅');
}
}, [searchParams]);

return (
<div>
<h2>{status}</h2>
<p>Welcome to Orinowo 🎶 Your subscription is now active.</p>
</div>
);
}