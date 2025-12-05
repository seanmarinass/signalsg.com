export const VALID_QUIZ_STEPS = [1, 2, 3, 4];

export type QuestionMapping = {
  question: string;
  options: { text: string; value: string }[];
};

export const QUIZ_QUESTION_ANSWER_MAPPING: Record<string, QuestionMapping> = {
  1: {
    question: "When you walk into a bar, you usually…",
    options: [
      {
        text: "Head straight to the crowd and start chatting",
        value: "E",
      },
      {
        text: "Find a comfy spot and let the vibe come to you",
        value: "I",
      },
    ],
  },
  2: {
    question: "When you look around the bar, you notice…",
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
    question: "When choosing a drink, you mostly go with…",
    options: [
      {
        text: "What makes sense — something strong, balanced, and classic",
        value: "T",
      },
      {
        text: "What feels right — something that matches your mood",
        value: "F",
      },
    ],
  },
  4: {
    question: "Planning your night out, you…",
    options: [
      {
        text: "Make a reservation, plan the route, and get everyone on time",
        value: "J",
      },
      {
        text: "Decide on the spot and see where the night takes you",
        value: "P",
      },
    ],
  },
} as const;
