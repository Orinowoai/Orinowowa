'use client'

export default function SuccessPage() {
return (
<div style={{minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', textAlign: 'center'}}>
<div>
<h1 style={{fontSize: '24px', fontWeight: 'bold', marginBottom: '16px'}}>Payment Successful!</h1>
<p style={{marginBottom: '24px'}}>Thank you for your purchase. Your payment has been processed successfully.</p>
<button
onClick={() => window.location.href = '/'}
style={{backgroundColor: '#000', color: 'white', padding: '8px 16px', borderRadius: '4px', border: 'none', cursor: 'pointer'}}
>
Return to Home
</button>
</div>
</div>
)
}