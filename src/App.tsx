import NavBars from "@/components/NavBars";
import { useState } from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import { AVAILABLE_NETWORKS } from "@/constants";
import type { AppContextType, NetworkType } from "@/types/index";
import { TooltipProvider } from "@/components/ui/tooltip";

export default function App() {
  const [selectedNetwork, setSelectedNetwork] = useState<NetworkType>(Object.values(AVAILABLE_NETWORKS)[0]);

  const outletContext = { selectedNetwork, setSelectedNetwork }
  return (
    <>
      <div className="bg-page">
        <TooltipProvider>
          <NavBars selectedNetwork={selectedNetwork} setSelectedNetwork={setSelectedNetwork} />
          <Outlet context={outletContext satisfies AppContextType} />
        </TooltipProvider>
      </div>
    </>
  )
}

export function useApp() {
  return useOutletContext<AppContextType>();
}
