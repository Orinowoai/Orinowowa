import { NextResponse } from "next/server";
import Stripe from "stripe";

// Initialise Stripe with your secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
apiVersion: "2023-08-16",
});

export async function POST(req: Request) {
try {
const { priceId } = await req.json();

// Create a Checkout session
const session = await stripe.checkout.sessions.create({
payment_method_types: ["card"],
line_items: [
{
price: process.env[priceId], // e.g. process.env.STARTER_PRICE_ID
quantity: 1,
},
],
mode: "subscription",
success_url: `${process.env.NEXT_PUBLIC_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
cancel_url: `${process.env.NEXT_PUBLIC_URL}/pricing`,
});

return NextResponse.json({ sessionId: session.id });
} catch (err: any) {
console.error("Stripe checkout error:", err);
return NextResponse.json({ error: err.message }, { status: 500 });
}
}