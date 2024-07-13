import Header from '@/pages/intro/components/Header';
import MissionSection from '@/pages/intro/components/MissionSection';
import TradeWithSuperpowerSection from '@/pages/intro/components/TradeWithSuperpowerSection';
import CommunityOwnershipSection from '@/pages/intro/components/CommunityOwnershipSection';
import BuiltWithTheBestSection from "@/pages/intro/components/BuiltWithTheBestSection";
import Footer from "@/components/Footer";

export default function Intro() {
    return (
        <>
            <Header />
            <main className="md:mt-10 mx-3 md:px-5 md:px-0">

                <MissionSection />
                <TradeWithSuperpowerSection />
                <CommunityOwnershipSection />
                <BuiltWithTheBestSection />
                <Footer />
            </main>

        </>
    )
}

