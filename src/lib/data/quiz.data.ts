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
