import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export async function POST(req: Request) {
try {
const { priceId, plan } = await req.json();

if (!priceId) {
return NextResponse.json(
{ error: "Missing priceId" },
{ status: 400 }
);
}

const session = await stripe.checkout.sessions.create({
mode: "subscription",
payment_method_types: ["card"],
line_items: [{ price: priceId, quantity: 1 }],
success_url: `${process.env.NEXT_PUBLIC_URL}/success?plan=${plan}`,
cancel_url: `${process.env.NEXT_PUBLIC_URL}/cancel`,
});

return NextResponse.json({ url: session.url });
} catch (err: any) {
console.error("Checkout error:", err);
return NextResponse.json(
{ error: err.message },
{ status: 500 }
);
}
}