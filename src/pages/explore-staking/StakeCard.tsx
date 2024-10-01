import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import ConnectWalletDialogButton from "@/components/ConnectWalletDialogButton";
import { Card, CardContent } from "@/components/ui/card";

export default function StakeCard() {
  return (
    <Card className="shadow-thin grid gap-y-4 border-0 shadow rounded-3xl bg-card/70 px-8 py-4">
      <p className="text-sm font-medium text-card-foreground">
        Input TRALA amount
      </p>

      <CardContent className="p-0 flex flex-col gap-2">
        <div className="flex justify-between">
          <input
            type="text"
            placeholder="0.0"
            defaultValue={0}
            className="text-primary-foreground bg-transparent w-0 flex-grow text-3xl outline-none"
          />
          <img className="w-8 h-8" src="/images/TRALA.png" alt="TRALA token" />
        </div>

        <div className="flex justify-between">
          <span />
          <p className="text-card-foreground text-sm my-4">Balance 0 TRALA</p>
        </div>

        <Slider defaultValue={[0]} max={100} step={1} />

        <section className="my-1 flex flex-row justify-between w-full gap-x-2">
          <Badge
            variant="outline"
            className="w-full active:bg-primary/[0.2] border-primary/[0.5] hover:border-primary hover:bg-primary/[0.04] text-sm py-1"
          >
            25%
          </Badge>
          <Badge
            variant="outline"
            className="w-full active:bg-primary/[0.2] border-primary/[0.5] hover:border-primary hover:bg-primary/[0.04] text-sm py-1"
          >
            50%
          </Badge>
          <Badge
            variant="outline"
            className="w-full active:bg-primary/[0.2] border-primary/[0.5] hover:border-primary hover:bg-primary/[0.04] text-sm py-1"
          >
            75%
          </Badge>
          <Badge
            variant="outline"
            className="w-full active:bg-primary/[0.2] border-primary/[0.5] hover:border-primary hover:bg-primary/[0.04] text-sm py-1"
          >
            Max
          </Badge>
        </section>

        <ConnectWalletDialogButton variant="outline" />
      </CardContent>
    </Card>
  );
}
