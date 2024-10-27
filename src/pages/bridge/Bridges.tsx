import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import { Link } from "react-router-dom";
import { ThemesEnum } from "@/enums";
import { useDataTheme } from "@/context/ThemeContext";

interface BridgeCardProps {
  link: string;
  logo: React.ReactNode;
  title: string;
  description: string;
  tags: string[];
}
function BridgeCard({
  link,
  logo: Logo,
  title,
  description,
  tags,
}: BridgeCardProps) {
  return (
    // TODO: add bg-colorOverflow as border on hover
    <Card className="transition-all shadow hover:shadow-hover">
      <CardContent className="flex flex-col justify-between gap-y-10 min-h-[205px] min-w-[200px]">
        <section className="grid gap-2">
          {Logo}
          <p className="text-primary-foreground font-medium text-[16px]">
            {title}
          </p>
          <p className="text-card-foreground text-[13px]">{description}</p>
        </section>

        <div className="flex justify-between">
          <article className="flex gap-x-1">
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="border-card-foreground opacity-[.95] font-medium px-3 text-xs rounded-2xl text-card-foreground"
              >
                {tag}
              </Badge>
            ))}
          </article>
          <Link
            target="_blank"
            to={link}
            className="text-[13px] py-1 px-2 transition-opacity text-primary font-medium hover:bg-primary/[0.04] rounded-lg"
          >
            Open
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Bridges() {
  // FIX: use a React Context for managing theme so that bridge logos can
  // update automatically when theme changes
  const [theme] = useDataTheme();
  return (
    <section>
      <h3 className="text-primary-foreground font-medium text-center mb-4">
        Choose a bridge
      </h3>
      <div className="grid grid-cols-bridges gap-x-4 gap-y-5">
        {Array.from({ length: 17 }).map((_, index) => {
          const logo = theme.includes(ThemesEnum.Light)
            ? "/images/logos/Owlto_Light.png"
            : "/images/logos/Owlto_Dark.png";

          return (
            <BridgeCard
              key={`bridge-${index}`}
              link="https://syncswap.xyz/move"
              title="Owlto Finance"
              description="Decentralized cross-rollup bridge focused on L2, providing cheaper and faster transfers."
              tags={["Cheap", "Fast"]}
              logo={
                <img className="h-5 mb-3" src={logo} alt="Owlto Finance logo" />
              }
            />
          );
        })}
      </div>
    </section>
  );
}
