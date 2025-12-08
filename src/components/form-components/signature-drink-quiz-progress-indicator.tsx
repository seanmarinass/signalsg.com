import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { SignatureDrinkQuizFormSchemaData } from "./schemas/signature-drink-quiz-form-schema";

interface SignatureDrinkQuizProcessIndicatorProps {
  form: UseFormReturn<SignatureDrinkQuizFormSchemaData>;
  currentStep: number;
}

const SignatureDrinkQuizProcessIndicator = ({
  form,
  currentStep,
}: SignatureDrinkQuizProcessIndicatorProps) => {
  const handleBackClick = () => {
    const prevStep = currentStep - 1;
    form.setValue("step", prevStep);
  };
  return (
    <div className="grid grid-cols-4 gap-2 w-full justify-center items-center">
      {Array.from({ length: 4 }, (_, index) => {
        const isCompletedStep = index + 1 < currentStep;
        const isCurrentStep = index + 1 === currentStep;

        return (
          <div
            key={index}
            className={cn("h-2 rounded-xl bg-site-dark-grey/20", {
              "bg-site-dark-grey": isCurrentStep,
              "bg-site-dark-orange": isCompletedStep,
            })}
          />
        );
      })}

      <div className="col-span-full flex justify-center items-center mt-2">
        <div
          className="cursor-pointer flex items-center gap-1"
          onClick={handleBackClick}
        >
          <ArrowLeft className="size-5" />
          Back
        </div>
      </div>
    </div>
  );
};

export default SignatureDrinkQuizProcessIndicator;
