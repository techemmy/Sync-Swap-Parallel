import { Card, CardContent } from "@/components/ui/card";
import { CarouselItem } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { MdElectricBolt, MdWaves } from "react-icons/md";
import { TbAlignBoxRightBottom } from "react-icons/tb";

interface Props {
  title: string;
  fromImg: string;
  toImg: string;
  amount: number;
  percentage?: number;
  className?: string;
}

export default function TrendingCard({
  title,
  fromImg,
  toImg,
  amount,
  percentage,
  className = "",
}: Props) {
  return (
    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
      <Card
        className={cn("rounded-2xl border-transparent shadow-md", className)}
      >
        <CardContent className="relative px-5 pb-3 space-y-1 pt-5">
          <div className="ml-2 flex absolute top-[-20%]">
            <img
              className="border-[50%] w-8 h-8 object-contain bg-gray"
              src={fromImg}
            />
            <img
              className="-ml-2 border-[50%] w-8 h-8 object-contain bg-gray"
              src={toImg}
            />
          </div>
          <div className="absolute -bottom-[5px] left-[5%] h-5 z-[-1] w-[35%] opacity-70 rounded-lg bg-gradient-to-r from-[rgb(20,75,217)] to-[rgb(61,43,166)]" />
          <section className="w-full flex justify-between items-center">
            <h2 className="text-lg font-medium text-primary-foreground">
              {title}
            </h2>

            <div className="flex gap-x-1 items-center text-primary">
              <TbAlignBoxRightBottom size={15} />
              <p className="text-sm font-medium items-center">Classic</p>
            </div>
          </section>
          <section className="w-full flex justify-between items-center">
            <h3 className="flex gap-x-1 items-center">
              <MdWaves fontSize={20} className="text-primary" />
              <span className="font-medium text-primary-foreground">
                ${amount.toLocaleString()}
              </span>
            </h3>

            <div className="flex gap-x-1 items-center">
              <p className="text-[13px] font-medium">APR</p>
              <span className="text-primary-foreground font-medium">
                {percentage != null ? `${percentage}%` : "-"}
              </span>
              <MdElectricBolt className="text-primary" size={15} />
            </div>
          </section>
        </CardContent>
      </Card>
    </CarouselItem>
  );
}
