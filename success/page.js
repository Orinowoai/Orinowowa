'use client'

import { Suspense } from 'react'
import SuccessContent from './SuccessContent'

export default function SuccessPage() {
return (
<Suspense fallback={
<div style={{minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
<div style={{textAlign: 'center'}}>
<div style={{animation: 'spin 1s linear infinite', borderRadius: '50%', height: '48px', width: '48px', border: '2px solid #000', borderTopColor: 'transparent', margin: '0 auto'}}></div>
<p style={{marginTop: '16px', color: '#666'}}>Loading...</p>
</div>
</div>
}>
<SuccessContent />
</Suspense>
)
}
