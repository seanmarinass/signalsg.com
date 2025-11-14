import { FAQ_DATA } from "@/lib/data/faq.data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const LandingFaq = () => {
  return (
    <div className="px-5 py-10 md:py-20" id="faq">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-site-muted mb-8 font-light md:text-2xl">
          04. 질문 | FAQs
        </h2>

        <Accordion type="single" collapsible className="max-w-3xl mx-auto">
          {FAQ_DATA.map(({ question, answer }, index) => (
            <AccordionItem value={index.toString()} key={index}>
              <AccordionTrigger className="font-medium text-lg lg:text-xl hover:no-underline hover:opacity-60 transition-opacity hover:cursor-pointer text-site-foreground">
                {question}
              </AccordionTrigger>
              <AccordionContent className="font-light text-sm lg:text-lg text-site-muted">
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default LandingFaq;
