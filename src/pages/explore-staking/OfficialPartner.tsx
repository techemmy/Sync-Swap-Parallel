import { Badge } from "@/components/ui/badge";
import StatsCards from "./StatsCards";
import StakeManagement from "./StakeManagement";
import FAQs from "@/components/FAQs";

export default function OfficialPartner() {
  const faqs = [
    {
      question: "What is Trala",
      answer:
        "Trala is the Web 3.0 all-in-one gaming platform. $TRALA is the governance token of the Trala platform.",
    },
    {
      question: "What is TRALA staking?",
      answer:
        "Trala is collaborating with SyncSwap to launch the staking service for $TRALA the governance token of Trala platform. You can stake TRALA tokens on ZKsync network to earn staking rewards.",
    },
    {
      question: "What are the staking rewards?",
      answer:
        "Staking rewards are provided by Trala to offer a 10% fixed APR in 3 months for $TRALA token stakers on ZKsync network.",
    },
    {
      question: "How to claim my earned rewards?",
      answer:
        "You can claim your earned rewards in $TRALA at anytime. See the Claimable Rewards section for your earned rewards.",
    },
    {
      question: "Is there any fees to stake my TRALA?",
      answer:
        "There is no fees in the staking service. You can stake, unstake or claim your rewards at anytime without fees.",
    },
    {
      question: "Can I stake on Ethereum mainnet?",
      answer:
        "TRALA staking service is only available on ZKsync network, you need to bridge your TRALA token from Ethereum to ZKsync first.",
    },
    {
      question: "How to bridge my TRALA token?",
      answer:
        "You can go to the official bridge of ZKsync at bridge.zksync.io or use the SyncSwap Move interface to bridge your TRALA token.",
    },
    {
      question: "What is the TRALA token address?",
      answer:
        "The address of the bridged TRALA token on ZKsync is 0x145e082E384A9fC86E95eEA805Dc9012f1B76cB7.",
    },
  ];
  return (
    <section className="flex flex-col gap-5">
      <h2 className="flex gap-x-3 items-center">
        <img
          className="w-12 h-12"
          src="/images/Trala_Project.png"
          alt="Trala Project"
        />
        <span className="text-3xl text-primary-foreground">TRALA Staking</span>

        <Badge
          variant="outline"
          className="text-stakingSponsor border-stakingSponsor rounded-lg"
        >
          Official Partner
        </Badge>
      </h2>

      <p className="text-primary-foreground">
        Trala is the Web 3.0 all-in-one gaming platform - The Future of Fun
      </p>

      <img
        className="shadow rounded-3xl border-[15px] border-card/85 max-w-[90vw]"
        src="/images/trala_banner.png"
        width="800"
      />

      <p className="flex gap-x-2 text-card-foreground items-center">
        <span>Stake your</span>
        <img className="w-6 h-6" src="/images/TRALA.png" alt="TRALA logo" />
        <span>
          TRALA today and secure your position in the future of finance
        </span>
      </p>

      <StatsCards />

      <StakeManagement />

      <FAQs faqs={faqs} />
    </section>
  );
}
