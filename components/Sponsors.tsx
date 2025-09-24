"use client";
import useSWR from "swr";

export default function Sponsors() {
  const { data, isLoading } = useSWR("/api/partners", (url) =>
    fetch(url).then((r) => r.json()),
  );
  return (
    <section className="glass rounded-2xl p-6 shadow-gold">
      <h2 className="text-neonCyan font-bold text-2xl mb-4">Sponsors</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {(isLoading
          ? [{ id: 0, name: "Loading...", logo: "" }]
          : data?.items || []
        ).map((partner: any) => (
          <div key={partner.id} className="flex flex-col items-center">
            <img
              src={partner.logo || "/logos/sample.svg"}
              alt={partner.name}
              className="w-16 h-16 mb-2"
            />
            <span className="font-bold text-neonLime">{partner.name}</span>
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
