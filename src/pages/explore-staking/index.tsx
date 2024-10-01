import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { FaEthereum } from "react-icons/fa6";
import ExternalLinkCard from "./ExternalLinkCard";
import React, { useState } from "react";
import OfficialPartner from "./OfficialPartner";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="relative overflow-auto pt-24 pb-20 min-h-screen max-w-screen-lg mx-auto space-y-10 p-4">
        {children}
      </main>
      <Footer />
    </>
  );
}

export default function ExploreStaking() {
  const [showOfficialPartner, setShowOfficialPartner] = useState(true);
  function changeViewToOfficialPartner() {
    setShowOfficialPartner(true);
  }

  if (showOfficialPartner) {
    return (
      <Layout>
        <OfficialPartner />
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="flex flex-col gap-4">
        <h2 className="flex gap-x-3 items-center">
          <FaEthereum fontSize={40} className="text-primary" />
          <span className="font-medium text-3xl text-primary-foreground">
            Staking
          </span>
        </h2>

        <p className="text-card-foreground">
          Start staking to earn rewards on your ETH and token holdings
        </p>
      </section>

      <article className="flex gap-8 flex-wrap items-center">
        <Card
          className="cursor-pointer rounded-3xl shadow h-max w-max transition-transform active:scale-90"
          onClick={changeViewToOfficialPartner}
        >
          <CardContent className="flex flex-col gap-5 items-center py-8 px-14">
            <img
              className="w-12 h-12"
              src="/images/TRALA.png"
              alt="TRALA token"
            />
            <p className="text-primary-foreground">Stake TRALA token</p>
            <Badge
              variant="outline"
              className="rounded-lg w-max font-medium text-[13px] border-primary/[0.4]"
            >
              Official Partner
            </Badge>
          </CardContent>
        </Card>

        <ExternalLinkCard
          link="https://kelpdao.xyz/restake/"
          name="Stake ETH on Kelp"
          imgSrc="/images/tokens/rsETH.png"
          label="wrsETH"
        />

        <ExternalLinkCard
          link="https://veno.finance/eth/stake/"
          name="Stake ETH on Veno"
          imgSrc="/images/tokens/LETH.png"
          label="LETH"
        />
      </article>
    </Layout>
  );
}
