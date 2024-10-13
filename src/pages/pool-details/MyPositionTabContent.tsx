import AnimatedGradientCircles from "@/components/AnimatedGradientCircles";
import { Button } from "@/components/ui/button";
import { TabsContent } from "@/components/ui/tabs";
import { FaBoxArchive } from "react-icons/fa6";
import { GoInbox } from "react-icons/go";

export default function MyPositionTabContent({
  changeTabToDeposit,
}: {
  changeTabToDeposit: () => void;
}) {
  return (
    <TabsContent
      value="my-position"
      className="relative w-full mt-0 transition-all animate-fade-in"
    >
      <section className="flex gap-x-4 items-center">
        <FaBoxArchive className="text-primary" fontSize={23} />
        <h2 className="text-primary-foreground text-3xl font-medium">
          My Position
        </h2>
      </section>

      <section className="py-10 grid place-items-center">
        <GoInbox size={45} className="text-primary" />
        <p className="text-primary mt-2">You have no position in this pool</p>

        <p className="text-card-foreground text-sm mt-2 mb-4">
          Deposit some tokens to open a position!
        </p>

        <Button
          onClick={changeTabToDeposit}
          variant="outline"
          className="rounded-xl min-w-16 w-[160px] md:w-[250px] flex gap-x-2 border-primary/[.5]"
        >
          Deposit now
        </Button>
      </section>

      <AnimatedGradientCircles />
    </TabsContent>
  );
}
