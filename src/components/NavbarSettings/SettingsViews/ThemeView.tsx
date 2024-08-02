import { MdOutlineArrowBack } from "react-icons/md";
import type { ISetSettingsView } from "@/types/Navbar";
import { useRef, useState } from 'react';

enum Themes {
    Light = "light",
    Dark = "dark",
    Link = "link",
    Uranium = "tokemat",
    Green = "green",
    Bitcoin = "bitcoin",
    Sakura = "sakura",
    Grey = "white",
    Black = "black",
    Punk = "punk"
}

export default function ThemeView({ setSettingsView }: { setSettingsView: ISetSettingsView }) {
    const bodyRef = useRef(document?.querySelector('body'))
    const [activeTheme, setActiveTheme] = useState(() => {
        return bodyRef?.current?.getAttribute("data-theme") || Themes.Light
    })

    function handleSetTheme(theme: string) {
        bodyRef?.current?.setAttribute("data-theme", theme);
        setActiveTheme(theme);
    }
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
                {(Object.keys(Themes) as Array<keyof typeof Themes>).map(theme => (
                    <li onClick={() => handleSetTheme(Themes[theme])} key={theme} className={`${Themes[theme] === activeTheme ? "text-primary shadow-md border-primary" : "text-card-foreground border-transparent"} border font-medium active:scale-90 transition-transform text-sm p-2 text-center hover:bg-accent rounded-lg cursor-pointer`}>{theme}</li>
                ))}
            </ul>
        </>
    )
}

