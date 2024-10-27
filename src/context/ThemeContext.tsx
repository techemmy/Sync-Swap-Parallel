import { ThemesEnum } from "@/enums";
import React, { PropsWithChildren, useEffect, useRef, useState } from "react";

const ThemeContext = React.createContext<
  [string, (theme: ThemesEnum) => void] | undefined
>(undefined);

function ThemeProvider({ ...props }: PropsWithChildren) {
  const bodyRef = useRef(document?.querySelector("body"));
  const [activeTheme, setActiveTheme] = useState(() => {
    let theme =
      localStorage.getItem("SSP:data-theme") ||
      bodyRef?.current?.getAttribute("data-theme") ||
      ThemesEnum.Light;
    if (!Object.values(ThemesEnum).includes(theme as ThemesEnum)) {
      theme = ThemesEnum.Light;
    }
    return theme;
  });

  useEffect(() => {
    bodyRef?.current?.setAttribute("data-theme", activeTheme);
  }, [activeTheme]);

  function handleSetTheme(theme: ThemesEnum) {
    bodyRef?.current?.setAttribute("data-theme", theme);
    localStorage.setItem("SSP:data-theme", theme);
    setActiveTheme(theme);
  }

  return (
    <ThemeContext.Provider value={[activeTheme, handleSetTheme]} {...props} />
  );
}

function useDataTheme() {
  const context = React.useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useDataTheme must be within an Theme Provider");
  }
  return context;
}

export { ThemeProvider, useDataTheme };
