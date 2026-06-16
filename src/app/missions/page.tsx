import Link from "next/link";
import { missions } from "@/data/missions";

export default function MissionsPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-6xl font-bold">
          🚀 NASA Missions
        </h1>

        <p className="mx-auto max-w-3xl text-slate-400">
          Explore some of NASA's most iconic missions,
          from Apollo's journey to the Moon to the James
          Webb Space Telescope exploring the early universe.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {missions.map((mission) => (
          <Link
            key={mission.slug}
            href={`/missions/${mission.slug}`}
            className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50 transition hover:border-cyan-500"
          >
            <img
              src={mission.image}
              alt={mission.name}
              className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="p-6">
              <h2 className="mb-2 text-2xl font-bold">
                {mission.name}
              </h2>

              <p className="text-slate-400">
                {mission.subtitle}
              </p>
            </div>
          </Link>
        ))}
      </div>

<section className="border-t border-slate-800 py-16">
  <div className="mx-auto max-w-5xl text-center">

    <h2 className="mb-4 text-3xl font-bold">
      Expanding Human Knowledge
    </h2>

    <p className="mx-auto max-w-2xl text-slate-400">
      From Apollo's first steps on the Moon to Voyager's
      journey beyond the Solar System, NASA missions have
      continually pushed the boundaries of exploration.
    </p>

    <div className="my-10 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

    <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-500">
      <span>🚀 15 Featured Missions</span>
      <span>🌌 Deep Space Exploration</span>
      <span>🛰️ Robotic Discovery</span>
      <span>👨‍🚀 Human Spaceflight</span>
    </div>

  </div>
</section>

    </main>
  );
}