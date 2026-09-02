export type ProductCategory = "vestes" | "sweats" | "pantalons" | "accessoires" | "sneakers";

export type BrandId =
  | "arcteryx"
  | "corteiz"
  | "the-north-face"
  | "sp5der"
  | "carhartt-wip"
  | "supreme"
  | "trapstar"
  | "stussy"
  | "jordan"
  | "new-balance"
  | "asics"
  | "on-running"
  | "nike-tn"
  | "adidas"
  | "dior"
  | "louis-vuitton"
  | "syna-world"
  | "denim-tears"
  | "hellstar"
  | "stone-island"
  | "under-armour"
  | "gucci"
  | "goyard"
  | "prada"
  | "chrome-hearts"
  | "bape"
  | "gallery-dept"
  | "palm-angels"
  | "moncler"
  | "canada-goose"
  | "ralph-lauren"
  | "lacoste"
  | "balenciaga"
  | "salomon"
  | "margiela"
  | "yeezy"
  | "loro-piana"
  | "essentials"
  | "palace"
  | "rhude"
  | "cdg";

export interface Brand {
  id: BrandId;
  name: string;
  image: string;
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
