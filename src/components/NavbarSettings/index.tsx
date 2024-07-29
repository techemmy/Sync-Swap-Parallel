import { useState } from "react";
import AdvancedView from "./SettingsMainOptions/AdvancedView";
import ThemeView from "./SettingsMainOptions/ThemeView";
import LanguageView from "./SettingsMainOptions/LanguageView";
import DefaultSettingsView from "./DefaultSettingsView";
import type { ISetSettingsView } from "@/types/Navbar";

enum SettingsOptionsEnum {
    default = "default",
    theme = "theme",
    langugage = "language",
    advanced = "advanced"
}
export default function NavbarSettings({ className = '' }: { className?: string }) {
    const [settingsView, setSettingsView] = useState<SettingsOptionsEnum>(SettingsOptionsEnum.default);


    const setSettingsViewDispatch: ISetSettingsView = {
        setDefault: () => setSettingsView(SettingsOptionsEnum.default),
        setThemeAsView: () => setSettingsView(SettingsOptionsEnum.theme),
        setLanguageAsView: () => setSettingsView(SettingsOptionsEnum.langugage),
        setAdvancedAsView: () => setSettingsView(SettingsOptionsEnum.advanced),
    }

    return (
        <section className={`min-w-[370px] rounded-3xl shadow-md bg-white p-4 pl-5 ${className}`}>
            {settingsView === SettingsOptionsEnum.default && <DefaultSettingsView setSettingsView={setSettingsViewDispatch} />}
            {settingsView === SettingsOptionsEnum.theme && <ThemeView setSettingsView={setSettingsViewDispatch} />}
            {settingsView === SettingsOptionsEnum.langugage && <LanguageView setSettingsView={setSettingsViewDispatch} />}
            {settingsView === SettingsOptionsEnum.advanced && <AdvancedView setSettingsView={setSettingsViewDispatch} />}
        </section>
    )
}

