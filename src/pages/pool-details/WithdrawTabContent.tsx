import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CarouselCard from "@/components/CarouselCard";
import { FaPercent } from "react-icons/fa";
import SlippagePopover from "./SlippagePopover";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { GoInbox } from "react-icons/go";
import { TOKENS } from "@/constants";
import { MdDoneOutline, MdOutlineInfo } from "react-icons/md";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import ConnectWalletDialogButton from "@/components/ConnectWalletDialogButton";
import { Switch } from "@/components/ui/switch";
import { IoWarningOutline } from "react-icons/io5";
import { useSlippage } from "@/context/PoolSlippageContext";

function RightSide() {
  const carouselContents = [
    {
      title: "Choose a percent",
      text: "Choose how many LP shares you want to withdraw to receive the corresponding pool tokens.",
    },
    {
      title: "Single or balanced",
      text: "Decide to receive a single token or all tokens in balanced amounts.",
    },
    {
      title: "Funds will arrive shortly",
      text: "Review and submit the transaction. You will receive the funds once confirmed.",
    },
  ];
  return (
    <section className="w-[35%] flex flex-col gap-4">
      <CarouselCard contents={carouselContents} />

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

function TokenToWithdraw({
  title,
  isBalanced = false,
  tokens,
}: {
  title: string;
  isBalanced?: boolean;
  tokens: { name: string; logo: string }[];
}) {
  return (
    <section className="my-3">
      <h3 className="text-card-foreground text-sm">{title}</h3>

      <section className="flex items-center gap-x-2 mt-5">
        <p className="text-card-foreground text-sm">Expected to receive</p>
        <Tooltip>
          <TooltipTrigger>
            <MdOutlineInfo />
          </TooltipTrigger>
          <TooltipContent>
            The amount of tokens you are expected to receive.
          </TooltipContent>
        </Tooltip>
      </section>

      <div className="space-y-3 mt-3 pl-2">
        {tokens.map((token) => (
          <article
            key={token.name}
            className="flex justify-between items-center"
          >
            <label htmlFor={token.name} className="flex gap-x-3 items-center">
              <input
                type="radio"
                name="token-to-receive"
                id={token.name}
                value={token.name}
                className={`${isBalanced && "hidden"}`}
                defaultChecked
              />
              <img src={token.logo} id={token.name} className="w-5 h-5" />
              <p className="text-primary-foreground text-sm">{token.name}</p>
            </label>

            <p className="text-primary-foreground">0</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function WithdrawTabContent() {
  const [slippage] = useSlippage();
  return (
    <TabsContent
      value="withdraw"
      className="w-full mt-0 transition-all animate-fade-in"
    >
      <section className="grid gap-2 items-center">
        <h2 className="text-primary-foreground text-3xl font-medium">
          Withdraw
        </h2>
        <p className="text-sm text-card-foreground font-medium">
          Withdraw to receive pool tokens and earned trading fees.
        </p>
      </section>

      <section className="flex justify-center gap-12 mt-10 items-start">
        <div className="w-[65%] space-y-4">
          <section className="flex justify-between group">
            <h3 className="text-card-foreground text-sm">Amount to withdraw</h3>
            <SlippagePopover />
          </section>
          <Card className="shadow-thin">
            <CardContent>
              <div className="flex justify-between">
                <input
                  type="text"
                  placeholder="0.0"
                  className="text-primary-foreground bg-transparent w-0 flex-grow text-3xl outline-none"
                />
                <GoInbox size={25} className="text-primary" />
              </div>

              <div className="my-5 flex justify-between items-center *:text-card-foreground *:text-sm">
                <span>0$</span>
                <p>Balance 0</p>
              </div>

              <Slider defaultValue={[0]} max={100} step={1} />

              <section className="mb-1 mt-3 flex flex-row justify-between w-full gap-x-2 *:w-full *:border-primary/[0.5] *:text-sm *:py-1">
                {[25, 50, 75, 100].map((percent) => (
                  <Badge
                    key={percent}
                    variant="outline"
                    className="active:bg-primary/[0.2] hover:border-primary hover:bg-primary/[0.04]"
                  >
                    {percent === 100 ? "Max" : `${percent}%`}
                  </Badge>
                ))}
              </section>
            </CardContent>
          </Card>

          <Tabs defaultValue="single" className="mt-4 space-y-4">
            <Card className="shadow-thin">
              <CardContent>
                <TabsList className="w-full">
                  <TabsTrigger className="w-full rounded-lg" value="single">
                    Single
                  </TabsTrigger>
                  <TabsTrigger className="w-full rounded-lg" value="balanced">
                    Balanced
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="single">
                  <TokenToWithdraw
                    title="You will only receive the single token of your choice."
                    tokens={Object.values(TOKENS)}
                  />
                </TabsContent>
                <TabsContent value="balanced">
                  <TokenToWithdraw
                    title="You will receive both tokens in the balanced amounts."
                    isBalanced={true}
                    tokens={Object.values(TOKENS)}
                  />
                </TabsContent>
              </CardContent>
            </Card>

            <Card className="shadow-thin">
              <CardContent className="pt-5 space-y-5">
                <TabsContent value="single">
                  <article className="flex items-center justify-between">
                    <div className="flex gap-x-2 text-sm">
                      <p>Slippage</p>
                      <Tooltip>
                        <TooltipTrigger>
                          <MdOutlineInfo />
                        </TooltipTrigger>
                        <TooltipContent>
                          Unbalanced withdrawals may cause slight slippage due
                          to pool rebalancing.
                        </TooltipContent>
                      </Tooltip>
                    </div>

                    <p className="text-sm text-green-800">0%</p>
                  </article>
                </TabsContent>
                <TabsContent value="balanced">
                  <article className="flex items-center justify-between mb-4">
                    <div className="flex gap-x-2 text-sm">
                      <label
                        htmlFor="collect-as-WETH"
                        className="text-primary-foreground"
                      >
                        Collect as WETH
                      </label>
                      <Tooltip>
                        <TooltipTrigger>
                          <MdOutlineInfo />
                        </TooltipTrigger>
                        <TooltipContent>
                          Unbalanced withdrawals may cause slight slippage due
                          to pool rebalancing.
                        </TooltipContent>
                      </Tooltip>
                    </div>

                    <Switch id="collect-as-WETH" />
                  </article>
                  <Badge
                    variant="outline"
                    className="border-transparent text-sm flex justify-center items-center gap-x-2 bg-primary/[0.06] rounded-lg px-2 py-2 mb-3"
                  >
                    <MdDoneOutline fontSize={20} />
                    <p>
                      Withdrawals in balanced mode will not incur any fee or
                      exchange.
                    </p>
                  </Badge>
                </TabsContent>
                <ConnectWalletDialogButton
                  variant="default"
                  className="w-full"
                />
              </CardContent>
            </Card>
          </Tabs>
        </div>

        <RightSide />
      </section>

      {slippage && slippage >= 5 && (
        <div className="flex items-center gap-x-2 mt-10">
          <IoWarningOutline fontSize={23} className="text-yellow-500" />
          <p className="text-sm text-card-foreground">
            You may receive {slippage}% less with this percentage of slippage
            tolerance.
          </p>
        </div>
      )}
    </TabsContent>
  );
}
