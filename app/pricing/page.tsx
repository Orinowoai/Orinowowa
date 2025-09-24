
/// <reference path="../../types/stripe-pricing-table.d.ts" />
 "use client";

 export default function PricingDisabled() {
 return (
 <main style={{ maxWidth: 800, margin: '80px auto', padding: 16, textAlign: 'center' }}>
 <h1>Pricing moved to /plans</h1>
 <a href="/plans">Go to /plans</a>
 </main>
 );
 }