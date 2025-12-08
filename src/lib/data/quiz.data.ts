import AperolSpritzImage from "@/assets/images/drinks/aperol-spritz.webp";
import BartendersSpecialImage from "@/assets/images/drinks/bartenders-special.webp";
import GodFatherImage from "@/assets/images/drinks/god-father.webp";
import GreyhoundImage from "@/assets/images/drinks/greyhound.webp";
import JejuHallaSparkleImage from "@/assets/images/drinks/jeju-halla-sparkle.webp";
import JeonjuOmijaHighballeImage from "@/assets/images/drinks/jeonju-omija-highball.webp";
import KoreanPlumHighballImage from "@/assets/images/drinks/korean-plum-highball.webp";
import LongIslandIcedTeaImage from "@/assets/images/drinks/long-island-iced-tea.webp";
import ManhattanImage from "@/assets/images/drinks/manhattan.webp";
import MartiniImage from "@/assets/images/drinks/martini.webp";
import MiloCocktailImage from "@/assets/images/drinks/milo-cocktail.webp";
import NegroniImage from "@/assets/images/drinks/negroni.webp";
import OldFashionedImage from "@/assets/images/drinks/old-fashioned.webp";
import SeaOfBusanImage from "@/assets/images/drinks/sea-of-busan.webp";
import SeoulSlingImage from "@/assets/images/drinks/seoul-sling.webp";
import TheBowStCollinsImage from "@/assets/images/drinks/the-bow-st-collins.webp";

export const VALID_QUIZ_STEPS = [1, 2, 3, 4];

export type QuestionMapping = {
  question: string;
  options: { text: string; value: string }[];
};

export const QUIZ_QUESTION_ANSWER_MAPPING: Record<string, QuestionMapping> = {
  1: {
    question: "When I walk into a bar, I usually…",
    options: [
      {
        text: "Head straight to the crowd and start chatting",
        value: "E",
      },
      {
        text: "Find a comfy spot and let the vibe come to me",
        value: "I",
      },
    ],
  },
  2: {
    question: "When I look around the bar, I notice…",
    options: [
      {
        text: "The lighting, the crowd, and what's happening right now",
        value: "S",
      },
      {
        text: "The mood, the music, and how the night might unfold",
        value: "N",
      },
    ],
  },
  3: {
    question: "When choosing a drink, I mostly go with…",
    options: [
      {
        text: "What makes sense — something strong, balanced, and classic",
        value: "T",
      },
      {
        text: "What feels right — something that matches my mood",
        value: "F",
      },
    ],
  },
  4: {
    question: "Planning my night out, I...",
    options: [
      {
        text: "Make a reservation, plan the route, and get everyone on time",
        value: "J",
      },
      {
        text: "Decide on the spot and see where the night takes me",
        value: "P",
      },
    ],
  },
} as const;

