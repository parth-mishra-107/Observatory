import { getAsteroids } from "@/lib/nasa";

export default async function AsteroidsPage() {
  const data = await getAsteroids();

  const date = data.near_earth_objects
    ? Object.keys(data.near_earth_objects)[0]
    : null;

  const asteroids = date
    ? data.near_earth_objects[date]
    : [];

  const hazardousCount = asteroids.filter(
    (a: any) => a.is_potentially_hazardous_asteroid
  ).length;

  const largestAsteroid =
    asteroids.length > 0
      ? Math.max(
          ...asteroids.map(
            (a: any) =>
              a.estimated_diameter.meters
                .estimated_diameter_max
          )
        )
      : 0;

  return (
    <main className="mx-auto max-w-7xl px-6 py-12">

      {/* HERO */}
      <section className="relative mb-16 h-[60vh] overflow-hidden rounded-3xl">
        <img
          src="/asteroids/hero.jpg"
          alt="Asteroid"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

        <div className="absolute bottom-10 left-10">
          <p className="mb-2 text-cyan-400">
            Near-Earth Object Monitor
          </p>

          <h1 className="text-6xl font-bold">
            Asteroid Tracker
          </h1>

          <p className="mt-4 max-w-2xl text-xl text-slate-300">
            Explore asteroids passing near Earth,
            monitor potentially hazardous objects,
            and learn about some of the Solar System's
            most fascinating rocky worlds.
          </p>
        </div>
      </section>

      {/* LIVE STATS */}
      <section className="mb-20 grid gap-6 md:grid-cols-4">
        <div className="rounded-3xl bg-slate-900/50 p-8">
          <p className="text-slate-400">
            Objects Today
          </p>

          <p className="mt-3 text-5xl font-bold">
            {asteroids.length}
          </p>
        </div>

        <div className="rounded-3xl bg-slate-900/50 p-8">
          <p className="text-slate-400">
            Hazardous Objects
          </p>

          <p className="mt-3 text-5xl font-bold text-red-400">
            {hazardousCount}
          </p>
        </div>

        <div className="rounded-3xl bg-slate-900/50 p-8">
          <p className="text-slate-400">
            Largest Object
          </p>

          <p className="mt-3 text-5xl font-bold">
            {Math.round(largestAsteroid)}m
          </p>
        </div>

        <div className="rounded-3xl bg-slate-900/50 p-8">
          <p className="text-slate-400">
            Observation Date
          </p>

          <p className="mt-3 text-2xl font-bold">
            {date}
          </p>
        </div>
      </section>

      {/* ASTEROIDS */}
      <section className="mb-24">
        <h2 className="mb-8 text-4xl font-bold">
          Today's Closest Objects
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {asteroids.slice(0, 10).map((asteroid: any) => (
            <div
              key={asteroid.id}
              className="rounded-3xl border border-slate-800 bg-slate-900/50 p-8"
            >
              <h3 className="mb-4 text-2xl font-bold">
                {asteroid.name}
              </h3>

              <div className="mb-4">
                <span
                  className={`rounded-full px-3 py-1 text-sm ${
                    asteroid.is_potentially_hazardous_asteroid
                      ? "bg-red-500/20 text-red-400"
                      : "bg-green-500/20 text-green-400"
                  }`}
                >
                  {asteroid.is_potentially_hazardous_asteroid
                    ? "Potentially Hazardous"
                    : "Low Risk"}
                </span>
              </div>

              <p className="mb-2 text-slate-400">
                Diameter:{" "}
                {Math.round(
                  asteroid.estimated_diameter.meters
                    .estimated_diameter_max
                )}
                m
              </p>

              <p className="text-slate-400">
                NASA Near-Earth Object Database
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FAMOUS ASTEROIDS */}
      <section className="mb-24">
        <h2 className="mb-8 text-4xl font-bold">
          Famous Asteroids
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              name: "Bennu",
              image: "/asteroids/bennu.jpg",
              description:
                "Sample-return target of NASA's OSIRIS-REx mission.",
            },
            {
              name: "Psyche",
              image: "/asteroids/psyche2.jpg",
              description:
                "A rare metal-rich asteroid being explored by NASA.",
            },
            {
              name: "Eros",
              image: "/asteroids/eros.jpg",
              description:
                "One of the first asteroids orbited by a spacecraft.",
            },
            {
              name: "Didymos",
              image: "/asteroids/didymos.jpg",
              description:
                "Target of NASA's DART planetary defense mission.",
            },
          ].map((asteroid) => (
            <div
              key={asteroid.name}
              className="overflow-hidden rounded-3xl border border-slate-800"
            >
              <img
                src={asteroid.image}
                alt={asteroid.name}
                className="h-64 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold">
                  {asteroid.name}
                </h3>

                <p className="text-slate-400">
                  {asteroid.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FACT SECTION */}
      <section className="rounded-3xl border border-slate-800 bg-slate-900/40 p-12 text-center">
        <h2 className="mb-6 text-4xl font-bold">
          Did You Know?
        </h2>

        <p className="mx-auto max-w-4xl text-xl leading-relaxed text-slate-300">
          NASA tracks thousands of Near-Earth
          Objects every year. While most asteroids
          pose no threat, studying them helps
          scientists understand the history of the
          Solar System and develop planetary defense
          technologies for the future.
        </p>
      </section>

<section className="border-t border-slate-800 py-16">
  <div className="mx-auto max-w-5xl text-center">

    <h2 className="mb-4 text-3xl font-bold">
      Guardians of the Solar System
    </h2>

    <p className="mx-auto max-w-2xl text-slate-400">
      Asteroids are remnants of the Solar System's formation.
      By tracking near-Earth objects, scientists improve our
      understanding of planetary history and planetary defense.
    </p>

    <div className="my-10 h-px bg-gradient-to-r from-transparent via-yellow-500/40 to-transparent" />

    <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-500">
      <span>☄️ Millions of Asteroids</span>
      <span>🛡️ Planetary Defense</span>
      <span>🔭 Near-Earth Tracking</span>
      <span>🌍 Impact Monitoring</span>
    </div>

  </div>
</section>

    </main>
  );
}