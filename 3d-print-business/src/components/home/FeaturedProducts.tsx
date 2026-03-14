import SectionTitle from "../shared/SectionTitle";

const products = [
  "Custom keychains",
  "Phone stands",
  "Desk organizers",
  "Mini figurines",
  "Cable holders",
  "Gift items",
];

export default function FeaturedProducts() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow="Shop"
        title="Small products that can be printed in batches."
        description="These are ideal for local selling because they are low-cost, easy to show, and quick to restock."
      />
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((item) => (
          <div
            key={item}
            className="rounded-3xl border border-white/10 bg-black/20 px-5 py-4 text-white"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}