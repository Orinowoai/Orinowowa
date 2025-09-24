"use client";
import useSWR from "swr";

export default function Reviews() {
  const { data, isLoading } = useSWR("/api/reviews", (url) =>
    fetch(url).then((r) => r.json()),
  );
  return (
    <section className="glass rounded-2xl p-6 shadow-gold">
      <h2 className="text-amber font-bold text-2xl mb-4">Reviews</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {(isLoading
          ? [{ id: 0, name: "Loading...", review: "" }]
          : data?.items || []
        ).map((review: any) => (
          <div key={review.id} className="glass p-4 rounded-xl">
            <div className="font-bold text-neonPink">{review.name}</div>
            <div className="text-xs text-white/70">{review.review}</div>
          </div>
        ))}
      </div>
      {data?.sample && (
        <span className="mt-2 px-2 py-1 bg-amber text-black rounded text-xs">
          Sample
        </span>
      )}
    </section>
  );
}
