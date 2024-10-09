import PoolTypeDetails from "@/components/pool-type-details";
import { TabsContent } from "@/components/ui/tabs";

export default function OverviewTabContent() {
  return (
    <TabsContent value="overview" className="w-full mt-0">
      <PoolTypeDetails poolType="Classic" className="pt-0" />
    </TabsContent>
  );
}
