import { useSlippage } from "@/context/PoolSlippageContext";
import { cn } from "@/lib/utils";
import { IoWarningOutline } from "react-icons/io5";

export default function SlippageWarning({ className }: { className?: string }) {
  const [slippage] = useSlippage();
  if (!slippage) return null;

  if (slippage < 5) return null;
  return (
    <div className={cn("flex items-center gap-x-2", className)}>
      <IoWarningOutline fontSize={23} className="text-yellow-500" />
      <p className="text-sm text-card-foreground">
        You may receive {slippage}% less with this percentage of slippage
        tolerance.
      </p>
    </div>
  );
}
