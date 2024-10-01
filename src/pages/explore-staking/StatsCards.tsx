import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import React from "react";
import { IoTrendingUpOutline } from "react-icons/io5";
import {
  MdAccountBalanceWallet,
  MdOutlineAccountBalance,
} from "react-icons/md";

interface Props {
  amount?: number;
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

function BalanceCard({ children, title, icon: Icon }: Props) {
  return (
    <Card className="w-full relative bg-white/75 border-transparent px-7 py-5 rounded-2xl shadow overflow-clip space-y-2">
      <p className="text-sm text-card-foreground flex gap-x-1 items-center">
        <span className="font-medium">{title}</span>
      </p>
      <div className="text-primary-foreground text-xl font-medium">
        {children}
      </div>
      {Icon}
    </Card>
  );
}

export default function StatsCards() {
  return (
    <article className="flex gap-5 flex-wrap lg:flex-nowrap">
      <BalanceCard
        title="Staking APR"
        icon={
          <IoTrendingUpOutline
            fontSize={80}
            className="absolute -right-[5%] top-[16%] text-stakingSponsor opacity-[.2]"
          />
        }
      >
        <div className="flex items-center gap-x-2">
          <p>10%</p>
          <Badge variant="outline" className="border-primary rounded-lg">
            Fixed
          </Badge>
        </div>
      </BalanceCard>

      <BalanceCard
        title="Total Staked"
        icon={
          <MdOutlineAccountBalance
            fontSize={80}
            className="absolute -right-[8%] top-[10%] text-stakingSponsor opacity-[.2]"
          />
        }
      >
        <p>357874.88 TRALA</p>
      </BalanceCard>

      <BalanceCard
        title="My Staked"
        icon={
          <MdAccountBalanceWallet
            fontSize={80}
            className="absolute -right-[8%] top-[10%] text-stakingSponsor opacity-[.2]"
          />
        }
      >
        <p>0 TRALA</p>
      </BalanceCard>
    </article>
  );
}
