import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

const SAMPLE_DATA = [
  { id: "1", name: "SoundWave", logo: "/logos/soundwave.svg" },
  { id: "2", name: "NeonBeats", logo: "/logos/neonbeats.svg" },
  { id: "3", name: "PulseLab", logo: "/logos/pulselab.svg" },
];

export async function GET() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !anon) {
    return NextResponse.json({ items: SAMPLE_DATA, sample: true }, { status: 200 });
  }
  try {
    const { data, error } = await supabase.from("partners").select("*");
    if (error || !data || data.length === 0) {
      return NextResponse.json({ items: SAMPLE_DATA, sample: true }, { status: 200 });
    }
    return NextResponse.json({ items: data, sample: false }, { status: 200 });
  } catch {
    return NextResponse.json({ items: SAMPLE_DATA, sample: true }, { status: 200 });
  }
}
