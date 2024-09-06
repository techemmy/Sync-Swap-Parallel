import NavbarLarge from "@/components/NavbarLarge";
import NavbarSmall from "@/components/NavbarSmall";
import NavbarSidebar from "@/components/NavbarSidebar";
import { useState } from "react";
import useDataTheme from "@/hooks/useDataTheme";

export default function NavBars(props: any) {
  const [toggledSidebar, setToggledSidebar] = useState(false);
  const [activeTheme, handleSetTheme] = useDataTheme();

  return (
    <>
      <div className="z-30 fixed">
        <NavbarSmall
          hamburgerToggled={toggledSidebar}
          handleHamburgerClicked={setToggledSidebar}
          {...props}
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
