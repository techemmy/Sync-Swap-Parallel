import { Link } from "react-router-dom";
import { RiGraduationCapLine } from "react-icons/ri";
import PoolTypeDetails from "@/components/pool-type-details";

function NoPoolDetails() {
  return (
    <section className="transition-all animate-fade-in mt-10 flex gap-y-5 items-center flex-col text-center">
      <h2 className="text-xl font-medium">
        This pool has not yet been created.
      </h2>

      <p className="text-card-foreground text-sm">
        Let me help you find the best pools and manage them.
      </p>

      <Link
        className="transition-all hover:opacity-75 text-card-foreground text-[15px]"
        to="https://academy.binance.com/en/articles/what-are-liquidity-pools-in-defi"
      >
        <p className="flex gap-x-2 items-center">
          <RiGraduationCapLine />
          <span>Learn more</span>
        </p>
      </Link>
    </section>
  );
}

export default function PoolTypeData({ poolType }: { poolType: string }) {
  if (poolType === "Aqua") {
    return <NoPoolDetails />;
  }

  return <PoolTypeDetails poolType={poolType} />;
}
