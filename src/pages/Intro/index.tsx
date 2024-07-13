import Header from '@/pages/Intro/components/Header';
import MissionSection from '@/pages/Intro/components/MissionSection';
import TradeWithSuperpowerSection from '@/pages/Intro/components/TradeWithSuperpowerSection';
import CommunityOwnershipSection from '@/pages/Intro/components/CommunityOwnershipSection';
import BuiltWithTheBestSection from "@/pages/Intro/components/BuiltWithTheBestSection";
import Footer from "@/components/Footer";

export default function Intro() {
    return (
        <>
            <Header />
            <main className="md:mt-10 mx-10 md:px-5 md:px-0">

                <MissionSection />
                <TradeWithSuperpowerSection />
                <CommunityOwnershipSection />
                <BuiltWithTheBestSection />
                <Footer />
            </main>

        </>
    )
}

