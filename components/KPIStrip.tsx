"use client";
import useSWR from "swr";
import { useEffect, useState } from "react";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function KPIStrip() {
  const { data, isLoading } = useSWR("/api/metrics", fetcher, {
    refreshInterval: 20000,
  });
  const [count, setCount] = useState({ activeNow: 0, users: 0, renders: 0 });
  useEffect(() => {
    if (data) {
      setCount({
        activeNow: data.activeNow,
        users: data.users,
        renders: data.renders,
      });
    }
  }, [data]);
  return (
    <section className="flex gap-6 items-center justify-center py-6">
      {["activeNow", "users", "renders"].map((key) => (
        <div key={key} className="flex flex-col items-center">
          <span className="text-3xl font-bold text-neonViolet animate-pulse">
            {isLoading ? (
              <span className="skeleton w-12 h-8" />
            ) : (
              count[key as keyof typeof count]
            )}
          </span>
          <span className="text-xs text-white/70">
            {key === "activeNow"
              ? "Active Now"
              : key.charAt(0).toUpperCase() + key.slice(1)}
          </span>
        </div>
      ))}
      {data?.sample && (
        <span className="ml-4 px-2 py-1 bg-amber text-black rounded text-xs">
          Sample
        </span>
      )}
    </section>
  );
}
