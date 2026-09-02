"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { brands } from "@/data/brands";
import { products } from "@/data/products";
import type { BrandUniverse } from "@/types/product";
import Header from "@/components/Header";
import CartDrawer from "@/components/CartDrawer";
import CustomSourcing from "@/components/CustomSourcing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

type UniverseFilter = BrandUniverse | "toutes";

const UNIVERSES: { id: UniverseFilter; label: string }[] = [
  { id: "toutes", label: "Toutes" },
  { id: "sneakers", label: "Sneakers" },
  { id: "streetwear", label: "Streetwear & Hype" },
  { id: "techwear", label: "Techwear & Doudounes" },
  { id: "maroquinerie", label: "Maroquinerie & Accessoires" },
  { id: "quiet-luxury", label: "Quiet Luxury & Casual" },
];

export default function Home() {
  const [activeUniverse, setActiveUniverse] = useState<UniverseFilter>("toutes");

  const filteredBrands = useMemo(() => {
    if (activeUniverse === "toutes") return brands;
    return brands.filter((brand) => brand.universe === activeUniverse);
  }, [activeUniverse]);

  return (
    <>
      <Header />

      <main className="relative z-10 mx-auto w-full max-w-7xl flex-1 px-4 py-10 sm:px-6 lg:px-8">
        <section className="mb-8">
          <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Boutique par marque
          </h1>
          <p className="mt-2 max-w-xl text-sm text-zinc-400">
            Sélectionne un univers pour découvrir les pièces rares, livrées sous 2 à 3 semaines.
          </p>
        </section>

        <nav
          aria-label="Filtrer par univers"
          className="scrollbar-none mb-8 flex gap-2 overflow-x-auto pb-1"
        >
          {UNIVERSES.map((universe) => {
            const isActive = activeUniverse === universe.id;
            return (
              <button
                key={universe.id}
                type="button"
                onClick={() => setActiveUniverse(universe.id)}
                className={`shrink-0 rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-[0.15em] transition-colors duration-200 ${
                  isActive
                    ? "border-white bg-white text-zinc-950"
                    : "border-white/[0.08] bg-white/[0.03] text-zinc-300 hover:border-white/25 hover:text-white"
                }`}
              >
                {universe.label}
              </button>
            );
          })}
        </nav>

        <section className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4">
          {filteredBrands.map((brand) => {
            const count = products.filter((product) => product.brandId === brand.id).length;
            return (
              <Link
                key={brand.id}
                href={`/marques/${brand.id}`}
                className="group relative flex aspect-[4/3] flex-col items-center justify-end overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 text-center transition-colors duration-300 hover:border-white/20"
              >
                <Image
                  src={brand.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                <span className="absolute right-3 top-3 rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white backdrop-blur-md">
                  {count} PIÈCE{count > 1 ? "S" : ""}
                </span>
                <span className="relative text-lg font-semibold uppercase tracking-[0.2em] text-white sm:text-xl">
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
