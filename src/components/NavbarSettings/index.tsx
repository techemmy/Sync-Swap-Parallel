import { useState } from "react";
import AdvancedView from "@/components/NavbarSettings/SettingsViews/AdvancedView";
import ThemeView from "@/components/NavbarSettings/SettingsViews/ThemeView";
import LanguageView from "@/components/NavbarSettings/SettingsViews/LanguageView";
import DefaultSettingsView from "@/components/NavbarSettings/SettingsViews/DefaultSettingsView";
import type { ISetSettingsView } from "@/types/Navbar";
import { SettingsOptionsEnum } from "@/enums";
import type { IThemeManager } from "@/types";

interface Props {
  className?: string;
  themeManager: IThemeManager;
}

export default function NavbarSettings({
  className = "",
  themeManager,
}: Props) {
  const [settingsView, setSettingsView] = useState<SettingsOptionsEnum>(
    SettingsOptionsEnum.default,
  );

  const setSettingsViewDispatch: ISetSettingsView = {
    setDefault: () => setSettingsView(SettingsOptionsEnum.default),
    setThemeAsView: () => setSettingsView(SettingsOptionsEnum.theme),
    setLanguageAsView: () => setSettingsView(SettingsOptionsEnum.langugage),
    setAdvancedAsView: () => setSettingsView(SettingsOptionsEnum.advanced),
  };

  return (
    <section
      className={`min-w-[370px] rounded-3xl shadow-md bg-card p-4 pl-5 ${className}`}
    >
      {settingsView === SettingsOptionsEnum.default && (
        <DefaultSettingsView
          activeTheme={themeManager.activeTheme}
          setSettingsView={setSettingsViewDispatch}
        />
      )}
      {settingsView === SettingsOptionsEnum.theme && (
        <ThemeView
          themeManager={themeManager}
          setSettingsView={setSettingsViewDispatch}
        />
      )}
      {settingsView === SettingsOptionsEnum.langugage && (
        <LanguageView setSettingsView={setSettingsViewDispatch} />
      )}
      {settingsView === SettingsOptionsEnum.advanced && (
        <AdvancedView setSettingsView={setSettingsViewDispatch} />
      )}
    </section>
  );
}
