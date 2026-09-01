export type ProductCategory = "vestes" | "sweats" | "pantalons" | "accessoires";

export type BrandId =
  | "arcteryx"
  | "corteiz"
  | "the-north-face"
  | "sp5der"
  | "carhartt-wip"
  | "supreme"
  | "trapstar"
  | "stussy";

export interface Brand {
  id: BrandId;
  name: string;
}

export interface Product {
  id: string;
  name: string;
  brandId: BrandId;
  category: ProductCategory;
  price: number;
  images: string[];
  sizes: string[];
  description: string;
  badge?: string;
}
