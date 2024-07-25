import type { ISetSettingsView } from "@/types/Navbar";
import { FaMoon } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { MdKeyboardArrowRight, MdLanguage } from "react-icons/md";


export default function SettingsMainOptions({ setSettingsView }: { setSettingsView: ISetSettingsView }) {

    return (
        <div className="grid w-max gap-3 grid-cols-2 mt-4">

            <section
                onClick={setSettingsView.setThemeAsView}
                className="active:scale-95 transition-all bg-accent px-4 py-3 h-20 w-40 flex flex-col rounded-lg justify-between cursor-pointer border-[.5px] border-transparent hover:border-primary">
                <div className="flex justify-between text-primary">
                    <FaMoon fontSize={18} />
                    <MdKeyboardArrowRight fontSize={18} />
                </div>
                <h3 className="font-medium text-sm">Light</h3>
            </section>

            <section
                onClick={setSettingsView.setLanguageAsView}
                className="active:scale-95 transition-all bg-accent px-4 py-3 h-20 w-40 flex flex-col rounded-lg justify-between cursor-pointer border-[.5px]  border-transparent hover:border-primary">
                <div className="flex justify-between text-primary">
                    <MdLanguage fontSize={22} />
                    <MdKeyboardArrowRight fontSize={18} />
                </div>
                <h3 className="font-medium text-sm">English</h3>
            </section>

            <section
                onClick={setSettingsView.setAdvancedAsView}
                className="active:scale-95 transition-all  bg-accent px-4 py-3 h-20 w-40 flex flex-col rounded-lg justify-between cursor-pointer border-[.5px]  border-transparent hover:border-primary">
                <div className="flex justify-between text-primary">
                    <IoMdSettings fontSize={22} />
                    <MdKeyboardArrowRight fontSize={18} />
                </div>
                <h3 className="font-medium text-sm">Advanced</h3>
            </section>

        </div>
    )
}

