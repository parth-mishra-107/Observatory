import Link from "next/link";
import { notFound } from "next/navigation";
import { missions } from "@/data/missions";
import { getMissionGallery } from "@/lib/nasa";

export default async function MissionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const mission = missions.find(
    (m) => m.slug === slug
  );

  if (!mission) {
    notFound();
  }

  const gallery = await getMissionGallery(
    mission.query
  );

  return (
    <main className="pb-24">
      {/* HERO */}
      <section className="relative h-[80vh]">
        <img
          src={mission.image}
          alt={mission.name}
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

        <div className="absolute bottom-16 left-1/2 w-full max-w-7xl -translate-x-1/2 px-6">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-400">
            NASA Mission
          </p>

          <h1 className="mb-4 text-7xl font-bold">
            {mission.name}
          </h1>

          <p className="max-w-2xl text-2xl text-slate-300">
            {mission.subtitle}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        {/* MISSION FACTS */}
        <div className="mb-20 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-8 backdrop-blur">
            <p className="text-sm uppercase tracking-wide text-slate-400">
              Launch Year
            </p>

            <p className="mt-3 text-4xl font-bold">
              {mission.launchYear}
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-8 backdrop-blur">
            <p className="text-sm uppercase tracking-wide text-slate-400">
              Status
            </p>

            <p className="mt-3 text-4xl font-bold">
              {mission.status}
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-8 backdrop-blur">
            <p className="text-sm uppercase tracking-wide text-slate-400">
              Destination
            </p>

            <p className="mt-3 text-4xl font-bold">
              {mission.destination}
            </p>
          </div>
        </div>

        {/* OVERVIEW */}
        <section className="mb-24">
          <h2 className="mb-8 text-5xl font-bold">
            Mission Overview
          </h2>

          <p className="max-w-5xl text-2xl leading-relaxed text-slate-300">
            {mission.description}
          </p>
        </section>

        {/* QUICK FACTS */}
        <section className="mb-24">
          <h2 className="mb-8 text-5xl font-bold">
            Quick Facts
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-slate-900/50 p-8">
              <p className="text-slate-400">
                Agency
              </p>

              <p className="mt-2 text-2xl font-semibold">
                NASA
              </p>
            </div>

            <div className="rounded-3xl bg-slate-900/50 p-8">
              <p className="text-slate-400">
                Mission Type
              </p>

              <p className="mt-2 text-2xl font-semibold">
                Space Exploration
              </p>
            </div>

            <div className="rounded-3xl bg-slate-900/50 p-8">
              <p className="text-slate-400">
                Current Status
              </p>

              <p className="mt-2 text-2xl font-semibold">
                {mission.status}
              </p>
            </div>
          </div>
        </section>

        {/* ACHIEVEMENTS */}
        <section className="mb-24">
          <h2 className="mb-10 text-5xl font-bold">
            Mission Highlights
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {mission.achievements.map(
              (achievement, index) => (
                <div
                  key={index}
                  className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-8 transition hover:border-cyan-500"
                >
                  <div className="mb-4 text-6xl font-bold text-cyan-500/30">
                    0{index + 1}
                  </div>

                  <p className="text-xl leading-8">
                    {achievement}
                  </p>
                </div>
              )
            )}
          </div>
        </section>

        {/* GALLERY */}
        <section className="mb-24">
          <h2 className="mb-10 text-5xl font-bold">
            Mission Gallery
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {gallery.map(
              (
                image: {
                  image: string;
                  title: string;
                },
                index: number
              ) => (
                <div
                  key={index}
                  className="group overflow-hidden rounded-3xl border border-slate-800"
                >
                  <img
                    src={image.image}
                    alt={image.title}
                    className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="p-4">
                    <p className="line-clamp-2 text-sm text-slate-400">
                      {image.title}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </section>

        {/* QUOTE */}
        <section className="mb-24 rounded-3xl border border-slate-800 bg-slate-900/40 p-12 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-cyan-400">
            Exploration
          </p>

          <blockquote className="mx-auto max-w-4xl text-4xl font-light leading-relaxed">
            "Somewhere, something incredible is waiting
            to be known."
          </blockquote>

          <p className="mt-8 text-slate-400">
            — Carl Sagan
          </p>
        </section>

        {/* CTA */}
        <section className="text-center">
          <h2 className="mb-4 text-5xl font-bold">
            Continue Exploring
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-400">
            Discover more NASA missions and explore
            humanity's greatest achievements beyond
            Earth.
          </p>

          <Link
            href="/missions"
            className="inline-flex rounded-full border border-cyan-500 px-8 py-4 text-lg transition hover:bg-cyan-500 hover:text-black"
          >
            View All Missions →
          </Link>
        </section>
      </section>
    </main>
  );
}