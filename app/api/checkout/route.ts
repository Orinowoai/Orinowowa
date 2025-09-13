import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { 
  apiVersion: "2024-06-20" 
});

export async function POST(req: Request) {
  try {
    const { envKey } = await req.json();
    const priceId = process.env[envKey as keyof NodeJS.ProcessEnv] as string | undefined;
    
    if (!priceId) {
      return NextResponse.json({ error: "Missing price id" }, { status: 400 });
    }
    
    const site = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
    
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${site}/success`,
      cancel_url: `${site}/pricing?canceled=1`,
      allow_promotion_codes: true
    });
    
    return NextResponse.json({ id: session.id });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
