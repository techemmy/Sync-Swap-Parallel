import { MdOutlineArrowBack } from "react-icons/md";
import type { ISetSettingsView } from "@/types/Navbar";

export default function ThemeView({ setSettingsView }: { setSettingsView: ISetSettingsView }) {
    const activeTheme = "Light";
    const themes = [
        "Light",
        "Dark",
        "Link",
        "Uranium",
        "Green",
        "Bitcoin",
        "Sakura",
        "Grey",
        "Black",
        "Punk"
    ]
    return (
        <>
            <article className="flex justify-between mt-2 items-center">
                <MdOutlineArrowBack
                    onClick={setSettingsView.setDefault}
                    fontSize={40}
                    className="p-3 bg-accent cursor-pointer rounded-full active:scale-75 transition-transform"
                />
                <h3 className="font-medium text-sm mr-2">Theme</h3>
            </article>
            <ul className="grid w-full gap-3 grid-cols-2 mt-4">
                {themes.map(theme => (
                    <li key={theme} className={`${theme === activeTheme && "text-primary shadow-md border border-primary"} text-gray-500 font-medium active:scale-90 transition-transform text-sm p-2 text-center hover:bg-accent rounded-lg cursor-pointer`}>{theme}</li>
                ))}
            </ul>
        </>
    )
}

