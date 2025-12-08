"use client";

import { UseFormReturn, useWatch } from "react-hook-form";
import { SignatureDrinkQuizFormSchemaData } from "../schemas/signature-drink-quiz-form-schema";
import { QuestionMapping } from "@/lib/data/quiz.data";
import SignatureDrinkQuizAnswerCard from "../signature-drink-quiz-answer-card";

interface MbtiSignatureDrinkQuizStep4FormProps {
  form: UseFormReturn<SignatureDrinkQuizFormSchemaData>;
  questionMapping: QuestionMapping;
}

export const MbtiSignatureDrinkQuizStep4Form = ({
  form,
  questionMapping,
}: MbtiSignatureDrinkQuizStep4FormProps) => {
  const [watchedAnswer4] = useWatch({
    control: form.control,
    name: ["answer4"],
  });

  const handleCardClick = (value: string) => {
    form.setValue("answer4", value);
    form.setValue("step", 5);
  };

  return (
    <div className="space-y-4 mx-auto flex flex-col items-center justify-center size-full">
      <p className="text-xl md:text-4xl">{questionMapping.question}</p>

      <div className="space-y-1 max-w-4xl">
        {questionMapping.options.map((option, index) => (
          <SignatureDrinkQuizAnswerCard
            key={index}
            label={option.text}
            onClick={() => handleCardClick(option.value)}
            isSelected={watchedAnswer4 === option.value}
          />
        ))}
      </div>
    </div>
  );
};

export default MbtiSignatureDrinkQuizStep4Form;
