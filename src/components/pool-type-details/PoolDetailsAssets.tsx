import { TOKENS } from "@/constants";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import TokenDetailsDialog from "@/components/SelectTokenDialog/TokenDetailsDialog";
import { Card, CardTitle } from "@/components/ui/card";

export default function PoolDetailsAssets() {
  return (
    <>
      <Card className="flex flex-col gap-x-1 space-y-3 font-medium border-0 shadow rounded-2xl bg-card/70 px-6 py-5 w-full cursor-pointer">
        <CardTitle className="text-base font-medium">Assets in Pool</CardTitle>

        <article className="flex gap-x-2 items-center">
          <span className="text-sm text-primary bg-accent py-1 px-2 rounded-lg">
            50%
          </span>

          <Dialog>
            <DialogTrigger asChild>
              <article className="flex gap-x-2 items-center rounded-2xl p-1 hover:bg-accent transition-colors">
                <img className="border-[50%] w-5 h-5" src={TOKENS[0].logo} />
                <p className="text-primary-foreground">1,788.176 ETH</p>
              </article>
            </DialogTrigger>
            <TokenDetailsDialog
              name="Ethereum"
              symbol="ETH"
              logoSrc={TOKENS[0].logo}
            />
          </Dialog>
        </article>

        <article className="flex gap-x-2 items-center">
          <span className="text-sm text-primary bg-accent py-1 px-2 rounded-lg">
            50%
          </span>

          <Dialog>
            <DialogTrigger asChild>
              <article className="flex gap-x-2 items-center rounded-2xl p-1 hover:bg-accent transition-colors">
                <img className="border-[50%] w-5 h-5" src={TOKENS[1].logo} />
                <p className="text-primary-foreground">4,202,093.934 USDC.e</p>
              </article>
            </DialogTrigger>
            <TokenDetailsDialog
              name="USDC (Ethereum)"
              symbol="USDC.e"
              logoSrc={TOKENS[1].logo}
            />
          </Dialog>
        </article>
      </Card>

      <Card className="grid grid-cols-2 gap-x-3 gap-y-5 font-medium border-0 shadow rounded-2xl bg-card/70 px-6 py-5 w-full cursor-pointer">
        <article>
          <p className="text-sm">TVL</p>
          <p className="text-primary-foreground text-[18px]">$8,404,187.86</p>
        </article>

        <article>
          <p className="text-sm">Total APR</p>
          <p className="text-primary-foreground text-[18px]">1.79%</p>
        </article>

        <article>
          <p className="text-sm"> Volume (24h) </p>
          <p className="text-[18px]"> $194,215.3 </p>
        </article>

        <article>
          <p className="text-sm"> Fees (24h) </p>
          <p className="text-[18px]"> $582.6 </p>
        </article>
      </Card>
    </>
  );
}
