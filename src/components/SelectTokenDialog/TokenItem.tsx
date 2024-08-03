import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export interface TokenItemProps {
  logo: string;
  symbol: string;
  name: string;
}

export default function TokenItem({ logo, symbol, name }: TokenItemProps) {
  return (
    <Card className="shadow-none w-full border-0 px-3 hover:bg-accent cursor-pointer">
      <CardHeader className="flex-row items-center gap-x-2 px-0 py-2">
        <img className="w-8 h-8 rounded-full" src={logo} />
        <div>
          <CardTitle className="text-md text-primary-foreground">
            {symbol}
          </CardTitle>
          <CardDescription>{name}</CardDescription>
        </div>
      </CardHeader>
    </Card>
  );
}
