import type { Brand } from "@/types/product";

function unsplash(id: string) {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1200&q=80`;
}

export const brands: Brand[] = [
  {
    id: "arcteryx",
    name: "Arc'teryx",
    image: unsplash("1612889002060-4692b60f9139"), // fermeture éclair technique
  },
  {
    id: "corteiz",
    name: "Corteiz",
    image: unsplash("1614904301802-53243f11a17c"), // broderie chenille
  },
  {
    id: "the-north-face",
    name: "The North Face",
    image: unsplash("1678884399113-0a2b079a31f5"), // texture doudoune matelassée
  },
  {
    id: "sp5der",
    name: "Sp5der",
    image: unsplash("1711437135098-a86ef35d4a3e"), // texture satinée colorée
  },
  {
    id: "carhartt-wip",
    name: "Carhartt WIP",
    image: unsplash("1603636636762-aa7a39434535"), // toile canvas workwear
  },
  {
    id: "supreme",
    name: "Supreme",
    image: unsplash("1645366188121-2a19e02fcbd5"), // texture rouge signature
  },
  {
    id: "trapstar",
    name: "Trapstar",
    image: unsplash("1655720410101-c5cc15b1faf0"), // texture réfléchissante
  },
  {
    id: "stussy",
    name: "Stüssy",
    image: unsplash("1636716018960-eb737dccb185"), // texture maille tricot
  },
  {
    id: "jordan",
    name: "Jordan",
    image: unsplash("1656944227421-416b1d2186c9"), // Air Jordan 1 Low, gros plan
  },
  {
    id: "new-balance",
    name: "New Balance",
    image: unsplash("1593169158019-e33d5a325c4c"), // talon logo New Balance
  },
  {
    id: "asics",
    name: "Asics",
    image: unsplash("1571741590149-a29f00898167"), // Gel-Lyte III
  },
  {
    id: "on-running",
    name: "On Running",
    image: unsplash("1556306535-fc6684304af1"), // On Cloud, profil studio
  },
  {
    id: "nike-tn",
    name: "Nike TN",
    image: unsplash("1572969565351-7bf9e26cd9ae"), // Air Max TN porté
  },
  {
    id: "adidas",
    name: "Adidas",
    image: unsplash("1726312045271-63d746467b48"), // Gazelle, gros plan N&B
  },
  {
    id: "dior",
    name: "Dior",
    image: unsplash("1601297003493-c0fffa5b55d7"), // B23 Oblique, gros plan
  },
  {
    id: "louis-vuitton",
    name: "Louis Vuitton",
    image: unsplash("1672116875172-3e5257d0e82c"), // toile monogram
  },
  {
    id: "syna-world",
    name: "Syna World",
    image: unsplash("1770795263620-4e1f40193a2d"), // texture velours tracksuit
  },
  {
    id: "denim-tears",
    name: "Denim Tears",
    image: unsplash("1640336437301-8368b53861ab"), // texture denim, poche surpiquée
  },
  {
    id: "hellstar",
    name: "Hellstar",
    image: unsplash("1690983320828-c01b88baacb0"), // texture sombre grunge
  },
  {
    id: "stone-island",
    name: "Stone Island",
    image: unsplash("1594332495179-d979bcd18142"), // texture garment-dyed
  },
  {
    id: "under-armour",
    name: "Under Armour",
    image: unsplash("1632621525252-26ed288b4352"), // maille technique sportive
  },
  {
    id: "gucci",
    name: "Gucci",
    image: unsplash("1717145687863-157e7195a295"), // casquette GG Canvas, gros plan
  },
  {
    id: "goyard",
    name: "Goyard",
    image: unsplash("1590326815549-841ec6e7e01b"), // malle en cuir, fermoir laiton
  },
  {
    id: "prada",
    name: "Prada",
    image: unsplash("1607085941350-7d46c83aa9f5"), // triangle logo, gros plan
  },
  {
    id: "chrome-hearts",
    name: "Chrome Hearts",
    image: unsplash("1669303276440-ac19a8f5ea83"), // croix argentée, ambiance sombre
  },
  {
    id: "bape",
    name: "Bape",
    image: unsplash("1722396433943-7024a4d1f09f"), // capuche Shark camo
  },
  {
    id: "gallery-dept",
    name: "Gallery Dept",
    image: unsplash("1763256649578-0529e8e52e0a"), // tee Paint Splatter
  },
  {
    id: "palm-angels",
    name: "Palm Angels",
    image: unsplash("1643622744071-6aa7644a0ffd"), // veste survêtement bande latérale
  },
  {
    id: "moncler",
    name: "Moncler",
    image: unsplash("1637623378142-748287e92fc9"), // texture doudoune matelassée sombre
  },
  {
    id: "canada-goose",
    name: "Canada Goose",
    image: unsplash("1758172071457-00799a535102"), // capuche parka rouge, écusson
  },
  {
    id: "ralph-lauren",
    name: "Ralph Lauren",
    image: unsplash("1572539188687-4113c4b74e8f"), // veste, patch pony brodé
  },
  {
    id: "lacoste",
    name: "Lacoste",
    image: unsplash("1700221412669-2449f347757f"), // texture sombre, wordmark
  },
  {
    id: "balenciaga",
    name: "Balenciaga",
    image: unsplash("1666687848426-d0b8c0e9cf58"), // devanture de boutique
  },
  {
    id: "salomon",
    name: "Salomon",
    image: unsplash("1760465809553-ddcbe4bb4753"), // XT-6, gros plan sur sentier
  },
  {
    id: "margiela",
    name: "Maison Margiela",
    image: unsplash("1620989928625-08536e746255"), // Replica GAT, en main
  },
  {
    id: "yeezy",
    name: "Yeezy",
    image: unsplash("1626771652942-93d834f3d1fd"), // Yeezy Slide sur boîte
  },
  {
    id: "loro-piana",
    name: "Loro Piana",
    image: unsplash("1576792741377-eb0f4f6d1a47"), // mocassin daim, vue du dessus
  },
  {
    id: "essentials",
    name: "Essentials",
    image: unsplash("1666443762044-c6aa2a306cae"), // hoodie boxy, ambiance urbaine
  },
  {
    id: "palace",
    name: "Palace",
    image: unsplash("1667473569417-79b7f75e68cc"), // skatepark, culture street UK
  },
  {
    id: "rhude",
    name: "Rhude",
    image: unsplash("1716186108018-3323500fe8a5"), // tee motorsport, ambiance course
  },
  {
    id: "cdg",
    name: "Comme des Garçons",
    image: unsplash("1609252546279-1dff6542315b"), // Converse PLAY cœur, porté
  },
];
