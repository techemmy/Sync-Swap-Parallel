import { Badge } from "@/components/ui/badge";
import StatsCards from "./StatsCards";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GiGroundbreaker } from "react-icons/gi";
import { MdOutlineWaterDrop } from "react-icons/md";

export default function OfficialPartner() {
  return (
    <section className="flex flex-col gap-5">
      <h2 className="flex gap-x-3 items-center">
        <img
          className="w-12 h-12"
          src="/images/Trala_Project.png"
          alt="Trala Project"
        />
        <span className="text-3xl text-primary-foreground">TRALA Staking</span>

        <Badge
          variant="outline"
          className="text-stakingSponsor border-stakingSponsor rounded-lg"
        >
          Official Partner
        </Badge>
      </h2>

      <p className="text-primary-foreground">
        Trala is the Web 3.0 all-in-one gaming platform - The Future of Fun
      </p>

      <img
        className="shadow rounded-3xl border-[15px] border-white/[.85] max-w-[90vw]"
        src="/images/trala_banner.png"
        width="800"
      />

      <p className="flex gap-x-2 text-card-foreground items-center">
        <span>Stake your</span>
        <img className="w-6 h-6" src="/images/TRALA.png" alt="TRALA logo" />
        <span>
          TRALA today and secure your position in the future of finance
        </span>
      </p>

      <StatsCards />

      <Tabs defaultValue="prime-pools">
        <section className="flex justify-between items-center flex-wrap md:flex-nowrap gap-y-2">
          <section className="flex flex-col gap-y-2 md:flex-row gap-x-4">
            <TabsList className="rounded-3xl bg-card text-primary shadow-sm">
              <TabsTrigger value="prime-pools">
                <GiGroundbreaker fontSize={20} />
                <h2>Prime Pools</h2>
              </TabsTrigger>
              <TabsTrigger value="all-pools">
                <MdOutlineWaterDrop fontSize={20} />
                <h2>All Pools</h2>
              </TabsTrigger>
            </TabsList>
          </section>
        </section>

        <TabsContent value="prime-pools">hello</TabsContent>
        <TabsContent value="all-pools">there</TabsContent>
      </Tabs>
    </section>
  );
}
