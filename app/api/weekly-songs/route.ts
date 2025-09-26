import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

const SAMPLE_DATA = [
  {
    id: "1",
    title: "Eclipse",
    artist: "Maestro",
    cover: "/covers/eclipse.jpg",
  },
  {
    id: "2",
    title: "Neon Dreams",
    artist: "Virtuoso",
    cover: "/covers/neon-dreams.jpg",
  },
  { id: "3", title: "Pulse", artist: "Producer", cover: "/covers/pulse.jpg" },
];

export async function GET() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !anon) {
    return NextResponse.json(
      { items: SAMPLE_DATA, sample: true },
      { status: 200 },
    );
  }
  try {
    const { data, error } = await supabase.from("weekly_songs").select("*");
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
