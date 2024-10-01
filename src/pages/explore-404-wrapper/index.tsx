import Footer from "@/components/Footer";
import WelcomeCard from "./WelcomeCard";
import FeaturedCollection from "./FeaturedCollection";
import FAQs from "@/components/FAQs";

export default function Explore404Wrapper() {
  const faqs = [
    {
      question: "What is 404 Wrapper?",
      answer:
        "Inspired by ERC404, the SyncSwap 404 Wrapper introduces a new technology to wrap existing ERC721 NFTs into fungible 404 tokens. These transformed tokens can seamlessly integrate into DeFi apps, functioning just like standard ERC20 tokens.",
    },
    {
      question: "Why 404 Wrapper?",
      answer:
        "By wrapping your NFTs into the 404 fungible tokens, you unlock the ability to trade and pool them on SyncSwap and much more, significantly enhancing their liquidity and expanding their utility across various ways. Enjoy reduced fees, immediate trading capabilities, and opportunities for earning through liquidity pools.",
    },
    {
      question: "What is LIBERTAS OMNIBUS?",
      answer:
        "LIBERTAS OMNIBUS is an experimental NFT project by the zkSync team to explore new NFT standards, network superpowers, new protocol features, prototype collections with surprise creators, and just vibe out.",
    },
    {
      question: "Are There Any Fees?",
      answer:
        "The 404 Wrapper operates on a fully permissionless and open-source basis, there are no fees for wrapping and unwrapping NFTs.",
    },
    {
      question: "Can I Trade the Wrapped 404 Tokens?",
      answer:
        "Yes. You can trade the wrapped tokens as you would with regular ERC20 tokens on SyncSwap. You can even provide liquidity for it to earn from fees and rewards.",
    },
    {
      question: "How Do I Wrap My NFT into the 404 Token?",
      answer:
        "Getting started is simple. Just click the Get Started button and follow the provided instructions to approve and wrap your NFT. It's a hassle-free process!",
    },
    {
      question: "How Can I Unwrap My 404 Token into an NFT?",
      answer:
        "To unwrap a 404 token back into an NFT, click the Get Started button and follow the instructions. Keep in mind that since NFTs cannot be fractioned, you'll need at least one complete token to unwrap.",
    },
    {
      question: "Can I Receive the Same NFT Back Upon Unwrapping?",
      answer:
        "The wrapper pools NFTs together, so each unwrapping will yield a randomly selected NFT from the pool. As a result, you may receive a different NFT, making it particularly suitable for NFTs that are unrevealed or with fewer rare attributes.",
    },
  ];
  return (
    <>
      <main className="relative overflow-auto pt-28 pb-20 min-h-screen max-w-screen-lg mx-auto space-y-14 p-4">
        <WelcomeCard />
        <FeaturedCollection />
        <FAQs faqs={faqs} />
      </main>

      <Footer />
    </>
  );
}
