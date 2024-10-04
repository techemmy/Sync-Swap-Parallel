import { ThemesEnum } from "@/enums";
import { useEffect, useRef, useState } from "react";

export default function useDataTheme<T extends ThemesEnum>(): [
  string,
  (theme: T) => void,
] {
  const bodyRef = useRef(document?.querySelector("body"));
  const [activeTheme, setActiveTheme] = useState((): T => {
    let theme =
      (localStorage.getItem("SSP:data-theme") as T) ||
      (bodyRef?.current?.getAttribute("data-theme") as T);
    if (!Object.values(ThemesEnum).includes(theme as T)) {
      theme = ThemesEnum.Light as T;
    }
    return theme;
  });

  useEffect(() => {
    bodyRef?.current?.setAttribute("data-theme", activeTheme);
  }, [activeTheme]);

  function handleSetTheme(theme: T) {
    bodyRef?.current?.setAttribute("data-theme", theme);
    localStorage.setItem("SSP:data-theme", theme);
    setActiveTheme(theme);
  }

  return [activeTheme, handleSetTheme];
}
