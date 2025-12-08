"use client";

import { Button } from "@/components/ui/button";

import { UseFormReturn } from "react-hook-form";
import { SignatureDrinkQuizFormSchemaData } from "../schemas/signature-drink-quiz-form-schema";

interface MbtiSignatureDrinkQuizStep0FormProps {
  form: UseFormReturn<SignatureDrinkQuizFormSchemaData>;
}

export const MbtiSignatureDrinkQuizStep0Form = ({
  form,
}: MbtiSignatureDrinkQuizStep0FormProps) => {
  const handleStartQuiz = () => {
    form.setValue("step", 1);
  };
  return (
    <div className="text-xl md:text-3xl max-w-4xl space-y-4 mx-auto flex flex-col items-center justify-center size-full">
      <p>
        Every personality has a perfect cocktail match waiting to be discovered.
      </p>
      <p className="text-lg md:text-2xl max-w-xl font-extralight">
        Take our quiz and find your signature drink.
      </p>

      <Button
        variant="outline"
        type="button"
        className="mt-8 md:text-lg text-site-rust-orange border-site-rust-orange w-full md:w-[200px]"
        onClick={handleStartQuiz}
      >
        Start Quiz
      </Button>
    </div>
  );
};

export default MbtiSignatureDrinkQuizStep0Form;
