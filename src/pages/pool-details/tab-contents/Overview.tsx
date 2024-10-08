import PoolTypeDetails from "@/components/pool-type-details";
import { TabsContent } from "@/components/ui/tabs";

export default function Overview() {
  return (
    <TabsContent value="overview" className="w-full">
      <PoolTypeDetails poolType="Classic" className="pt-0" />
    </TabsContent>
  );
}
