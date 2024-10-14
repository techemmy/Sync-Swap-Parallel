import NavbarLarge from "@/components/NavbarLarge";
import NavbarSmall from "@/components/NavbarSmall";
import NavbarSidebar from "@/components/NavbarSidebar";
import { useState } from "react";

export default function NavBars() {
  const [toggledSidebar, setToggledSidebar] = useState(false);

  return (
    <>
      <div className="z-30 fixed">
        <NavbarSmall
          hamburgerToggled={toggledSidebar}
          handleHamburgerClicked={setToggledSidebar}
        />
        <NavbarLarge />
      </div>
      <div
        onClick={() => setToggledSidebar(false)}
        className={`lg:hidden transition-colors duration-300 fixed inset-0 z-40 w-0 ${toggledSidebar && "w-full bg-black/50"}`}
      ></div>
      <NavbarSidebar visible={toggledSidebar} />
    </>
  );
}
