import Link from "next/link";
import SolarSystemHero from "../components/SolarSystemHero";
import { getApod } from "@/lib/nasa";
import CosmosGallery from "@/components/CosmosGallery";
const features = [
  {
    title: "NASA's Missons",
    label: "MISSIONS",
    description:
      "Explore NASA's groundbreaking missions, uncovering the mysteries of space through detailed insights, scientific discoveries, and breathtaking imagery.",
    href: "/missions",
  },
  {
    title: "Mars Explorer",
    label: "MARS",
    description:
      "Browse rover photography and explore the surface of the Red Planet.",
    href: "/mars",
  },
  {
    title: "Near-Earth Objects",
    label: "Asteroids",
    description:
      "Track asteroids and monitor objects passing close to Earth.",
    href: "/asteroids",
  },
  {
    title: "Solar System",
    label: "Experience",
    description:
      "Interact with planets and moons through an immersive visualization.",
    href: "/solar-system",
  },
];

<div className="mx-auto mt-16 max-w-5xl">
  <div className="grid grid-cols-2 gap-8 md:grid-cols-4">

    <div>
      <p className="text-4xl font-bold text-cyan-400">
        15+
      </p>
      <p className="mt-2 text-slate-400">
        NASA Missions
      </p>
    </div>

    <div>
      <p className="text-4xl font-bold text-cyan-400">
        8
      </p>
      <p className="mt-2 text-slate-400">
        Planets
      </p>
    </div>

    <div>
      <p className="text-4xl font-bold text-cyan-400">
        1000+
      </p>
      <p className="mt-2 text-slate-400">
        NASA Images
      </p>
    </div>

    <div>
      <p className="text-4xl font-bold text-cyan-400">
        Live
      </p>
      <p className="mt-2 text-slate-400">
        NASA Data
      </p>
    </div>

  </div>
</div>


