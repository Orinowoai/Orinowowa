import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

const SAMPLE_DATA = [
  {
    id: "1",
    name: "Ava",
    review: "Orinowo is a game-changer for music creators.",
  },
  { id: "2", name: "Ben", review: "The mastering quality is VIP-grade." },
  { id: "3", name: "Luna", review: "Social features keep me coming back." },
];

export async function GET() {
  try {
    const { data, error } = await supabase.from("reviews").select("*");
    if (error || !data || data.length === 0) {
      return NextResponse.json(
        { items: SAMPLE_DATA, sample: true },
        { status: 200 },
      );
    }
    return NextResponse.json({ items: data, sample: false }, { status: 200 });
  } catch {
    return NextResponse.json(
      { items: SAMPLE_DATA, sample: true },
      { status: 200 },
    );
  }
}
