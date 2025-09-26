import { NextResponse } from "next/server";

const SAMPLE_DATA = {
  activeNow: 12,
  users: 1200,
  renders: 3400,
};

export async function GET() {
  let metrics = SAMPLE_DATA;
  let sample = true;
  // Stripe removed. Always return sample data for metrics.
  return NextResponse.json(
    { ok: true, items: [{ id: "sample", metric: 100 }] },
    { status: 200 },
  );
  return NextResponse.json({ ...metrics, sample }, { status: 200 });
}
