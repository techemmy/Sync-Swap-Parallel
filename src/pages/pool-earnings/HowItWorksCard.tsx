import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function HowItWorksCard({
  className = "",
}: {
  className?: string;
}) {
  return (
    <Card className={cn("", className)}>
      <CardContent className="p-6 space-y-7">
        <h3 className="text-primary-foreground text-lg font-medium mb-3">
          How it works
        </h3>

        <article className="space-y-2">
          <p className="w-max text-primary border border-primary rounded-2xl py-px px-6 text-xs">
            Fees
          </p>
          <p className="text-card-foreground text-sm">
            Your positions earn from trading fees and auto compounded. Saving
            gas and hassle to claim manually.
          </p>
        </article>

        <article className="space-y-2">
          <p className="w-max text-primary border border-primary rounded-2xl py-px px-6 text-xs">
            Rewards
          </p>
          <p className="text-card-foreground text-sm">
            Any additional rewards, such as staking rewards can be claimed here
            if available.
          </p>
        </article>
      </CardContent>
    </Card>
  );
}
