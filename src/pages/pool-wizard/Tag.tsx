import { ReactNode } from "react";
import { BsLightningChargeFill } from "react-icons/bs";

export default function Tag({
  children = "",
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`flex gap-x-1 px-1 py-px font-medium text-xs items-center border border-primary rounded-md ${className}`}
    >
      <BsLightningChargeFill />
      {children}
    </p>
  );
}
