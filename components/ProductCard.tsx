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
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-zinc-950">
            {product.badge}
          </span>
        )}
      </div>
      <div className="mt-3 flex flex-col gap-1">
        <h3 className="line-clamp-1 text-sm font-medium text-zinc-100">{product.name}</h3>
        <p className="text-sm text-zinc-400">{product.price.toFixed(0)} €</p>
      </div>
    </button>
  );
}
