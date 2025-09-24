'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'

function Content() {
const searchParams = useSearchParams()
const [message, setMessage] = useState('Thank you for your purchase!')

useEffect(() => {
// This runs only in the browser, safe from build errors
const sessionId = searchParams.get('session_id')
const paymentId = searchParams.get('payment_id')

if (sessionId) {
console.log('Payment successful for session:', sessionId)
setMessage('Payment processed successfully!')
}
}, [searchParams])

return (
<div style={{minHeight: '100vh', backgroundColor: '#f0fdf4', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px'}}>
<div style={{maxWidth: '400px', width: '100%', backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', padding: '32px', textAlign: 'center'}}>
<div style={{width: '64px', height: '64px', backgroundColor: '#dcfce7', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px'}}>
<svg style={{width: '32px', height: '32px', color: '#16a34a'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
</svg>
</div>

<h1 style={{fontSize: '24px', fontWeight: 'bold', color: '#111827', marginBottom: '8px'}}>Payment Successful!</h1>
<p style={{color: '#4b5563', marginBottom: '24px'}}>
{message}
</p>

<button
onClick={() => window.location.href = '/'}
style={{width: '100%', backgroundColor: '#16a34a', color: 'white', padding: '8px 16px', borderRadius: '6px', border: 'none', cursor: 'pointer'}}
>
Return to Home
</button>
</div>
</div>
)
}

export default function SuccessContent() {
return <Content />
}