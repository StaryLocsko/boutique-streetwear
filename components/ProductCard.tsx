import Image from "next/image";
import type { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

export default function ProductCard({ product, onSelect }: ProductCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(product)}
      className="group flex flex-col text-left"
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-shadow duration-300 group-hover:shadow-[0_10px_28px_rgba(0,0,0,0.08)]">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        {product.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-zinc-600 backdrop-blur-sm">
            {product.badge}
          </span>
        )}
      </div>
      <div className="mt-3 flex flex-col gap-1">
        <h3 className="line-clamp-1 text-sm font-medium tracking-[0.02em] text-zinc-900">
          {product.name}
        </h3>
        <p className="text-sm text-zinc-500">{product.price.toFixed(0)} €</p>
      </div>
    </button>
  );
}
