import { useDataTheme } from "@/context/ThemeContext";
import { ThemesEnum } from "@/enums";

export default function useImageTheme() {
  const [activeTheme] = useDataTheme();
  const theme = [
    ThemesEnum.Dark,
    ThemesEnum.Uranium,
    ThemesEnum.Black,
    ThemesEnum.Punk,
  ].includes(activeTheme as ThemesEnum)
    ? "light"
    : "dark";
  return theme;
}
