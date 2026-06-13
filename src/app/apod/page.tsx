import { getApod } from "@/lib/nasa";

export default async function APODPage() {
  const apod = await getApod();

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="mb-8 text-5xl font-bold">
        Astronomy Picture of the Day
      </h1>

      <img
        src={apod.url}
        alt={apod.title}
        className="mb-6 w-full rounded-xl"
      />

      <h2 className="mb-3 text-3xl font-semibold">
        {apod.title}
      </h2>

      <p className="mb-6 text-slate-400">
        {apod.date}
      </p>

      <p className="leading-8">
        {apod.explanation}
      </p>
    </main>
  );
}