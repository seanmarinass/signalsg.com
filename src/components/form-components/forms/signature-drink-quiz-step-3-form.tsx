"use client";

import { UseFormReturn, useWatch } from "react-hook-form";
import { SignatureDrinkQuizFormSchemaData } from "../schemas/signature-drink-quiz-form-schema";
import { QuestionMapping } from "@/lib/data/quiz.data";
import SignatureDrinkQuizAnswerCard from "../signature-drink-quiz-answer-card";

interface MbtiSignatureDrinkQuizStep3FormProps {
  form: UseFormReturn<SignatureDrinkQuizFormSchemaData>;
  questionMapping: QuestionMapping;
}

export const MbtiSignatureDrinkQuizStep3Form = ({
  form,
  questionMapping,
}: MbtiSignatureDrinkQuizStep3FormProps) => {
  const [watchedAnswer3] = useWatch({
    control: form.control,
    name: ["answer3"],
  });

  const handleCardClick = (value: string) => {
    form.setValue("answer3", value);
    form.setValue("step", 4);
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
            isSelected={watchedAnswer3 === option.value}
          />
        ))}
      </div>
    </div>
  );
};

export default MbtiSignatureDrinkQuizStep3Form;
