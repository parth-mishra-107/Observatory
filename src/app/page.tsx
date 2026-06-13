import Link from "next/link";
import SolarSystemHero from "@/components/SolarSystemHero";

const features = [
  {
    title: "APOD",
    icon: "📸",
    description: "Astronomy Picture of the Day",
    href: "/apod",
  },
  {
    title: "Mars Explorer",
    icon: "🚀",
    description: "Browse rover imagery",
    href: "/mars",
  },
  {
    title: "Asteroids",
    icon: "☄️",
    description: "Track near-Earth objects",
    href: "/asteroids",
  },
  {
    title: "Solar System",
    icon: "🪐",
    description: "Explore planets and moons",
    href: "/solar-system",
  },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      {/* HERO */}
      <section className="mb-20 text-center">
        <h1 className="mb-6 text-6xl font-bold">
          Observe the Universe
        </h1>

        <p className="mx-auto max-w-3xl text-xl text-slate-400">
          Explore NASA imagery, Mars rover discoveries,
          asteroid tracking, and the Solar System through
          one interactive platform.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Link
            href="/apod"
            className="rounded-lg bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-500"
          >
            Explore APOD
          </Link>

          <Link
            href="/mars"
            className="rounded-lg border border-slate-700 px-6 py-3 hover:bg-slate-900"
          >
            Explore Mars
          </Link>
        </div>
      </section>

      {/* NEW SOLAR SYSTEM PREVIEW */}
      <section className="mb-24">
  <h2 className="mb-6 text-center text-4xl font-bold">
    🪐 Interactive Solar System
  </h2>

  <p className="mb-8 text-center text-slate-400">
    Drag to explore the Solar System. Hover planets
    to learn more.
  </p>

  <div
    className="
      rounded-3xl
      border border-blue-500/20
      bg-black
      shadow-2xl
      shadow-blue-500/20
      overflow-hidden
    "
  >
    <SolarSystemHero />
  </div>
</section>

      {/* FEATURE CARDS */}
      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <Link
            key={feature.title}
            href={feature.href}
            className="rounded-xl border border-slate-800 bg-slate-900 p-6 transition hover:border-blue-500 hover:scale-105"
          >
            <div className="mb-4 text-4xl">
              {feature.icon}
            </div>

            <h2 className="mb-2 text-xl font-bold">
              {feature.title}
            </h2>

            <p className="text-slate-400">
              {feature.description}
            </p>
          </Link>
        ))}
      </section>
    </main>
  );
}