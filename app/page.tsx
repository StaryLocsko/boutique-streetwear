"use client";

import { useMemo, useState } from "react";
import { products } from "@/data/products";
import type { Product, ProductCategory } from "@/types/product";
import Header, { type CategoryOption } from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import ProductModal from "@/components/ProductModal";
import CartDrawer from "@/components/CartDrawer";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const CATEGORIES: CategoryOption[] = [
  { label: "Tous", value: "tous" },
  { label: "Vestes", value: "vestes" },
  { label: "Sweats", value: "sweats" },
  { label: "Sneakers", value: "sneakers" },
  { label: "Accessoires", value: "accessoires" },
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory | "tous">("tous");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = useMemo(() => {
    if (activeCategory === "tous") return products;
    return products.filter((product) => product.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <Header categories={CATEGORIES} activeCategory={activeCategory} onCategoryChange={setActiveCategory} />

      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-10 sm:px-6 lg:px-8">
        <section className="mb-10">
          <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Sélection streetwear
          </h1>
          <p className="mt-2 max-w-xl text-sm text-zinc-400">
            Pièces rares et intemporelles, livrées sous 2 à 3 semaines.
          </p>
        </section>

        <section className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} onSelect={setSelectedProduct} />
          ))}
        </section>

        <FAQ />
      </main>

      <Footer />
      <CartDrawer />

      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </>
  );
}
