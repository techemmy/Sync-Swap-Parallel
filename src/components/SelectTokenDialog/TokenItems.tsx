import type { ReactNode } from "react";

interface TokenItemsProps {
  children: ReactNode;
}
export default function TokenItems({ children }: TokenItemsProps) {
  return (
    <div className="flex flex-col items-center space-y-2 px-3 pb-3">
      {children}
    </div>
  );
}
