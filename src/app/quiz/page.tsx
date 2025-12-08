import MbtiSignatureDrinkQuizForm from "@/components/form-components/forms/signature-drink-quiz-form";

const QuizPage = () => {
  return (
    <div className="py-10 md:py-20 bg-site-light-cream px-5">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
        <h1 className="font-light md:text-2xl mb-8">놀리다 | Quiz</h1>
        <MbtiSignatureDrinkQuizForm />
      </div>
    </div>
  );
};

export default QuizPage;
