import { Link } from "react-router-dom";
import { routePaths } from "../../routes/routePaths";

type Props = {
  title: string;
  description: string;
};

export default function SimplePage({ title, description }: Props) {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-4xl flex-col justify-center px-4 py-20 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20">
        <p className="text-sm uppercase tracking-[0.3em] text-blue-300">Page</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white">{title}</h1>
        <p className="mt-4 max-w-2xl text-zinc-300">{description}</p>
        <div className="mt-8">
          <Link
            to={routePaths.home}
            className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:scale-[1.02]"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}