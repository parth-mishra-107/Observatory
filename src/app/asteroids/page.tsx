import { getAsteroids } from "@/lib/nasa";

export default async function AsteroidsPage() {
  const data = await getAsteroids();

  const date = data.near_earth_objects
    ? Object.keys(data.near_earth_objects)[0]
    : null;

  const asteroids = date
    ? data.near_earth_objects[date]
    : [];

  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="mb-8 text-5xl font-bold">
        ☄️ Asteroid Tracker
      </h1>

      <p className="mb-8 text-slate-400">
        Near-Earth Objects detected today.
      </p>

      <div className="grid gap-6">
        {asteroids.slice(0, 10).map((asteroid: any) => (
          <div
            key={asteroid.id}
            className="rounded-xl border border-slate-800 bg-slate-900 p-6"
          >
            <h2 className="text-xl font-semibold">
              {asteroid.name}
            </h2>

            <p className="mt-2 text-slate-400">
              Hazardous:{" "}
              {asteroid.is_potentially_hazardous_asteroid
                ? "⚠️ Yes"
                : "✅ No"}
            </p>

            <p className="text-slate-400">
              Diameter:{" "}
              {Math.round(
                asteroid.estimated_diameter.meters
                  .estimated_diameter_max
              )}{" "}
              m
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}