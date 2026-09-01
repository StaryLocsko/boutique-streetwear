export type ProductCategory = "vestes" | "sweats" | "pantalons" | "accessoires";

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  price: number;
  images: string[];
  sizes: string[];
  description: string;
  badge?: string;
}
