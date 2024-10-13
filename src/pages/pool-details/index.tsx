import Footer from "@/components/Footer";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FaChevronLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import OverviewTabContent from "./OverviewTabContent";
import MyPositionTabContent from "./MyPositionTabContent";
import { useState } from "react";
import DepositTabContent from "./DepositTabContent";
import WithdrawTabContent from "./WithdrawTabContent";
import StakeTabContent from "./StakeTabContent";
import { PoolSlippageProvider } from "@/context/PoolSlippageContext";

export default function PoolDetails() {
  const [tab, setTab] = useState("overview");

  const onTabChange = (tab: string) => setTab(tab);
  return (
    <PoolSlippageProvider>
      <main className="relative overflow-auto pt-28 pb-20 min-h-screen max-w-[1120px] mx-auto py-4 px-2">
        <Link
          to="/pools"
          className="mb-6 text-primary text-sm flex gap-x-2 items-center"
        >
          <FaChevronLeft />
          <span>Pools</span>
        </Link>
        <Tabs
          defaultValue="overview"
          value={tab}
          onValueChange={onTabChange}
          className="flex flex-col md:flex-row items-start gap-8 relative z-10"
          orientation="vertical"
        >
          <TabsList className="flex flex-wrap md:flex-nowrap *:w-max *:md:w-full bg-transparent md:flex-col md:items-start md:space-y-2 md:w-[15%]">
            <TabsTrigger
              className="text-card-foreground flex justify-start rounded-xl border-none data-[state=active]:bg-card data-[state=active]:shadow-thin data-[state=active]:text-primary w-full text-left"
              value="overview"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger
              className="text-card-foreground flex justify-start rounded-xl border-none data-[state=active]:bg-card data-[state=active]:shadow-thin data-[state=active]:text-primary w-full text-left"
              value="my-position"
            >
              My Position
            </TabsTrigger>
            <TabsTrigger
              className="text-card-foreground flex justify-start rounded-xl border-none data-[state=active]:bg-card data-[state=active]:shadow-thin data-[state=active]:text-primary w-full text-left"
              value="deposit"
            >
              Deposit
            </TabsTrigger>
            <TabsTrigger
              className="text-card-foreground flex justify-start rounded-xl border-none data-[state=active]:bg-card data-[state=active]:shadow-thin data-[state=active]:text-primary w-full text-left"
              value="withdraw"
            >
              Withdraw
            </TabsTrigger>
            <TabsTrigger
              className="text-card-foreground flex justify-start rounded-xl border-none data-[state=active]:bg-card data-[state=active]:shadow-thin data-[state=active]:text-primary w-full text-left"
              value="stake"
            >
              Stake
            </TabsTrigger>
          </TabsList>
          <div className="w-full md:w-[85%]">
            <OverviewTabContent />
            <MyPositionTabContent
              changeTabToDeposit={() => onTabChange("deposit")}
            />
            <DepositTabContent />
            <WithdrawTabContent />
            <StakeTabContent />
          </div>
        </Tabs>
      </main>
      <Footer />
    </PoolSlippageProvider>
  );
}
