import { ThemesEnum } from "@/enums";
import React, { SetStateAction } from "react";

export interface IThemeManager {
  activeTheme: ThemesEnum;
  handleSetTheme: (theme: ThemesEnum) => void;
}
export interface NetworkType {
  name: string;
  logoUrl: string;
}

export interface AppContextType {
  selectedNetwork: NetworkType;
  setSelectedNetwork: React.Dispatch<SetStateAction<NetworkType>>;
}

export interface IPoolType {
  icon: React.ReactNode;
  title: string;
}

export interface IPoolData {
  id: string;
  firstToken: {
    symbol: string;
    logo: string;
  };
  secondToken: {
    symbol: string;
    logo: string;
  };
  poolType: IPoolType;
  liquidity: string;
  APR: string;
}
