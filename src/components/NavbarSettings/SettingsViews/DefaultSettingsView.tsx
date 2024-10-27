import ResourceLinks from "@/components/NavbarSettings/ResourceLinks";
import Socials from "@/components/NavbarSettings/Socials";
import { FaMoon } from "react-icons/fa";
import { MdKeyboardArrowRight, MdLanguage } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { ThemesEnum } from "@/enums";
import DefaultSettingsCard from "./DefaultSettingsCard";
import { useDataTheme } from "@/context/ThemeContext";
import { ISetSettingsView } from "@/types";

interface Props {
  setSettingsView: ISetSettingsView;
}

export default function DefaultSettingsView({ setSettingsView }: Props) {
  const [activeTheme] = useDataTheme();
  const theme = Object.entries(ThemesEnum).find(
    (theme) => theme[1] === activeTheme,
  );
  return (
    <>
      <h2 className="font-medium">Settings</h2>
      <div className="grid w-full gap-3 grid-cols-2 mt-4">
        <DefaultSettingsCard
          text={(theme && theme[0]) || activeTheme}
          icons={
            <>
              <FaMoon fontSize={18} />
              <MdKeyboardArrowRight fontSize={18} />
            </>
          }
          onClick={setSettingsView.setThemeAsView}
        />

        <DefaultSettingsCard
          text="English"
          icons={
            <>
              <MdLanguage fontSize={22} />
              <MdKeyboardArrowRight fontSize={18} />
            </>
          }
          onClick={setSettingsView.setLanguageAsView}
        />

        <DefaultSettingsCard
          text="Advanced"
          icons={
            <>
              <IoMdSettings fontSize={22} />
              <MdKeyboardArrowRight fontSize={18} />
            </>
          }
          onClick={setSettingsView.setAdvancedAsView}
        />
      </div>
      <ResourceLinks />
      <Socials />
    </>
  );
}
