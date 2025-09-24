'use client'

import { useEffect, useState } from 'react'

export default function SuccessPage() {
const [isClient, setIsClient] = useState(false)

useEffect(() => {
setIsClient(true)
// Safe to use window here - only runs in browser
const params = new URLSearchParams(window.location.search)
console.log('Session:', params.get('session_id'))
}, [])

if (!isClient) {
return (
<div style={{textAlign: 'center', padding: '40px'}}>
<h1>Loading...</h1>
</div>
)
}

return (
<div style={{
minHeight: '100vh',
display: 'flex',
alignItems: 'center',
justifyContent: 'center',
textAlign: 'center',
padding: '20px'
}}>
<div>
<h1 style={{fontSize: '2rem', marginBottom: '1rem'}}>Payment Successful!</h1>
<p style={{fontSize: '1.2rem', marginBottom: '2rem'}}>Thank you for your purchase.</p>
<button
onClick={() => window.location.href = '/'}
style={{
padding: '10px 20px',
background: 'black',
color: 'white',
border: 'none',
borderRadius: '5px',
cursor: 'pointer'
}}
>
Return to Home
</button>
</div>
</div>
)
}