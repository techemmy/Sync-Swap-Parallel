import { Link } from "react-router-dom";
import { TbAlignBoxRightBottom } from "react-icons/tb";
import PoolTag from "@/components/pool-type-details/PoolTag";
import { MdOutlineContentCopy, MdTravelExplore } from "react-icons/md";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function PoolDetailsHeader({ poolType }: { poolType: string }) {
  return (
    <>
      <section className="flex justify-between text-primary items-center">
        <div className="flex gap-x-2 items-center">
          <TbAlignBoxRightBottom size={25} />
          <h2 className="text-2xl text-primary-foreground font-semibold">
            {poolType} Pool
          </h2>
          <PoolTag className="px-2">V1</PoolTag>
        </div>
        <Link
          className="transition-all hover:opacity-75 active:scale-90"
          to="https://era.zksync.network/address/0x80115c708E12eDd42E504c1cD52Aea96C547c05c"
        >
          <MdTravelExplore fontSize={22} />
        </Link>
      </section>

      <div className="flex gap-x-2 text-sm text-card-foreground">
        <span className="font-medium">Contract</span>
        <span
          onClick={() =>
            navigator.clipboard.writeText(
              "0x3355df6d4c9c3035724fd0e3914de96a5a83aaf4",
            )
          }
          className="flex gap-x-2 items-center"
        >
          <Tooltip>
            <TooltipTrigger> 0x3355df...83aaf4 </TooltipTrigger>
            <TooltipContent>
              0x3355df6d4c9c3035724fd0e3914de96a5a83aaf4
            </TooltipContent>
          </Tooltip>
          <MdOutlineContentCopy className="cursor-pointer" />
        </span>
      </div>
    </>
  );
}
