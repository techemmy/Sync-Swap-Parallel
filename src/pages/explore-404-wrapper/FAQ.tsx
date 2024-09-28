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

        <AccordionItem value="item-2">
          <AccordionTrigger>Why 404 Wrapper?</AccordionTrigger>
          <AccordionContent>
            By wrapping your NFTs into the 404 fungible tokens, you unlock the
            ability to trade and pool them on SyncSwap and much more,
            significantly enhancing their liquidity and expanding their utility
            across various ways. Enjoy reduced fees, immediate trading
            capabilities, and opportunities for earning through liquidity pools.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>What is LIBERTAS OMNIBUS?</AccordionTrigger>
          <AccordionContent>
            LIBERTAS OMNIBUS is an experimental NFT project by the zkSync team
            to explore new NFT standards, network superpowers, new protocol
            features, prototype collections with surprise creators, and just
            vibe out.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>Are There Any Fees?</AccordionTrigger>
          <AccordionContent>
            The 404 Wrapper operates on a fully permissionless and open-source
            basis, there are no fees for wrapping and unwrapping NFTs.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger>
            Can I Trade the Wrapped 404 Tokens?
          </AccordionTrigger>
          <AccordionContent>
            Yes. You can trade the wrapped tokens as you would with regular
            ERC20 tokens on SyncSwap. You can even provide liquidity for it to
            earn from fees and rewards.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6">
          <AccordionTrigger>
            How Do I Wrap My NFT into the 404 Token?
          </AccordionTrigger>
          <AccordionContent>
            Getting started is simple. Just click the Get Started button and
            follow the provided instructions to approve and wrap your NFT. It`s
            a hassle-free process!
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionTrigger>
            How Can I Unwrap My 404 Token into an NFT?
          </AccordionTrigger>
          <AccordionContent>
            To unwrap a 404 token back into an NFT, click the Get Started button
            and follow the instructions. Keep in mind that since NFTs cannot be
            fractioned, you`ll need at least one complete token to unwrap.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-8">
          <AccordionTrigger>
            Can I Receive the Same NFT Back Upon Unwrapping?
          </AccordionTrigger>
          <AccordionContent>
            The wrapper pools NFTs together, so each unwrapping will yield a
            randomly selected NFT from the pool. As a result, you may receive a
            different NFT, making it particularly suitable for NFTs thats
            unrevealed or with fewer rare attributes.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
