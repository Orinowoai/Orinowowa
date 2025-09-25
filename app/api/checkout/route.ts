
import { NextResponse } from 'next/server';
export async function POST() {
	return NextResponse.json({ ok: true, disabled: true, message: 'Use /plans for hosted pricing.' });
}
