import { Card } from "@/components/ui/card";
import { MdStream } from "react-icons/md";

export default function LoyaltyStatusCard() {
  return (
    <Card className="flex flex-col sm:flex-row w-full px-8 text-primary-foreground font-medium border-transparent shadow-thin">
      <div className="sm:border-r border-border w-full sm:w-[48%] py-5 space-y-5 mr-5">
        <h3 className="text-xl"> Your Loyalty Stats </h3>
        <article className="space-y-1">
          <p className="text-card-foreground text-sm"> Lifetime </p>
          <p className="text-lg"> 0 ySYNC </p>
        </article>
        <article className="space-y-1">
          <p className="text-card-foreground text-sm">Current epoch</p>
          <p className="text-lg"> 0 ySYNC </p>
        </article>
      </div>
      <div className="w-full sm:w-[48%] py-5 space-y-7">
        <h3 className="text-xl text-primary flex gap-x-2 items-center">
          <MdStream
            fontSize={23}
            className="text-primary animate-spin duration-8000"
          />
          <span>How to earn ySYNC</span>
        </h3>

        <p className="text-[13px] text-card-foreground font-medium">
          You will be rewarded with ySYNC for every trade on eligible pools. You
          will automatically receive ySYNC based on trading volume.
        </p>

        <p className="text-[13px] text-primary font-medium">
          The Genesis Epoch has been concluded and ySYNC minting is paused.
          Please stay tuned for more updates!
        </p>
      </div>
    </Card>
  );
}
