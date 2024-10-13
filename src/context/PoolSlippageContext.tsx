import { createContext, PropsWithChildren, useContext, useState } from "react";

const PoolSlippageContext = createContext<
  [number | null, (value: string) => string] | undefined
>(undefined);
PoolSlippageContext.displayName = "PoolSlippageContext";

function PoolSlippageProvider(props: PropsWithChildren) {
  const [slippage, setSlippage] = useState<number | null>(null);

  const handleSetSlippage = (value: string) => {
    let newSlippage = Number(value) >= 60 ? "60" : value;
    newSlippage = Number(newSlippage) === 0 ? "0.01" : newSlippage;
    setSlippage(Number(newSlippage));
    return newSlippage;
  };

  return (
    <PoolSlippageContext.Provider
      value={[slippage, handleSetSlippage]}
      {...props}
    />
  );
}

function useSlippage() {
  const context = useContext(PoolSlippageContext);
  if (context === undefined) {
    throw new Error("useSlippage must be within a PoolSlippageProvider");
  }
  return context;
}

export { PoolSlippageProvider, useSlippage };
