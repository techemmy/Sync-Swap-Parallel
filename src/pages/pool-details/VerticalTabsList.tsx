import { TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function VerticalTabsList() {
  return (
    <TabsList className="flex bg-transparent md:flex-col md:items-start space-y-2 md:w-[15%]">
      <TabsTrigger
        className="text-card-foreground flex justify-start rounded-xl border-none data-[state=active]:bg-card data-[state=active]:shadow-thin data-[state=active]:text-primary w-full text-left"
        value="overview"
      >
        Overview
      </TabsTrigger>
      <TabsTrigger
        className="text-card-foreground flex justify-start rounded-xl border-none data-[state=active]:bg-card data-[state=active]:shadow-thin data-[state=active]:text-primary w-full text-left"
        value="myPosition"
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
  );
}
