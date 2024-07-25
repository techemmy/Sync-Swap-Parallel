import { useReducer } from "react";
import AdvancedView from "./SettingsMainOptions/AdvancedView";
import ThemeView from "./SettingsMainOptions/ThemeView";
import LanguageView from "./SettingsMainOptions/LanguageView";
import DefaultSettingsView from "./DefaultSettingsView";
import type { ISetSettingsView } from "@/types/Navbar";

const SETTINGS_VIEW_OPTIONS = {
    theme: "theme",
    langugage: "language",
    advanced: "advanced",
};

function settingsOptionsReducer(state, action) {
    switch (action.type) {
        case SETTINGS_VIEW_OPTIONS.theme:
            return {
                ...state,
                component: ThemeView
            }

        case SETTINGS_VIEW_OPTIONS.langugage:
            return {
                ...state,
                component: LanguageView
            }

        case SETTINGS_VIEW_OPTIONS.advanced:
            return {
                ...state,
                component: AdvancedView
            }

        default:
            return {
                ...state,
                component: DefaultSettingsView
            }
    }

}

export default function NavbarSettings({ className = '' }: { className?: string }) {
    const [state, dispatch] = useReducer(settingsOptionsReducer, {
        component: DefaultSettingsView
    });
    const { component: CurrentView } = state;


    const setSettingsView: ISetSettingsView = {
        setDefault: () => dispatch({}),
        setThemeAsView: () => dispatch({ type: SETTINGS_VIEW_OPTIONS.theme }),
        setLanguageAsView: () => dispatch({ type: SETTINGS_VIEW_OPTIONS.langugage }),
        setAdvancedAsView: () => dispatch({ type: SETTINGS_VIEW_OPTIONS.advanced }),
    }

    return (
        <section className={`min-w-[370px] rounded-3xl shadow-md bg-white p-4 pl-5 ${className}`}>
            <CurrentView setSettingsView={setSettingsView} />
        </section>
    )
}

