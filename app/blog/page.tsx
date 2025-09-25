


"use client";
import React from "react";
import BackHome from "../../components/BackHome";
import getImg from "../../lib/getImg";

const posts = [
  {
    t: "Luxury & Creativity Collide",
    s: "Discover Orinowo's AI-powered music experience.",
    img: getImg(undefined, 'https://images.unsplash.com/photo-1506744038136-46273834b3fb'),
    tags: ['Luxury', 'AI'],
  },
  {
    t: "AI-Imagined Music Futures",
    s: "How culture-first AI reshapes artist paths.",
    img: getImg(undefined, 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca'),
    tags: ['Futures', 'Culture'],
  },
  {
    t: "The Golden Opportunity",
    s: "Elevate your sound with AI at Orinowo.",
    img: getImg(undefined, 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4'),
    tags: ['Opportunity', 'Sound'],
  },
];

export default function BlogPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-14">
      <h1 className="text-4xl font-bold text-primary">AI Music Insights</h1>
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {posts.map((p) => (
          <article key={p.t} className="card flex flex-col">
            <img src={p.img} alt={p.t} className="w-full h-40 object-cover rounded-t-xl mb-2" loading="lazy" />
            <h3 className="text-xl font-semibold mt-2">{p.t}</h3>
            <p className="opacity-80 mt-2">{p.s}</p>
            <div className="flex gap-2 mt-2">
              {p.tags.map(tag => (
                <span key={tag} className="px-2 py-1 rounded-full text-xs bg-accent text-white">{tag}</span>)
              )}
            </div>
            <button className="btn btn-secondary mt-4" aria-label="Coming soon" disabled title="Coming soon">Read</button>
          </article>
        ))}
      </div>
      <div className="card mt-12 text-center">
        <h3 className="text-xl font-semibold text-primary">Partner With Us</h3>
        <p>Branded content, music tech collabs, affiliate drops. Email: partners@orinowo.com</p>
      </div>
      <BackHome className="mt-10" />
    </section>
  );
}
