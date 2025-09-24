export default function CancelPage() {
return (
<div style={{ padding: "40px", textAlign: "center", color: "white" }}>
<h1>❌ Payment Cancelled</h1>
<p>Your checkout was cancelled. No worries — you can try again anytime.</p>
<a href="/pricing" style={{ color: "#FFD700", marginTop: "20px", display: "inline-block" }}>
Go back to pricing
</a>
</div>
);
}