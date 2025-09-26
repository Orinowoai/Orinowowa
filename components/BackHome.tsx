import Link from "next/link";

export default function BackHome({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Back to home"
      className={`btn btn-secondary text-base px-3 py-1 rounded-full shadow ${className}`}
    >
      ← Back to Home
    </Link>
  );
}
