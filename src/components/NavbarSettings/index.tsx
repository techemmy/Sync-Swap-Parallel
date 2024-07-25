import { useReducer } from "react";
import AdvancedView from "./SettingsMainOptions/AdvancedView";
import ThemeView from "./SettingsMainOptions/ThemeView";
import LanguageView from "./SettingsMainOptions/LanguageView";
import DefaultSettingsView from "./DefaultSettingsView";
import type { ISetSettingsView } from "@/types/Navbar";


interface ISettingsOptionsState {
    component: typeof DefaultSettingsView
    | typeof ThemeView
    | typeof LanguageView
    | typeof AdvancedView;
}

enum SettingsOptionsEnum {
    theme = "theme",
    langugage = "language",
    advanced = "advanced"
}

interface ISettingsOptionsAction {
    type?: SettingsOptionsEnum
}

function settingsOptionsReducer(state: ISettingsOptionsState, action: ISettingsOptionsAction) {
    switch (action.type) {
        case SettingsOptionsEnum.theme:
            return {
                ...state,
                component: ThemeView
            }

        case SettingsOptionsEnum.langugage:
            return {
                ...state,
                component: LanguageView
            }

        case SettingsOptionsEnum.advanced:
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
        setThemeAsView: () => dispatch({ type: SettingsOptionsEnum.theme }),
        setLanguageAsView: () => dispatch({ type: SettingsOptionsEnum.langugage }),
        setAdvancedAsView: () => dispatch({ type: SettingsOptionsEnum.advanced }),
    }

    return (
        <section className={`min-w-[370px] rounded-3xl shadow-md bg-white p-4 pl-5 ${className}`}>
            <CurrentView setSettingsView={setSettingsView} />
        </section>
    )
}

