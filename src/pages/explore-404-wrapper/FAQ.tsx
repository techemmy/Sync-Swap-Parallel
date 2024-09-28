import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <section>
      <h2 className="text-primary-foreground text-xl mb-5">FAQ</h2>

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>What is 404 Wrapper?</AccordionTrigger>
          <AccordionContent>
            Inspired by ERC404, the SyncSwap 404 Wrapper introduces a new
            technology to wrap existing ERC721 NFTs into fungible 404 tokens.
            These transformed tokens can seamlessly integrate into DeFi apps,
            functioning just like standard ERC20 tokens.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
