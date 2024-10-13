import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CarouselCard from "@/components/CarouselCard";
import { MdOutlineInfo, MdToll } from "react-icons/md";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { GoInbox } from "react-icons/go";
import ConnectWalletDialogButton from "@/components/ConnectWalletDialogButton";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import AnimatedGradientCircles from "@/components/AnimatedGradientCircles";

function InlineInfo({
  className = "",
  info,
}: {
  className?: string;
  info: { label: string; text?: string; tooltipText?: string };
}) {
  return (
    <article
      className={cn("flex justify-between items-center text-sm", className)}
    >
      <div className="flex items-center gap-x-2">
        <p>{info.label}</p>
        {info?.tooltipText && (
          <Tooltip>
            <TooltipTrigger>
              <MdOutlineInfo className="text-primary" />
            </TooltipTrigger>
            <TooltipContent>
              Unbalanced withdrawals may cause slight slippage due to pool
              rebalancing.
            </TooltipContent>
          </Tooltip>
        )}
      </div>
      <p>{info?.text ?? "-"}</p>
    </article>
  );
}

function StakeCard() {
  return (
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

        <section className="mb-5 mt-3 flex flex-row justify-between w-full gap-x-2 *:w-full *:border-primary/[0.5] *:text-sm *:py-1">
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
        <ConnectWalletDialogButton className="w-full" />
      </CardContent>
    </Card>
  );
}

function StakeContent() {
  return (
    <Tabs defaultValue="stake" className="w-full md:w-[65%]">
      <section className="flex justify-between items-center flex-wrap md:flex-nowrap gap-y-2">
        <section className="flex flex-col gap-y-2 md:flex-row gap-x-4">
          <TabsList className="rounded-3xl bg-card text-primary shadow-sm">
            <TabsTrigger value="stake">
              <h2 className="text-base">Stake</h2>
            </TabsTrigger>
            <TabsTrigger value="unstake">
              <h2 className="text-base">Unstake</h2>
            </TabsTrigger>
          </TabsList>
        </section>
      </section>

      <div className="flex flex-col gap-12 w-full mt-5">
        <TabsContent className="mt-0" value="stake">
          <StakeCard />
        </TabsContent>
        <TabsContent className="mt-0" value="unstake">
          <StakeCard />
        </TabsContent>

        <section className="flex flex-col gap-5">
          <div className="flex gap-x-3 items-center">
            <h2 className="text-primary-foreground text-lg">Earned Reward</h2>
          </div>
          <div className="text-card-foreground flex items-center gap-x-3">
            <MdToll fontSize={28} className="text-primary" />
            <h2>No available rewards. Stake to start earning!</h2>
          </div>
        </section>
      </div>
    </Tabs>
  );
}

