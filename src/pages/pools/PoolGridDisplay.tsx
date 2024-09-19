import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { MdOutlineWaterDrop } from "react-icons/md";
import Tokens from "@/assets/tokens.json";
import { Button } from "@/components/ui/button";

function PoolCard() {
  return (
    <Card className="font-medium border-transparent shadow rounded-2xl">
      <CardHeader className="relative flex flex-row justify-between rounded-t-2xl items-center px-3 pb-12 bg-navIcon/[0.08]">
        <h3 className="text-sm text-primary flex gap-x-1 items-center">
          <MdOutlineWaterDrop fontSize={20} />
          <span>Popular</span>
        </h3>

        <img
          src="/images/logos/lido_blue.png"
          alt="Lido Blue logo"
          className="object-fit w-16"
        />

        <div className="absolute -bottom-5 flex">
          <figure className="shadow p-1 bg-card rounded-full">
            <img
              className="relative w-10 z-20 rounded-full object-fit"
              src={Tokens.data[1].logo}
              alt={Tokens.data[1].symbol}
            />
          </figure>
          <figure className="-ml-4 shadow p-1 bg-card rounded-full">
            <img
              className="relative w-10 z-10 rounded-full object-fit"
              src={Tokens.data[1].logo}
              alt={Tokens.data[1].symbol}
            />
          </figure>
        </div>
      </CardHeader>

      <CardContent className="pt-8 space-y-3">
        <p className="text-primary-foreground text-lg">ETH - USDC.e Classic</p>

        <article>
          <p className="text-sm">Total APR</p>
          <p className="text-primary-foreground text-lg">{50}%</p>
        </article>

        <article className="flex justify-between">
          <p className="text-sm text-card-foreground">Deposits</p>
          <p className="text-primary-foreground">$1,774,322</p>
        </article>
      </CardContent>

      <CardFooter>
        <Button
          className="w-full hover:shadow-hover transition-transform active:scale-90"
          variant="outline"
        >
          Enter
        </Button>
      </CardFooter>
    </Card>
  );
}

export default function PoolGridDisplay() {
  return (
    <section className="grid gap-5 grid-cols-[repeat(auto-fill,minmax(260px,1fr))]">
      {Array.from({ length: 5 }).map((_, index) => (
        <PoolCard key={index} />
      ))}
    </section>
  );
}
