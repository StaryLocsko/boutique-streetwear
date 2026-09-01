import type { Product } from "@/types/product";

function unsplash(id: string) {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1200&q=80`;
}

const SIZES_APPAREL = ["S", "M", "L", "XL"];
const SIZES_SWEAT = ["XS", "S", "M", "L", "XL"];
const SIZES_SNEAKERS = ["40", "41", "42", "43", "44", "45"];
const SIZES_UNIQUE = ["Taille unique"];

export const products: Product[] = [
  {
    id: "veste-arcteryx-beta",
    name: "Arc'teryx Beta AR Jacket",
    category: "vestes",
    price: 590,
    images: [unsplash("1591047139829-d91aecb6caea"), unsplash("1520975916090-3105956dac38")],
    sizes: SIZES_APPAREL,
    description:
      "Coupe technique Gore-Tex, coutures thermosoudées et capuche ajustable. Pensée pour la ville comme pour la montagne.",
    badge: "Nouveau",
  },
  {
    id: "veste-north-face-nuptse",
    name: "The North Face Nuptse 700",
    category: "vestes",
    price: 260,
    images: [unsplash("1495105787522-5334e3ffa0ef"), unsplash("1544022613-e87ca75a784a")],
    sizes: SIZES_APPAREL,
    description: "Doudoune matelassée garnissage duvet 700, silhouette oversize et col montant doublé.",
  },
  {
    id: "veste-carhartt-detroit",
    name: "Carhartt WIP Detroit Jacket",
    category: "vestes",
    price: 180,
    images: [unsplash("1523381210434-271e8be1f52b"), unsplash("1608063615781-e2ef8c73d114")],
    sizes: SIZES_APPAREL,
    description: "Toile canvas robuste doublée sherpa, coupe workwear intemporelle à quatre poches plaquées.",
  },
  {
    id: "sweat-stone-island-crewneck",
    name: "Stone Island Crewneck Sweat",
    category: "sweats",
    price: 220,
    images: [unsplash("1551028719-00167b16eac5"), unsplash("1509942774463-acf339cf87d5")],
    sizes: SIZES_SWEAT,
    description: "Molleton épais garment-dyed, patch amovible sur la manche, finitions renforcées.",
  },
  {
    id: "sweat-ami-paris-coeur",
    name: "Ami Paris Sweat Cœur Brodé",
    category: "sweats",
    price: 195,
    images: [unsplash("1620799140408-edc6dcb6d633"), unsplash("1618354691373-d851c5c3a990")],
    sizes: SIZES_SWEAT,
    description: "Coton bio épais, cœur brodé signature sur la poitrine, coupe droite unisexe.",
    badge: "Best-seller",
  },
  {
    id: "sweat-supreme-box-logo",
    name: "Supreme Box Logo Hoodie",
    category: "sweats",
    price: 340,
    images: [unsplash("1544441893-675973e31985"), unsplash("1556742049-0cfed4f6a45d")],
    sizes: SIZES_SWEAT,
    description: "Sweat à capuche floqué Box Logo, molleton lourd et poche kangourou renforcée.",
    badge: "Édition limitée",
  },
  {
    id: "sweat-essentials-fog",
    name: "Essentials Fear of God Hoodie",
    category: "sweats",
    price: 150,
    images: [unsplash("1509631179647-0177331693ae"), unsplash("1516826957135-700dedea698c")],
    sizes: SIZES_SWEAT,
    description: "Silhouette oversize signature, capuche double épaisseur et impression logo réfléchissant.",
  },
  {
    id: "sneakers-asics-kayano-14",
    name: "Asics Gel-Kayano 14",
    category: "sneakers",
    price: 175,
    images: [unsplash("1521572163474-6864f9cf17ab"), unsplash("1542291026-7eec264c27ff")],
    sizes: SIZES_SNEAKERS,
    description: "Silhouette Y2K culte, mesh technique et amorti gel visible, coloris dégradé.",
  },
  {
    id: "sneakers-dior-b22",
    name: "Dior B22 Sneakers",
    category: "sneakers",
    price: 890,
    images: [unsplash("1600185365483-26d7a4cc7519"), unsplash("1465453869711-7e174808ace9")],
    sizes: SIZES_SNEAKERS,
    description: "Empiècements techniques et cuir Oblique, semelle épaisse crantée, finitions haute couture.",
    badge: "Exclusif",
  },
  {
    id: "sneakers-jordan-4-black-suede",
    name: "Jordan 4 Black Suede",
    category: "sneakers",
    price: 260,
    images: [unsplash("1595950653106-6c9ebd614d3a"), unsplash("1584735175315-9d5df23860e6")],
    sizes: SIZES_SNEAKERS,
    description: "Nubuck premium ton sur ton, œillets métalliques et semelle translucide iconique.",
    badge: "Populaire",
  },
  {
    id: "accessoire-ald-beanie",
    name: "Aime Leon Dore Beanie",
    category: "accessoires",
    price: 65,
    images: [unsplash("1591561954557-26941169b49e"), unsplash("1521223890158-f9f7c3d5d504")],
    sizes: SIZES_UNIQUE,
    description: "Maille côtelée laine mérinos, patch brodé discret, coupe ajustée.",
  },
  {
    id: "accessoire-new-era-9fifty",
    name: "New Era Casquette 9FIFTY",
    category: "accessoires",
    price: 45,
    images: [unsplash("1521369909029-2afed882baee"), unsplash("1548883354-7622d03aca27")],
    sizes: SIZES_UNIQUE,
    description: "Snapback structurée, broderie frontale et visière plate, ajustement snap arrière.",
  },
];
