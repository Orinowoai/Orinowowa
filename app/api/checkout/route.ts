import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
	apiVersion: '2025-08-27.basil',
});

export async function POST(request: NextRequest) {
try {
const body = await request.json();
const { priceId, plan } = body;

if (!process.env.STRIPE_SECRET_KEY) {
console.error('❌ STRIPE_SECRET_KEY not found');
return NextResponse.json(
{ error: 'Payment configuration error' },
{ status: 500 }
);
}

const subscriptionPlans: Record<string, string> = {
starter: process.env.STARTER_PRICE_ID!,
pro: process.env.PRO_PRICE_ID!,
elite: process.env.ELITE_PRICE_ID!,
};

const session = await stripe.checkout.sessions.create({
payment_method_types: ['card'],
line_items: [
{
price: subscriptionPlans[plan] || priceId,
quantity: 1,
},
],
mode: 'subscription',
success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}&plan=${plan}`,
cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
metadata: { plan },
});

return NextResponse.json({ url: session.url });
} catch (error: any) {
console.error('Stripe checkout error:', error);
return NextResponse.json(
{ error: 'Something went wrong creating the checkout session' },
{ status: 500 }
);
}
}