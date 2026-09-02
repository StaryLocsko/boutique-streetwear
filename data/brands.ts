import type { Brand } from "@/types/product";

function unsplash(id: string) {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1200&q=80`;
}

// Visuels choisis pour l'esthétique "Studio & Lookbook Clair" : pièces réelles sur fond
// neutre / lumineux plutôt que des gros plans abstraits de texture.
export const brands: Brand[] = [
  {
    id: "arcteryx",
    name: "Arc",
    image: "/images/brands/arc.jpg",
    universe: "techwear",
  },
  {
    id: "corteiz",
    name: "Corteiz",
    image: unsplash("1700676195086-81b936390de4"), // cargo, studio beige
    universe: "streetwear",
  },
  {
    id: "the-north-face",
    name: "The North Face",
    image: unsplash("1678884399113-0a2b079a31f5"), // doudoune blanche, studio clair
    universe: "techwear",
  },
  {
    id: "sp5der",
    name: "Sp5der",
    image: unsplash("1656664344251-5abe0e1b5f3f"), // hoodie écru, rue lumineuse
    universe: "streetwear",
  },
  {
    id: "carhartt-wip",
    name: "Carhartt WIP",
    image: unsplash("1686577670370-c4a09bb59aa8"), // pantalon workwear, patch Carhartt
    universe: "streetwear",
  },
  {
    id: "supreme",
    name: "Supreme",
    image: unsplash("1620799140188-3b2a02fd9a77"), // hoodie blanc sur cintre
    universe: "streetwear",
  },
  {
    id: "trapstar",
    name: "Trapstar",
    image: unsplash("1661784396787-2a43e31a5689"), // cargo noir, pavé clair
    universe: "streetwear",
  },
  {
    id: "stussy",
    name: "Stüssy",
    image: unsplash("1633964124833-f4f3928c55bb"), // bonnet, fond blanc studio
    universe: "streetwear",
  },
  {
    id: "jordan",
    name: "Jordan",
    image: unsplash("1669205073423-5da5a5280572"), // Air Jordan 1, socle blanc
    universe: "sneakers",
  },
  {
    id: "new-balance",
    name: "New Balance",
    image: unsplash("1675449257797-3661354024f4"), // 327, fond marbre clair
    universe: "sneakers",
  },
  {
    id: "asics",
    name: "Asics",
    image: unsplash("1650296513868-efb604a4c02a"), // Gel-Mai, intérieur lumineux
    universe: "sneakers",
  },
  {
    id: "on-running",
    name: "On Running",
    image: unsplash("1556306535-fc6684304af1"), // Cloud, studio clair
    universe: "sneakers",
  },
  {
    id: "nike-tn",
    name: "Nike TN",
    image: unsplash("1580999991243-9eee481d03fb"), // Air Max TN, ciel lumineux
    universe: "sneakers",
  },
  {
    id: "adidas",
    name: "Adidas",
    image: unsplash("1710504989595-604f59d1b140"), // Samba, studio blanc
    universe: "sneakers",
  },
  {
    id: "dior",
    name: "Dior",
    image: unsplash("1601297003392-7009398f5ff8"), // B23 Oblique, jour lumineux
    universe: "sneakers",
  },
  {
    id: "louis-vuitton",
    name: "Louis Vuitton",
    image: unsplash("1587563871167-1ee9c731aefb"), // sneaker blanche, studio clair
    universe: "maroquinerie",
  },
  {
    id: "syna-world",
    name: "Syna World",
    image: unsplash("1685328403755-de1d57e12e63"), // hoodie écru, lumière chaude
    universe: "streetwear",
  },
  {
    id: "denim-tears",
    name: "Denim Tears",
    image: unsplash("1473966968600-fa801b869a1a"), // veste denim, extérieur lumineux
    universe: "streetwear",
  },
  {
    id: "hellstar",
    name: "Hellstar",
    image: unsplash("1564557287817-3785e38ec1f5"), // hoodie beige, mur clair
    universe: "streetwear",
  },
  {
    id: "stone-island",
    name: "Stone Island",
    image: unsplash("1608063615781-e2ef8c73d114"), // veste shearling, fond neige clair
    universe: "techwear",
  },
  {
    id: "under-armour",
    name: "Under Armour",
    image: unsplash("1589465885857-44edb59bbff2"), // tenue sport, studio blanc
    universe: "techwear",
  },
  {
    id: "gucci",
    name: "Gucci",
    image: unsplash("1717145687863-157e7195a295"), // casquette GG Canvas, jour clair
    universe: "maroquinerie",
  },
  {
    id: "goyard",
    name: "Goyard",
    image: unsplash("1590326815549-841ec6e7e01b"), // malle en cuir, ton chaud clair
    universe: "maroquinerie",
  },
  {
    id: "prada",
    name: "Prada",
    image: unsplash("1727691038583-bd59f477bb4f"), // sac Re-Nylon, intérieur lumineux
    universe: "maroquinerie",
  },
  {
    id: "chrome-hearts",
    name: "Chrome Hearts",
    image: unsplash("1657603719375-8ffdacaac790"), // sacoche cuir, fond clair
    universe: "maroquinerie",
  },
  {
    id: "bape",
    name: "Bape",
    image: unsplash("1722396433943-7024a4d1f09f"), // hoodie Shark, fond blanc
    universe: "streetwear",
  },
  {
    id: "gallery-dept",
    name: "Gallery Dept",
    image: unsplash("1763256649578-0529e8e52e0a"), // tee Paint Splatter, jour lumineux
    universe: "streetwear",
  },
  {
    id: "palm-angels",
    name: "Palm Angels",
    image: unsplash("1595790751907-75201e9996e5"), // veste, mur clair
    universe: "streetwear",
  },
  {
    id: "moncler",
    name: "Moncler",
    image: unsplash("1548624313-0396c75e4b1a"), // doudoune, studio lumineux
    universe: "techwear",
  },
  {
    id: "canada-goose",
    name: "Canada Goose",
    image: unsplash("1758172071457-00799a535102"), // parka rouge, ciel lumineux
    universe: "techwear",
  },
  {
    id: "ralph-lauren",
    name: "Ralph Lauren",
    image: unsplash("1484516396415-4971641de8e0"), // polo blanc, jour lumineux
    universe: "quiet-luxury",
  },
  {
    id: "lacoste",
    name: "Lacoste",
    image: unsplash("1776111848018-1f0c49e2864b"), // polos pliés, studio blanc
    universe: "quiet-luxury",
  },
  {
    id: "balenciaga",
    name: "Balenciaga",
    image: unsplash("1648759287747-dbc62ff066a1"), // sneaker chunky, intérieur clair
    universe: "sneakers",
  },
  {
    id: "salomon",
    name: "Salomon",
    image: unsplash("1760465809553-ddcbe4bb4753"), // XT-6, sentier lumineux
    universe: "sneakers",
  },
  {
    id: "margiela",
    name: "Maison Margiela",
    image: unsplash("1620989928625-08536e746255"), // Replica GAT, studio clair
    universe: "quiet-luxury",
  },
  {
    id: "yeezy",
    name: "Yeezy",
    image: unsplash("1633281651728-b7f0bd1f3eaa"), // Slide, extérieur lumineux
    universe: "sneakers",
  },
  {
    id: "loro-piana",
    name: "Loro Piana",
    image: unsplash("1576792741377-eb0f4f6d1a47"), // mocassin daim, parquet clair
    universe: "quiet-luxury",
  },
  {
    id: "essentials",
    name: "Essentials",
    image: unsplash("1688111421205-a0a85415b224"), // hoodie boxy, extérieur lumineux
    universe: "quiet-luxury",
  },
  {
    id: "palace",
    name: "Palace",
    image: unsplash("1685328403732-64be6bb9d112"), // hoodie écru, lumière chaude
    universe: "streetwear",
  },
  {
    id: "rhude",
    name: "Rhude",
    image: unsplash("1716186108018-3323500fe8a5"), // tee motorsport, jour lumineux
    universe: "quiet-luxury",
  },
  {
    id: "cdg",
    name: "Comme des Garçons",
    image: unsplash("1586268150522-f6235b308a04"), // Converse PLAY, parquet clair
    universe: "quiet-luxury",
  },
];
