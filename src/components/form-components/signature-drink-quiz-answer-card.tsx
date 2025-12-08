import { cn } from "@/lib/utils";

interface SignatureDrinkQuizAnswerCardProps {
  label: string;
  isSelected: boolean;
  onClick: () => void;
}

const SignatureDrinkQuizAnswerCard = ({
  label,
  isSelected = false,
  onClick,
}: SignatureDrinkQuizAnswerCardProps) => {
  return (
    <div
      className={cn(
        "p-4 cursor-pointer border hover:bg-site-rust-orange hover:text-site-light-cream transition-colors",
        isSelected && "bg-site-rust-orange text-site-light-cream"
      )}
      onClick={onClick}
    >
      {label}
    </div>
  );
};

export default SignatureDrinkQuizAnswerCard;
