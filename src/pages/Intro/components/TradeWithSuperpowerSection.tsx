import FeatureArticle from "@/pages/Intro/components/FeatureArticle";

export default function TradeWithSuperpowerSection() {
    return (
        <section className="mb-28 text-center py-10">
            <p className="text-lg font-medium leading-[1.2]"> Your DeFi Hub on Ethereum zk Rollups </p>
            <h2 className="text-[40px] font-medium font-Public my-2"> Trade with Superpowers </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 max-w-[950px] mx-auto">
                <FeatureArticle
                    name="Complete Security"
                    description=" Stay the same security as Ethereum mainnet "
                />
                <FeatureArticle
                    name=" Seamless UX "
                    description=" Enjoy up to 100x scaling with lower gas costs "
                />
                <FeatureArticle
                    name=" Efficient Trades "
                    description=" Next generation multi-pool enables higher capital efficiency "
                />
            </div>
        </section>
    )
}

