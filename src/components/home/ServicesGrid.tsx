import SectionTitle from "../shared/SectionTitle";

const services = [
  {
    title: "Custom orders",
    text: "Send your model or idea and get a quote for printing, sizing, and material choice.",
  },
  {
    title: "Ready-made products",
    text: "Sell keychains, decor, desk items, and gifts that are already printed and ready.",
  },
  {
    title: "Prototype support",
    text: "Small batches, test parts, and functional pieces for experiments or product ideas.",
  },
  {
    title: "Local delivery",
    text: "Fast communication, local pickup, and simple order handling for nearby customers.",
  },
];

export default function ServicesGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow="Services"
        title="Built to handle both custom jobs and ready-to-sell items."
        description="This structure gives you two income streams: one-off customer orders and stock products you can sell immediately."
      />
      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {services.map((service) => (
          <article
            key={service.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/15"
          >
            <h3 className="text-lg font-semibold text-white">{service.title}</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-400">{service.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}