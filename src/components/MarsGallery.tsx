"use client";

import { useEffect, useState } from "react";

const rovers = [
  "curiosity",
  "perseverance",
  "opportunity",
  "spirit",
];

export default function MarsGallery() {
  const [selectedRover, setSelectedRover] =
    useState("perseverance");

  const [photos, setPhotos] = useState<any[]>([]);

  const [photoCount, setPhotoCount] =
    useState(12);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    setPhotoCount(12);
  }, [selectedRover]);

  useEffect(() => {
    async function loadPhotos() {
      setLoading(true);

      const camera = "";

const res = await fetch(
  `/api/mars?rover=${selectedRover}&perPage=${photoCount}&camera=${camera}`
);

      const data = await res.json();

      setPhotos(data.data || []);

      setLoading(false);
    }

    loadPhotos();
  }, [selectedRover, photoCount]);

  return (
    <section className="mt-20">
      <h2 className="mb-8 text-5xl font-bold">
        Rover Gallery
      </h2>

      {/* Rover Buttons */}
      <div className="mb-10 flex flex-wrap gap-4">
        {rovers.map((rover) => (
          <button
            key={rover}
            onClick={() =>
              setSelectedRover(rover)
            }
            className={`rounded-full px-6 py-3 transition ${
              selectedRover === rover
                ? "bg-orange-500 text-white"
                : "bg-slate-800 hover:bg-slate-700"
            }`}
          >
            {rover.charAt(0).toUpperCase() +
              rover.slice(1)}
          </button>
        ))}
      </div>

      {/* Loading */}
      {loading && (
        <p className="text-slate-400">
          Loading photos...
        </p>
      )}

      {/* Photos */}
      {!loading && (
        <>
          <div className="grid gap-6 md:grid-cols-3">
            {photos.map((photo: any) => (
              <div
                key={photo.id}
                className="group overflow-hidden rounded-3xl border border-slate-800"
              >
                <img
                  src={
                    photo.attributes.images.large ||
                    photo.attributes.images.full
                  }
                  alt="Mars"
                  className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="p-4">
                  <p className="font-semibold">
                    Sol {photo.attributes.sol}
                  </p>

                  <p className="text-slate-400">
                    {photo.attributes.earth_date}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() =>
                setPhotoCount((prev) => prev + 12)
              }
              className="rounded-full bg-orange-500 px-8 py-4 font-semibold transition hover:bg-orange-400"
            >
              See More Photos
            </button>
          </div>
        </>
      )}
    </section>
  );
}