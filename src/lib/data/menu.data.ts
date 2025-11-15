export interface LandingMenuItem {
  name: string;
  korean: string;
  description: string;
  ingredients: string[];
  city: string;
}

export interface MenuItem {
  name: string;
  price: number | string;
}

export interface CocktailMenuItem extends MenuItem {
  korean: string;
  description: string;
}

export interface HighballMenuItem extends CocktailMenuItem {
  pairing?: string;
}

export interface BottledMenuItem extends MenuItem {
  bottlePrice: number | string;
}

export const LANDING_MENU_ITEMS: LandingMenuItem[] = [
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

export const FOUR_CITIES_COCKTAILS: CocktailMenuItem[] = [
  {
    name: "Seoul Sling",
    korean: "서울",
    description:
      "Floral & citrus gin-based. A refreshing floral gin cocktail inspired by Seoul’s modern energy.",
    price: 26,
  },
  {
    name: "Sea of Busan",
    korean: "부산",
    description:
      "Refreshing yuzu, blue curacao, and sea salt foam. A seaside breeze in a glass — bright, tangy, and slightly salty.",
    price: 26,
  },
  {
    name: "Jeju Halla Sparkle",
    korean: "서울",
    description:
      "Tangerine liqueur & sparkling soju, bright and smooth. Jeju’s citrus sunshine captured in a sparkling, elegant blend.",
    price: 26,
  },
  {
    name: "Jeonju Omija Highball",
    korean: "전주",
    description:
      "Korean five-flavor berry meets whisky soda. A crisp highball with omija’s unique sweet-tart balance.",
    price: 26,
  },
];

export const JAM_REPUBLIC_COCKTAILS: CocktailMenuItem[] = [
  {
    name: "Bada's Cocktail",
    korean: "바다 칵테일",
    description:
      "A perfect balance of sweet and sour notes with hints of peach.",
    price: 24,
  },
  {
    name: "Kirsten's Cocktail",
    korean: "커스틴",
    description: "A refreshing gin-based cocktail with a slight sour touch.",
    price: 24,
  },
  {
    name: "Ling's Cocktail",
    korean: "링",
    description:
      "A classic warm cocktail that is strong and sweet, finished off with an orange scent.",
    price: 24,
  },
  {
    name: "Audrey's Cocktail",
    korean: "오드리",
    description:
      "Well-balanced & refreshing with hints of grapefruit and lychee.",
    price: 24,
  },
];

export const CLASSIC_COCKTAILS: CocktailMenuItem[] = [
  {
    name: "Negroni",
    korean: "네그로니",
    description:
      "A perfect balance of gin, Campari, and sweet vermouth — bitter yet sophisticated.",
    price: 20,
  },
  {
    name: "Greyhound",
    korean: "그레이하운드",
    description:
      "Crisp vodka with fresh grapefruit juice — bright and refreshing.",
    price: 20,
  },
  {
    name: "God Father",
    korean: "갓파더",
    description:
      "Smooth Scotch blended with Amaretto for a rich, nutty harmony.",
    price: 24,
  },
  {
    name: "Manhattan",
    korean: "맨하탄",
    description:
      "Whiskey stirred with vermouth and bitters — bold, deep, and classic.",
    price: 21,
  },
  {
    name: "Amaretto Sour",
    korean: "아마레또 사워",
    description:
      "Sweet almond liqueur with a citrusy twist — soft, creamy, and refreshing.",
    price: 22,
  },
  {
    name: "AMF",
    korean: "AMF",
    description:
      "A vibrant blue cocktail with vodka, rum, gin, tequila & citrus soda — wild and fun.",
    price: 25,
  },
  {
    name: "Whisky Sour",
    korean: "위스키 사워",
    description:
      "Whiskey, lemon, and foam — a perfect balance of tart and smooth.",
    price: 22,
  },
  {
    name: "Long Island Iced Tea",
    korean: "롱아일랜드 아이스티",
    description:
      "Five spirits, lemon, and cola — stronger than it looks, dangerously smooth.",
    price: 25,
  },
  {
    name: "Aperol Spritz",
    korean: "아페롤 스프리츠",
    description:
      "A sparkling mix of Aperol, prosecco, and soda — light, bright, and irresistible.",
    price: 20,
  },
  {
    name: "Old Fashion",
    korean: "올드패션",
    description:
      "A timeless mix of whiskey, sugar, and bitters — simple, bold, and elegant.",
    price: 23,
  },
  {
    name: "Salty Dog",
    korean: "솔티 도그",
    description:
      "A Greyhound with a salted rim — citrusy, smooth, and just the right kick.",
    price: 20,
  },
  {
    name: "Martini",
    korean: "마티니",
    description: "Gin or vodka with dry vermouth — clean, dry, and timeless.",
    price: 19,
  },
  {
    name: "Milo Cocktail",
    korean: "마일로 칵테일",
    description:
      "Chocolatey, creamy, and nostalgic — a playful twist on comfort in a glass.",
    price: 22,
  },
  {
    name: "Lemon Drop",
    korean: "레몬 드랍",
    description: "Sweet, tart, and crisp — vodka and lemon in perfect harmony.",
    price: 16,
  },
  {
    name: "Irish Bomb",
    korean: "아이리쉬 밤",
    description:
      "A bold mix of Irish stout, whiskey, and cream — rich, creamy, and explosive fun.",
    price: 19,
  },
  {
    name: "Bartender's Special",
    korean: "Surprise Me",
    description: "Trust the bartender — tonight's secret in a glass.",
    price: 18,
  },
  {
    name: "Mocktail",
    korean: "논알콜 칵테일",
    description: "Crafted with fresh ingredients, without the alcohol",
    price: 15,
  },
];

export const HIGHBALLS: HighballMenuItem[] = [
  {
    name: "Korean Plum Highball",
    korean: "청매실 하이볼",
    description:
      "A refreshing mix of whisky and Korean plum syrup, perfectly balanced with soda.",
    price: 20,
    pairing: "Best with: Cheese Kimchi Pancake",
  },
  {
    name: "Korean Style Lemon Sour",
    korean: "소주 레몬사워 하이볼",
    description:
      "Soju-based take on Japan's famous Lemon Sour. Bright, fizzy, and refreshing.",
    price: 18,
    pairing: "Best with: Seafood Pancake, Spicy Fried Chicken.",
  },
  {
    name: "The Bow St. Collins",
    korean: "콜린스 하이볼",
    description:
      "Floral Jameson highball with lemon and soda. Smooth, aromatic, and refreshing.",
    price: 23,
    pairing: "Best with: Pork Belly Set",
  },
  {
    name: "Signal Custom Highball",
    korean: "시그널 커스텀 하이볼",
    description:
      "Pick your base · Choose your vibe! Whisky/Gin/Vodka · Soda/Tonic/Ginger Ale",
    price: "?",
  },
];

export const BOURBON_WHISKYS: BottledMenuItem[] = [
  {
    name: "Buffalo Trace",
    price: 18,
    bottlePrice: 210,
  },
  {
    name: "Blanton's Original",
    price: 26,
    bottlePrice: 320,
  },
  {
    name: "Maker's Mark",
    price: 19,
    bottlePrice: 220,
  },
  {
    name: "Wild Turkey 81",
    price: 16,
    bottlePrice: 190,
  },
  {
    name: "Wild Turkey 101",
    price: 25,
    bottlePrice: 300,
  },
  {
    name: "Woodford Reserve",
    price: 25,
    bottlePrice: 300,
  },
];

export const JAPANESE_WHISKYS: BottledMenuItem[] = [
  {
    name: "Nikka From The Barrel",
    price: 25,
    bottlePrice: 300,
  },
  {
    name: "Nikka Coffey Malt",
    price: 28,
    bottlePrice: 350,
  },
  {
    name: "Hibiki Harmony",
    price: 30,
    bottlePrice: 390,
  },
  {
    name: "Yamazaki",
    price: 30,
    bottlePrice: 390,
  },
];
