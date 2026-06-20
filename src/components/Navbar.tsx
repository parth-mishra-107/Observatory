"use client";

import Link from "next/link";
import {
  useRouter,
  usePathname,
} from "next/navigation";
import { useState } from "react";
import { Telescope } from "lucide-react";
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
  const pathname = usePathname();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    if (!query.trim()) return;

    router.push(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <nav
      className="
        sticky top-0 z-50
        border-b border-white/10
        bg-[#020617]/80
        backdrop-blur-xl
      "
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* LOGO */}
        <Link
          href="/"
          className="group flex items-center gap-3"
        >
          <div
            className="
              flex h-10 w-10 items-center justify-center
              rounded-full
              bg-gradient-to-br
              from-cyan-500
              to-blue-600
              shadow-lg shadow-cyan-500/30
              transition
              duration-300
              group-hover:scale-110
            "
          >
            <Telescope className="h-5 w-5 text-white" />
          </div>

          <div>
            <h1
              className="
                text-xl font-bold text-white
                transition
                group-hover:text-cyan-400
              "
            >
              Observatory
            </h1>

            <p className="text-xs text-slate-400">
              NASA Explorer
            </p>
          </div>
        </Link>

        {/* NAV LINKS */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  group relative text-sm font-medium transition-all duration-300
                  ${
                    active
                      ? "text-cyan-400"
                      : "text-slate-300 hover:text-cyan-400"
                  }
                `}
              >
                {item.name}

                <span
                  className={`
                    absolute -bottom-1 left-0 h-[2px]
                    bg-cyan-400 transition-all duration-300
                    ${
                      active
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }
                  `}
                />
              </Link>
            );
          })}
        </div>

        {/* SEARCH */}
        <form onSubmit={handleSearch}>
          <div
            className="
              flex items-center gap-2
              rounded-xl
              border border-slate-700
              bg-slate-900/70
              px-4 py-2
              transition
              focus-within:border-cyan-500
              focus-within:shadow-lg
              focus-within:shadow-cyan-500/20
            "
          >
            <span className="text-slate-500">
              🔍
            </span>

            <input
              type="text"
              placeholder="Search NASA images..."
              value={query}
              onChange={(e) =>
                setQuery(e.target.value)
              }
              className="
                w-56
                bg-transparent
                text-white
                outline-none
                placeholder:text-slate-500
              "
            />
          </div>
        </form>
      </div>
    </nav>
  );
}