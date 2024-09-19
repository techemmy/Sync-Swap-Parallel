import TrendingCarousel from "./TrendingCarousel";
import PoolDataView from "./PoolDataView";
import Footer from "@/components/Footer";

export default function Pools() {
  return (
    <>
      <main className="relative overflow-auto pt-28 pb-20 max-w-screen-xl mx-auto space-y-14 p-4">
        <TrendingCarousel />
        <PoolDataView />
      </main>
      <Footer />
    </>
  );
}
