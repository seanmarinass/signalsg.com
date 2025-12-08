import { UseFormReturn } from "react-hook-form";
import { SignatureDrinkQuizFormSchemaData } from "./schemas/signature-drink-quiz-form-schema";
import SignatureDrinkQuizProcessIndicator from "./signature-drink-quiz-progress-indicator";

import MbtiSignatureDrinkQuizStep1Form from "./forms/signature-drink-quiz-step-1.form";
import MbtiSignatureDrinkQuizStep2Form from "./forms/signature-drink-quiz-step-2-form";
import MbtiSignatureDrinkQuizStep3Form from "./forms/signature-drink-quiz-step-3-form";
import MbtiSignatureDrinkQuizStep4Form from "./forms/signature-drink-quiz-step-4-form";
import { useEffect, useState } from "react";
import {
  QuestionMapping,
  QUIZ_QUESTION_ANSWER_MAPPING,
  VALID_QUIZ_STEPS,
} from "@/lib/data/quiz.data";

interface MbtiSignatureDrinkMultiStepFormProps {
  form: UseFormReturn<SignatureDrinkQuizFormSchemaData>;
  currentStep: number;
}

const MbtiSignatureDrinkMultiStepForm = ({
  form,
  currentStep,
}: MbtiSignatureDrinkMultiStepFormProps) => {
  const [matchedQuestionMapping, setMatchedQuestionMapping] =
    useState<QuestionMapping>(QUIZ_QUESTION_ANSWER_MAPPING[1]);
  useEffect(() => {
    if (VALID_QUIZ_STEPS.includes(currentStep)) {
      const matchedQuestion =
        QUIZ_QUESTION_ANSWER_MAPPING[
          currentStep.toString() as keyof typeof QUIZ_QUESTION_ANSWER_MAPPING
        ];
      setMatchedQuestionMapping(matchedQuestion);
    }
  }, [currentStep]);
  return (
    <div className="h-full flex flex-col justify-between">
      <SignatureDrinkQuizProcessIndicator
        form={form}
        currentStep={currentStep}
      />

      {currentStep === 1 && (
        <MbtiSignatureDrinkQuizStep1Form
          form={form}
          questionMapping={matchedQuestionMapping}
        />
      )}

      {currentStep === 2 && (
        <MbtiSignatureDrinkQuizStep2Form
          form={form}
          questionMapping={matchedQuestionMapping}
        />
      )}

      {currentStep === 3 && (
        <MbtiSignatureDrinkQuizStep3Form
          form={form}
          questionMapping={matchedQuestionMapping}
        />
      )}

      {currentStep === 4 && (
        <MbtiSignatureDrinkQuizStep4Form
          form={form}
          questionMapping={matchedQuestionMapping}
        />
      )}
    </div>
  );
};

export default MbtiSignatureDrinkMultiStepForm;
