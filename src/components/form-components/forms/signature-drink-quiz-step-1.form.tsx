"use client";

import { UseFormReturn, useWatch } from "react-hook-form";
import { SignatureDrinkQuizFormSchemaData } from "../schemas/signature-drink-quiz-form-schema";
import { QuestionMapping } from "@/lib/data/quiz.data";
import SignatureDrinkQuizAnswerCard from "../signature-drink-quiz-answer-card";

interface MbtiSignatureDrinkQuizStep1FormProps {
  form: UseFormReturn<SignatureDrinkQuizFormSchemaData>;
  questionMapping: QuestionMapping;
}

export const MbtiSignatureDrinkQuizStep1Form = ({
  form,
  questionMapping,
}: MbtiSignatureDrinkQuizStep1FormProps) => {
  const [watchedAnswer1] = useWatch({
    control: form.control,
    name: ["answer1"],
  });

  const handleCardClick = (value: string) => {
    form.setValue("answer1", value);
    form.setValue("step", 2);
  };

  return (
    <div className="space-y-4 mx-auto flex flex-col items-center justify-center size-full">
      <p className="text-xl md:text-3xl">{questionMapping.question}</p>

      <div className="space-y-1 max-w-4xl">
        {questionMapping.options.map((option, index) => (
          <SignatureDrinkQuizAnswerCard
            key={index}
            label={option.text}
            onClick={() => handleCardClick(option.value)}
            isSelected={watchedAnswer1 === option.value}
          />
        ))}
      </div>
    </div>
  );
};

export default MbtiSignatureDrinkQuizStep1Form;
