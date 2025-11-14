export interface MenuItem {
  name: string;
  korean: string;
  description: string;
  ingredients: string[];
  city: string;
}

export const MENU_ITEMS: MenuItem[] = [
  {
    name: "Seoul Sling",
    korean: "서울",
    description:
      "A refreshing floral gin cocktail inspired by Seoul's modern energy.",
    ingredients: ["Gin", "Plum", "Jasmine", "Citrus"],
    city: "Seoul",
  },
  {
    name: "Sea of Busan",
    korean: "부산",
    description:
      "A seaside breeze in a glass - bright, tangy, and slightly salty.",
    ingredients: ["Soju", "Sea Salt", "Yuzu", "Shiso"],
    city: "Busan",
  },
  {
    name: "Jeju Halla Sparkle",
    korean: "제주",
    description:
      "Jeju's citrus sunshine captured in a sparkling, elegant blend.",
    ingredients: ["Vodka", "Hallabong", "Honey", "Bubbles"],
    city: "Jeju",
  },
  {
    name: "Jeonju Omija Highball",
    korean: "전주",
    description: "A crisp highball with omija's unique sweet-tart balance.",
    ingredients: ["Whisky", "Omija", "Ginger", "Soda"],
    city: "Jeonju",
  },
];
