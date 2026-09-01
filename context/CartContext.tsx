"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Product } from "@/types/product";

export interface CartItem {
  product: Product;
  size: string;
  quantity: number;
}

interface CartContextValue {
  items: CartItem[];
  itemCount: number;
  total: number;
  isOpen: boolean;
  isMounted: boolean;
  openCart: () => void;
  closeCart: () => void;
  addToCart: (product: Product, size: string, quantity?: number) => void;
  removeItem: (productId: string, size: string) => void;
  updateQuantity: (productId: string, size: string, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

const STORAGE_KEY = "boutique-streetwear-cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) {
        // Lecture différée à l'effet (plutôt qu'à l'initialisation du state) pour que le rendu
        // serveur et le premier rendu client restent identiques (panier vide) et évitent un
        // mismatch d'hydratation ; la mise à jour n'intervient qu'après le montage.
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setItems(JSON.parse(stored) as CartItem[]);
      }
    } catch {
      // localStorage indisponible ou corrompu : on repart d'un panier vide
    } finally {
      setIsMounted(true);
    }
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, isMounted]);

  const addToCart = useCallback((product: Product, size: string, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id && item.size === size);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id && item.size === size
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, size, quantity }];
    });
  }, []);

  const removeItem = useCallback((productId: string, size: string) => {
    setItems((prev) => prev.filter((item) => !(item.product.id === productId && item.size === size)));
  }, []);

  const updateQuantity = useCallback((productId: string, size: string, quantity: number) => {
    setItems((prev) => {
      if (quantity <= 0) {
        return prev.filter((item) => !(item.product.id === productId && item.size === size));
      }
      return prev.map((item) =>
        item.product.id === productId && item.size === size ? { ...item, quantity } : item
      );
    });
  }, []);

  const clearCart = useCallback(() => setItems([]), []);
  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const itemCount = useMemo(() => items.reduce((sum, item) => sum + item.quantity, 0), [items]);
  const total = useMemo(
    () => items.reduce((sum, item) => sum + item.product.price * item.quantity, 0),
    [items]
  );

  const value = useMemo<CartContextValue>(
    () => ({
      items,
      itemCount,
      total,
      isOpen,
      isMounted,
      openCart,
      closeCart,
      addToCart,
      removeItem,
      updateQuantity,
      clearCart,
    }),
    [
      items,
      itemCount,
      total,
      isOpen,
      isMounted,
      openCart,
      closeCart,
      addToCart,
      removeItem,
      updateQuantity,
      clearCart,
    ]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart doit être utilisé à l'intérieur d'un CartProvider");
  }
  return context;
}
