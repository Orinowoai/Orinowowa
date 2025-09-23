import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
apiVersion: "2023-08-27.basil",
});

export async function POST(req: Request) {
try {
const session = await stripe.checkout.sessions.create({
payment_method_types: ["card"],
line_items: [
{
price_data: {
currency: "usd",
product_data: { name: "Test Product" },
unit_amount: 2000, // $20.00
},
quantity: 1,
},
],
mode: "payment",
success_url: "https://orinowowa.vercel.app/success",
cancel_url: "https://orinowowa.vercel.app/cancel",
});

return NextResponse.json({ url: session.url });
} catch (err: any) {
return NextResponse.json({ error: err.message }, { status: 500 });
}
}