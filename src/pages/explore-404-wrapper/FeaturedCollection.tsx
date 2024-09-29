import ConnectWalletDialog from "@/components/ConnectWalletDialog";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoMdWallet } from "react-icons/io";
import { MdOutlineArrowOutward, MdOutlineRestartAlt } from "react-icons/md";
import { PiPulseBold } from "react-icons/pi";
import { Link } from "react-router-dom";

export default function FeaturedCollection() {
  const [isRefreshingBalance, setIsRefreshingBalance] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (isRefreshingBalance) {
      timeoutId = setTimeout(() => {
        setIsRefreshingBalance(false);
      }, 2000);
    }
    return () => clearTimeout(timeoutId);
  }, [isRefreshingBalance]);

  return (
    <section className="px-6">
      <h2 className="text-primary-foreground flex gap-x-5 text-[26px] font-medium items-center">
        LIBERTAS OMNIBUS ∎
        <span className="text-card-foreground text-sm hidden md:inline">
          Featured Collection
        </span>
      </h2>

      <div className="flex gap-8 mt-6 flex-wrap sm:flex-nowrap">
        <article className="w-full grid justify-center">
          <div className="group cursor-pointer relative shadow-thin flex items-center rounded-[40px] h-[200px] w-[200px] md:h-[300px] md:w-[300px] lg:h-[455px] lg:w-[445px] overflow-hidden border-4 border-primary/[0.7] theme-portfolio">
            <div className="opacity-[0.98] mt-1">
              <img
                src="/images/omnibus2_original.jpg"
                className="h-[200px] w-[200px] md:h-[300px] md:w-[300px] lg:h-[455px] lg:w-[445px]"
              />
            </div>
            <div className="absolute z-20">
              <img
                className="hidden group-hover:block h-[200px] w-[200px] md:h-[300px] md:w-[300px] lg:h-[455px] lg:w-[445px]"
                src="https://inventory-assets.summon.xyz/zksync/zksync-capsule.gif"
              />
            </div>
            <div className="absolute z-10">
              <img
                className="hidden group-hover:block h-[200px] w-[200px] md:h-[300px] md:w-[300px] lg:h-[455px] lg:w-[445px]"
                src="/images/omnibus2.jpg"
              />
            </div>
          </div>
        </article>

        <section className="w-full">
          <article className="py-2">
            <h3 className="pl-2 text-[26px] text-primary-foreground">
              Join the ZK Revolution
            </h3>
            <p className="pl-2 text-primary-foreground text-sm mt-3 tracking-wide font-medium mb-1">
              Our collective mission is to advance personal freedom for all.
            </p>
            <p className="pl-2 text-primary-foreground text-sm mb-3 tracking-wide font-medium">
              LIBERTAS OMNIBUS is an experimental NFT project by zkSync.
            </p>

            <Link
              className="w-max flex gap-x-2 item-center text-card-foreground text-sm p-2 mb-10 hover:bg-primary/[0.04] w-max rounded-md"
              to="https://twitter.com/zksync/status/1691808445224087555?lang=en"
            >
              Learn more about LIBERTAS OMNIBUS
              <MdOutlineArrowOutward />
            </Link>
          </article>
          <Card className="mb-5 shadow">
            <CardContent className="space-y-5">
              <article className="flex items-center justify-between">
                <p className="text-primary flex gap-x-2 items-center">
                  <IoMdWallet fontSize={25} />
                  Your Balance
                </p>

                <div
                  onClick={() => {
                    setIsRefreshingBalance(true);
                  }}
                  className="text-card-foreground cursor-pointer transition-all p-1 hover:bg-primary/[0.04] active:scale-90"
                >
                  <MdOutlineRestartAlt
                    fontSize={20}
                    className={`${isRefreshingBalance === true ? "animate-spin" : null}`}
                    style={{
                      animationDuration: "800ms",
                    }}
                  />
                </div>
              </article>

              <div className="space-y-3">
                <p className="text-card-foreground">NFTS</p>
                <p className="text-card-foreground">Tokens</p>
              </div>
            </CardContent>
          </Card>

          <Dialog>
            <DialogTrigger asChild>
              <Card className="cursor-pointer transition-all rounded-3xl shadow active:scale-90 active:bg-primary/[.50]">
                <CardContent className="flex text-primary justify-between py-5 px-7">
                  <div className="flex gap-x-3">
                    <PiPulseBold fontSize={20} fontWeight={60} />
                    Connect Wallet
                  </div>
                  <FaArrowRightLong />
                </CardContent>
              </Card>
            </DialogTrigger>
            <ConnectWalletDialog />
          </Dialog>
        </section>
      </div>
    </section>
  );
}
