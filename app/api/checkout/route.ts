import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
apiVersion: "2024-06-20", // stable Stripe API version
});

export async function POST(req: Request) {
try {
const { priceId } = await req.json(); // client will send the correct priceId (Starter/Pro/Elite)

const session = await stripe.checkout.sessions.create({
payment_method_types: ["card"],
mode: "subscription",
line_items: [
{
price: priceId,
quantity: 1,
},
],
success_url: `${process.env.NEXT_PUBLIC_URL}/success`,
cancel_url: `${process.env.NEXT_PUBLIC_URL}/pricing`,
});

return NextResponse.json({ url: session.url });
} catch (err: any) {
console.error("Stripe checkout error:", err.message);
return NextResponse.json({ error: err.message }, { status: 500 });
}
}