export default async function Home() {
  const apod = await getApod();
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      {/* HERO */}
      <div className="absolute left-1/2 top-0 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
<section className="relative mb-24 overflow-hidden text-center">

  {/* Glow */}
  <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

  

  <h1 className="relative z-10 mb-6 text-7xl font-black tracking-tight md:text-8xl">
    Explore the Universe
  </h1>

  <p className="relative z-10 mx-auto max-w-3xl text-xl leading-relaxed text-slate-400">
    Discover the cosmos through real NASA data,
    interactive visualizations, rover imagery,
    historic missions, asteroid tracking, and
    planetary exploration.
  </p>

  {/* Buttons */}
  <div className="relative z-10 mt-12 flex flex-wrap justify-center gap-5">

    <Link
      href="/missions"
      className="
        group
        rounded-xl
        bg-gradient-to-r
        from-cyan-500
        to-blue-600
        px-8
        py-4
        font-semibold
        text-white
        shadow-lg
        shadow-cyan-500/20
        transition-all
        duration-300
        hover:scale-105
      "
    >
      Explore Missions
      <span className="ml-2 transition group-hover:translate-x-1 inline-block">
        →
      </span>
    </Link>

    <Link
      href="/mars"
      className="
        rounded-xl
        border
        border-slate-700
        bg-slate-900/50
        px-8
        py-4
        font-semibold
        backdrop-blur
        transition-all
        duration-300
        hover:border-cyan-500
        hover:bg-slate-900
      "
    >
      Explore Mars
    </Link>

  </div>


  {/* Stats */}
  <div className="relative z-10 mx-auto mt-16 max-w-5xl">
    <div className="grid grid-cols-2 gap-8 md:grid-cols-4">

      <div>
        <p className="text-4xl font-bold text-cyan-400">
          15+
        </p>
        <p className="mt-2 text-slate-400">
          NASA Missions
        </p>
      </div>

      <div>
        <p className="text-4xl font-bold text-cyan-400">
          8
        </p>
        <p className="mt-2 text-slate-400">
          Planets
        </p>
      </div>

      <div>
        <p className="text-4xl font-bold text-cyan-400">
          1000+
        </p>
        <p className="mt-2 text-slate-400">
          NASA Images
        </p>
      </div>

      <div>
        <p className="text-4xl font-bold text-cyan-400">
          Live
        </p>
        <p className="mt-2 text-slate-400">
          NASA Data
        </p>
      </div>

    </div>
  </div>

</section>

<CosmosGallery />

      {/* APOD PREVIEW */}
      <section className="mb-24">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-4xl font-bold">Astronomy Picture of the Day</h2>
        </div>

        <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50">
          <div className="grid gap-8 p-8 md:grid-cols-[1.2fr_1fr]">
            <img
              src={apod.url}
              alt={apod.title}
              className="h-full w-full rounded-2xl object-cover"
            />

            <div className="flex flex-col justify-center">
              <h3 className="mb-3 text-3xl font-bold">{apod.title}</h3>

              <p className="mb-4 text-slate-400">{apod.date}</p>

              <p className="text-slate-300">{apod.explanation}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-24">
  <div className="mb-8 flex items-center justify-between">
    <h2 className="text-4xl font-bold">
      Featured Missions
    </h2>

    <Link
      href="/missions"
      className="text-cyan-400 hover:text-cyan-300"
    >
      View All →
    </Link>
  </div>

  <div className="grid gap-6 md:grid-cols-3">
    <Link
      href="/missions/apollo"
      className="group overflow-hidden rounded-3xl border border-slate-800"
    >
      <img
        src="/missions/apollo.jpg"
        alt="Apollo"
        className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
      />

      <div className="p-6">
        <h3 className="text-2xl font-bold">
          Apollo
        </h3>

        <p className="text-slate-400">
          First human Moon landings.
        </p>
      </div>
    </Link>

    <Link
      href="/missions/voyager"
      className="group overflow-hidden rounded-3xl border border-slate-800"
    >
      <img
        src="/missions/voyager.jpg"
        alt="Voyager"
        className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
      />

      <div className="p-6">
        <h3 className="text-2xl font-bold">
          Voyager
        </h3>

        <p className="text-slate-400">
          Humanity's farthest spacecraft.
        </p>
      </div>
    </Link>

    <Link
      href="/missions/jwst"
      className="group overflow-hidden rounded-3xl border border-slate-800"
    >
      <img
        src="/missions/jwst.jpg"
        alt="James Webb"
        className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
      />

      <div className="p-6">
        <h3 className="text-2xl font-bold">
          James Webb
        </h3>

        <p className="text-slate-400">
          Exploring the earliest universe.
        </p>
      </div>
    </Link>
  </div>
</section>

<h2 className="mb-4 text-center text-4xl font-bold">
  Interactive Solar System
</h2>

      {/* NEW SOLAR SYSTEM PREVIEW */}
      <section className="mb-24">
        <p className="mb-8 text-center text-slate-400">
          Drag to explore the Solar System. Hover planets to learn more.
        </p>

        <div
          className="
      rounded-3xl
      border border-blue-500/20
      bg-black
      shadow-2xl
      shadow-blue-500/20
      overflow-hidden
    "
        >
          <SolarSystemHero />
        </div>
      </section>

      {/* FEATURE CARDS */}
      <section className="mb-24">
  <div className="mb-8">
    <h2 className="text-4xl font-bold">
      Explore Space
    </h2>

    <p className="mt-2 text-slate-400">
      Interactive tools and NASA-powered data
      to explore our universe.
    </p>
  </div>

  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
    {features.map((feature) => (
      <Link
        key={feature.title}
        href={feature.href}
        className="
          group
          relative
          overflow-hidden
          rounded-3xl
          border
          border-slate-800
          bg-slate-900/50
          p-8
          transition-all
          duration-300
          hover:-translate-y-2
          hover:border-cyan-500
        "
      >
        <div className="mb-6">
          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold tracking-wider text-cyan-400">
            {feature.label}
          </span>
        </div>

        <h3 className="mb-4 text-2xl font-bold">
          {feature.title}
        </h3>

        <p className="mb-8 text-slate-400">
          {feature.description}
        </p>

        <div className="text-cyan-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          Explore →
        </div>

        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-cyan-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </Link>
    ))}
  </div>
</section>
{/* Homepage Footer */}
<section className="border-t border-slate-800 py-16">
  <div className="mx-auto max-w-5xl px-6 text-center">

    <h2 className="mb-4 text-3xl font-bold">
  Explore Beyond Earth
</h2>

<p className="mx-auto max-w-3xl text-slate-400">
  From the first steps on the Moon to the farthest reaches
  of interstellar space, humanity's greatest discoveries
  begin with curiosity. Explore missions, planets, rover
  imagery, and the wonders of our universe.
</p>

    {/* Tech Stack */}
    <div className="mt-8 flex flex-wrap justify-center gap-3">
      {[
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "NASA APIs",
        "Mars Vista API",
      ].map((tech) => (
        <span
          key={tech}
          className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300"
        >
          {tech}
        </span>
      ))}
    </div>

    {/* Highlights */}
    <div className="mt-10 flex flex-wrap justify-center gap-8 text-sm text-slate-500">
      <span>🚀 Mission Archive</span>
      <span>🪐 Solar System Explorer</span>
      <span>🔴 Mars Rover Gallery</span>
      <span>☄️ Asteroid Tracker</span>
      <span>📸 APOD Integration</span>
    </div>

    <div className="my-10 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

    <p className="text-sm text-slate-600">
      Built to make space exploration more accessible,
      educational, and engaging through modern web technologies.
    </p>

  </div>
</section>
    </main>
  );
}
