import { Suspense } from 'react';
import SuccessContent from './SuccessContent';

export const dynamic = 'force-dynamic'; // 🔑 Prevents static build errors

export default function SuccessPage() {
return (
<div className="success-page">
<h1>Payment Successful</h1>
<Suspense fallback={<div>Loading payment details...</div>}>
<SuccessContent />
</Suspense>
</div>
);
}