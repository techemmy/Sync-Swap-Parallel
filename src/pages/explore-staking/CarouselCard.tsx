import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselProps,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";

interface CarouselItemInfoProps {
  title: string;
  text: string;
}

function CarouselItemInfo({ title, text }: CarouselItemInfoProps) {
  return (
    <Card className="w-full">
      <CardContent className="p-0 py-4 grid gap-2">
        <h1 className="text-primary-foreground text-xl">{title}</h1>
        <p className="text-sm text-card-foreground">{text}</p>
      </CardContent>
    </Card>
  );
}

interface CarouselCardProps extends CarouselProps {
  className?: string;
  contents: Array<CarouselItemInfoProps>;
  autoScrollDelay?: number;
}

export default function CarouselCard({
  className,
  autoScrollDelay = 4000,
  contents,
  ...props
}: CarouselCardProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      className={cn("shadow-thin bg-card rounded-3xl p-6", className)}
      plugins={[
        Autoplay({
          delay: autoScrollDelay,
        }),
      ]}
      {...props}
    >
      <p className="text-primary font-medium">
        {current}/{count}
      </p>
      <CarouselContent>
        {contents.map(({ title, text }, index) => (
          <CarouselItem key={title + index}>
            <CarouselItemInfo title={title} text={text} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex gap-x-4 justify-between mt-6">
        {Array.from({ length: count }).map((_, index) => {
          const isActive = index + 1 === current;
          const className = isActive
            ? "static opacity-100 bg-carouselBtn shadow-carouselBtn h-[5px] w-full rounded-lg cursor-pointer shadow"
            : "static opacity-50 bg-muted h-[5px] w-full rounded-lg cursor-pointer shadow";
          return (
            <div
              key={index}
              className={className}
              onClick={() => api?.scrollTo(index)}
            />
          );
        })}
      </div>
    </Carousel>
  );
}
