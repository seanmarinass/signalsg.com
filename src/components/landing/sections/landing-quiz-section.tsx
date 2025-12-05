import MbtiSignatureDrinkQuizForm from "@/components/form-components/forms/signature-drink-quiz-form";

const LandingQuizSection = () => {
  return (
    <section className="py-10 md:py-20 bg-site-light-cream px-5" id="quiz">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
        <h2 className="font-light md:text-2xl mb-8">03. 놀리다 | Quiz</h2>
        <MbtiSignatureDrinkQuizForm />
      </div>
    </section>
  );
};

export default LandingQuizSection;
