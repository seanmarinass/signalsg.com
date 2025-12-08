import SeoulSlingImage from "@/assets/images/drinks/seoul-sling.webp";
import SeaOfBusanImage from "@/assets/images/drinks/sea-of-busan.webp";
import JejuHallaSparkleImage from "@/assets/images/drinks/jeju-halla-sparkle.webp";
import JeonjuOmijaHighballeImage from "@/assets/images/drinks/jeonju-omija-highball.webp";
import { StaticImageData } from "next/image";

export interface LandingMenuItem {
  name: string;
  korean: string;
  description: string;
  ingredients: string[];
  city: string;
  image: {
    src: StaticImageData;
    alt: string;
  };
}

export const LANDING_MENU_ITEMS: LandingMenuItem[] = [
  {
    name: "Seoul Sling",
    korean: "서울",
    description:
      "A refreshing floral gin cocktail inspired by Seoul's modern energy.",
    ingredients: ["Gin", "Plum", "Jasmine", "Citrus"],
    city: "Seoul",
    image: {
      src: SeoulSlingImage,
      alt: "Seoul sling image",
    },
  },
  {
    name: "Sea of Busan",
    korean: "부산",
    description:
      "A seaside breeze in a glass - bright, tangy, and slightly salty.",
    ingredients: ["Soju", "Sea Salt", "Yuzu", "Shiso"],
    city: "Busan",
    image: {
      src: SeaOfBusanImage,
      alt: "Sea of Busan image",
    },
  },
  {
    name: "Jeju Halla Sparkle",
    korean: "제주",
    description:
      "Jeju's citrus sunshine captured in a sparkling, elegant blend.",
    ingredients: ["Vodka", "Hallabong", "Honey", "Bubbles"],
    city: "Jeju",
    image: {
      src: JejuHallaSparkleImage,
      alt: "Jeju Halla sparkle image",
    },
  },
  {
    name: "Jeonju Omija Highball",
    korean: "전주",
    description: "A crisp highball with omija's unique sweet-tart balance.",
    ingredients: ["Whisky", "Omija", "Ginger", "Soda"],
    city: "Jeonju",
    image: {
      src: JeonjuOmijaHighballeImage,
      alt: "Jeonju Omija Highball image",
    },
  },
];
