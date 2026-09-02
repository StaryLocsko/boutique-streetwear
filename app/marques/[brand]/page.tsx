"use client";

import { use, useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { brands } from "@/data/brands";
import { products } from "@/data/products";
import type { Product } from "@/types/product";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import ProductModal from "@/components/ProductModal";
import CartDrawer from "@/components/CartDrawer";
import Footer from "@/components/Footer";

interface BrandPageProps {
  params: Promise<{ brand: string }>;
}

export default function BrandPage({ params }: BrandPageProps) {
  const { brand: brandId } = use(params);
  const brand = brands.find((item) => item.id === brandId);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  if (!brand) notFound();

  const brandProducts = products.filter((product) => product.brandId === brand.id);

  return (
    <>
      <Header />

      <main className="relative z-10 mx-auto w-full max-w-7xl flex-1 px-4 py-10 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex w-fit items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-xs font-medium uppercase tracking-[0.15em] text-zinc-300 transition-colors hover:border-white/30 hover:text-white"
        >
          ← Retour aux marques
        </Link>

        <section className="mb-10 mt-6">
          <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {brand.name}
          </h1>
          <p className="mt-2 text-sm text-zinc-400">
            {brandProducts.length} article{brandProducts.length > 1 ? "s" : ""} disponible
            {brandProducts.length > 1 ? "s" : ""}
          </p>
        </section>

        {brandProducts.length > 0 ? (
          <section className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4">
            {brandProducts.map((product) => (
              <ProductCard key={product.id} product={product} onSelect={setSelectedProduct} />
            ))}
          </section>
        ) : (
          <p className="text-sm text-zinc-500">Aucun article disponible pour cette marque pour le moment.</p>
        )}
      </main>

      <Footer />
      <CartDrawer />

      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </>
  );
}
