"use client";

import { useState } from "react";

const cosmosImages = [
  {
    title: "Andromeda Galaxy",
    image: "/cosmos/andromeda.jpg",
    description:
      "The closest spiral galaxy to the Milky Way.",
  },
  {
    title: "Whirlpool Galaxy",
    image: "/cosmos/whirlpool.jpg",
    description:
      "A grand-design spiral galaxy interacting with a companion galaxy.",
  },
  {
    title: "Pillars of Creation",
    image: "/cosmos/pillars-of-creation.jpg",
    description:
      "Towering clouds of gas where new stars are born.",
  },
  {
    title: "Eagle Nebula",
    image: "/cosmos/eagle-nebula.jpg",
    description:
      "A stellar nursery located thousands of light-years away.",
  },
  {
    title: "Sombrero Galaxy",
    image: "/cosmos/sombrero-galaxy.jpg",
    description:
      "Known for its bright core and prominent dust lane.",
  },
  {
    title: "Tarantula Nebula",
    image: "/cosmos/tarantula-nebula.jpg",
    description:
      "One of the most active star-forming regions ever observed.",
  },
];

export default function CosmosGallery() {
  const [selected, setSelected] =
    useState<number | null>(null);

  return (
    <section className="mb-24">

      <div className="mb-12 text-center">
        <h2 className="text-5xl font-bold">
          Explore the Cosmos
        </h2>

        <p className="mt-4 text-slate-400">
          Discover breathtaking galaxies,
          nebulae and deep-space wonders.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

        {cosmosImages.map((item, index) => (
          <button
            key={item.title}
            onClick={() => setSelected(index)}
            className="
              group
              overflow-hidden
              rounded-3xl
              border
              border-slate-800
              bg-slate-900/50
              text-left
            "
          >
            <div className="overflow-hidden">

              <img
                src={item.image}
                alt={item.title}
                className="
                  h-72
                  w-full
                  object-cover
                  transition
                  duration-700
                  group-hover:scale-110
                "
              />

            </div>

            <div className="p-6">

              <h3 className="mb-3 text-2xl font-bold">
                {item.title}
              </h3>

              <p className="text-slate-400">
                {item.description}
              </p>

            </div>

          </button>
        ))}

      </div>

      {selected !== null && (
        <div
          className="
            fixed
            inset-0
            z-50
            flex
            items-center
            justify-center
            bg-black/90
            p-6
          "
        >
          <button
            onClick={() => setSelected(null)}
            className="
              absolute
              right-8
              top-8
              text-4xl
              text-white
            "
          >
            ×
          </button>

          <button
            onClick={() =>
              setSelected(
                (selected - 1 + cosmosImages.length) %
                  cosmosImages.length
              )
            }
            className="
              absolute
              left-6
              text-5xl
              text-white
            "
          >
            ‹
          </button>

          <img
            src={cosmosImages[selected].image}
            alt={cosmosImages[selected].title}
            className="
              max-h-[85vh]
              max-w-[85vw]
              rounded-2xl
            "
          />

          <button
            onClick={() =>
              setSelected(
                (selected + 1) %
                  cosmosImages.length
              )
            }
            className="
              absolute
              right-6
              text-5xl
              text-white
            "
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}