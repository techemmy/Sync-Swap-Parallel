import Footer from "@/components/Footer";
import { MdStream } from "react-icons/md";
import { IoArrowDown } from "react-icons/io5";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import ConnectWallet from "@/components/ConnectWallet";
import HowItWorksCard from "./HowItWorksCard";
import ClaimRewardsCard from "./ClaimRewardsCard";
import EarningsSummary from "./EarningsSummary";

export default function PoolEarnings() {
  return (
    <>
      <main className="relative overflow-hidden pt-28 max-w-screen-xl mx-auto p-4">
        <article className="flex justify-between gap-y-5 flex-col md:flex-row">
          <section>
            <h1 className="flex gap-x-2 items-center text-3xl font-medium font-Public mb-1 text-primary-foreground">
              <MdStream fontSize={27} className="text-primary" />
              Earnings
            </h1>
            <p className="text-sm text-card-foreground">
              View your liquidity earnings and manage earned rewards.
            </p>
          </section>
        </article>

        <EarningsSummary />

        <section className="flex justify-between px-3">
          <h3 className="text-lg font-medium">My Positions</h3>

          <div className="flex items-center space-x-2">
            <label
              htmlFor="claimable"
              className="text-sm text-card-foreground font-medium"
            >
              Claimable
            </label>
            <Switch id="claimable" />
          </div>
        </section>

        <section className="flex flex-wrap sm:flex-nowrap gap-1 mt-5 px-4">
          <div className="w-full sm:w-[73%]">
            <ul className="grid grid-cols-[0.285fr_1.5fr_1fr_1fr_1fr_0.2fr] text-card-foreground font-medium text-xs">
              <li>
                <Checkbox disabled />
              </li>
              <li>Pool</li>
              <li>My APR</li>
              <li>My Deposit</li>
              <li className="text-primary flex gap-x-1 items-center">
                Claimable <IoArrowDown />
              </li>
            </ul>

            <ConnectWallet />
          </div>

          <div className="w-full sm:w-[27%] space-y-5">
            <HowItWorksCard className="border-transparent rounded-2xl shadow" />
            <ClaimRewardsCard className="border-transparent rounded-2xl shadow" />
          </div>
        </section>
      </main>
      <Footer className="pt-20" />
    </>
  );
}
