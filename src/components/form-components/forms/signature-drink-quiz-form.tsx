"use client";

import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useWatch } from "react-hook-form";
import { SignatureDrinkQuizFormSchema } from "../schemas/signature-drink-quiz-form-schema";
import {
  QuestionMapping,
  QUIZ_QUESTION_ANSWER_MAPPING,
  VALID_QUIZ_STEPS,
} from "@/lib/data/quiz.data";
import { useEffect, useState } from "react";
import MbtiSignatureDrinkQuizStep0Form from "./signature-drink-quiz-step-0-form";
import MbtiSignatureDrinkMultiStepForm from "../signature-drink-multi-step-form";
import MbtiSignatureDrinkQuizStep5Form from "./signature-drink-quiz-step-5-form";

export const MbtiSignatureDrinkQuizForm = () => {
  const [matchedQuestionMapping, setMatchedQuestionMapping] =
    useState<QuestionMapping>(QUIZ_QUESTION_ANSWER_MAPPING[1]);

  const form = useForm({
    resolver: zodResolver(SignatureDrinkQuizFormSchema),
    mode: "onChange",
    defaultValues: {
      step: 0,
    },
  });

  const [watchedStep] = useWatch({
    control: form.control,
    name: ["step"],
  });

  useEffect(() => {
    if (VALID_QUIZ_STEPS.includes(watchedStep)) {
      const matchedQuestion =
        QUIZ_QUESTION_ANSWER_MAPPING[
          watchedStep.toString() as keyof typeof QUIZ_QUESTION_ANSWER_MAPPING
        ];
      setMatchedQuestionMapping(matchedQuestion);
    }
  }, [watchedStep]);

  return (
    <form className="border-site-dark-brown p-4 md:p-10 h-[50vh] w-full border">
      {watchedStep === 0 && <MbtiSignatureDrinkQuizStep0Form form={form} />}

      {watchedStep >= 1 && watchedStep <= 4 && (
        <MbtiSignatureDrinkMultiStepForm
          form={form}
          currentStep={watchedStep}
        />
      )}

      {watchedStep === 5 && <MbtiSignatureDrinkQuizStep5Form form={form} />}
    </form>
  );
};

export default MbtiSignatureDrinkQuizForm;
