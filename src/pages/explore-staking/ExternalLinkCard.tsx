import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MdOutlineArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

interface Props {
  name: string;
  imgSrc: string;
  label: string;
  link: string;
}

export default function ExternalLinkCard({ name, imgSrc, label, link }: Props) {
  return (
    <Link to={link}>
      <Card className="rounded-3xl shadow h-max w-max transition-transform active:scale-90">
        <CardContent className="flex flex-col gap-5 items-center py-8 px-14">
          <img className="w-12 h-12" src={imgSrc} alt={`${name} logo`} />
          <p className="text-primary-foreground">{name}</p>
          <article className="flex gap-x-3 items-center text-card-foreground">
            <Badge
              variant="outline"
              className="text-card-foreground rounded-lg w-max font-medium text-[13px] border-card-foreground/[0.4]"
            >
              {label}
            </Badge>
            <MdOutlineArrowOutward />
          </article>
        </CardContent>
      </Card>
    </Link>
  );
}
