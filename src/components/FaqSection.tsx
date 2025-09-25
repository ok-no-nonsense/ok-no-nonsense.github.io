
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does resume refinement take?",
    answer:
      "Typically, the first draft of your refined resume will be ready within 2-3 business days. We'll then work together on revisions to ensure it's perfect.",
  },
  {
    question: "What is the turnaround time for LinkedIn optimization?",
    answer:
      "LinkedIn profile optimization is usually completed within 48 hours. This includes a full review, keyword optimization, and headline suggestions.",
  },
  {
    question: "Are the mock interviews tailored to my target role?",
    answer:
      "Yes, all mock interviews are customized to the specific roles you are targeting, whether it's for a backend, frontend, full-stack, or DevOps position. We cover both technical and behavioral aspects.",
  },
  {
    question: "Do you guarantee a job after using your services?",
    answer:
      "I do not guarantee job placements. My goal is to equip you with the best possible tools and presentation of your skills to significantly improve your chances of getting interviews. The rest is up to your skills and interview performance.",
  },
  {
    question: "What if I need help with something not listed in the packages?",
    answer:
      "I can create custom packages based on your specific needs. Just reach out via the contact form with your requirements, and we can discuss a tailored solution.",
  },
];

export const FaqSection = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-light text-foreground mb-12 text-center">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="text-lg font-medium text-foreground text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
