import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { FiCopy } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import ConnectWalletDialog from "@/components/ConnectWalletDialog";
import { PiPulseBold } from "react-icons/pi";

export default function ConvertUSDC() {
  return (
    <section>
      <h3 className="pl-2 text-2xl text-primary-foreground">Convert USDC</h3>

      <div className="flex justify-between mt-5 gap-4">
        <article className="w-full sm:max-w-[480px] flex-1 space-y-5">
          <Card className="shadow-thin">
            <CardContent className="py-4 text-card-foreground">
              <ul className="space-y-4">
                <li className="flex justify-between text-sm">
                  <span>Native USDC</span>
                  <span className="flex gap-x-3 items-center">
                    <Tooltip>
                      <TooltipTrigger>0x1d17cb...6538d4</TooltipTrigger>
                      <TooltipContent>
                        0x3355df6d4c9c3035724fd0e3914de96a5a83aaf4
                      </TooltipContent>
                    </Tooltip>
                    <FiCopy
                      fontSize={18}
                      className="cursor-pointer"
                      onClick={() =>
                        navigator.clipboard.writeText(
                          "0x3355df6d4c9c3035724fd0e3914de96a5a83aaf4",
                        )
                      }
                    />
                  </span>
                </li>

                <li className="flex justify-between text-sm">
                  <span>Converter Contract</span>
                  <span className="flex gap-x-3 items-center">
                    <Tooltip>
                      <TooltipTrigger>0xe14096...9c2930</TooltipTrigger>
                      <TooltipContent>
                        0xe14096cacb218001eff677f8d1338cbd3c9c2930
                      </TooltipContent>
                    </Tooltip>
                    <FiCopy
                      fontSize={18}
                      className="cursor-pointer"
                      onClick={() =>
                        navigator.clipboard.writeText(
                          "0xe14096cacb218001eff677f8d1338cbd3c9c2930",
                        )
                      }
                    />
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="grid gap-y-4 mt-2 border-0 shadow rounded-3xl bg-card/70 px-5 py-4">
            <p className="text-sm font-medium text-card-foreground">
              Convert Amount
            </p>

            <CardContent className="p-0">
              <div className="flex">
                <input
                  type="text"
                  placeholder="0.0"
                  className="text-primary-foreground bg-transparent w-0 flex-grow text-3xl outline-none"
                />
              </div>
            </CardContent>

            <CardFooter className="p-0 mt-4">
              <section className="flex flex-row justify-between w-full gap-x-2">
                <Button
                  variant="outline"
                  className="transition-all active:bg-primary/[0.2] rounded-3xl text-primary border-border border-primary/[0.5] hover:border-primary hover:bg-primary/[0.04] w-full py-1 h-auto font-normal"
                >
                  25%
                </Button>
                <Button
                  variant="outline"
                  className="transition-all active:bg-primary/[0.2] rounded-3xl text-primary border-border border-primary/[0.5] hover:border-primary hover:bg-primary/[0.04] w-full py-1 h-auto font-normal"
                >
                  50%
                </Button>
                <Button
                  variant="outline"
                  className="transition-all active:bg-primary/[0.2] rounded-3xl text-primary border-border border-primary/[0.5] hover:border-primary hover:bg-primary/[0.04] w-full py-1 h-auto font-normal"
                >
                  75%
                </Button>
                <Button
                  variant="outline"
                  className="transition-all active:bg-primary/[0.2] rounded-3xl text-primary border-border border-primary/[0.5] hover:border-primary hover:bg-primary/[0.04] w-full py-1 h-auto font-normal"
                >
                  100%
                </Button>
              </section>
            </CardFooter>
          </Card>

          <Dialog>
            <DialogTrigger asChild>
              <Card className="cursor-pointer transition-all rounded-full shadow active:scale-90 active:bg-primary/[.50]">
                <CardContent className="flex gap-x-3 justify-center text-primary py-4">
                  <PiPulseBold fontSize={20} />
                  Connect Wallet
                </CardContent>
              </Card>
            </DialogTrigger>
            <ConnectWalletDialog />
          </Dialog>
        </article>

        <div className="hidden sm:grid place-items-center relative -top-20 w-[490px] opacity-[0.9] flex-1">
          <img className="w-[70%]" src="/images/usdc-cluster.png" />
        </div>
      </div>
    </section>
  );
}
