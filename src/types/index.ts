import { SetStateAction } from "react";

export interface AppContextType {
  selectedNetwork: NetworkType;
  setSelectedNetwork: React.Dispatch<SetStateAction<NetworkType>>;
}

export interface NetworkType {
  name: string;
  logoUrl: string;
}
