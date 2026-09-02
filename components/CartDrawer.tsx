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
        className={`fixed inset-0 z-40 bg-black/60 transition-opacity ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md transform flex-col border-l border-zinc-800 bg-zinc-950 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between border-b border-zinc-800 px-5 py-4">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-white">Panier</h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Fermer le panier"
            className="text-zinc-400 transition-colors hover:text-white"
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
                  <div className="relative h-20 w-16 shrink-0 overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900">
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
                      <p className="line-clamp-1 text-sm text-zinc-100">{item.product.name}</p>
                      <button
                        type="button"
                        onClick={() => removeItem(item.product.id, item.size)}
                        className="shrink-0 text-xs text-zinc-500 transition-colors hover:text-white"
                      >
                        Retirer
                      </button>
                    </div>
                    <p className="text-xs text-zinc-500">Taille {item.size}</p>
                    <div className="mt-1 flex items-center justify-between">
                      <div className="flex items-center gap-3 rounded-full border border-zinc-700 px-1">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.product.id, item.size, item.quantity - 1)}
                          aria-label="Diminuer la quantité"
                          className="flex h-7 w-7 items-center justify-center text-zinc-300 transition-colors hover:text-white"
                        >
                          −
                        </button>
                        <span className="w-4 text-center text-xs text-zinc-200">{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.product.id, item.size, item.quantity + 1)}
                          aria-label="Augmenter la quantité"
                          className="flex h-7 w-7 items-center justify-center text-zinc-300 transition-colors hover:text-white"
                        >
                          +
                        </button>
                      </div>
                      <p className="text-sm text-zinc-100">
                        {(item.product.price * item.quantity).toFixed(0)} €
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="flex flex-col gap-3 border-t border-zinc-800 px-5 py-4">
          {items.length > 0 && (
            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between text-sm text-zinc-300">
                <span>Sous-total</span>
                <span className="font-medium text-white">{formatPrice(total)} €</span>
              </div>
              <div className="flex justify-between text-sm text-zinc-300">
                <span>Livraison</span>
                <span className="font-medium text-white">
                  {shippingCost > 0 ? `${formatPrice(shippingCost)} €` : "Offerte"}
                </span>
              </div>
              {shippingCost > 0 && (
                <p className="text-xs text-zinc-500">
                  Plus que {formatPrice(amountUntilFreeShipping)} € pour bénéficier de la livraison
                  offerte !
                </p>
              )}
              <div className="mt-1 flex justify-between border-t border-zinc-800 pt-2 text-sm text-zinc-100">
                <span className="font-semibold uppercase tracking-wide">Total</span>
                <span className="font-semibold text-white">{formatPrice(finalTotal)} €</span>
              </div>
            </div>
          )}
          {whatsappLink ? (
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-full bg-[#25D366] py-3 text-center text-sm font-semibold uppercase tracking-wide text-zinc-950 transition-colors hover:bg-[#1ebe5b]"
            >
              Commander sur WhatsApp
            </a>
          ) : (
            <span className="w-full cursor-not-allowed rounded-full bg-zinc-800 py-3 text-center text-sm font-semibold uppercase tracking-wide text-zinc-500">
              Commander sur WhatsApp
            </span>
          )}
        </div>
      </aside>
    </>
  );
}
