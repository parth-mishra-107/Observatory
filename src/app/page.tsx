import Link from "next/link";
import Image from "next/image";
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
  <div className="relative z-10 mx-auto mt-16 max-w-5xl">
  <div className="grid grid-cols-2 gap-4 md:grid-cols-4">

    <div className="
      rounded-2xl
      border border-slate-800
      bg-slate-900/40
      p-6
      backdrop-blur
      transition
      hover:border-cyan-500/50
    ">
      <p className="text-4xl font-bold text-cyan-400">
        15+
      </p>

      <p className="mt-2 text-sm text-slate-400">
        NASA Missions
      </p>
    </div>

    <div className="
      rounded-2xl
      border border-slate-800
      bg-slate-900/40
      p-6
      backdrop-blur
      transition
      hover:border-cyan-500/50
    ">
      <p className="text-4xl font-bold text-cyan-400">
        8
      </p>

      <p className="mt-2 text-sm text-slate-400">
        Planets
      </p>
    </div>

    <div className="
      rounded-2xl
      border border-slate-800
      bg-slate-900/40
      p-6
      backdrop-blur
      transition
      hover:border-cyan-500/50
    ">
      <p className="text-4xl font-bold text-cyan-400">
        1000+
      </p>

      <p className="mt-2 text-sm text-slate-400">
        NASA Images
      </p>
    </div>

    <div className="
      rounded-2xl
      border border-slate-800
      bg-slate-900/40
      p-6
      backdrop-blur
      transition
      hover:border-cyan-500/50
    ">
      <p className="text-4xl font-bold text-cyan-400">
        Live
      </p>

      <p className="mt-2 text-sm text-slate-400">
        NASA Data
      </p>
    </div>

  </div>
</div>
</div>


export default async function Home() {
  const apod = await getApod();
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      {/* HERO */}
      <div className="absolute left-1/2 top-0 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
<section
  className="
    relative
    mb-32
    min-h-[85vh]
    overflow-hidden
    rounded-[40px]
  "
>
  {/* Background Image */}
  <Image
    src="/hero/hero.jpg"
    alt="Earth"
    fill
    priority
    className="object-cover"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/10" />

  {/* Gradient Overlay */}
  <div
    className="
      absolute inset-0
      bg-gradient-to-r
      from-black/70
      via-black/50
      to-black/20
    "
  />

{/* Content */}
<div className="relative z-10 min-h-[85vh]">

  {/* LEFT SIDE */}
  <div className="max-w-3xl px-10 pt-24 md:px-16">

    {/* Heading */}
    <h1 className="text-4xl font-black leading-tight md:text-5xl xl:text-6xl">
  Discover
  <br />
  The Cosmos

  <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
    Through
    <br />
    Real NASA Data
  </span>
</h1>

    {/* Description */}
    <p className="mt-8 max-w-2xl text-xl leading-relaxed text-slate-300">
      Explore planets, missions, asteroid tracking,
      rover imagery, and astronomical discoveries
      through interactive visualizations powered
      by NASA's open data.
    </p>
  </div>



  {/* BOTTOM RIGHT PANEL */}
  <div
    className="
  absolute
  bottom-12
  right-12
  z-20
  flex
  flex-col
  items-end
"
  >
    {/* Buttons */}
    <div className="flex gap-4">
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

        <span className="ml-2 inline-block transition group-hover:translate-x-1">
          →
        </span>
      </Link>

      <Link
        href="/mars"
        className="
          rounded-xl
          border
          border-white/20
          bg-white/10
          px-8
          py-4
          font-semibold
          text-white
          backdrop-blur
          transition-all
          duration-300
          hover:bg-white/20
          hover:border-orange-500
          hover:shadow-lg
          hover:shadow-orange-500/20
        "
      >
        Explore Mars
      </Link>
    </div>

    {/* Mission Card */}
    <div
      className="
        mt-6
        w-[380px]
        rounded-2xl
        border border-white/10
        bg-black/30
        p-6
        backdrop-blur-xl
      "
    >
      <p className="text-xs font-semibold tracking-[0.25em] text-cyan-400">
        FEATURED MISSION
      </p>

      <h3 className="mt-3 text-2xl font-bold">
        Artemis II
      </h3>

      <p className="mt-3 text-slate-300">
        NASA's first crewed Artemis mission,
        paving the way for humanity's return
        to the Moon and future deep-space exploration.
      </p>
    </div>
  </div>
</div>


  {/* Bottom Fade */}
  <div
    className="
      absolute
      bottom-0
      left-0
      right-0
      h-40
      bg-gradient-to-t
      from-slate-950
      to-transparent
    "
  />
</section>

{/* Stats Section */}
<div className="mb-24 grid gap-4 md:grid-cols-4">
  <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 backdrop-blur">
    <p className="text-lg font-bold text-cyan-400">
      Astronomy Picture
    </p>
    <p className="mt-2 text-sm text-slate-400">
      Updated Daily
    </p>
  </div>

  <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 backdrop-blur">
    <p className="text-lg font-bold text-cyan-400">
      Mars Rover Photos
    </p>
    <p className="mt-2 text-sm text-slate-400">
      Live Archive
    </p>
  </div>

  <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 backdrop-blur">
    <p className="text-lg font-bold text-cyan-400">
      Near-Earth Objects
    </p>
    <p className="mt-2 text-sm text-slate-400">
      Tracked Daily
    </p>
  </div>

  <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 backdrop-blur">
    <p className="text-lg font-bold text-cyan-400">
      15+ Missions
    </p>
    <p className="mt-2 text-sm text-slate-400">
      Historic & Active
    </p>
  </div>
</div>

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
