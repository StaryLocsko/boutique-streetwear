import Image from "next/image";
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
                className="group relative flex aspect-[4/3] flex-col items-center justify-center overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 text-center transition-colors hover:border-zinc-600"
              >
                <Image
                  src={brand.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/55 transition-colors duration-300 group-hover:bg-black/45" />
                <span className="absolute right-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-zinc-950">
                  {count} article{count > 1 ? "s" : ""}
                </span>
                <span className="relative text-lg font-semibold uppercase tracking-[0.15em] text-white drop-shadow-sm sm:text-xl">
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
