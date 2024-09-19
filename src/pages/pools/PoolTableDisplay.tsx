import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { MdElectricBolt, MdOutlineInfo } from "react-icons/md";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { Button } from "@/components/ui/button";
import { IPoolData } from "@/types";

function PoolCard({ pool }: { pool: IPoolData }) {
  const { firstToken, secondToken, poolType, liquidity, APR } = pool;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Card
      onClick={() => setIsOpen(!isOpen)}
      className="rounded-2xl animate-fade-in border-transparent cursor-pointer bg-white/70 hover:bg-white transition-all active:bg-primary/[0.04]"
    >
      <CardContent className="hidden px-4 py-3 md:grid grid-cols-[1.65fr_1.15fr_0.9fr_0.7fr_1.1fr] items-center text-sm font-medium text-primary-foreground">
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
        <div
          onClick={(e) => e.stopPropagation()}
          className="ml-auto w-max p-2 border border-primary text-primary rounded-lg transition-colors active:bg-primary/20"
        >
          <FiArrowRight fontSize={15} />
        </div>
      </CardContent>

      <CardContent className="grid px-4 py-3 md:hidden items-center text-sm font-medium text-primary-foreground">
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
        <section className="mt-2 flex justify-between items-center gap-x-3">
          <p className="text-primary flex gap-x-2 items-center">
            {poolType.icon}
            {poolType.title}
          </p>
          <p>${liquidity}</p>
          <p className="flex gap-x-2 items-center">
            <MdElectricBolt /> <span>{APR} %</span>
          </p>
        </section>
      </CardContent>
      {isOpen && (
        <>
          <div className="w-full h-[2px] bg-gradient-to-r from-[rgb(33,113,202)] to-[rgb(100,124,236)]" />
          <article className="px-4">
            <div className="flex justify-between items-center">
              <Card className="w-[80%] grid grid-cols-[repeat(auto-fill,minmax(170px,1fr))] gap-x-3 gap-y-2 py-4 px-3 font-medium border-0 shadow-none rounded-2xl bg-transparent w-full cursor-pointer">
                <article>
                  <p className="text-sm">Total APR</p>
                  <p className="text-primary-foreground text-[18px]">{APR}%</p>
                </article>

                <article>
                  <p className="text-sm flex items-center gap-x-1">
                    Fee APR <MdOutlineInfo className="text-primary" />
                  </p>
                  <p className="text-primary-foreground text-[18px]">3.25%</p>
                </article>

                <article>
                  <p className="text-sm"> Rewards APR </p>
                  <p className="text-primary-foreground text-[18px]">-</p>
                </article>
              </Card>
              <Button
                onClick={(e) => e.stopPropagation()}
                variant="outline"
                className="rounded-lg"
              >
                Enter <FiArrowRight fontSize={20} />
              </Button>
            </div>

            <Card className="w-[80%] grid grid-cols-[repeat(auto-fill,minmax(170px,1fr))] gap-x-3 gap-y-2 py-4 px-3 font-medium border-0 shadow-none rounded-2xl bg-transparent w-full cursor-pointer">
              <article>
                <p className="text-sm">My Position</p>
                <p className="text-primary-foreground text-[18px]">-</p>
              </article>

              <article>
                <p className="text-sm">My Staked</p>
                <p className="text-primary-foreground text-[18px]">-</p>
              </article>
            </Card>
          </article>
        </>
      )}
    </Card>
  );
}

export default function PoolTableDisplay({ pools }: { pools: IPoolData[] }) {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const pageStart = (page - 1) * pageSize;
  const [poolsData, setPoolsData] = useState<IPoolData[]>(
    pools.slice(pageStart, pageStart + pageSize),
  );

  useEffect(() => {
    setPoolsData(pools.slice(pageStart, pageStart + pageSize));
  }, [page, pageSize, pools]);

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
          {pageStart + 1} - {pageStart + pageSize} of {pools.length}{" "}
          {pools.length > 0 ? "Pools" : "Pool"}
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
