import Footer from "@/components/Footer";
import { Tabs } from "@/components/ui/tabs";
import { FaChevronLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import VerticalTabsList from "./VerticalTabsList";
import Overview from "./tab-contents/Overview";

export default function PoolDetails() {
  return (
    <>
      <main className="relative overflow-auto pt-28 pb-20 min-h-screen max-w-screen-lg mx-auto py-4 px-0">
        <Link
          to="/pools"
          className="mb-6 text-primary text-sm flex gap-x-2 items-center"
        >
          <FaChevronLeft />
          <span>Pools</span>
        </Link>
        <Tabs
          defaultValue="overview"
          className="flex items-start gap-4 relative z-10"
          orientation="vertical"
        >
          <VerticalTabsList />
          <Overview />
        </Tabs>
      </main>
      <Footer />
    </>
  );
}
