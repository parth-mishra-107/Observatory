import { searchNASAImages } from "@/lib/nasa";

type SearchPageProps = {
  searchParams: Promise<{
    q?: string;
  }>;
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q } = await searchParams;

  if (!q) {
    return (
      <main className="p-10">
        <h1 className="text-4xl font-bold">Search NASA Images</h1>
      </main>
    );
  }

  const data = await searchNASAImages(q);

  const items = data.collection.items.slice(0, 50);

  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="mb-8 text-3xl font-bold text-slate-200">
        🔍Search Results for "{q}"
      </h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {" "}
        {items.map((item: any, index: number) => {
          const info = item.data?.[0];
          const image = item.links?.[0]?.href;

          return (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10"
            >
              {image && (
                <img
                  src={image}
                  alt={info?.title}
                  className="h-64 w-full object-cover"
                />
              )}

              <div className="p-5">
                <h2 className="mb-2 text-lg font-semibold text-white">
                  {info?.title}
                </h2>

                <p className="mb-3 text-sm text-slate-400">
                  {info?.date_created?.slice(0, 10)}
                </p>

                <p className="line-clamp-3 text-sm text-slate-300">
                  {info?.description || "No description available."}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