export const MBTI_TO_DRINK_MAPPING = {
  ENFJ: {
    title: "The Inspiring Mentor",
    name: "Aperol Spritz",
    korean: "아페롤 스프리츠",
    description: "A vibrant, uplifting aperitif that brings people together with its perfect balance of bitter and sweet.",
    ingredients: ["Aperol", "Prosecco", "Soda", "Orange"],
    city: "Milan",
    image: {
      src: AperolSpritzImage,
      alt: "Aperol Spritz cocktail with orange slice garnish",
    },
  },
  ENFP: {
    title: "The Spirited Explorer",
    name: "Sea of Busan",
    korean: "부산바다",
    description: "A seaside breeze in a glass - bright, tangy, and slightly salty.",
    ingredients: ["Soju", "Sea Salt", "Yuzu", "Shiso"],
    city: "Busan",
    image: {
      src: SeaOfBusanImage,
      alt: "Sea of Busan cocktail with blue ocean-inspired presentation",
    },
  },
  ESFJ: {
    title: "The Warmhearted Host",
    name: "Korean Plum Highball",
    korean: "매실 하이볼",
    description: "A comforting and welcoming drink that embodies Korean hospitality with sweet plum flavors.",
    ingredients: ["Plum Wine", "Soda", "Plum", "Mint"],
    city: "Seoul",
    image: {
      src: KoreanPlumHighballImage,
      alt: "Korean Plum Highball with plum garnish",
    },
  },
  ESFP: {
    title: "The Radiant Performer",
    name: "Long Island Iced Tea",
    korean: "롱아일랜드 아이스티",
    description: "A bold, show-stopping cocktail that's as dynamic and energetic as you are.",
    ingredients: ["Vodka", "Rum", "Gin", "Tequila", "Cola"],
    city: "New York",
    image: {
      src: LongIslandIcedTeaImage,
      alt: "Long Island Iced Tea cocktail in tall glass",
    },
  },
  INFJ: {
    title: "The Visionary Sage",
    name: "Seoul Sling",
    korean: "서울 슬링",
    description: "A refreshing floral gin cocktail inspired by Seoul's modern energy.",
    ingredients: ["Gin", "Plum", "Jasmine", "Citrus"],
    city: "Seoul",
    image: {
      src: SeoulSlingImage,
      alt: "Seoul Sling cocktail with cherry garnish",
    },
  },
  INFP: {
    title: "The Idealistic Storyteller",
    name: "Jeju Halla Sparkle",
    korean: "제주 한라산 스파클",
    description: "Jeju's citrus sunshine captured in a sparkling, elegant blend.",
    ingredients: ["Vodka", "Hallabong", "Honey", "Bubbles"],
    city: "Jeju",
    image: {
      src: JejuHallaSparkleImage,
      alt: "Jeju Halla Sparkle sparkling cocktail",
    },
  },
  ISFJ: {
    title: "The Steady Guardian",
    name: "Greyhound",
    korean: "그레이하운드",
    description: "A reliable, classic cocktail with a refreshing grapefruit twist that never goes out of style.",
    ingredients: ["Vodka", "Grapefruit Juice"],
    city: "Chicago",
    image: {
      src: GreyhoundImage,
      alt: "Greyhound cocktail with grapefruit slice",
    },
  },
  ISFP: {
    title: "The Gentle Dreamer",
    name: "Milo Cocktail",
    korean: "마일로 칵테일",
    description: "A nostalgic, comfort drink that brings out your creative and gentle nature.",
    ingredients: ["Milo", "Vodka", "Milk", "Chocolate"],
    city: "Singapore",
    image: {
      src: MiloCocktailImage,
      alt: "Milo Cocktail with chocolate garnish",
    },
  },
  ENTJ: {
    title: "The Driven Commander",
    name: "Manhattan",
    korean: "맨하탄",
    description: "A bold, sophisticated cocktail for natural leaders who appreciate timeless elegance.",
    ingredients: ["Whiskey", "Vermouth", "Bitters", "Cherry"],
    city: "New York",
    image: {
      src: ManhattanImage,
      alt: "Manhattan cocktail with cherry garnish",
    },
  },
  ESTJ: {
    title: "The Tireless Organizer",
    name: "The Bow St. Collins",
    korean: "보우 스트리트 콜린스",
    description: "A structured, well-balanced cocktail that delivers consistent excellence every time.",
    ingredients: ["Gin", "Lemon", "Sugar", "Soda"],
    city: "London",
    image: {
      src: TheBowStCollinsImage,
      alt: "The Bow St. Collins cocktail with lemon garnish",
    },
  },
  ENTP: {
    title: "The Playful Innovator",
    name: "Bartender's Special",
    korean: "바텐더 스페셜",
    description: "An innovative, ever-changing cocktail that reflects your creative and experimental spirit.",
    ingredients: ["Surprise", "Innovation", "Creativity", "Adventure"],
    city: "Tokyo",
    image: {
      src: BartendersSpecialImage,
      alt: "Bartender's Special signature cocktail",
    },
  },
  ESTP: {
    title: "The Bold Trailblazer",
    name: "Jeonju Omija Highball",
    korean: "전주 오미자 하이볼",
    description: "A crisp highball with omija's unique sweet-tart balance.",
    ingredients: ["Whisky", "Omija", "Ginger", "Soda"],
    city: "Jeonju",
    image: {
      src: JeonjuOmijaHighballeImage,
      alt: "Jeonju Omija Highball with Korean berry garnish",
    },
  },
  INTJ: {
    title: "The Strategic Architect",
    name: "Martini",
    korean: "마티니",
    description: "A precise, minimalist cocktail that embodies sophistication and strategic thinking.",
    ingredients: ["Gin", "Vermouth", "Olive", "Precision"],
    city: "London",
    image: { src: MartiniImage, alt: "Classic Martini with olive garnish" },
  },
  INTP: {
    title: "The Curious Theorist",
    name: "God Father",
    korean: "갓파더",
    description: "A contemplative, complex cocktail perfect for deep thinking and quiet reflection.",
    ingredients: ["Whiskey", "Amaretto"],
    city: "Sicily",
    image: { src: GodFatherImage, alt: "God Father cocktail in rocks glass" },
  },
  ISTJ: {
    title: "The Grounded Realist",
    name: "Old Fashioned",
    korean: "올드 패션드",
    description: "A time-tested classic that honors tradition with its perfect, unchanging recipe.",
    ingredients: ["Whiskey", "Sugar", "Bitters", "Orange"],
    city: "Louisville",
    image: {
      src: OldFashionedImage,
      alt: "Old Fashioned cocktail with orange peel garnish",
    },
  },
  ISTP: {
    title: "The Hands-On Maverick",
    name: "Negroni",
    korean: "네그로니",
    description: "A balanced, no-nonsense cocktail that's both bold and perfectly crafted.",
    ingredients: ["Gin", "Campari", "Vermouth", "Orange"],
    city: "Florence",
    image: {
      src: NegroniImage,
      alt: "Negroni cocktail with orange slice garnish",
    },
  },
} as const;
