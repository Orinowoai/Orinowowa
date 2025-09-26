import { NextResponse } from "next/server";

const SAMPLE = [
 { id: "1", artist: "Aurora Gold", score: 980 },
 { id: "2", artist: "Velvet Tones", score: 920 },
 { id: "3", artist: "Echo Luxe", score: 875 },
 { id: "4", artist: "Neon Harbor", score: 830 },
 { id: "5", artist: "Crystal Wave", score: 790 },
];

export async function GET() {
 // Optional: if Supabase envs set, attempt fetch; otherwise return SAMPLE.
 // Never throw; always 200 with ok:true.
 try {
 const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
 const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
 if (url && anon) {
 // You can replace with real fetch logic; for now, return SAMPLE to guarantee stability.
 // Example: query top scores table; sort by score desc; limit 5.
 }
 return NextResponse.json({ ok: true, items: SAMPLE }, { status: 200 });
 } catch {
 return NextResponse.json({ ok: true, items: SAMPLE }, { status: 200 });
 }
}