export default function StakeTabContent() {
  const carouselContents = [
    {
      title: "Boosted rewards",
      text: "Juicy rewards offered by our partners are pooled together to be earned by liquidity providers.",
    },
    {
      title: "Stake and earn more",
      text: "Stake your liquidity here to earn boosted rewards and more while still earning trading fees.",
    },
    {
      title: "Funds are always available",
      text: "You can claim earned rewards or unstake to receive your LP tokens back whenever you want.",
    },
  ];
  return (
    <TabsContent
      value="stake"
      className="relative w-full mt-0 transition-all animate-fade-in"
    >
      <section className="grid gap-2 items-center mb-10">
        <h2 className="text-primary-foreground text-3xl font-medium">Stake</h2>
        <p className="text-sm text-card-foreground font-medium">
          Stake your liquidity position to earn boosted rewards.
        </p>
      </section>

      <div className="flex flex-col md:flex-row justify-center gap-12 mt-10 items-start">
        <StakeContent />

        <section className="w-full md:w-[35%] w-full flex flex-col gap-5">
          <Card className="shadow-thin">
            <CardContent className="space-y-10">
              <div className="space-y-3">
                <InlineInfo
                  className="text-lg text-primary"
                  info={{ label: "Total APR", text: "11.5%" }}
                />

                <InlineInfo
                  info={{
                    label: "Fees",
                    text: "0.67%",
                    tooltipText:
                      "Unbalanced withdrawals may cause slight slippage due to pool rebalancing.",
                  }}
                />

                <InlineInfo
                  info={{
                    label: "Rewards",
                    text: "10.8%",
                    tooltipText:
                      "The current reward APR based on streaming reward tokens and staked position value.",
                  }}
                />
                <img
                  alt="Zk Sync logo"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAAAAACIM/FCAAAFgUlEQVR42u3csWojPRAH8CmE3yAQ8iJXpgmkSpU2r2ICae8N8gzGwectXN6TpHS5aIZdiTT+f5wMpyJkWEur2Hw3A6kCG37Z0WpG0i7J/yTIIAYxiEEMYhCDGMQgBjGIQQxiEIMYxCAGMYhBDGIQgxjEIAYxiEEMYhCDGMQgBjGIQQxiEIOUBTe4xBkgnH7qL2GQuSASDkMtZDgEOSuEWSRi3w9SFUO/RxRhPheEe5GAn4/xow7yER9/Ioj0fC6I+ICOfiDWQSJ+UIfg5VwQ4RErosd6yCPRCiPLuSAj3mguCL1hPAeEe06O+SBJwj1/N0T68Mfh5oK4P5LQSwuIHkfHfJCj5LtTiyVi5cg5mgmSJG6FKPyNEM8+YkMpZoOk2CB69t8G4T5iReTmhjiiFWLP3weJ+EXk5oc4ol+IZZDC8UFEbjE3ZOGIKI+TtpBeJGLjKMV8kBxugyjSt4aw+JRX7SApu7xwO0iuSxyRawVxRC5VKy0hLMIhjfOWkDTiA4twK4j3wmkepLapRWlmZPG+FqL3H+RaQxzl/qRNaoU0D7aHpJkxNEqtPM7bQ5QRXw3xMqT+43M84YQQViE5Un8yiJ8bwszx2H98itvfu25ivK5lnAhJVX1k5tnvyNHhqCYW24NMhRwlxXdE7z8W9ClOkd2+Y5gGSWqlPymDsBcO2FB5uHQnl4DnKZAcGwQWzwUQpf+odFx32TEVovQnZZCQ+48iCBHd7RGTYyIk9ydhLghzuh91A/0lP3lPgqR7wlwHyf3HW1VeEd10gKgQJd4m9Sc0ob6qdtzvMbA+s6uSKXUXTVsXXbgKyxJgkUKIW+TV1GII899xXg653uGgJ0bAkwL5O+KZSyHMLCPW5QY6plUQNXrggZx+nTVGYeZSyMCp/6DKtGLWxiADL4msRofAQylEOGBN1DSteMD+Tv8bx9+uEcpSi9M43zpyVAxJk6Cwspfrge5aceQ+3m3TiOdTISyDjOV1SdIvga//tOdBvAeWNDVWGGUQPhnCaZ3alUJSbdWLsLIiE/F+f8IVN4h8MkR8Hh+lT6votUcm+wN2V9P+VXmceDkNwhKwchlSUlsx6/cjp9VUiFshCE+HcC8yYFNRsl91gNeGpnDA/p5Ojg0GkZ6nQth/YE2FkMUxrVgtGPwB2xsqiDU+PPP01MK2NK0c0TMgavQeeCZyJQXoFieMkYDX8vrqZoeD15KKZUyT4MIVpe0rQnOIW6RJcBTNIf0Bu5xWRZCWqZXTyvd6g5PTqji1mg/2m21KKxb9aZXTqnCwt338prQKrO6uMNBd5bQtffw2nhCXgD4HigAvpETthFhfojiiqx0OntXJI6a0Ui5ZX6LUF40P74j6/eiB7TUpbUFd0VhfxudOUAb2X94PAZaUEAqkvIyvb6ycS53gcXiwsqi0vyMlihur+lY3O9IkqEYP7K5LHbnVbbn44FLJLl67Dk/vBPXFh5bLQY4eAC9qhIKnlbIc1GqB7glB35M4oKtJq7xA13jJVN/VZQaWxbcjL5m2X8TWIVxQsiuL2M22FXQICwPdTUVtlbcVGm/06BBfUFspGz3ttt50CPuI/W3BTK5svbXZDNUh7CvTKm+GNtue1iHZ8UxVjrw93fbAgA4Z8H5L08MpBwZaH+HQIYftgsojH+Fof6hGh4yyfu0mxu73rXKopvkxJx3CghPi6etjTnbw7KKOAtrhzEs7LmsHmC/oSLkd8r+01y7sRZhLejXJXha7tNf37IXKi3rF1V46vrTXwO3FfPtUQoOPV9jnROwDL7N/cse+5mSQNh8Ks0+3GcQgBjGIQQxiEIMYxCAGMYhBDGIQgxjEIAYxiEEMYhCDGMQgBjGIQQxiEIMYxCAGMYhBDPKPQ/4DyIHLQ1NXxEgAAAAASUVORK5CYII="
                  className="rounded-[50%] w-[21px] h-[21px]"
                />
              </div>

              <div className="space-y-3">
                <InlineInfo info={{ label: "My Staked" }} />

                <InlineInfo
                  info={{ label: "Total Staked", text: "$215,896.7" }}
                />
              </div>
            </CardContent>
          </Card>
          <CarouselCard
            opts={{
              watchDrag: false,
            }}
            contents={carouselContents}
          />
        </section>
      </div>
      <AnimatedGradientCircles />
    </TabsContent>
  );
}
