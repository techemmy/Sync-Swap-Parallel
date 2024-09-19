import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GiGroundbreaker } from "react-icons/gi";
import { MdOutlineWaterDrop } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { FaFilter } from "react-icons/fa";
import { IoArrowDown, IoArrowUp } from "react-icons/io5";
import PoolGridDisplay from "./PoolGridDisplay";
import PoolTableDisplay from "./PoolTableDisplay";
import Tokens from "@/assets/tokens.json";
import { BsTriangleHalf } from "react-icons/bs";
import { TbAlignBoxRightBottom } from "react-icons/tb";
import { IPoolData, IPoolType } from "@/types";
import { useEffect, useState } from "react";

const TOKENS = Object.values(Tokens.data).map(
  ({ symbol, logo }: { symbol: string; logo: string }) => ({
    symbol,
    logo,
  }),
);

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

export default function PoolsDisplay() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPools, setFilteredPools] = useState(pools);

  useEffect(() => {
    const filtered = pools.filter((pool) => {
      const lowerFirstToken = pool.firstToken.symbol.toLowerCase();
      const lowerSecondToken = pool.secondToken.symbol.toLowerCase();
      const lowerPoolType = pool.poolType.title.toLowerCase();
      const lowerSearchTerm = searchTerm.toLowerCase();
      return (
        lowerFirstToken.includes(lowerSearchTerm) ||
        lowerSecondToken.includes(lowerSearchTerm) ||
        lowerPoolType.includes(lowerSearchTerm)
      );
    });
    setFilteredPools(filtered);
  }, [searchTerm]);
  return (
    <Tabs defaultValue="prime-pools">
      <section className="flex justify-between items-center flex-wrap md:flex-nowrap gap-y-2">
        <section className="flex flex-col gap-y-2 md:flex-row gap-x-4">
          <TabsList className="rounded-3xl bg-card text-primary shadow-sm">
            <TabsTrigger className="flex gap-x-2 px-5 py-2" value="prime-pools">
              <GiGroundbreaker fontSize={20} />
              <h2>Prime Pools</h2>
            </TabsTrigger>
            <TabsTrigger className="flex gap-x-2 px-5 py-2" value="all-pools">
              <MdOutlineWaterDrop fontSize={20} />
              <h2>All Pools</h2>
            </TabsTrigger>
          </TabsList>

          <div
            className={`flex gap-x-1 ${searchTerm.length > 0 && "bg-card shadow-light"} hover:bg-card px-2 rounded-3xl`}
          >
            <IoMdSearch fontSize={20} className="self-center text-primary" />
            <input
              type="text"
              name="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value.trim())}
              className="ml-2 bg-transparent outline-none text-primary-foreground py-1"
            />
          </div>
        </section>
        <section className="self-start text-sm font-medium flex gap-x-2 items-center bg-card rounded-3xl py-2 px-4 cursor-pointer transition-all active:scale-90 hover:bg-accent">
          <img src="/images/zksync_black.png" className="w-7 h-4" />
          <h3 className="text-card-foreground">TVL</h3>
          <span className="text-primary ml-2">$23.65M</span>
        </section>
      </section>

      <article className="my-4 w-full grid grid-cols-[1.65fr_1.15fr_0.9fr_0.7fr_1.1fr] text-left text-card-foreground text-sm font-medium">
        <div className="w-full flex">Pool</div>
        <div className="w-full">
          <p className="w-fit flex gap-x-2 items-center cursor-pointer hover:opacity-60">
            <span>Type</span>
            <FaFilter fontSize={10} />
          </p>
        </div>
        <div className="w-full">
          <p className="w-fit flex gap-x-2 items-center cursor-pointer hover:opacity-60">
            <span>Liquidity</span>
            <IoArrowDown />
            <IoArrowUp />
          </p>
        </div>
        <div className="w-full flex justify-end">
          <p className="w-fit flex gap-x-2 items-center cursor-pointer hover:opacity-60">
            <span>APR</span>
            <IoArrowDown />
            <IoArrowUp />
          </p>
        </div>
      </article>

      <TabsContent value="prime-pools">
        <PoolGridDisplay pools={filteredPools} />
      </TabsContent>
      <TabsContent value="all-pools">
        <PoolTableDisplay pools={filteredPools} />
      </TabsContent>
    </Tabs>
  );
}
