import ConnectWalletDialog from "@/components/ConnectWalletDialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import useImageTheme from "@/hooks/useImageTheme";

export default function ClaimableRewardsCard() {
  const theme = useImageTheme();
  const textColor = theme === "dark" ? "text-white" : "text-black";
  return (
    <Card className="px-8 border-transparent py-5 rounded-2xl w-full shadow-thin min-h-[200px]">
      <CardContent className="flex flex-col justify-between text-primary p-0 space-y-4">
        <section className="flex justify-between">
          <article className="flex flex-col gap-x-2">
            <h3 className="flex font-medium gap-x-1 items-center">
              <span className="text-2xl text-primary-foreground">0</span>
              <span className="text-lg text-card-foreground">veSync</span>
            </h3>
            <p className="text-[13px] text-card-foreground font-medium mt-1">
              Estimated Claimable Rewards · Epoch 1
            </p>
          </article>
        </section>

        <Dialog>
          <DialogTrigger asChild>
            <Button
              className={`transition-all w-max px-12 rounded-3xl shadow-thin hover:shadow active:shadow-light ${textColor}`}
            >
              Connect wallet
            </Button>
          </DialogTrigger>
          <ConnectWalletDialog />
        </Dialog>

        <hr className="opacity-[0.5]" />

        <p className="text-[13px] text-card-foreground font-medium">
          The estimated rewards you have earned in the epoch by your current
          ySYNC share and total veSYNC rewards.
        </p>
      </CardContent>
    </Card>
  );
}
