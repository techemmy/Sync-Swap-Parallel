import Footer from "@/components/Footer";
import LearnMoreCard from "./LearnMoreCard";
import ConvertUSDC from "./ConvertUSDC";
import FAQs from "@/components/FAQs";

export default function ExploreUSDCConversion() {
  const faqs = [
    {
      question: "What is USDC conversion?",
      answer:
        "USDC conversion helps you convert your USDC.e to the new native USDC token easily in a 1:1 fixed rate. SyncSwap is leading the USDC conversion process by providing an easy to use converter UI.",
    },
    {
      question: "What is native USDC?",
      answer:
        "Circle - the issuer of USDC, is launching the native USDC on zkSync. Until now, all USDC on zkSync has been bridged through the zkSync bridge from Ethereum and backed by USDC on Ethereum mainnet. Native USDC is different. It's backed by Circle with additional benefits.",
    },
    {
      question: "What is USDC.e?",
      answer:
        "USDC.e is the USDC token bridged with the zkSync bridge from the Ethereum mainnet. It was labeled as USDC simply in the past year, however it is now renamed as USDC.e to support the native USDC launch.",
    },
    {
      question: "How can I use my native USDC?",
      answer:
        "You can use your USDC as usual, swapping and providing liquidity to earn and unlock more opportunities. There is no significant change. Note some other dApps may only support USDC.e in early days.",
    },
    {
      question: "When will I receive native USDC after conversion?",
      answer:
        "You will receive the new USDC token in your wallet immediately once the transaction is confirmed.",
    },
    {
      question: "Are there any fees to convert my USDC.e?",
      answer: "There is no fee in the USDC conversion process.",
    },
    {
      question: "Can I convert my native USDC back to USDC.e?",
      answer:
        "The converter is one-way. You can only convert USDC.e to native USDC with the converter. You can access the liquidity on SyncSwap to swap them back to USDC.e.",
    },
    {
      question: "Who is the initiator of the USDC conversion?",
      answer:
        "The native USDC launch and the USDC.e conversion is initiated officially by zkSync and Circle. SyncSwap is one of the launch partners of the native USDC.",
    },
    {
      question: "Is the converter contract safe?",
      answer:
        "The USDC converter contract is deployed and funded by the zkSync team. You are interacting with the zkSync official contract directly.",
    },
    {
      question: "Why am I seeing Insufficient USDC balance in converter?",
      answer:
        "The converter is funded by the zkSync team and it may run out of native USDC tokens, please come again later. You could still swap with liquidity pools on SyncSwap.",
    },
  ];
  return (
    <>
      <main className="relative overflow-auto pt-28 pb-20 min-h-screen max-w-screen-xl mx-auto space-y-14 p-4">
        <LearnMoreCard />
        <ConvertUSDC />
        <FAQs faqs={faqs} />
      </main>

      <Footer />
    </>
  );
}
