import Footer from "@/components/Footer";
import LoyaltyProgramCard from "./LoyaltyProgramCard";
import YSyncCard from "./YSyncCard";
import LoyaltyStatusCard from "./LoyaltyStatusCard";
import GeneralEpochCard from "./GeneralEpochCard";
import ClaimableRewardsCard from "./ClaimableRewardsCard";

export default function ExploreLoyaltyProgram() {
  return (
    <>
      <main className="relative overflow-auto pt-28 pb-20 min-h-screen max-w-screen-xl mx-auto space-y-7 p-4">
        <section className="flex gap-x-5 gap-y-3 flex-wrap md:flex-nowrap">
          <LoyaltyProgramCard />
          <YSyncCard />
        </section>

        <LoyaltyStatusCard />

        <section className="flex gap-x-5 gap-y-3 flex-wrap md:flex-nowrap">
          <GeneralEpochCard />
          <ClaimableRewardsCard />
        </section>
      </main>
      <Footer />
    </>
  );
}
