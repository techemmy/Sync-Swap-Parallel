import { useState } from "react";
import { IoIosSwap } from "react-icons/io";
import { Card } from "@/components/ui/card";
import { TOKENS } from "@/constants";

export default function PoolDetailsConversionRateCard() {
  const [coins, setCoins] = useState(TOKENS);
  const [left, right] = coins;
  return (
    <Card
      onClick={() => setCoins([right, left])}
      className="flex gap-x-2 text-sm font-medium border-0 shadow rounded-2xl bg-card/70 p-2 w-max cursor-pointer"
    >
      <article className="flex gap-x-2 items-center">
        <img className="border-[50%] w-4 h-4" src={left.logo} />
        <p className="text-primary-foreground">
          {left.amount.toLocaleString()} {left.name}
        </p>
      </article>

      <IoIosSwap fontSize={20} className="text-primary" />

      <article className="flex gap-x-2 items-center">
        <img className="border-[50%] w-4 h-4" src={right.logo} />
        <p className="text-primary-foreground">
          {right.amount.toLocaleString()} {right.name}
        </p>
      </article>
    </Card>
  );
}
