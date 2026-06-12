import Link from "next/link";

const navItems = [
  { name: "Home", href: "/" },
  { name: "APOD", href: "/apod" },
  { name: "Mars", href: "/mars" },
  { name: "Asteroids", href: "/asteroids" },
  { name: "Solar System", href: "/solar-system" },
];

export default function Navbar() {
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
      </div>
    </nav>
  );
}