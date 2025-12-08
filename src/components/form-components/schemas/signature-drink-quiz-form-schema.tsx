import { z } from "zod";

/**
 * E for extrovert
 * I for introvert
 */
const QuizAnswerSchema = z.string({ message: "Please select an option" });

export type SignatureDrinkQuizFormSchemaData = z.infer<
  typeof SignatureDrinkQuizFormSchema
>;
export const SignatureDrinkQuizFormSchema = z.object({
  step: z.number(),
  answer1: QuizAnswerSchema,
  answer2: QuizAnswerSchema,
  answer3: QuizAnswerSchema,
  answer4: QuizAnswerSchema,
});
