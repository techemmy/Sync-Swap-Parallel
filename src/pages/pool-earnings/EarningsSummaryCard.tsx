import { Card } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { MdOutlineInfo } from "react-icons/md";

interface Props {
  amount?: number;
  title: string;
  icon: React.ReactNode;
  info?: string;
}

export default function EarningsSummaryCard({
  amount,
  title,
  icon: Icon,
  info,
}: Props) {
  return (
    <Card className="relative bg-white/75 border-transparent px-5 py-3 rounded-2xl shadow overflow-clip space-y-2">
      <p className="text-primary-foreground text-lg font-medium">
        {amount != null ? `$${amount}` : "-"}
      </p>
      <p className="text-sm text-card-foreground flex gap-x-1 items-center">
        <span className="font-medium text-xs">{title}</span>

        {info && (
          <Tooltip>
            <TooltipTrigger>
              <MdOutlineInfo />
            </TooltipTrigger>
            <TooltipContent>{info}</TooltipContent>
          </Tooltip>
        )}
      </p>
      {Icon}
    </Card>
  );
}
