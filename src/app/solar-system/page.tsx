"use client";

import { useRef, useState } from "react";
import SolarSystemHero from "../../components/SolarSystemHero";
import { planets } from "@/data/planets";

export default function SolarSystemPage() {
  const [selectedPlanet, setSelectedPlanet] =
    useState(planets[2]);

  const detailsRef = useRef<HTMLDivElement>(null);

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <SolarSystemHero />

      {/* Intro */}
      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <h1 className="mb-6 text-5xl font-bold">
          Explore Our Solar System
        </h1>

        <p className="mx-auto max-w-3xl text-lg text-slate-300">
          Travel from the blazing Sun to the icy reaches of
          Neptune. Discover planets, moons, asteroid belts,
          and the vast cosmic neighborhood we call home.
        </p>
      </section>

      {/* Statistics */}
      <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-20 md:grid-cols-4">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
          <h2 className="text-4xl font-bold text-blue-400">
            8
          </h2>
          <p className="mt-2 text-slate-300">
            Major Planets
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
          <h2 className="text-4xl font-bold text-yellow-400">
            4.6B
          </h2>
          <p className="mt-2 text-slate-300">
            Years Old
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
          <h2 className="text-4xl font-bold text-green-400">
            290+
          </h2>
          <p className="mt-2 text-slate-300">
            Known Moons
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
          <h2 className="text-4xl font-bold text-purple-400">
            1
          </h2>
          <p className="mt-2 text-slate-300">
            Star (The Sun)
          </p>
        </div>
      </section>

      {/* Planet Explorer */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <h2 className="mb-10 text-center text-5xl font-bold">
          Planet Explorer
        </h2>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {planets.map((planet) => (
            <button
              key={planet.name}
              onClick={() => {
                setSelectedPlanet(planet);

                detailsRef.current?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
              className="group rounded-2xl border border-slate-700 bg-slate-900 p-5 transition-all duration-300 hover:scale-105 hover:border-blue-500"
            >
              <img
                src={planet.image}
                alt={planet.name}
                className="mx-auto h-24 w-24 rounded-full object-cover transition group-hover:scale-110"
              />

              <h3 className="mt-4 text-xl font-bold">
                {planet.name}
              </h3>
            </button>
          ))}
        </div>
      </section>

      {/* Planet Details */}
      <section
        ref={detailsRef}
        className="mx-auto max-w-7xl px-4 py-24"
      >
        <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/40 backdrop-blur">
          <div className="grid gap-12 p-8 md:grid-cols-2 md:p-12">

            {/* Planet Image */}
            <div className="flex items-center justify-center">
              <img
                src={selectedPlanet.image}
                alt={selectedPlanet.name}
                className="w-72 md:w-96"
              />
            </div>

            {/* Planet Info */}
            <div>
              <h2 className="text-5xl font-bold">
                {selectedPlanet.name}
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-slate-300">
                {selectedPlanet.overview}
              </p>

              {/* Stats */}
              <div className="mt-10 grid grid-cols-2 gap-4">

                <div className="rounded-xl bg-slate-800/60 p-4">
                  <p className="text-slate-400">
                    Diameter
                  </p>
                  <p className="mt-1 font-semibold">
                    {selectedPlanet.diameter}
                  </p>
                </div>

                <div className="rounded-xl bg-slate-800/60 p-4">
                  <p className="text-slate-400">
                    Moons
                  </p>
                  <p className="mt-1 font-semibold">
                    {selectedPlanet.moons}
                  </p>
                </div>

                <div className="rounded-xl bg-slate-800/60 p-4">
                  <p className="text-slate-400">
                    Day Length
                  </p>
                  <p className="mt-1 font-semibold">
                    {selectedPlanet.dayLength}
                  </p>
                </div>

                <div className="rounded-xl bg-slate-800/60 p-4">
                  <p className="text-slate-400">
                    Year Length
                  </p>
                  <p className="mt-1 font-semibold">
                    {selectedPlanet.yearLength}
                  </p>
                </div>

              </div>

              {/* Fun Fact */}
              <div className="mt-8 rounded-2xl border border-yellow-500/20 bg-yellow-500/10 p-5">
                <h3 className="mb-2 text-xl font-bold text-yellow-300">
                  Fun Fact 🚀
                </h3>

                <p className="text-slate-300">
                  {selectedPlanet.fact}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Asteroid Belt */}
      <section className="mx-auto max-w-6xl px-6 py-20">
  <div className="grid items-center gap-10 rounded-3xl border border-orange-500/20 bg-gradient-to-r from-slate-900 to-slate-950 p-10 md:grid-cols-2">

    <img
      src="/textures/asteroidField.jpg"
      alt="Asteroid Belt"
      className="w-full rounded-2xl object-cover"
    />

    <div>
      <h2 className="mb-4 text-4xl font-bold">
        Asteroid Belt
      </h2>

      <p className="leading-relaxed text-slate-300">
        Located between Mars and Jupiter, the asteroid belt
        contains millions of rocky bodies left over from the
        formation of the Solar System. It acts as a boundary
        between the inner rocky planets and the outer gas giants.
      </p>
    </div>

  </div>
</section>

      {/* Dwarf Planets */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-8 text-center text-4xl font-bold">
          Dwarf Planets
        </h2>

        <div className="grid gap-6 md:grid-cols-5">
          {[
            "Pluto",
            "Ceres",
            "Eris",
            "Haumea",
            "Makemake",
          ].map((planet) => (
            <div
              key={planet}
              className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5 text-center"
            >
              <h3 className="text-xl font-semibold">
                {planet}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <section className="border-t border-slate-800 py-12 text-center text-slate-400">
        Journey Through Space • NASA Dashboard Project
      </section>
    </main>
  );
}