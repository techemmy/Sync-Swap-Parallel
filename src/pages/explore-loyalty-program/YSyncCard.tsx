import { Card, CardContent } from "@/components/ui/card";

export default function YSyncCard() {
  return (
    <Card className="relative overflow-clip px-8 border-transparent py-5 rounded-2xl w-full md:w-[35%] shadow-thin min-h-[190px]">
      <CardContent className="flex flex-col justify-between h-full text-primary-foreground font-medium p-0 space-y-3">
        <h3 className="text-lg">ySYNC</h3>
        <div>
          <p className="text-xl">1,189,624.5</p>
          <p className="text-sm text-card-foreground">Cumulative Supply</p>
        </div>
      </CardContent>
      <div className="absolute right-0 z-0 top-5 opacity-[0.3]">
        <img src="/images/sync-logo.png" width="170px" />
      </div>
    </Card>
  );
}
