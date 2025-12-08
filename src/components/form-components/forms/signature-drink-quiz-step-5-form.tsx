"use client";

import { UseFormReturn, useWatch } from "react-hook-form";
import { SignatureDrinkQuizFormSchemaData } from "../schemas/signature-drink-quiz-form-schema";
import { QuestionMapping } from "@/lib/data/quiz.data";
import { useEffect, useState } from "react";

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

  return (
    <div className="space-y-4 mx-auto flex flex-col items-center justify-center size-full">
      <p className="text-xl md:text-4xl">
        The result is in, you are an{" "}
        <span className="text-site-rust-orange">{mbtiResult}</span>
      </p>
    </div>
  );
};

export default MbtiSignatureDrinkQuizStep5Form;
