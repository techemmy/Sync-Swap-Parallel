import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MdKeyboardArrowRight } from "react-icons/md";
import { ReactNode } from "react";
import PoolTag from "@/components/pool-type-details/PoolTag";

interface Props {
  icon: ReactNode;
  title: string;
  description: string;
  isRecommended: boolean;
  isActive?: boolean;
  onClick: () => void;
}

export default function PoolTypeCard({
  icon,
  title,
  description,
  isRecommended = false,
  isActive = false,
  onClick,
}: Props) {
  return (
    <Card
      onClick={onClick}
      className={`transition-all mt-3 shadow-md rounded-lg border-0 cursor-pointer hover:opacity-75 border border-transparent bg-card/45 pl-5 pr-2 py-2 ${isActive && "border-primary"}`}
    >
      <CardHeader className="flex justify-between flex-row items-center text-primary p-0 pb-2">
        <div className="flex gap-x-3 items-center">
          {icon}
          <CardTitle className="font-medium text-md items-center">
            {title}
          </CardTitle>
          {isRecommended && <PoolTag>Recommended</PoolTag>}
        </div>
        <MdKeyboardArrowRight fontSize={20} />
      </CardHeader>
      <CardContent className="p-0">
        <CardDescription className="text-sm text-card-foreground">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
