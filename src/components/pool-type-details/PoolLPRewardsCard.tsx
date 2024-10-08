import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { useState } from "react";
import { BsLightningChargeFill } from "react-icons/bs";
import { FaPlus, FaPercent } from "react-icons/fa";
import { HiOutlineTag } from "react-icons/hi";
import { MdOutlineInfo } from "react-icons/md";
import { TbTrendingUp } from "react-icons/tb";
import { Card, CardTitle } from "@/components/ui/card";

export default function PoolLPRewardsCard() {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <Card className="flex flex-col gap-x-1 gap-y-3 font-medium border-0 shadow rounded-2xl bg-card/70 px-6 py-5 pb-7 w-full cursor-pointer">
      <section className="flex justify-between items-center mb-2">
        <CardTitle className="text-base font-medium flex gap-x-2 items-center">
          <BsLightningChargeFill fontSize={20} className="text-primary" />
          <span className="text-primary-foreground text-[18px]">
            LP Rewards
          </span>
        </CardTitle>

        <FaPlus
          onClick={() => setShowDetails(!showDetails)}
          className={`transition-all duration-500 ${showDetails && "rotate-45"} text-card-foreground cursor-pointer`}
          fontSize={13}
        />
      </section>

      <div className="grid gap-x-4 grid-cols-[repeat(auto-fill,minmax(250px,380px))] space-y-3">
        <article className="flex gap-x-2 items-center">
          <span className="text-sm text-primary bg-accent grid place-items-center w-10 h-10 border rounded-xl">
            <TbTrendingUp fontSize={20} />
          </span>

          <article className="grid rounded-2xl p-1">
            <p className="text-sm"> Fee APR (24h) </p>
            <p className="text-[18px] text-primary-foreground"> 1.79% </p>
          </article>
        </article>

        <article className="flex gap-x-2 items-center">
          <span className="text-sm text-primary bg-accent grid place-items-center w-10 h-10 border rounded-xl">
            <BsLightningChargeFill fontSize={18} />
          </span>

          <article className="grid rounded-2xl p-1">
            <p className="text-sm"> Staking APR </p>
            <p className="text-[18px]">-</p>
          </article>
        </article>
      </div>

      {showDetails && (
        <section className="transition-all animate-fade-in bg-accent px-6 py-4 rounded-xl mt-8">
          <h3 className="text-sm">Fee Policy</h3>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,380px))] gap-4 mt-4">
            <article className="flex gap-x-2 items-center">
              <span className="text-sm text-primary bg-accent grid place-items-center w-10 h-10 border rounded-xl">
                <HiOutlineTag fontSize={18} />
              </span>

              <article className="grid rounded-2xl p-1">
                <div className="text-sm flex items-center gap-x-1">
                  Swap Fee
                  <Tooltip>
                    <TooltipTrigger>
                      <MdOutlineInfo />
                    </TooltipTrigger>
                    <TooltipContent>
                      The swap fee for every trade through pool
                    </TooltipContent>
                  </Tooltip>
                </div>
                <p className="text-[18px] text-primary-foreground">0.30%</p>
              </article>
            </article>

            <article className="flex gap-x-2 items-center">
              <span className="text-sm text-primary bg-accent grid place-items-center w-10 h-10 border rounded-xl">
                <FaPercent fontSize={15} />
              </span>

              <article className="grid rounded-2xl p-1">
                <div className="text-sm flex items-center gap-x-1">
                  LP Fee Share
                  <Tooltip>
                    <TooltipTrigger>
                      <MdOutlineInfo />
                    </TooltipTrigger>
                    <TooltipContent>
                      The percentage of Liquidity Providers (LPs) share from the
                      total sweep fees.
                    </TooltipContent>
                  </Tooltip>
                </div>
                <p className="text-[18px] text-primary-foreground">71.0%</p>
              </article>
            </article>
          </div>
        </section>
      )}
    </Card>
  );
}
