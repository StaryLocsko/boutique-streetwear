"use client";

import { useMemo } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

const FREE_SHIPPING_THRESHOLD = 60;
const SHIPPING_COST = 4.9;

function formatPrice(value: number) {
  return value.toLocaleString("fr-FR", {
    minimumFractionDigits: Number.isInteger(value) ? 0 : 2,
    maximumFractionDigits: 2,
  });
}

export default function CartDrawer() {
  const { items, isOpen, isMounted, closeCart, removeItem, updateQuantity, total } = useCart();

  const shippingCost = total >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_COST;
  const amountUntilFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - total);
  const finalTotal = total + shippingCost;

  const whatsappLink = useMemo(() => {
    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "33600000000";
    if (items.length === 0) return null;

    const lines = items.map(
      (item) =>
        `• ${item.product.name} [Ref: ${item.product.id}] — Taille ${item.size} × ${item.quantity} — ${(
          item.product.price * item.quantity
        ).toFixed(0)} €`
    );

    const shippingLine =
      shippingCost > 0 ? `Livraison : ${formatPrice(shippingCost)} €` : "Livraison : OFFERT";

    const message = [
      "Bonjour, je souhaite commander :",
      "",
      ...lines,
      "",
      shippingLine,
      `Total : ${formatPrice(finalTotal)} €`,
    ].join("\n");

    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  }, [items, shippingCost, finalTotal]);

  if (!isMounted) return null;

  return (
    <>
      <div
        role="presentation"
        onClick={closeCart}
        className={`fixed inset-0 z-40 bg-zinc-950/30 transition-opacity ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md transform flex-col border-l border-zinc-200/80 bg-white shadow-[-8px_0_40px_rgba(0,0,0,0.08)] transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between border-b border-zinc-200/80 px-5 py-4">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-950">Panier</h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Fermer le panier"
            className="text-zinc-500 transition-colors hover:text-zinc-950"
          >
            ✕
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <p className="mt-10 text-center text-sm text-zinc-500">Votre panier est vide.</p>
          ) : (
            <ul className="flex flex-col gap-4">
              {items.map((item) => (
                <li key={`${item.product.id}-${item.size}`} className="flex gap-3">
                  <div className="relative h-20 w-16 shrink-0 overflow-hidden rounded-lg border border-zinc-200/80 bg-zinc-100">
                    <Image
                      src={item.product.images[0]}
                      alt={item.product.name}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-1">
                    <div className="flex items-start justify-between gap-2">
                      <p className="line-clamp-1 text-sm text-zinc-900">{item.product.name}</p>
                      <button
                        type="button"
                        onClick={() => removeItem(item.product.id, item.size)}
                        className="shrink-0 text-xs text-zinc-400 transition-colors hover:text-zinc-950"
                      >
                        Retirer
                      </button>
                    </div>
                    <p className="text-xs text-zinc-500">Taille {item.size}</p>
                    <div className="mt-1 flex items-center justify-between">
                      <div className="flex items-center gap-3 rounded-full border border-zinc-300 px-1">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.product.id, item.size, item.quantity - 1)}
                          aria-label="Diminuer la quantité"
                          className="flex h-7 w-7 items-center justify-center text-zinc-600 transition-colors hover:text-zinc-950"
                        >
                          −
                        </button>
                        <span className="w-4 text-center text-xs text-zinc-700">{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.product.id, item.size, item.quantity + 1)}
                          aria-label="Augmenter la quantité"
                          className="flex h-7 w-7 items-center justify-center text-zinc-600 transition-colors hover:text-zinc-950"
                        >
                          +
                        </button>
                      </div>
                      <p className="text-sm text-zinc-900">
                        {(item.product.price * item.quantity).toFixed(0)} €
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="flex flex-col gap-3 border-t border-zinc-200/80 px-5 py-4">
          {items.length > 0 && (
            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between text-sm text-zinc-600">
                <span>Sous-total</span>
                <span className="font-medium text-zinc-950">{formatPrice(total)} €</span>
              </div>
              <div className="flex justify-between text-sm text-zinc-600">
                <span>Livraison</span>
                <span className="font-medium text-zinc-950">
                  {shippingCost > 0 ? `${formatPrice(shippingCost)} €` : "Offerte"}
                </span>
              </div>
              {shippingCost > 0 && (
                <p className="text-xs text-zinc-500">
                  Plus que {formatPrice(amountUntilFreeShipping)} € pour bénéficier de la livraison
                  offerte !
                </p>
              )}
              <div className="mt-1 flex justify-between border-t border-zinc-200/80 pt-2 text-sm text-zinc-900">
                <span className="font-semibold uppercase tracking-[0.15em]">Total</span>
                <span className="font-semibold text-zinc-950">{formatPrice(finalTotal)} €</span>
              </div>
            </div>
          )}
          {whatsappLink ? (
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-zinc-900/10 bg-[#25D366] py-3.5 text-center text-xs font-semibold uppercase tracking-[0.15em] text-zinc-950 transition-colors hover:bg-[#1ebe5b]"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 shrink-0" aria-hidden>
                <path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.77.46 3.5 1.34 5.02L2 22l5.13-1.35a9.96 9.96 0 0 0 4.91 1.29h.01c5.52 0 10-4.48 10-10s-4.48-9.94-10.01-9.94Zm5.86 14.29c-.25.7-1.24 1.28-2.03 1.45-.54.11-1.24.2-3.6-.77-3.02-1.25-4.96-4.31-5.11-4.51-.15-.2-1.22-1.62-1.22-3.09 0-1.47.77-2.19 1.05-2.49.25-.27.62-.4.98-.4.12 0 .23 0 .32.01.28.01.42.03.61.48.24.57.81 1.98.88 2.12.07.15.12.32.02.51-.09.2-.14.32-.28.49-.14.17-.29.37-.42.5-.14.14-.28.29-.12.57.16.28.71 1.17 1.53 1.9 1.05.94 1.93 1.23 2.21 1.37.28.14.44.12.61-.07.17-.2.72-.83.91-1.12.19-.28.38-.24.63-.15.26.1 1.65.78 1.93.92.28.14.47.21.54.33.07.12.07.68-.18 1.38Z" />
              </svg>
              Commander sur WhatsApp
            </a>
          ) : (
            <span className="w-full cursor-not-allowed rounded-xl border border-zinc-200/80 bg-zinc-50 py-3.5 text-center text-xs font-semibold uppercase tracking-[0.15em] text-zinc-400">
              Commander sur WhatsApp
            </span>
          )}
        </div>
      </aside>
    </>
  );
}
