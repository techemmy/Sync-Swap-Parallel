import { Card, CardContent } from "@/components/ui/card";
import { TabsContent } from "@/components/ui/tabs";

export default function StakeTabContent() {
  return (
    <TabsContent
      value="stake"
      className="w-full mt-0 transition-all animate-fade-in"
    >
      <section className="grid gap-2 items-center">
        <h2 className="text-primary-foreground text-3xl font-medium">Stake</h2>
        <p className="text-sm text-card-foreground font-medium">
          Deposit tokens to start earning trading fees and more rewards.
        </p>
      </section>

      <section className="flex justify-center gap-12 mt-10">
        <Card className="w-[65%]">
          <CardContent>
            <h3>Amount to deposit</h3>
          </CardContent>
        </Card>

        <section className="w-[35%]">hello</section>
      </section>
    </TabsContent>
  );
}
