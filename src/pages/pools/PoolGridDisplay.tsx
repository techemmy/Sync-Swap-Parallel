import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { IPoolData } from "@/types";
import { Link } from "react-router-dom";
import useImageTheme from "@/hooks/useImageTheme";

function PoolCard({ pool }: { pool: IPoolData }) {
  const { id, firstToken, secondToken, poolType, APR, liquidity } = pool;
  const logoTheme = useImageTheme();
  const lidoLogos = {
    light: "/images/logos/lido_white.png",
    dark: "/images/logos/lido_blue.png",
  };
  return (
    <Card className="font-medium border-transparent shadow rounded-2xl">
      <CardHeader className="bg-secondary/[0.08] space-y-0 relative flex flex-row items-center justify-between rounded-t-2xl items-center px-3 pb-12">
        <h3 className="text-sm text-primary flex gap-x-1 items-center">
          {poolType.icon}
          <span>{poolType.title}</span>
        </h3>

        {poolType.title === "Stable" && (
          <img
            src={lidoLogos[logoTheme]}
            alt="Lido Blue logo"
            className="w-16 m-0"
          />
        )}

        <div className="absolute -bottom-5 flex">
          <figure className="shadow p-1 bg-card rounded-full">
            <img
              className="relative w-10 z-20 rounded-full object-fit"
              src={firstToken.logo}
              alt={firstToken.symbol}
            />
          </figure>
          <figure className="-ml-4 shadow p-1 bg-card rounded-full">
            <img
              className="relative w-10 z-10 rounded-full object-fit"
              src={secondToken.logo}
              alt={secondToken.symbol}
            />
          </figure>
        </div>
      </CardHeader>

      <CardContent className="pt-8 space-y-3">
        <p className="text-primary-foreground text-lg">
          {firstToken.symbol} - {secondToken.symbol}
        </p>

        <article>
          <p className="text-sm">Total APR</p>
          <p className="text-primary-foreground text-lg">{APR}%</p>
        </article>

        <article className="flex justify-between">
          <p className="text-sm text-card-foreground">Deposits</p>
          <p className="text-primary-foreground">${liquidity}</p>
        </article>
      </CardContent>

      <Link to={`/pool/${id}`}>
        <CardFooter>
          <Button
            className="w-full hover:shadow-hover transition-transform active:scale-90"
            variant="outline"
          >
            Enter
          </Button>
        </CardFooter>
      </Link>
    </Card>
  );
}

export default function PoolGridDisplay({ pools }: { pools: IPoolData[] }) {
  return (
    <section>
      <section className="grid gap-5 grid-cols-[repeat(auto-fill,minmax(260px,1fr))]">
        {pools.map((pool, index) => (
          <PoolCard pool={pool} key={index} />
        ))}
      </section>
      <p className="text-sm text-card-foreground font-medium mt-4">
        {pools.length} {pools.length === 1 ? "Pool" : "Pools"}
      </p>
    </section>
  );
}
