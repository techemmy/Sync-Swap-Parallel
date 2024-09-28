import Footer from "@/components/Footer";
import WelcomeCard from "./WelcomeCard";
import FeaturedCollection from "./FeaturedCollection";
import FAQ from "./FAQ";

export default function Explore404Wrapper() {
  return (
    <>
      <main className="relative overflow-auto pt-28 pb-20 min-h-screen max-w-screen-lg mx-auto space-y-14 p-4">
        <WelcomeCard />
        <FeaturedCollection />
        <FAQ />
      </main>

      <Footer />
    </>
  );
}
