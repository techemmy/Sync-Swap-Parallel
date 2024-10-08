import AnimatedGradientCircles from "@/components/AnimatedGradientCircles";
import PoolDetailsAssets from "./PoolDetailsAssets";
import PoolDetailsConversionRateCard from "./PoolDetailsConversionRateCard";
import PoolDetailsHeader from "./PoolDetailsHeader";
import PoolLPRewardsCard from "./PoolLPRewardsCard";
import { cn } from "@/lib/utils";

export default function PoolTypeDetails({
  poolType,
  className = "",
}: {
  poolType: string;
  className?: string;
}) {
  return (
    <div className="relative">
      <section
        className={cn(
          "relative z-10 transition-all animate-fade-in pt-3 px-6 space-y-4",
          className,
        )}
      >
        <PoolDetailsHeader poolType={poolType} />

        <PoolDetailsConversionRateCard />

        <PoolDetailsAssets />

        <PoolLPRewardsCard />
      </section>
      <div className="absolute z-[-1] top-14">
        <AnimatedGradientCircles />
      </div>
    </div>
  );
}
