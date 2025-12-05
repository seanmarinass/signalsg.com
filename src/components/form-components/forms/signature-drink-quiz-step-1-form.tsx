"use client";

import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, UseFormReturn, useWatch } from "react-hook-form";
import { SignatureDrinkQuizFormSchemaData } from "../schemas/signature-drink-quiz-form-schema";
import { QuestionMapping } from "@/lib/data/quiz.data";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface MbtiSignatureDrinkQuizStep1FormProps {
  form: UseFormReturn<SignatureDrinkQuizFormSchemaData>;
  questionMapping: QuestionMapping;
}

export const MbtiSignatureDrinkQuizStep1Form = ({
  form,
  questionMapping,
}: MbtiSignatureDrinkQuizStep1FormProps) => {
  return (
    <div className="space-y-4 mx-auto flex flex-col items-center justify-center size-full">
      <p className="text-xl md:text-3xl">{questionMapping.question}</p>

      <div className="space-y-1 max-w-4xl">
        {questionMapping.options.map((option, index) => (
          <div className="p-4" key={index}>
            {option.text}
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-col gap-2 max-w-sm w-full justify-between">
        <Button
          variant="outline"
          type="button"
          className="text-site-rust-orange border-site-rust-orange flex"
        >
          <ArrowLeft />
          Back
        </Button>
        <Button
          type="button"
          className="text-site-light-cream border-site-rust-orange bg-site-rust-orange"
        >
          Next
          <ArrowRight />
        </Button>
      </div>
    </div>
  );
};

export default MbtiSignatureDrinkQuizStep1Form;
