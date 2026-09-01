import type { Product } from "@/types/product";

function unsplash(id: string) {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1200&q=80`;
}

const SIZES_APPAREL = ["S", "M", "L", "XL"];
const SIZES_SWEAT = ["XS", "S", "M", "L", "XL"];
const SIZES_PANTS = ["28", "30", "32", "34", "36"];
const SIZES_UNIQUE = ["Taille unique"];

export const products: Product[] = [
  {
    id: "veste-arcteryx-beta-lt",
    name: "Arc'teryx Beta LT Jacket",
    category: "vestes",
    price: 690,
    images: [unsplash("1664461579015-3e1b9bdfb47f"), unsplash("1694389513173-a1fe679e13d4")],
    sizes: SIZES_APPAREL,
    description:
      "Coquille Gore-Tex légère, capuche ajustable compatible casque et coutures thermosoudées. La référence technique portée en ville.",
    badge: "Tendance",
  },
  {
    id: "veste-north-face-nuptse",
    name: "The North Face Nuptse 1996",
    category: "vestes",
    price: 320,
    images: [unsplash("1557418669-db3f781a58c0"), unsplash("1613831666433-b57b8a62b840")],
    sizes: SIZES_APPAREL,
    description: "Doudoune matelassée garnissage duvet 700, silhouette oversize et col montant doublé.",
    badge: "Best-seller",
  },
  {
    id: "veste-carhartt-detroit",
    name: "Carhartt WIP Detroit Jacket",
    category: "vestes",
    price: 185,
    images: [unsplash("1523381210434-271e8be1f52b"), unsplash("1608063615781-e2ef8c73d114")],
    sizes: SIZES_APPAREL,
    description: "Toile canvas robuste doublée sherpa, coupe workwear intemporelle à quatre poches plaquées.",
  },
  {
    id: "sweat-sp5der-hoodie",
    name: "Sp5der Hoodie",
    category: "sweats",
    price: 290,
    images: [unsplash("1618924250113-e162305ac8cd"), unsplash("1685328403755-de1d57e12e63")],
    sizes: SIZES_SWEAT,
    description: "Molleton épais floqué toile d'araignée signature, coupe oversize et poche kangourou.",
    badge: "Tendance",
  },
  {
    id: "sweat-corteiz-hoodie",
    name: "Corteiz Hoodie",
    category: "sweats",
    price: 145,
    images: [unsplash("1620799140408-edc6dcb6d633"), unsplash("1525199078165-69ce4f553361")],
    sizes: SIZES_SWEAT,
    description: "Coton épais garment-dyed, patch Alcatraz brodé sur la poitrine, coupe droite streetwear.",
    badge: "Tendance",
  },
  {
    id: "sweat-stussy-8-ball",
    name: "Stüssy 8-Ball Hoodie",
    category: "sweats",
    price: 150,
    images: [unsplash("1603319444400-216c0718d03c"), unsplash("1632682582909-2b3a2581eef7")],
    sizes: SIZES_SWEAT,
    description: "Molleton lourd, impression 8-Ball signature dans le dos, capuche doublée jersey.",
  },
  {
    id: "sweat-supreme-box-logo",
    name: "Supreme Box Logo Hoodie",
    category: "sweats",
    price: 380,
    images: [unsplash("1542053254535-def95e944232"), unsplash("1512977141980-8cc662e38a0c")],
    sizes: SIZES_SWEAT,
    description: "Sweat à capuche floqué Box Logo culte, molleton lourd et poche kangourou renforcée.",
    badge: "Best-seller",
  },
  {
    id: "pantalon-carhartt-double-knee",
    name: "Carhartt WIP Double Knee Pant",
    category: "pantalons",
    price: 125,
    images: [unsplash("1686577670370-c4a09bb59aa8"), unsplash("1473966968600-fa801b869a1a")],
    sizes: SIZES_PANTS,
    description: "Coton canvas résistant, double épaisseur au genou et multiples poches utilitaires.",
  },
  {
    id: "pantalon-corteiz-cargo",
    name: "Corteiz Cargo Guerillaz",
    category: "pantalons",
    price: 140,
    images: [unsplash("1649850874075-49e014357b9d"), unsplash("1661784396787-2a43e31a5689")],
    sizes: SIZES_PANTS,
    description: "Coupe cargo ample, poches plaquées renforcées et taille ajustable à cordon.",
    badge: "Tendance",
  },
  {
    id: "accessoire-arcteryx-beanie",
    name: "Bonnet Arc'teryx",
    category: "accessoires",
    price: 55,
    images: [unsplash("1633964124833-f4f3928c55bb"), unsplash("1510598969022-c4c6c5d05769")],
    sizes: SIZES_UNIQUE,
    description: "Maille côtelée technique, logo brodé discret, coupe ajustée qui tient au vent.",
  },
  {
    id: "accessoire-denim-tears-casquette",
    name: "Casquette Denim Tears",
    category: "accessoires",
    price: 85,
    images: [unsplash("1521369909029-2afed882baee"), unsplash("1568246621541-5704b4f0bbf2")],
    sizes: SIZES_UNIQUE,
    description: "Casquette en coton brodée motif Cotton Wreath signature, visière courbée, sangle ajustable.",
    badge: "Édition limitée",
  },
  {
    id: "accessoire-arcteryx-mantis",
    name: "Sacoche Arc'teryx Mantis",
    category: "accessoires",
    price: 95,
    images: [unsplash("1588596589966-3260ee9d8b3e"), unsplash("1657603719375-8ffdacaac790")],
    sizes: SIZES_UNIQUE,
    description: "Sacoche banane technique, tissu ripstop déperlant et compartiment principal zippé.",
    badge: "Best-seller",
  },
];
