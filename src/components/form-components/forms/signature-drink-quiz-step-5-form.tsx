"use client";

import { UseFormReturn, useWatch } from "react-hook-form";
import { SignatureDrinkQuizFormSchemaData } from "../schemas/signature-drink-quiz-form-schema";
import { useEffect, useState } from "react";
import { MBTI_TO_DRINK_MAPPING } from "@/lib/data/quiz.data";
import SignatureDrinkQuizResult from "../signature-drink-quiz-result";
import { Button } from "@/components/ui/button";

interface MbtiSignatureDrinkQuizStep5FormProps {
  form: UseFormReturn<SignatureDrinkQuizFormSchemaData>;
}

export const MbtiSignatureDrinkQuizStep5Form = ({
  form,
}: MbtiSignatureDrinkQuizStep5FormProps) => {
  const [mbtiResult, setMbtiResult] = useState("");

  const [watchedAnswer1, watchedAnswer2, watchedAnswer3, watchedAnswer4] =
    useWatch({
      control: form.control,
      name: ["answer1", "answer2", "answer3", "answer4"],
    });

  useEffect(() => {
    if (watchedAnswer1 && watchedAnswer2 && watchedAnswer3 && watchedAnswer4) {
      setMbtiResult(
        watchedAnswer1 + watchedAnswer2 + watchedAnswer3 + watchedAnswer4
      );
    }
  }, [watchedAnswer1, watchedAnswer2, watchedAnswer3, watchedAnswer4]);

  const drinkResult = mbtiResult
    ? MBTI_TO_DRINK_MAPPING[mbtiResult as keyof typeof MBTI_TO_DRINK_MAPPING]
    : null;

  const handleResetQuiz = () => {
    form.reset();
  };

  if (!drinkResult) {
    return (
      <div className="space-y-4 mx-auto flex flex-col items-center justify-center size-full">
        <p className="text-xl md:text-4xl text-center">
          Complete the quiz to discover your perfect drink!
        </p>
      </div>
    );
  }

  return (
    <div className="h-full space-y-6">
      <div className="text-center">
        <p className="text-2xl md:text-4xl font-bold mb-2">
          You are <span className="text-site-rust-orange">{mbtiResult}</span>
        </p>
        <p className="text-xl md:text-2xl font-semibold">{drinkResult.title}</p>
      </div>

      <div className="flex-1">
        <SignatureDrinkQuizResult
          name={drinkResult.name}
          korean={drinkResult.korean}
          description={drinkResult.description}
          ingredients={[...drinkResult.ingredients]}
          city={drinkResult.city}
          image={drinkResult.image}
        />
      </div>

      <Button
        variant="outline"
        className="text-site-light-cream border border-site-rust-orange md:text-lg bg-site-rust-orange z-10 w-full md:w-fit"
        onClick={handleResetQuiz}
      >
        Reset quiz
      </Button>
    </div>
  );
};

export default MbtiSignatureDrinkQuizStep5Form;
