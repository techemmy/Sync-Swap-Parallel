import {
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Link } from "react-router-dom";
import { IoWalletOutline } from "react-icons/io5";
import { MdOutlineInfo, MdTravelExplore } from "react-icons/md";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { MdOutlineContentCopy } from "react-icons/md";

interface Props {
  name: string;
  symbol: string;
  logoSrc: string;
}

export default function TokenDetailsDialog({ name, symbol, logoSrc }: Props) {
  return (
    <DialogContent className="max-w-md px-6 sm:rounded-3xl">
      <header>
        <article className="flex flex-row items-center gap-x-2 px-0 py-2 mb-2">
          <img className="w-10 h-10 rounded-full" src={logoSrc} alt="Title" />

          <div>
            <DialogTitle className="flex items-center gap-x-1 text-md text-primary-foreground">
              {symbol}
            </DialogTitle>
            <DialogDescription className="text-card-foreground">
              {name}
            </DialogDescription>
          </div>
        </article>

        <div className="flex gap-x-2">
          <Link
            to="#"
            className="flex items-center gap-x-2 text-primary text-sm font-medium px-3 py-2 rounded-md hover:bg-accent w-max transition-transform active:scale-90"
          >
            <IoWalletOutline size={18} />
            <span>Add to wallet</span>
          </Link>
          <Link
            to="#"
            className="flex items-center gap-x-2 text-primary text-sm font-medium px-3 py-2 rounded-md hover:bg-accent w-max transition-transform active:scale-90"
          >
            <MdTravelExplore size={18} />
            <span>View on explorer</span>
          </Link>
        </div>
      </header>

      <section className="grid gap-y-3">
        <Card className="bg-accent border-transparent p-3 py-4 flex flex-col justify-between">
          <CardDescription className="text-primary font-semibold">
            Price
          </CardDescription>
          <CardTitle className="text-xl font-medium mt-2 text-primary-foreground flex gap-x-2 items-center">
            $1
            <Tooltip>
              <TooltipTrigger>
                <MdOutlineInfo size={15} />
              </TooltipTrigger>
              <TooltipContent>
                The price is derived from available liquidity and is for
                reference only.
              </TooltipContent>
            </Tooltip>
          </CardTitle>
        </Card>

        <Card className="bg-accent border-transparent p-3 py-4 flex flex-col justify-between">
          <CardDescription className="text-primary font-semibold">
            Balance
          </CardDescription>
          <CardTitle className="text-xl font-medium mt-2 text-primary-foreground flex gap-x-2 items-center">
            0 USDC.e
            <Tooltip>
              <TooltipTrigger>
                <MdOutlineInfo size={15} />
              </TooltipTrigger>
              <TooltipContent>
                The price is derived from available liquidity and is for
                reference only.
              </TooltipContent>
            </Tooltip>
          </CardTitle>
        </Card>
      </section>

      <ul className="text-card-foreground text-sm grid gap-y-2 mt-2">
        <li className="flex justify-between">
          <span>Decimals</span>
          <span>6</span>
        </li>

        <li className="flex justify-between">
          <span>Contract</span>
          <span className="flex gap-x-1 items-center">
            <Tooltip>
              <TooltipTrigger> 0x3355df...83aaf4 </TooltipTrigger>
              <TooltipContent>
                0x3355df6d4c9c3035724fd0e3914de96a5a83aaf4
              </TooltipContent>
            </Tooltip>
            <MdOutlineContentCopy
              className="cursor-pointer"
              onClick={() =>
                navigator.clipboard.writeText(
                  "0x3355df6d4c9c3035724fd0e3914de96a5a83aaf4",
                )
              }
            />
          </span>
        </li>

        <li className="flex justify-between">
          <span className="flex gap-x-1 items-center">
            L2 Total Supply
            <Tooltip>
              <TooltipTrigger>
                <MdOutlineInfo className="text-primary" />
              </TooltipTrigger>
              <TooltipContent>L2 total supply price</TooltipContent>
            </Tooltip>
          </span>

          <Tooltip>
            <TooltipTrigger
              onClick={() => navigator.clipboard.writeText("55.90M USDC.e")}
            >
              55.90M USDC.e
            </TooltipTrigger>
            <TooltipContent>55.90M USDC.e</TooltipContent>
          </Tooltip>
        </li>

        <li className="flex justify-between">
          <span className="flex gap-x-1 items-center">
            L2 FDV
            <Tooltip>
              <TooltipTrigger>
                <MdOutlineInfo className="text-primary" />
              </TooltipTrigger>
              <TooltipContent>L2 FDV price</TooltipContent>
            </Tooltip>
          </span>
          <span>$55.9M</span>
        </li>
      </ul>
    </DialogContent>
  );
}
