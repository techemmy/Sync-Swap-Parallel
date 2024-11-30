import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Intro from "@/pages/intro";
import Home from "@/pages/home";
import Trade from "@/pages/trade";
import Pool from "@/pages/pool";
import Bridge from "@/pages/bridge";
import Portfolio from "@/pages/portfolio";
import PoolWizard from "@/pages/pool-wizard";
import Pools from "@/pages/pools";
import PoolEarnings from "@/pages/pool-earnings";
import ExploreLoyaltyProgram from "@/pages/explore-loyalty-program";
import Explore404Wrapper from "@/pages/explore-404-wrapper";
import ExploreUSDCConversion from "@/pages/explore-usdc-conversion";
import ExploreStaking from "@/pages/explore-staking";
import BridgeMove from "@/pages/bridge-move";
import PoolDetails from "./pages/pool-details";
import Launch from "@/pages/launch";

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route key="routes" path="/" element={<App />}>
      <Route index element={<Trade />} />
      <Route path="/intro" element={<Intro />} />
      <Route path="/home" element={<Home />} />
      <Route index path="/swap" element={<Trade />} />

      <Route path="/pool" element={<Pool />} />
      <Route path="/pool/:poolId" element={<PoolDetails />} />
      <Route path="/pools" element={<Pools />} />
      <Route path="/pool/wizard" element={<PoolWizard />} />
      <Route path="/pool/earnings" element={<PoolEarnings />} />

      <Route path="/rewards" element={<ExploreLoyaltyProgram />} />
      <Route path="/wrapper" element={<Explore404Wrapper />} />
      <Route path="/usdc-conversion" element={<ExploreUSDCConversion />} />
      <Route path="/staking" element={<ExploreStaking />} />

      <Route path="/launch" element={<Launch />} />
      <Route path="/dashboard" element={<Portfolio />} />

      <Route path="/move" element={<BridgeMove />} />
      <Route path="/bridge" element={<Bridge />} />
    </Route>,
  ]),
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
