import { Card, CardContent } from "@/components/ui/card";
import { MdCurrencyExchange, MdOutlineArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

export default function LearnMoreCard() {
  return (
    <Card className="shadow">
      <CardContent className="p-7 relative">
        <h2 className="text-primary mb-2 text-lg">zkSync USDC Conversion</h2>
        <article className="max-w-[60%]">
          <p className="w-full text-card-foreground text-sm leading-normal">
            zkSync is launching the native USDC. Convert your USDC.e to native
            USDC today.
          </p>

          <br />

          <Link
            className="w-max flex gap-x-2 item-center text-card-foreground text-sm p-2 hover:bg-primary/[0.04] rounded-md"
            to="https://twitter.com/zksync/status/1691808445224087555?lang=en"
          >
            Learn about more USDC conversion
            <MdOutlineArrowOutward />
          </Link>
        </article>

        <MdCurrencyExchange
          fontSize={110}
          className="absolute text-primary opacity-50 right-[30px] bottom-[15px]"
        />
      </CardContent>
    </Card>
  );
}
