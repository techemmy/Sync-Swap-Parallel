import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <section>
      <h2 className="text-primary-foreground text-xl mb-5">FAQ</h2>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>What is USDC conversion?</AccordionTrigger>
          <AccordionContent>
            USDC conversion help you convert your USDC.e to the new natvie USDC
            token easily in a 1:1 fixed rate. SyncSwap is leading the USDC
            conversion process by providing an easy to use converter UI.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>What is native USDC?</AccordionTrigger>
          <AccordionContent>
            Circle - the issuer of USDC, is launching the native USDC on zkSync.
            Until now, all USDC on zkSync has been bridged through the zkSync
            bridge from Ethereum and backed by USDC on Ethereum mainnet. Native
            USDC is different. It`s backed by Circle with additional benefits.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>What is USDC.e?</AccordionTrigger>
          <AccordionContent>
            USDC.e is the USDC token bridged with the zkSync bridge from the
            Ethereum mainnet. It was labeled as USDC simply in the past year,
            however it is now renamed as USDC.e to support the native USDC
            launch.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>How can I use my native USDC?</AccordionTrigger>
          <AccordionContent>
            You can use your USDC as usual, swapping and providing liquidity to
            earn and unlock more opportunities. There is no significant change.
            Note some other dApps may only support USDC.e in early days.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger>
            When will I receive native USDC after conversion?
          </AccordionTrigger>
          <AccordionContent>
            You will receive the new USDC token in your wallet immediately once
            the transaction confirmed.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6">
          <AccordionTrigger>
            Are there any fee to convert my USDC.e?
          </AccordionTrigger>
          <AccordionContent>
            There is no fee in the USDC conversion process.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-7">
          <AccordionTrigger>
            Can I convert my native USDC back to USDC.e?
          </AccordionTrigger>
          <AccordionContent>
            The converter is one-way. You can only convert USDC.e to native USDC
            with the converter. You can access the liquidity on SyncSwap to swap
            them back to USDC.e.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-8">
          <AccordionTrigger>
            Who is the initiator of the USDC conversion?
          </AccordionTrigger>
          <AccordionContent>
            The native USDC launch and the USDC.e conversion is initiated
            officially by zkSync and Circle. SyncSwap is one of the launch
            partner of the native USDC.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-9">
          <AccordionTrigger>Is the converter contract safe?</AccordionTrigger>
          <AccordionContent>
            The USDC converter contract is deployed and funded by zkSync team.
            You are interacting with the zkSync official contract directly.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-10">
          <AccordionTrigger>
            Why am I seeing Insufficient USDC balance in converter?
          </AccordionTrigger>
          <AccordionContent>
            The converter is funded by the zkSync team and it may run out of
            native USDC tokens, please come again later. You could still
            swapping with liquidity pools on SyncSwap.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
