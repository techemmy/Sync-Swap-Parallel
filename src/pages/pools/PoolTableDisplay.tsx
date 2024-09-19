import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Tokens from "@/assets/tokens.json";
import { Card, CardContent } from "@/components/ui/card";
import React, { useEffect, useState } from "react";
import { BsTriangleHalf } from "react-icons/bs";
import { FiArrowRight } from "react-icons/fi";
import { MdElectricBolt, MdOutlineWaterDrop } from "react-icons/md";
import { TbAlignBoxRightBottom } from "react-icons/tb";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

interface IPoolType {
  icon: React.ReactNode;
  title: string;
}

interface IPoolData {
  firstToken: {
    symbol: string;
    logo: string;
  };
  secondToken: {
    symbol: string;
    logo: string;
  };
  poolType: IPoolType;
  liquidity: string;
  APR: string;
}

const poolTypes: IPoolType[] = [
  {
    icon: <MdOutlineWaterDrop fontSize={23} />,
    title: "Aqua",
  },
  {
    icon: <TbAlignBoxRightBottom fontSize={23} />,
    title: "Classic",
  },
  {
    icon: <BsTriangleHalf fontSize={20} />,
    title: "Stable",
  },
];

function PoolCard({ pool }: { pool: IPoolData }) {
  const { firstToken, secondToken, poolType, liquidity, APR } = pool;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Card className="animate-fade-in border-transparent cursor-pointer bg-white/70 hover:bg-white">
      <CardContent
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 grid grid grid-cols-[1.65fr_1.15fr_0.9fr_0.7fr_1.1fr] items-center  text-sm font-medium text-primary-foreground"
      >
        <section className="flex gap-x-1">
          <div className="flex gap-x-2 items-center border border-primary/30 rounded-3xl px-2 py-1">
            <img
              className="w-7 h-7 rounded-full"
              src={firstToken.logo}
              alt={`${firstToken.symbol} logoSrc`}
            />
            {firstToken.symbol}
          </div>
          <div className="flex gap-x-2 items-center border border-primary/30 rounded-3xl px-2 py-1">
            <img
              className="w-7 h-7 rounded-full"
              src={secondToken.logo}
              alt={`${secondToken.symbol} logoSrc`}
            />
            {secondToken.symbol}
          </div>
        </section>
        <p className="text-primary flex gap-x-2 items-center">
          {poolType.icon}
          {poolType.title}
        </p>
        <p>${liquidity}</p>
        <p className="ml-auto flex gap-x-2 items-center">
          <MdElectricBolt /> <span>{APR} %</span>
        </p>
        <div className="ml-auto w-max p-2 border border-primary text-primary rounded-lg transition-colors active:bg-accent">
          <FiArrowRight fontSize={20} />
        </div>
      </CardContent>
      {isOpen && <div>open</div>}
    </Card>
  );
}

const TOKENS = Object.values(Tokens.data).map(
  ({ symbol, logo }: { symbol: string; logo: string }) => ({
    symbol,
    logo,
  }),
);

let pools = [] as Array<IPoolData>;
for (let i = 0; i < TOKENS.length; i += 2) {
  const from = TOKENS[i++];
  const to = TOKENS[i++];

  const type = Math.floor(Math.random() * 10) % 3;
  const poolType = poolTypes[type];

  const liquidity = (Math.random() * 10000000).toLocaleString();
  const APR = (Math.random() * 10).toFixed(2);
  pools.push({ firstToken: from, secondToken: to, poolType, liquidity, APR });
}

export default function PoolTableDisplay() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const pageStart = (page - 1) * pageSize;
  const [poolsData, setPoolsData] = useState<IPoolData[]>(
    pools.slice(pageStart, pageStart + pageSize),
  );

  useEffect(() => {
    setPoolsData(pools.slice(pageStart, pageStart + pageSize));
  }, [page, pageSize]);

  const totalPages = Math.ceil(pools.length / pageSize);

  const hasNext = () => {
    if (page + 1 <= totalPages) return true;
    return false;
  };
  const hasPrev = () => {
    if (page - 1 > 0) return true;
    return false;
  };

  const goToNextPage = () => {
    if (!hasNext()) return;
    setPage((page) => page + 1);
  };

  const goToPrevPage = () => {
    if (!hasPrev()) return;
    setPage((page) => page - 1);
  };

  return (
    <section>
      <div className="grid gap-y-3">
        {poolsData.map((pool, index) => (
          <PoolCard key={pool.firstToken.symbol + index} pool={pool} />
        ))}
      </div>

      <div className="mt-5 flex justify-between">
        <p className="text-sm text-card-foreground font-medium">
          {pageStart + 1} - {pageStart + pageSize} of {pools.length}
        </p>

        <article className="flex gap-x-2 items-center">
          <p className="flex gap-x-1 items-center text-sm text-card-foreground font-medium">
            <span>Pools per page</span>
            <Select
              defaultValue={pageSize.toString()}
              onValueChange={(value) => setPageSize(parseInt(value))}
            >
              <SelectTrigger className="w-[100px] border-transparent">
                <SelectValue placeholder={pageSize} />
              </SelectTrigger>
              <SelectContent className="w-5 text-primary-foreground">
                <SelectItem value="5">5</SelectItem>
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="15">15</SelectItem>
              </SelectContent>
            </Select>
          </p>
          <div
            onClick={goToPrevPage}
            className="p-2 transition-colors hover:bg-primary/[0.04] active:bg-primary/40 rounded-md cursor-pointer"
          >
            <PiCaretLeftBold />
          </div>
          <div
            onClick={goToNextPage}
            className="p-2 transition-colors hover:bg-primary/[0.04] active:bg-primary/40 rounded-md cursor-pointer"
          >
            <PiCaretRightBold className="cursor-pointer" />
          </div>
        </article>
      </div>
    </section>
  );
}