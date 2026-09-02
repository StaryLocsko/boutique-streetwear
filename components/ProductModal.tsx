"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { Product } from "@/types/product";
import { useCart } from "@/context/CartContext";

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const { addToCart, openCart } = useCart();
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [sizeError, setSizeError] = useState(false);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  function handleAddToCart() {
    if (!selectedSize) {
      setSizeError(true);
      return;
    }
    addToCart(product, selectedSize, 1);
    onClose();
    openCart();
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 p-0 sm:items-center sm:p-4"
      onClick={onClose}
    >
      <div
        className="flex max-h-[90vh] w-full max-w-2xl flex-col overflow-y-auto rounded-t-2xl border border-white/[0.08] bg-[#0c0d10] sm:grid sm:grid-cols-2 sm:rounded-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative aspect-square sm:aspect-auto sm:h-full">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Fermer"
            className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#0c0d10]/80 text-white sm:hidden"
          >
            ✕
          </button>
        </div>

        <div className="relative flex flex-col gap-4 p-6">
          <button
            type="button"
            onClick={onClose}
            aria-label="Fermer"
            className="absolute right-4 top-4 hidden h-8 w-8 items-center justify-center rounded-full border border-white/15 text-zinc-300 transition-colors hover:border-white hover:text-white sm:flex"
          >
            ✕
          </button>

          {product.badge && (
            <span className="w-fit rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white backdrop-blur-md">
              {product.badge}
            </span>
          )}

          <div>
            <h2 className="text-xl font-semibold text-white">{product.name}</h2>
            <p className="mt-1 text-lg text-zinc-300">{product.price.toFixed(0)} €</p>
          </div>

          <p className="text-sm leading-relaxed text-zinc-400">{product.description}</p>

          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.15em] text-zinc-400">
              Taille
              {sizeError && (
                <span className="ml-2 normal-case tracking-normal text-red-400">Sélection requise</span>
              )}
            </p>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => {
                    setSelectedSize(size);
                    setSizeError(false);
                  }}
                  className={`flex h-11 min-w-11 items-center justify-center rounded-lg border px-2 text-sm transition-colors ${
                    selectedSize === size
                      ? "border-white bg-white text-zinc-950"
                      : "border-white/15 text-zinc-200 hover:border-white/40"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={handleAddToCart}
            className="mt-2 w-full rounded-xl bg-white py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-950 transition-colors hover:bg-zinc-200"
          >
            Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  );
}
