import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function ClaimRewardsCard({
  className = "",
}: {
  className?: string;
}) {
  return (
    <Card className={cn("", className)}>
      <CardContent className="p-6">
        <h3 className="text-primary-foreground text-lg font-medium mb-3">
          How it works
        </h3>

        <p className="text-card-foreground text-sm">
          Select pools you want to claim rewards.
        </p>

        <Button
          disabled
          aria-disabled
          variant="outline"
          className="w-full mt-5"
        >
          Claim
        </Button>
      </CardContent>
    </Card>
  );
}
