"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Missions", href: "/missions" },
  { name: "Mars", href: "/mars" },
  { name: "Asteroids", href: "/asteroids" },
  { name: "Solar System", href: "/solar-system" },
];

export default function Navbar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    if (!query.trim()) return;

    router.push(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-2xl font-bold text-white transition hover:text-blue-400"
        >
          🔭 Observatory
        </Link>

        <div className="flex items-center gap-6 text-slate-300">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="transition hover:text-white"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="🔍 Search NASA images..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-64 rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-white outline-none focus:border-blue-500"
          />
        </form>
      </div>
    </nav>
  );
}