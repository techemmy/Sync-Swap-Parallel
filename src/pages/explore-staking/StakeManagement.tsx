import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MdCardGiftcard, MdToll } from "react-icons/md";
import StakeCard from "./StakeCard";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import React from "react";
import CarouselCard from "@/components/CarouselCard";

function InfoLinkCard({
  title,
  img: Img,
  description,
  link = "#",
}: {
  title: string;
  img: React.ReactNode;
  description: string;
  link: string;
}) {
  return (
    <Link to={link}>
      <Card className="shadow-thin">
        <CardContent className="flex justify-between items-center pb-1">
          <div className="flex gap-x-2 items-center">
            {Img}
            <p className="text-primary-foreground">{title}</p>
          </div>
          <IoIosArrowForward className="text-primary" fontSize={20} />
        </CardContent>
        <CardFooter>
          <p className="text-sm">{description}</p>
        </CardFooter>
      </Card>
    </Link>
  );
}

export default function StakeManagement() {
  return (
    <Tabs defaultValue="stake" className="mt-3">
      <section className="flex justify-between items-center flex-wrap md:flex-nowrap gap-y-2">
        <section className="flex flex-col gap-y-2 md:flex-row gap-x-4">
          <TabsList className="rounded-3xl bg-card text-primary shadow-sm">
            <TabsTrigger value="stake">
              <h2 className="text-base">Stake</h2>
            </TabsTrigger>
            <TabsTrigger value="unstake">
              <h2 className="text-base">Unstake</h2>
            </TabsTrigger>
          </TabsList>
        </section>
      </section>

      <article className="flex gap-10 mt-5">
        <div className="flex flex-col gap-12 w-full">
          <TabsContent className="mt-0" value="stake">
            <StakeCard />
          </TabsContent>
          <TabsContent className="mt-0" value="unstake">
            <StakeCard />
          </TabsContent>

          <section className="flex flex-col gap-5">
            <div className="flex gap-x-3 items-center">
              <MdCardGiftcard fontSize={30} className="text-stakingSponsor" />
              <h2 className="text-primary-foreground text-lg">
                Claimable Rewards
              </h2>
            </div>
            <div className="text-card-foreground flex items-center gap-x-3">
              <MdToll fontSize={28} className="text-primary" />
              <h2>Your available rewards will appear here</h2>
            </div>
          </section>
        </div>

        <section className="max-w-[340px] w-full flex flex-col gap-5">
          <CarouselCard
            opts={{
              watchDrag: false,
            }}
            contents={[
              {
                title: "TRALA Staking",
                text: "Trala is collaborating with SyncSwap to launch $TRALA staking service on ZKsync",
              },
              {
                title: "Bridge your TRALA",
                text: "TRALA staking is available on ZKsync. Bridge your TRALA token to ZKsync network first.",
              },
              {
                title: "Earn staking rewards",
                text: "Stake and earn a fixed APR of 10% on your $TRALA holdings.",
              },
              {
                title: "Funds are always available",
                text: "You can unstake to receive your TRALA tokens at anytime. Secure and no fees.",
              },
            ]}
          />

          <InfoLinkCard
            title="zkSync Bridge"
            img={<img className="h-[16px]" src="/images/zksync_black.png" />}
            description="Bridge TRALA from Ethereum to zkSync"
            link="https://portal.zksync.io/bridge/"
          />

          <InfoLinkCard
            title="TRALA LAB"
            img={<img className="h-[23px]" src="/images/Trala_Project.png" />}
            description="Visit website of the Trala platform"
            link="https://trala.me/"
          />
        </section>
      </article>
    </Tabs>
  );
}
