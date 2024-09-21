import { FaDollarSign, FaXbox } from "react-icons/fa";
import { IoTrendingUpOutline } from "react-icons/io5";
import EarningsSummaryCard from "./EarningsSummaryCard";

export default function EarningsSummary() {
  return (
    <article className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-5 mb-8">
      <EarningsSummaryCard
        amount={0}
        title="My Liquidity Value"
        icon={
          <FaDollarSign
            fontSize={80}
            className="absolute -right-[10%] -top-[1%] text-primary/25"
          />
        }
      />

      <EarningsSummaryCard
        title="My Total APR"
        icon={
          <IoTrendingUpOutline
            fontSize={120}
            className="absolute -right-[5%] -top-[5%] text-primary/25"
          />
        }
        info="Your total APR based on weights and APRs of all pools you deposited."
      />

      <EarningsSummaryCard
        title="Claimable Rewards"
        icon={
          <FaXbox
            fontSize={80}
            className="absolute -right-[12%] top-0 text-primary/25"
          />
        }
        info="Your total claimable reward"
      />
    </article>
  );
}
