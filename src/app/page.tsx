import Link from "next/link";
import SolarSystemHero from "../components/SolarSystemHero";
import { getApod } from "@/lib/nasa";

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

export default async function Home() {
  const apod = await getApod();
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      {/* HERO */}
      <section className="mb-20 text-center">
        <h1 className="mb-6 text-6xl font-bold">Observe the Universe</h1>

        <p className="mx-auto max-w-3xl text-xl text-slate-400">
          Explore NASA imagery, Mars rover discoveries, asteroid tracking, and
          the Solar System through one interactive platform.
        </p>



        <div className="mt-10 flex justify-center gap-4">
          <Link
            href="/mars"
            className="rounded-lg border border-slate-700 px-6 py-3 hover:bg-slate-900"
          >
            Explore Mars
          </Link>
          
          <Link
            href="/missions"
            className="rounded-lg bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-500"
          >
            NASA's Missions
          </Link>

          
        </div>
      </section>

      {/* APOD PREVIEW */}
      <section className="mb-24">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-4xl font-bold">Astronomy Picture of the Day</h2>
        </div>

        <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50">
          <div className="grid gap-8 p-8 md:grid-cols-[1.2fr_1fr]">
            <img
              src={apod.url}
              alt={apod.title}
              className="h-full w-full rounded-2xl object-cover"
            />

            <div className="flex flex-col justify-center">
              <h3 className="mb-3 text-3xl font-bold">{apod.title}</h3>

              <p className="mb-4 text-slate-400">{apod.date}</p>

              <p className="line-clamp-6 text-slate-300">{apod.explanation}</p>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SOLAR SYSTEM PREVIEW */}
      <section className="mb-24">
        <p className="mb-8 text-center text-slate-400">
          Drag to explore the Solar System. Hover planets to learn more.
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
            <div className="mb-4 text-4xl">{feature.icon}</div>

            <h2 className="mb-2 text-xl font-bold">{feature.title}</h2>

            <p className="text-slate-400">{feature.description}</p>
          </Link>
        ))}
      </section>
    </main>
  );
}
