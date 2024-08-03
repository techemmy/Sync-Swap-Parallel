import type { ISetSettingsView } from "@/types/Navbar";
import ResourceLinks from "@/components/NavbarSettings/ResourceLinks";
import Socials from "@/components/NavbarSettings/Socials";
import { FaMoon } from "react-icons/fa";
import { MdKeyboardArrowRight, MdLanguage } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { ThemesEnum } from "@/enums";

interface Props {
  setSettingsView: ISetSettingsView;
  activeTheme: ThemesEnum;
}

export default function DefaultSettingsView({
  setSettingsView,
  activeTheme,
}: Props) {
  const theme = Object.entries(ThemesEnum).find(
    (theme) => theme[1] === activeTheme,
  );
  return (
    <>
      <h2 className="font-medium">Settings</h2>
      <div className="grid w-max gap-3 grid-cols-2 mt-4">
        <section
          onClick={setSettingsView.setThemeAsView}
          className="active:scale-95 transition-all bg-accent px-4 py-3 h-20 w-40 flex flex-col rounded-lg justify-between cursor-pointer border-[.5px] border-card hover:border-primary"
        >
          <div className="flex justify-between text-primary">
            <FaMoon fontSize={18} />
            <MdKeyboardArrowRight fontSize={18} />
          </div>
          <h3 className="font-medium text-sm text-primary-foreground">
            {(theme && theme[0]) || activeTheme}
          </h3>
        </section>

        <section
          onClick={setSettingsView.setLanguageAsView}
          className="active:scale-95 transition-all bg-accent px-4 py-3 h-20 w-40 flex flex-col rounded-lg justify-between cursor-pointer border-[.5px] border-card hover:border-primary"
        >
          <div className="flex justify-between text-primary">
            <MdLanguage fontSize={22} />
            <MdKeyboardArrowRight fontSize={18} />
          </div>
          <h3 className="font-medium text-sm text-primary-foreground">
            English
          </h3>
        </section>

        <section
          onClick={setSettingsView.setAdvancedAsView}
          className="active:scale-95 transition-all  bg-accent px-4 py-3 h-20 w-40 flex flex-col rounded-lg justify-between cursor-pointer border-[.5px] border-card hover:border-primary"
        >
          <div className="flex justify-between text-primary">
            <IoMdSettings fontSize={22} />
            <MdKeyboardArrowRight fontSize={18} />
          </div>
          <h3 className="font-medium text-sm text-primary-foreground">
            Advanced
          </h3>
        </section>
      </div>
      <ResourceLinks />
      <Socials />
    </>
  );
}
