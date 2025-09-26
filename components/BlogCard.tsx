"use client";

interface BlogCardProps {
  title: string;
  img: string;
}

export default function BlogCard({ title, img }: BlogCardProps) {
  return (
    <article className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 group">
      <img
        src={img}
        alt=""
        className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-500"
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).src =
            "https://images.unsplash.com/photo-1516280030429-27679b3dc9cf?q=80&w=1200&auto=format";
        }}
      />
      <div className="p-6">
        <h3 className="text-white font-heading font-semibold text-lg mb-3">{title}</h3>
        <p className="text-white/70 text-sm leading-relaxed">
          Explore how Orinowo elevates your sound with cutting-edge AI.
        </p>
      </div>
    </article>
  );
}