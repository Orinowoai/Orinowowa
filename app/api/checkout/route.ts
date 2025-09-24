import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
apiVersion: "2023-08-16",
});

export async function POST(req: Request) {
try {
const { plan } = await req.json();

let priceId: string | undefined;

switch (plan) {
case "starter":
priceId = process.env.STARTER_PRICE_ID;
break;
case "pro":
priceId = process.env.PRO_PRICE_ID;
break;
case "elite":
priceId = process.env.ELITE_PRICE_ID;
break;
default:
return NextResponse.json(
{ error: "Invalid plan selected" },
{ status: 400 }
);
}

if (!priceId) {
return NextResponse.json(
{ error: "Price ID not found for selected plan" },
{ status: 500 }
);
}

const session = await stripe.checkout.sessions.create({
payment_method_types: ["card"],
line_items: [{ price: priceId, quantity: 1 }],
mode: "subscription",
success_url: `${process.env.NEXT_PUBLIC_URL}/success?plan=${plan}`,
cancel_url: `${process.env.NEXT_PUBLIC_URL}/cancel`,
});

return NextResponse.json({ url: session.url });
} catch (err: any) {
console.error("Stripe Checkout Error:", err);
return NextResponse.json(
{ error: "Failed to create checkout session" },
{ status: 500 }
);
}
}