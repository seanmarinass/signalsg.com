"use client";

import { UseFormReturn, useWatch } from "react-hook-form";
import { SignatureDrinkQuizFormSchemaData } from "../schemas/signature-drink-quiz-form-schema";
import { QuestionMapping } from "@/lib/data/quiz.data";
import SignatureDrinkQuizAnswerCard from "../signature-drink-quiz-answer-card";

interface MbtiSignatureDrinkQuizStep2FormProps {
  form: UseFormReturn<SignatureDrinkQuizFormSchemaData>;
  questionMapping: QuestionMapping;
}

export const MbtiSignatureDrinkQuizStep2Form = ({
  form,
  questionMapping,
}: MbtiSignatureDrinkQuizStep2FormProps) => {
  const [watchedAnswer2] = useWatch({
    control: form.control,
    name: ["answer2"],
  });

  const handleCardClick = (value: string) => {
    form.setValue("answer2", value);
    form.setValue("step", 3);
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
            isSelected={watchedAnswer2 === option.value}
          />
        ))}
      </div>
    </div>
  );
};

export default MbtiSignatureDrinkQuizStep2Form;
