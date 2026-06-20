const wonders = [
  {
    title: "The Power of the Sun",
    image: "/wonders/solar-flare.jpg",
    fact:
      "The Sun contains over 99.8% of the Solar System's mass and can unleash powerful solar flares that affect Earth.",
  },
  {
    title: "Earthrise",
    image: "/wonders/earth-rise.jpg",
    fact:
      "Captured during Apollo 8, Earthrise became one of the most influential photographs in history.",
  },
  {
    title: "Olympus Mons",
    image: "/wonders/olympus-mon.jpg",
    fact:
      "Olympus Mons on Mars is the largest volcano in the Solar System, standing nearly three times taller than Mount Everest.",
  },
  {
    title: "Valles Marineris",
    image: "/wonders/valles-marineris.jpg",
    fact:
      "Stretching over 4,000 km, Valles Marineris is the largest canyon system known in the Solar System.",
  },
  {
    title: "The Great Red Spot",
    image: "/wonders/great-red-spot.jpg",
    fact:
      "Jupiter's Great Red Spot is a gigantic storm that has been raging for centuries.",
  },
  {
    title: "Saturn's Rings",
    image: "/wonders/saturn-rings.jpg",
    fact:
      "Saturn's rings span hundreds of thousands of kilometers yet are surprisingly thin.",
  },
  {
    title: "Neptune's Storms",
    image: "/wonders/neptune-storm.jpg",
    fact:
      "Neptune experiences some of the fastest winds ever recorded in the Solar System.",
  },
  {
    title: "Voyager 1",
    image: "/wonders/voyager1.jpg",
    fact:
      "Voyager 1 is humanity's most distant spacecraft and continues its journey through interstellar space.",
  },
];

export default function SolarSystemWonders() {
  return (
    <section className="my-32">

      <div className="mb-20 text-center">
        <h2 className="text-5xl font-bold">
          Wonders of the Solar System
        </h2>

        <p className="mt-4 text-slate-400">
          Extraordinary places and discoveries that
          showcase the beauty and scale of our cosmic neighborhood.
        </p>
      </div>

      <div className="space-y-32">

        {wonders.map((wonder, index) => (
          <div
            key={wonder.title}
            className={`
              grid
              items-center
              gap-12
              md:grid-cols-2
              ${
                index % 2 === 1
                  ? "md:[&>*:first-child]:order-2"
                  : ""
              }
            `}
          >

            <div className="group overflow-hidden rounded-3xl border border-slate-800">
              <img
                src={wonder.image}
                alt={wonder.title}
                className="
                  h-[450px]
                  w-full
                  object-cover
                  transition
                  duration-700
                  group-hover:scale-105
                "
              />
            </div>

            <div>
              <p className="mb-3 text-cyan-400 font-semibold tracking-wider uppercase">
                Solar System Wonder
              </p>

              <h3 className="mb-6 text-5xl font-bold">
                {wonder.title}
              </h3>

              <p className="text-xl leading-relaxed text-slate-300">
                {wonder.fact}
              </p>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}