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
    </main>
  );
}