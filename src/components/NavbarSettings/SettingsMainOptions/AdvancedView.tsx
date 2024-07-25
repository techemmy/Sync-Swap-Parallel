import { MdOutlineArrowBack } from "react-icons/md";
import type { ISetSettingsView } from "@/types/Navbar";

export default function AdvancedView({ setSettingsView }: { setSettingsView: ISetSettingsView }) {
    return (
        <>
            <article className="flex justify-between mt-2 items-center">
                <MdOutlineArrowBack
                    onClick={setSettingsView.setDefault}
                    fontSize={33}
                    className="p-2 hover:bg-accent cursor-pointer rounded-full active:scale-75 transition-transform"
                />
                <h3 className="font-medium text-sm mr-2">Advanced</h3>
            </article>
            <div className="grid w-max gap-3 grid-cols-2 mt-4">
            </div>
        </>
    )
}

