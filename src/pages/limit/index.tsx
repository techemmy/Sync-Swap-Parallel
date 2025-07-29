import Footer from "@/components/Footer";
import { AVAILABLE_NETWORKS } from "@/constants";
import AnimatedGradientCircles from "@/components/AnimatedGradientCircles";
import SlippageWarning from "@/components/SlippageWarning";
import { useActiveNetwork } from "@/context/ActiveNetworkContext";
import { useState } from "react";
import ActionButtons from "../trade/components/ActionButtons";
import HelloCard from "../trade/components/HelloCard";
import SwapCards from "./components/SwapCards";
import TradeChartSection from "./components/TradeChartSection";

export default function Limit() {
  const [activeNetwork] = useActiveNetwork();
  const [isShowingTradeChart, setIsShowingTradeChart] = useState(true);

  const handleShowChart = () => setIsShowingTradeChart(!isShowingTradeChart);

  return (
    <>
      <main className="relative pt-32 flex flex-col md:flex-row min-h-screen gap-7 justify-center items-center md:items-start">
        {isShowingTradeChart && <TradeChartSection />}

        <section className="relative z-10 min-w-[355px] max-w-[480px] w-full grid gap-y-1 p-2">
          <AnimatedGradientCircles />
          <ActionButtons
            tradeChartIsActive={isShowingTradeChart}
            onShowChart={handleShowChart}
          />

          <SwapCards />

          <SlippageWarning className="mt-4" />
        </section>

        {!isShowingTradeChart &&
          activeNetwork === AVAILABLE_NETWORKS.zkSync && <HelloCard />}
      </main>

      <Footer />
    </>
  );
}
