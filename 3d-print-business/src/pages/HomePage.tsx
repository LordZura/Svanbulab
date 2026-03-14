import Hero from "../components/home/Hero";
import ServicesGrid from "../components/home/ServicesGrid";
import FeaturedProducts from "../components/home/FeaturedProducts";
import WhyChooseUs from "../components/home/WhyChooseUs";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <FeaturedProducts />
      <WhyChooseUs />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 shadow-2xl shadow-black/20">
          <h2 className="text-3xl font-semibold text-white">Ready to start selling?</h2>
          <p className="mt-4 max-w-2xl text-zinc-300">
            Next we add the order form, gallery, FAQ, and contact flow so customers can actually send requests.
          </p>
        </div>
      </section>
    </>
  );
}