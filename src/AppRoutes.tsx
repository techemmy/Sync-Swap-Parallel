import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "@/App";
import FullPageLoader from "./components/FullPageLoader";

const Intro = React.lazy(() => import("@/pages/intro"));
const Home = React.lazy(() => import("@/pages/home"));
const Trade = React.lazy(() => import("@/pages/trade"));
const Pool = React.lazy(() => import("@/pages/pool"));
const Bridge = React.lazy(() => import("@/pages/bridge"));
const Portfolio = React.lazy(() => import("@/pages/portfolio"));
const PoolWizard = React.lazy(() => import("@/pages/pool-wizard"));
const Pools = React.lazy(() => import("@/pages/pools"));
const PoolEarnings = React.lazy(() => import("@/pages/pool-earnings"));
const ExploreLoyaltyProgram = React.lazy(
  () => import("@/pages/explore-loyalty-program"),
);
const Explore404Wrapper = React.lazy(
  () => import("@/pages/explore-404-wrapper"),
);
const ExploreUSDCConversion = React.lazy(
  () => import("@/pages/explore-usdc-conversion"),
);
const ExploreStaking = React.lazy(() => import("@/pages/explore-staking"));
const BridgeMove = React.lazy(() => import("@/pages/bridge-move"));
const PoolDetails = React.lazy(() => import("@/pages/pool-details"));
const Launch = React.lazy(() => import("@/pages/launch"));

function preloadPages() {
  import("@/pages/intro");
  import("@/pages/home");
  import("@/pages/trade");
  import("@/pages/pool");
  import("@/pages/bridge");
  import("@/pages/portfolio");
  import("@/pages/pool-wizard");
  import("@/pages/pools");
  import("@/pages/pool-earnings");
  import("@/pages/explore-loyalty-program");
  import("@/pages/explore-404-wrapper");
  import("@/pages/explore-usdc-conversion");
  import("@/pages/explore-staking");
  import("@/pages/bridge-move");
  import("@/pages/pool-details");
  import("@/pages/launch");
}

export default function AppRoutes() {
  useEffect(() => {
    preloadPages();
  }, []);
  return (
    <React.Suspense fallback={<FullPageLoader />}>
      <BrowserRouter>
        <Routes>
          <Route key="routes" path="/" element={<App />}>
            <Route index element={<Trade />} />
            <Route path="/intro" element={<Intro />} />
            <Route path="/home" element={<Home />} />
            <Route path="/swap" element={<Trade />} />

            <Route path="/pool" element={<Pool />} />
            <Route path="/pool/:poolId" element={<PoolDetails />} />
            <Route path="/pools" element={<Pools />} />
            <Route path="/pool/wizard" element={<PoolWizard />} />
            <Route path="/pool/earnings" element={<PoolEarnings />} />

            <Route path="/rewards" element={<ExploreLoyaltyProgram />} />
            <Route path="/wrapper" element={<Explore404Wrapper />} />
            <Route
              path="/usdc-conversion"
              element={<ExploreUSDCConversion />}
            />
            <Route path="/staking" element={<ExploreStaking />} />

            <Route path="/launch" element={<Launch />} />
            <Route path="/dashboard" element={<Portfolio />} />

            <Route path="/move" element={<BridgeMove />} />
            <Route path="/bridge" element={<Bridge />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.Suspense>
  );
}
