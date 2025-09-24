export default function SuccessPage() {
if (typeof window === 'undefined') {
return <div>Loading...</div>
}

return (
<html>
<body style={{margin: 0, padding: 0, fontFamily: 'Arial, sans-serif'}}>
<div style={{minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px'}}>
<div style={{textAlign: 'center'}}>
<h1>Payment Successful!</h1>
<p>Thank you for your purchase.</p>
<button onclick="window.location.href='/'" style={{padding: '10px 20px', marginTop: '10px'}}>
Return to Home
</button>
</div>
</div>
</body>
</html>
)
}