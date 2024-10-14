import { AVAILABLE_NETWORKS } from "@/constants";
import { NetworkType } from "@/types";
import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from "react";

const ActiveNetworkContext = createContext<
  [NetworkType, Dispatch<SetStateAction<NetworkType>>] | undefined
>(undefined);
ActiveNetworkContext.displayName = "ActiveNetworkContext";

function ActiveNetworkProvider(props: PropsWithChildren) {
  const [activeNetwork, setActiveNetwork] = useState<NetworkType>(
    Object.values(AVAILABLE_NETWORKS)[0],
  );
  return (
    <ActiveNetworkContext.Provider
      value={[activeNetwork, setActiveNetwork]}
      {...props}
    />
  );
}

function useActiveNetwork() {
  const context = useContext(ActiveNetworkContext);

  if (context === undefined) {
    throw new Error(
      "useActiveNetwork must be within an ActiveNetwork Provider",
    );
  }

  return context;
}

export { ActiveNetworkProvider, useActiveNetwork };
