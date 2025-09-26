"use client";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
 return (
 <header className="w-full sticky top-0 z-40 backdrop-blur border-b border-white/10 bg-black/30">
 <div className="mx-auto max-w-7xl px-4 py-3 flex items-center gap-3">
 <Link href="/" className="flex items-center gap-3">
 <Image
 src="/brand/orinowo-logo-plain.svg"
 alt="Orinowo"
 width={32}
 height={32}
 priority
 />
 <span className="font-extrabold tracking-wide text-white">ORINOWO</span>
 </Link>
 <nav className="ml-auto flex items-center gap-6 text-sm">
 <Link href="/leaderboard" className="text-white/80 hover:text-white">Leaderboard</Link>
 <Link href="/spotlight" className="text-white/80 hover:text-white">Spotlight</Link>
 <Link href="/blog" className="text-white/80 hover:text-white">Blog</Link>
 <Link href="/contact" className="text-white/80 hover:text-white">Contact</Link>
 <Link href="/plans" className="px-3 py-1.5 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-semibold">Upgrade</Link>
 </nav>
 </div>
 </header>
 );
}
