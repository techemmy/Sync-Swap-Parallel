import NavBars from "@/components/NavBars";
import { Outlet } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";
import { PoolSlippageProvider } from "./context/PoolSlippageContext";
import { ActiveNetworkProvider } from "./context/ActiveNetworkContext";
import { ThemeProvider } from "./context/ThemeContext";

export default function App() {
  return (
    <>
      <div className="bg-page">
        <TooltipProvider>
          <ActiveNetworkProvider>
            <ThemeProvider>
              <NavBars />

              <PoolSlippageProvider>
                <Outlet />
              </PoolSlippageProvider>
            </ThemeProvider>
          </ActiveNetworkProvider>
        </TooltipProvider>
      </div>
    </>
  );
}
