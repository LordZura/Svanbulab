import { Link } from "react-router-dom";
import { routePaths } from "../../routes/routePaths";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28">
        <div className="flex flex-col justify-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
            Local 3D printing studio
          </p>
          <h1 className="mt-5 text-5xl font-semibold tracking-tight text-white sm:text-6xl">
            Custom 3D prints, ready-made products, and fast local orders.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-zinc-300">
            Bring your idea, STL file, sketch, or request. Get clean printing, fast turnaround,
            and bilingual service in Georgian and English.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to={routePaths.customOrder}
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:scale-[1.02]"
            >
              Order Custom Print
            </Link>
            <Link
              to={routePaths.gallery}
              className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              View Gallery
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm text-zinc-400">
            <span>Fast quotes</span>
            <span>Local pickup</span>
            <span>Ge / En support</span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-tr from-blue-500/20 to-fuchsia-500/10 blur-3xl" />
          <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/30">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["3D Models", "STL, OBJ, and custom files"],
                ["Accessories", "Keychains, stands, holders"],
                ["Prototype Parts", "Functional and tested prints"],
                ["Gift Items", "Personalized local products"],
              ].map(([title, text]) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <div className="text-base font-semibold text-white">{title}</div>
                  <div className="mt-2 text-sm text-zinc-400">{text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}