import { forwardRef, type ReactNode } from "react";

interface TokenItemsProps {
  children: ReactNode[];
}

const TokenItems = forwardRef<HTMLDivElement, TokenItemsProps>(
  function TokenItems({ children }, ref) {
    return (
      <div
        ref={ref}
        className="flex flex-col items-center px-3 pb-3 overflow-y-auto h-[660px]"
      >
        {children}
      </div>
    );
  },
);

export default TokenItems;
