import LogoView from "./LogoView";

export default function BuiltWithTheBestSection() {
    return (
        <section className="mb-64 mt-10 grid gap-y-20">

            <article className="text-center">
                <h2 className="text-[40px] font-Public font-medium">Built with the Best</h2>
                <p className="text-card-foreground mt-2">
                    Thanks to our partners and the best builders in Web3 industry
                </p>
            </article>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-24 gap-y-16 max-w-[700px] mx-auto">
                <LogoView src="/images/logos/zksync_full_black.png" alt="Zk Sync Black logo" />

                <LogoView height={36} src="/images/logos/holdstation_light.png" alt="Hold Station Light logo" />

                <LogoView src="/images/logos/lido_blue.png" alt="Lido Blue logo" />

                <LogoView
                    src={["/images/logos/argent-logo.svg",
                        "/images/logos/argent-light.svg"
                    ]} alt="Argent Logo" />

                <LogoView src="/images/logos/goal3_light.svg" height={32} alt="Goal 3 logo" />

                <LogoView src="/images/logos/galxe-light.svg" height={22} alt="Galxe logo" />

                <LogoView src="/images/logos/cvi_light.svg" height={20} alt="CVI logo" />

                <LogoView src="/images/logos/gravita_light.png" alt="Gravita logo" />

            </div>

        </section>
    )
}

