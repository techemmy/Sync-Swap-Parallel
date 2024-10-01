import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

interface Props {
  faqs: Array<{ question: string; answer: string }>;
  className?: string;
}

export default function FAQs({ faqs, className = "" }: Props) {
  return (
    <section className={cn("", className)}>
      <h2 className="text-primary-foreground text-xl mb-5">FAQ</h2>
      <Accordion type="single" collapsible>
        {faqs.map(({ question, answer }, index) => (
          <AccordionItem key={question + index} value={`item-${index + 1}`}>
            <AccordionTrigger>{question}</AccordionTrigger>
            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
