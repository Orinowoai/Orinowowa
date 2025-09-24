import { NextResponse } from "next/server";

const SAMPLE_DATA = {
  activeNow: 12,
  users: 1200,
  renders: 3400,
};

export async function GET() {
  let metrics = SAMPLE_DATA;
  let sample = true;
  if (process.env.STRIPE_SECRET_KEY) {
    try {
      const Stripe = (await import("stripe")).default;
      const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
        apiVersion: "2023-08-16",
      });
      const customers = await stripe.customers.list({ limit: 1 });
      metrics = {
        activeNow: 0,
        users: customers.data.length,
        renders: 0,
      };
      sample = false;
    } catch {
      metrics = SAMPLE_DATA;
      sample = true;
    }
  }
  return NextResponse.json({ ...metrics, sample }, { status: 200 });
}
