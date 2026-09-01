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
];
