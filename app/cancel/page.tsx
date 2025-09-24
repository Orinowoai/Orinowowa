export default function CancelPage() {
return (
<div style={{ padding: "2rem", textAlign: "center", color: "white" }}>
<h1>❌ Payment Cancelled</h1>
<p>Your checkout was canceled. You can try again anytime.</p>
<a href="/pricing" style={{ marginTop: "1rem", display: "inline-block", color: "#FFD700" }}>
Back to pricing
</a>
</div>
);
}