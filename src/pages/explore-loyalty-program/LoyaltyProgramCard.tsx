import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MdArrowOutward } from "react-icons/md";

export default function LoyaltyProgramCard() {
  return (
    <Card className="px-8 border-transparent py-5 rounded-2xl w-full md:w-[65%] shadow-thin min-h-[190px]">
      <CardContent className="text-primary p-0 space-y-3">
        <article className="flex gap-x-2 items-center">
          <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          <h3 className="text-lg font-medium">Loyalty Program</h3>
          <Badge variant="outline" className="font-semibold px-2">
            Paused
          </Badge>
        </article>
        <div className="text-card-foreground text-sm">
          <p>
            Maximize your profits. Start trading on SyncSwap to earn the loyalty
            tokens.
          </p>
          <p>The ySYNC can be converted to veSYNC tokens periodically.</p>
        </div>
        <Button variant="outline" className="rounded-3xl px-6">
          Loyalty Program
          <MdArrowOutward fontSize={17} />
        </Button>
      </CardContent>
    </Card>
  );
}
