/*import { getMarsPhotos } from "@/lib/nasa";

export default async function MarsPage() {
  const data = await getMarsPhotos();

  const photos = data.latest_photos.slice(0, 12);

  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="mb-8 text-5xl font-bold">
        🚀 Mars Explorer
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {photos.map((photo: any) => (
          <div
            key={photo.id}
            className="overflow-hidden rounded-xl border border-slate-800"
          >
            <img
              src={photo.img_src}
              alt="Mars"
              className="h-64 w-full object-cover"
            />

            <div className="p-4">
              <p>{photo.rover.name}</p>
              <p className="text-slate-400">
                {photo.camera.full_name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}*/