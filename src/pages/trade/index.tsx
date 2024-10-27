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

export default function Trade() {
  const [activeNetwork] = useActiveNetwork();
  const [isShowingTradeChart, setIsShowingTradeChart] = useState(false);

  const handleShowChart = () => {};

  return (
    <>
      <main className="relative pt-32 flex gap-3 justify-center items-start">
        <div className="relative z-10">
          <AnimatedGradientCircles />
        </div>

        <section className="z-20 min-w-[355px] w-[480px] grid gap-y-1 p-2">
          <ActionButtons onShowChart={handleShowChart} />

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

        {!isShowingTradeChart && <HelloCard />}
      </main>

      <Footer />
    </>
  );
}
