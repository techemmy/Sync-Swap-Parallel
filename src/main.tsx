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
import Launch from "@/pages/launch";
import Bridge from "@/pages/bridge";
import Portfolio from "@/pages/portfolio";
import Explore from "@/pages/explore";
import PoolWizard from "@/pages/pool-wizard";
import Pools from "@/pages/pools";
import PoolEarnings from "@/pages/pool-earnings";

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<App />}>
      <Route index element={<Trade />} />
      <Route path="/intro" element={<Intro />} />
      <Route path="/home" element={<Home />} />
      <Route index path="/swap" element={<Trade />} />
      <Route path="/pool" element={<Pool />} />
      <Route path="/pools" element={<Pools />} />
      <Route path="/pool/wizard" element={<PoolWizard />} />
      <Route path="/pool/earnings" element={<PoolEarnings />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/launch" element={<Launch />} />
      <Route path="/dashboard" element={<Portfolio />} />
      <Route path="/bridge" element={<Bridge />} />
    </Route>,
  ]),
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
