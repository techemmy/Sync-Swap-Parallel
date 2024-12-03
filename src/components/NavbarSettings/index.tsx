import { useState, useEffect, useRef } from "react";
import AdvancedView from "@/components/NavbarSettings/SettingsViews/AdvancedView";
import ThemeView from "@/components/NavbarSettings/SettingsViews/ThemeView";
import LanguageView from "@/components/NavbarSettings/SettingsViews/LanguageView";
import DefaultSettingsView from "@/components/NavbarSettings/SettingsViews/DefaultSettingsView";
import { SettingsOptionsEnum } from "@/enums";
import { ISetSettingsView } from "@/types";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  gridColumns?: number;
  handleCloseSettings?: () => void;
}

export default function NavbarSettings({
  className = "",
  gridColumns = 2,
  handleCloseSettings,
}: Props) {
  const [settingsView, setSettingsView] = useState<SettingsOptionsEnum>(
    SettingsOptionsEnum.default,
  );
  const settingsDropdownRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!handleCloseSettings) return;
    const dropdownElement = settingsDropdownRef?.current;
    const clickHandler = function (event: MouseEvent) {
      if (
        !dropdownElement?.contains(event.target as Node) &&
        event.target !== dropdownElement
      ) {
        handleCloseSettings();
      }
    };
    document.addEventListener("click", clickHandler, true);

    return () => document.removeEventListener("click", clickHandler, true);
  }, [handleCloseSettings]);

  const setSettingsViewDispatch: ISetSettingsView = {
    setDefault: () => setSettingsView(SettingsOptionsEnum.default),
    setThemeAsView: () => setSettingsView(SettingsOptionsEnum.theme),
    setLanguageAsView: () => setSettingsView(SettingsOptionsEnum.langugage),
    setAdvancedAsView: () => setSettingsView(SettingsOptionsEnum.advanced),
  };

  return (
    <section
      ref={settingsDropdownRef}
      className={cn(
        "sm:min-w-[370px] rounded-3xl shadow-md bg-card p-4 pl-5",
        className,
      )}
    >
      {settingsView === SettingsOptionsEnum.default && (
        <DefaultSettingsView setSettingsView={setSettingsViewDispatch} />
      )}
      {settingsView === SettingsOptionsEnum.theme && (
        <ThemeView
          setSettingsView={setSettingsViewDispatch}
          gridColumns={gridColumns}
        />
      )}
      {settingsView === SettingsOptionsEnum.langugage && (
        <LanguageView
          gridColumns={gridColumns}
          setSettingsView={setSettingsViewDispatch}
        />
      )}
      {settingsView === SettingsOptionsEnum.advanced && (
        <AdvancedView setSettingsView={setSettingsViewDispatch} />
      )}
    </section>
  );
}
