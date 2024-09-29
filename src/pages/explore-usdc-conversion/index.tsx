import Footer from "@/components/Footer";
import LearnMoreCard from "./LearnMoreCard";
import ConvertUSDC from "./ConvertUSDC";
import FAQ from "./FAQ";

export default function ExploreUSDCConversion() {
  return (
    <>
      <main className="relative overflow-auto pt-28 pb-20 min-h-screen max-w-screen-xl mx-auto space-y-14 p-4">
        <LearnMoreCard />
        <ConvertUSDC />
        <FAQ />
      </main>

      <Footer />
    </>
  );
}
