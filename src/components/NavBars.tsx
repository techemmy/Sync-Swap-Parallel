import NavbarLarge from "@/components/NavbarLarge";
import NavbarSmall from "@/components/NavbarSmall";
import NavbarSidebar from "@/components/NavbarSidebar";
import { useRef, useState } from "react";
import { ThemesEnum } from "@/enums";

export default function NavBars(props: any) {
  const [toggledSidebar, setToggledSidebar] = useState(false);
  const bodyRef = useRef(document?.querySelector("body"));
  const [activeTheme, setActiveTheme] = useState((): ThemesEnum => {
    return (
      (bodyRef?.current?.getAttribute("data-theme") as ThemesEnum) ||
      ThemesEnum.Light
    );
  });

  function handleSetTheme(theme: ThemesEnum) {
    bodyRef?.current?.setAttribute("data-theme", theme);
    setActiveTheme(theme);
  }
  return (
    <>
      <div className="z-30 fixed">
        <NavbarSmall
          hamburgerToggled={toggledSidebar}
          handleHamburgerClicked={setToggledSidebar}
        />
        <NavbarLarge
          {...props}
          themeManager={{ activeTheme, handleSetTheme }}
        />
      </div>
      <div
        onClick={() => setToggledSidebar(false)}
        className={`lg:hidden transition-colors duration-300 fixed inset-0 z-40 w-0 ${toggledSidebar && "w-full bg-black/50"}`}
      ></div>
      <NavbarSidebar visible={toggledSidebar} />
    </>
  );
}
