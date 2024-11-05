import React, { SetStateAction } from "react";

export interface NetworkType {
  name: string;
  logoUrl: string;
}

export interface AppContextType {
  activeNetwork: NetworkType;
  setActiveNetwork: React.Dispatch<SetStateAction<NetworkType>>;
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

export interface ISetSettingsView {
  setDefault: () => void;
  setThemeAsView: () => void;
  setLanguageAsView: () => void;
  setAdvancedAsView: () => void;
}

export type ChartDuration = "1H" | "1D" | "1W" | "1M" | "1Y";
