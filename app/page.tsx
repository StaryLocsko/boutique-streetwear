import Link from "next/link";
import { brands } from "@/data/brands";
import { products } from "@/data/products";
import Header from "@/components/Header";
import CartDrawer from "@/components/CartDrawer";
import CustomSourcing from "@/components/CustomSourcing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-10 sm:px-6 lg:px-8">
        <section className="mb-10">
          <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Boutique par marque
          </h1>
          <p className="mt-2 max-w-xl text-sm text-zinc-400">
            Sélectionne une marque pour découvrir ses pièces rares, livrées sous 2 à 3 semaines.
          </p>
        </section>

        <section className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4">
          {brands.map((brand) => {
            const count = products.filter((product) => product.brandId === brand.id).length;
            return (
              <Link
                key={brand.id}
                href={`/marques/${brand.id}`}
                className="group relative flex flex-col items-center justify-center gap-4 rounded-2xl border border-zinc-800 bg-zinc-900 px-6 py-10 text-center transition-colors hover:border-zinc-600 hover:bg-zinc-900/70"
              >
                <span className="absolute right-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-zinc-950">
                  {count} article{count > 1 ? "s" : ""}
                </span>
                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-zinc-700 text-lg font-semibold text-zinc-200 transition-colors group-hover:border-zinc-500 group-hover:text-white">
                  {brand.name.charAt(0)}
                </span>
                <span className="text-sm font-medium uppercase tracking-wide text-zinc-100 sm:text-base">
                  {brand.name}
                </span>
              </Link>
            );
          })}
        </section>

        <FAQ />

        <CustomSourcing />
      </main>

      <Footer />
      <CartDrawer />
    </>
  );
}
