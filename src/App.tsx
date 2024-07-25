import NavBars from "@/components/NavBars";
import { useState } from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import { AVAILABLE_NETWORKS } from "@/constants";
import type { AppContextType, NetworkType } from "@/types/index";

export default function App() {
  const [selectedNetwork, setSelectedNetwork] = useState<NetworkType>(Object.values(AVAILABLE_NETWORKS)[0]);

  const outletContext = { selectedNetwork, setSelectedNetwork }
  return (
    <>
      <NavBars selectedNetwork={selectedNetwork} setSelectedNetwork={setSelectedNetwork} />
      <Outlet context={outletContext satisfies AppContextType} />
    </>
  )
}

export function useApp() {
  return useOutletContext<AppContextType>();
}
