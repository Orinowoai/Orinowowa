import { NextResponse } from "next/server";
import Stripe from "stripe";

// @ts-expect-error Ignore TypeScript mismatch for Stripe API version
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
apiVersion: "2023-08-16",
});

export async function POST(req: Request) {
try {
const { priceId, planName } = await req.json();

if (!priceId) {
return NextResponse.json(
{ error: "Missing price ID" },
{ status: 400 }
);
}

const session = await stripe.checkout.sessions.create({
payment_method_types: ["card"],
line_items: [
{
price: priceId,
quantity: 1,
},
],
mode: "subscription",
success_url: `${process.env.NEXT_PUBLIC_URL}/success?plan=${encodeURIComponent(
planName
)}`,
cancel_url: `${process.env.NEXT_PUBLIC_URL}/cancel`,
});

return NextResponse.json({ url: session.url });
} catch (err: any) {
console.error("Stripe Checkout error:", err);
return NextResponse.json(
{ error: "Unable to create checkout session" },
{ status: 500 }
);
}
}