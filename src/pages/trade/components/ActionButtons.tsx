import { Button } from "@/components/ui/button";
import { MdCandlestickChart } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { GrPowerReset } from "react-icons/gr";
import { useEffect, useState } from "react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import NavbarSettingsDialog from "@/components/NavbarSettings/NavbarSettingsDialog";

interface Props {
  tradeChartIsActive: boolean;
  onShowChart: () => void;
}

export default function ActionButtons({
  onShowChart,
  tradeChartIsActive = false,
}: Props) {
  const [isRefreshingBalance, setIsRefreshingBalance] = useState(false);
  const candleStickOpacity = tradeChartIsActive ? "opacity-100" : "opacity-50";

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (isRefreshingBalance) {
      timeoutId = setTimeout(() => {
        setIsRefreshingBalance(false);
      }, 2000);
    }
    return () => clearTimeout(timeoutId);
  }, [isRefreshingBalance]);

  return (
    <div className="flex justify-between items-center">
      <Button
        onClick={onShowChart}
        className={`group w-9 h-9 px-1 bg-transparent text-primary hover:bg-primary/[0.04] rounded-md ${candleStickOpacity}`}
      >
        <MdCandlestickChart
          className="group-active:transition-transform active:scale-90"
          size={23}
        />
      </Button>

      <div className="flex items-center gap-x-1">
        <Button
          onClick={() => setIsRefreshingBalance(true)}
          className={`${isRefreshingBalance && "animate-spin"} group w-9 h-9 px-1 bg-transparent text-primary hover:bg-primary/[0.04] rounded-md`}
          style={{
            animationDuration: "800ms",
          }}
        >
          <GrPowerReset
            className="group-active:transition-transform active:scale-90"
            size={22}
          />
        </Button>

        <Dialog>
          <DialogTrigger asChild>
            <Button className="group w-8 h-8 px-1 bg-transparent text-primary hover:bg-primary/[0.04] rounded-md">
              <FiSettings
                className="font-bold group-active:transition-transform group-active:scale-90 group-hover:rotate-180 duration-500"
                size={25}
              />
            </Button>
          </DialogTrigger>
          <NavbarSettingsDialog />
        </Dialog>
      </div>
    </div>
  );
}
