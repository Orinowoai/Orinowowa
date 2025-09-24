'use client';

export default function PlansPage() {
 return (
 <main style={{ maxWidth: 1100, margin: '40px auto', padding: '0 16px' }}>
 <h1 style={{ textAlign: 'center', marginBottom: 24 }}>PLANS PAGE MARKER — v3</h1>
 <div
 dangerouslySetInnerHTML={{
 __html: `
 <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
 <stripe-pricing-table
 pricing-table-id="prctbl_1SAufJCbycES077rJZHqb8fo"
 publishable-key="pk_live_51S3IUACbycES077rbFXZzxhkBAtSKPo9kzPC2u19CBubid4CwwnZmAk5uqWOmrLufVkK93cilA65hR9CF4UbkoOx00knwGHyDL">
 </stripe-pricing-table>
 `,
 }}
 />
 </main>
 );
}
