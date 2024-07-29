import { MdOutlineArrowBack } from "react-icons/md";
import type { ISetSettingsView } from "@/types/Navbar";


export default function LanguageView({ setSettingsView }: { setSettingsView: ISetSettingsView }) {
    const languages = [
        "English",
        "Deutsch",
        "Español",
        "français",
        "русский",
        "Türkçe",
        "Tiếng Việt",
        "Polski",
        "Indonesia",
        "العربية",
        "زبان فارسی",
        "한국어",
        "日本語",
        "简体中文",
        "繁體中文"
    ]
    const activeLang = languages[0];
    return (
        <>
            <article className="flex justify-between mt-2 items-center">
                <MdOutlineArrowBack
                    onClick={setSettingsView.setDefault}
                    fontSize={40}
                    className="p-3 bg-accent cursor-pointer rounded-full active:scale-75 transition-transform"
                />
                <h3 className="font-medium text-sm mr-2">Language</h3>
            </article>
            <ul className="grid w-full gap-3 grid-cols-2 mt-4">
                {languages.map(lang => (
                    <li key={lang} className={`${lang === activeLang && "text-black shadow-md border border-black"} text-gray-500 font-medium active:scale-90 transition-transform text-sm p-2 hover:bg-accent rounded-lg cursor-pointer`}>{lang}</li>
                ))}
            </ul>
        </>
    )
}

