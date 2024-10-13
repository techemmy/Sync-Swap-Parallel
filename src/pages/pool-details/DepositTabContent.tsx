import CarouselCard from "@/components/CarouselCard";
import { Card, CardContent } from "@/components/ui/card";
import { TabsContent } from "@/components/ui/tabs";
import { TOKENS } from "@/constants";
import { FaPercent } from "react-icons/fa";
import {
  MdCurrencyBitcoin,
  MdDoneOutline,
  MdOutlineInfo,
} from "react-icons/md";
import { Button } from "@/components/ui/button";
import SlippagePopover from "./SlippagePopover";
import { Switch } from "@/components/ui/switch";
import ConnectWalletDialogButton from "@/components/ConnectWalletDialogButton";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import AnimatedGradientCircles from "@/components/AnimatedGradientCircles";
import SlippageWarning from "@/components/SlippageWarning";

function RightSide() {
  const carouselContents = [
    {
      title: "Put your assets to work",
      text: "Deposit tokens to provide liquidity for traders. You will receive LP tokens representing pool share.",
    },
    {
      title: "Earn from every trade",
      text: "Earn trading fees like professional market makers. Earned fees are auto compounded in position.",
    },
    {
      title: "Manage your position",
      text: "Adjust, increase or decrease your position anytime by deposit or withdrawal.",
    },
    {
      title: "Funds are always available",
      text: "Withdraw to receive pool tokens whenever you want. Earned fees are already included.",
    },
  ];
  return (
    <section className="w-full md:w-[35%] flex flex-col gap-4">
      <CarouselCard contents={carouselContents} />

      <Card className="shadow-thin">
        <CardContent className="p-3 space-y-4">
          <section className="flex items-center gap-x-1">
            <MdCurrencyBitcoin className="text-primary" fontSize={20} />
            <h3 className="text-sm text-primary-foreground">Price</h3>
          </section>

          <article className="flex items-center gap-x-2 justify-center">
            <img src={TOKENS[0].logo} className="w-5 h-5" />
            <p className="text-primary-foreground text-sm">
              1 USDC.e = 0.0004 ETH
            </p>
          </article>

          <article className="flex items-center gap-x-2 justify-center">
            <img src={TOKENS[1].logo} className="w-5 h-5" />
            <p className="text-primary-foreground text-sm">
              1 ETH = 2,431.554 USDC.e
            </p>
          </article>
        </CardContent>
      </Card>

      <Card className="shadow-thin">
        <CardContent className="flex justify-between items-center py-3">
          <section className="flex items-center gap-x-2">
            <FaPercent className="text-primary" />
            <h3 className="text-primary-foreground text-sm">My pool share</h3>
          </section>

          <p className="text-sm text-primary">0%</p>
        </CardContent>
      </Card>
    </section>
  );
}

export default function DepositTabContent() {
  const [isBalancedProportion, setIsBalancedProportion] = useState(true);
  return (
    <TabsContent
      value="deposit"
      className="relative w-full mt-0 transition-all animate-fade-in"
    >
      <section className="grid gap-2 items-center">
        <h2 className="text-primary-foreground text-3xl font-medium">
          Deposit
        </h2>
        <p className="text-sm text-card-foreground font-medium">
          Deposit tokens to start earning trading fees and more rewards.
        </p>
      </section>

      <section className="flex flex-col md:flex-row justify-center gap-12 mt-10 items-start">
        <Card className="w-full md:w-[65%] shadow-thin">
          <CardContent>
            <section className="flex justify-between group">
              <h3 className="text-primary-foreground">Amount to deposit</h3>
              <SlippagePopover />
            </section>

            <section className="space-y-7 my-7">
              {Object.values(TOKENS).map((token) => (
                <article key={token.name} className="space-y-2">
                  <Button
                    variant="outline"
                    className="border-0 flex items-center gap-x-2 px-3"
                  >
                    <img src={token.logo} className="w-6 h-6" />
                    <p className="text-primary-foreground text-lg">
                      {token.name}
                    </p>
                  </Button>
                  <div className="bg-accent p-2 pl-4 rounded-lg">
                    <input
                      type="text"
                      className="bg-transparent w-full text-ellipsis outline-none border-none text-2xl"
                      placeholder="0.0"
                    />
                  </div>
                </article>
              ))}
              <div className="pl-2 flex items-center space-x-2 text-sm">
                <Switch
                  onCheckedChange={setIsBalancedProportion}
                  checked={isBalancedProportion}
                  id="balanced-proportion"
                />
                <label htmlFor="balanced-proportion">
                  Add tokens in balanced proportion
                </label>
                <Tooltip>
                  <TooltipTrigger>
                    <MdOutlineInfo />
                  </TooltipTrigger>
                  <TooltipContent>
                    Deposit all tokens in the same proportion they currently are
                    in the pool.
                  </TooltipContent>
                </Tooltip>
              </div>
            </section>

            {!isBalancedProportion && (
              <Badge
                variant="outline"
                className="border-transparent text-sm flex justify-center items-center gap-x-4 bg-primary/[0.06] rounded-lg px-4 py-2 mb-3 mt-14"
              >
                <MdDoneOutline fontSize={20} />
                <p>
                  Your deposit will be converted to a balanced proportion
                  automatically.
                </p>
              </Badge>
            )}

            <ConnectWalletDialogButton variant="default" className="w-full" />
          </CardContent>
        </Card>

        <RightSide />
      </section>

      <SlippageWarning className="mt-10" />
      <AnimatedGradientCircles />
    </TabsContent>
  );
}
