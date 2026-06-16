import { getMarsPhotos } from "@/lib/mars";
import MarsGallery from "@/components/MarsGallery";

export default async function MarsPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-12">

      {/* HERO */}
      <section className="relative mb-20 h-[60vh] overflow-hidden rounded-3xl">
        <img
          src="/mars/hero1.jpg"
          alt="Mars"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

        <div className="absolute bottom-10 left-10">
          <p className="mb-2 text-orange-400">
            NASA Mars Exploration Program
          </p>

          <h1 className="text-7xl font-bold">
            Mars Explorer
          </h1>

          <p className="mt-4 max-w-2xl text-xl text-slate-300">
            Discover the Red Planet through
            real photographs captured by NASA's
            robotic explorers.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="mb-20 grid gap-6 md:grid-cols-4">
        <div className="rounded-3xl bg-slate-900/50 p-8">
          <p className="text-slate-400">
            Active Rovers
          </p>
          <p className="mt-3 text-5xl font-bold">
            2
          </p>
        </div>

        <div className="rounded-3xl bg-slate-900/50 p-8">
          <p className="text-slate-400">
            Photos Available
          </p>
          <p className="mt-3 text-5xl font-bold">
            680K+
          </p>
        </div>

        <div className="rounded-3xl bg-slate-900/50 p-8">
          <p className="text-slate-400">
            Planet
          </p>
          <p className="mt-3 text-5xl font-bold">
            Mars
          </p>
        </div>

        <div className="rounded-3xl bg-slate-900/50 p-8">
          <p className="text-slate-400">
            Exploration Since
          </p>
          <p className="mt-3 text-5xl font-bold">
            2004
          </p>
        </div>
      </section>

      {/* ROVERS */}
<section className="mb-20">
  <h2 className="mb-8 text-5xl font-bold">
    Meet the Rovers
  </h2>

  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

  <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50 transition hover:border-orange-500">
    <img
      src="/mars/rovers/curiosity-rover.jpg"
      alt="Curiosity Rover"
      className="h-56 w-full object-cover"
    />

    <div className="p-6">
      <h3 className="mb-2 text-2xl font-bold">
        Curiosity
      </h3>

      <p className="mb-3 text-green-400 font-medium">
        ● Active
      </p>

      <p className="text-slate-400">
        Exploring Gale Crater since 2012 and studying
        Mars' climate and geology.
      </p>
    </div>
  </div>

  <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50 transition hover:border-orange-500">
    <img
      src="/mars/rovers/perseverance-rover.jpg"
      alt="Perseverance Rover"
      className="h-56 w-full object-cover"
    />

    <div className="p-6">
      <h3 className="mb-2 text-2xl font-bold">
        Perseverance
      </h3>

      <p className="mb-3 text-green-400 font-medium">
        ● Active
      </p>

      <p className="text-slate-400">
        Searching for signs of ancient life inside
        Jezero Crater and collecting samples for
        future return missions.
      </p>
    </div>
  </div>

  <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50 transition hover:border-orange-500">
    <img
      src="/mars/rovers/opportunity-rover.jpg"
      alt="Opportunity Rover"
      className="h-56 w-full object-cover"
    />

    <div className="p-6">
      <h3 className="mb-2 text-2xl font-bold">
        Opportunity
      </h3>

      <p className="mb-3 text-orange-400 font-medium">
        ● Mission Complete
      </p>

      <p className="text-slate-400">
        Operated from 2004–2018 and traveled more
        than 45 kilometers across Mars.
      </p>
    </div>
  </div>

  <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50 transition hover:border-orange-500">
    <img
      src="/mars/rovers/spirit-rover.jpg"
      alt="Spirit Rover"
      className="h-56 w-full object-cover"
    />

    <div className="p-6">
      <h3 className="mb-2 text-2xl font-bold">
        Spirit
      </h3>

      <p className="mb-3 text-orange-400 font-medium">
        ● Mission Complete
      </p>

      <p className="text-slate-400">
        Helped uncover evidence that liquid water
        once existed on Mars.
      </p>
    </div>
  </div>

</div>
</section>

      {/* GALLERY */}
      <MarsGallery />

<section className="border-t border-slate-800 py-16">
  <div className="mx-auto max-w-5xl text-center">

    <h2 className="mb-4 text-3xl font-bold">
      Humanity's Next Frontier
    </h2>

    <p className="mx-auto max-w-2xl text-slate-400">
      Mars remains one of the most promising destinations
      for future exploration. Every image returned by these
      rovers helps scientists understand whether life once
      existed on the Red Planet.
    </p>

    <div className="my-10 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />

    <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-500">
      <span>🔴 4 Active & Historic Rovers</span>
      <span>🚁 First Aircraft on Another World</span>
      <span>🧪 Search for Ancient Life</span>
      <span>🚀 Future Human Missions</span>
    </div>

  </div>
</section>

    </main>
  );
}