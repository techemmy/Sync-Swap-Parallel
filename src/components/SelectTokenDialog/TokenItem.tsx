import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MdOutlineInfo } from "react-icons/md";

export interface TokenItemProps {
  logo: string;
  symbol: string;
  name: string;
}

export default function TokenItem({ logo, symbol, name }: TokenItemProps) {
  return (
    <Card className="group shadow-none w-full border-0 px-3 hover:bg-accent cursor-pointer">
      <CardHeader className="flex-row items-center gap-x-2 px-0 py-2">
        <img className="w-8 h-8 rounded-full" src={logo} alt={`${name} logo`} />
        <div>
          <CardTitle className="flex items-center gap-x-1 text-md text-primary-foreground">
            {symbol}
            <MdOutlineInfo className="group-hover:block hidden" />
          </CardTitle>
          <CardDescription>{name}</CardDescription>
        </div>
      </CardHeader>
    </Card>
  );
}
