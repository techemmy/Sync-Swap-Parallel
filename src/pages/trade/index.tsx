import Footer from "@/components/Footer";
import GettingStartedCard from "./components/GettingStartedCard";
import ClaimZkTokenAirdropCard from "./components/ClaimZkTokenAirdropCard";
import ActionButtons from "./components/ActionButtons";
import { AVAILABLE_NETWORKS } from "@/constants";
import LineaVoyageSurgeCard from "./components/LineaVoyageSurgeCard";
import AnimatedGradientCircles from "@/components/AnimatedGradientCircles";
import SlippageWarning from "@/components/SlippageWarning";
import { useActiveNetwork } from "@/context/ActiveNetworkContext";
import HelloCard from "./components/HelloCard";
import SwapCards from "./components/SwapCards";
import { useState } from "react";
import TradeChartSection from "./components/TradeChartSection";

export default function Trade() {
  const [activeNetwork] = useActiveNetwork();
  const [isShowingTradeChart, setIsShowingTradeChart] = useState(true);

  const handleShowChart = () => setIsShowingTradeChart(!isShowingTradeChart);

  return (
    <>
      <main className="relative pt-32 flex gap-7 justify-center items-start">
        {isShowingTradeChart && <TradeChartSection />}

        <section className="relative z-10 min-w-[355px] w-[480px] grid gap-y-1 p-2">
          <AnimatedGradientCircles />
          <ActionButtons
            tradeChartIsActive={isShowingTradeChart}
            onShowChart={handleShowChart}
          />

          <SwapCards />

          <GettingStartedCard />

          {activeNetwork === AVAILABLE_NETWORKS.zkSync && (
            <ClaimZkTokenAirdropCard />
          )}
          {activeNetwork === AVAILABLE_NETWORKS.Linea && (
            <LineaVoyageSurgeCard />
          )}

          <SlippageWarning className="mt-4" />
        </section>

        {!isShowingTradeChart &&
          activeNetwork === AVAILABLE_NETWORKS.zkSync && <HelloCard />}
      </main>

      <Footer />
    </>
  );
}
