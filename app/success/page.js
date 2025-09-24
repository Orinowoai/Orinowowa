export default function SuccessPage() {
 if (typeof window !== 'undefined') {
 // This code only runs in the browser
 const params = new URLSearchParams(window.location.search)
 console.log('Session ID:', params.get('session_id'))
 }
 
 return (
 <div style={{textAlign: 'center', padding: '40px', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
 <div>
 <h1>Payment Successful!</h1>
 <p>Thank you for your purchase.</p>
 <a href="/">Return to Home</a>
 </div>
 </div>
 )
}