import CarouselCard from "@/components/CarouselCard";
import { Card, CardContent } from "@/components/ui/card";
import { TabsContent } from "@/components/ui/tabs";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { TOKENS } from "@/constants";
import { FaPercent } from "react-icons/fa";
import { MdCurrencyBitcoin, MdOutlineInfo, MdWaves } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

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
    <section className="w-[35%] flex flex-col gap-4">
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
  return (
    <TabsContent
      value="deposit"
      className="w-full mt-0 transition-all animate-fade-in"
    >
      <section className="grid gap-2 items-center">
        <h2 className="text-primary-foreground text-3xl font-medium">
          Deposit
        </h2>
        <p className="text-sm text-card-foreground font-medium">
          Deposit tokens to start earning trading fees and more rewards.
        </p>
      </section>

      <section className="flex justify-center gap-12 mt-10 items-start">
        <Card className="w-[65%] shadow-thin">
          <CardContent>
            <section className="flex justify-between group">
              <h3 className="text-primary-foreground">Amount to deposit</h3>
              <Popover>
                <PopoverTrigger className="text-primary flex items-center gap-x-2 bg-navIcon/[0.05] py-1 pr-2 rounded-xl">
                  <FiSettings
                    className="font-bold group-active:transition-transform group-active:scale-90 group-hover:rotate-180 duration-500"
                    size={20}
                  />
                  <p className="text-xs">Slippage 0.5%</p>
                </PopoverTrigger>
                <PopoverContent className="rounded-2xl min-w-[300px]">
                  <section className="flex items-center justify-between">
                    <div className="flex gap-x-2 items-center text-primary">
                      <MdWaves fontSize={23} />
                      <h3>Max Slippage</h3>
                      <Tooltip>
                        <TooltipTrigger>
                          <MdOutlineInfo />
                        </TooltipTrigger>
                        <TooltipContent className="max-w-[300px]">
                          <p>
                            Your transaction will revert if price changes
                            unfavorably by more than this percentage.
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                    <p className="text-card-foreground text-xs">Auto 2%</p>
                  </section>

                  <ul className={`grid w-full gap-3 grid-cols-3 mt-7`}>
                    <li
                      className={`${"active" ? "text-primary shadow-md border-primary" : "text-card-foreground border-transparent"} border font-medium active:scale-90 transition-transform text-sm py-2 text-center hover:bg-accent rounded-2xl cursor-pointer`}
                    >
                      hello
                    </li>
                  </ul>
                </PopoverContent>
              </Popover>
            </section>
          </CardContent>
        </Card>

        <RightSide />
      </section>
    </TabsContent>
  );
}
