import { ThemesEnum } from "@/enums";
import { SetStateAction } from "react";

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
