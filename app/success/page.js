'use client'

import { useEffect, useState } from 'react'

export default function SuccessPage() {
const [searchParams, setSearchParams] = useState(null)
const [message, setMessage] = useState('Thank you for your purchase!')

useEffect(() => {
// This runs only in the browser - no build errors!
const urlParams = new URLSearchParams(window.location.search)
setSearchParams(urlParams)

const sessionId = urlParams.get('session_id')
if (sessionId) {
setMessage('Payment processed successfully!')
}
}, [])

return (
<div style={{minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', textAlign: 'center'}}>
<div>
<h1 style={{fontSize: '24px', fontWeight: 'bold', marginBottom: '16px'}}>Payment Successful!</h1>
<p style={{marginBottom: '24px'}}>{message}</p>
<button
onClick={() => window.location.href = '/'}
style={{backgroundColor: '#000', color: 'white', padding: '10px 20px', borderRadius: '5px', border: 'none', cursor: 'pointer'}}
>
Return to Home
</button>
</div>
</div>
)
}