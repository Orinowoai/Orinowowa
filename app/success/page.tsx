import { Suspense } from 'react';
import SuccessContent from './SuccessContent';

export default function SuccessPage() {
return (
<div className="success-page">
<h1>Payment Successful 🎉</h1>
<Suspense fallback={<div>Loading payment details...</div>}>
<SuccessContent />
</Suspense>
</div>
);
}

// Force dynamic rendering to avoid prerender build errors
export const dynamic = 'force-dynamic';