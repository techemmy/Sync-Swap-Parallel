import { Button } from "@/components/ui/button";
import { MdCandlestickChart } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { GrPowerReset } from "react-icons/gr";

export default function ActionButtons() {
    return (
        <div className="flex justify-between items-center">
            <Button
                className="group w-9 h-9 px-1 bg-transparent text-primary opacity-50 hover:bg-gray-300/65 rounded-md" >
                <MdCandlestickChart className="group-active:transition-transform active:scale-90" size={23} />
            </Button>

            <div className="flex items-center gap-x-1">
                <Button
                    className="group w-9 h-9 px-1 bg-transparent text-primary hover:bg-gray-300/65 rounded-md" >
                    <GrPowerReset className="group-active:transition-transform active:scale-90" size={22} />
                </Button>
                <Button
                    className="group w-8 h-8 px-1 bg-transparent text-primary hover:bg-gray-300/65 rounded-md" >
                    <FiSettings className="font-bold group-active:transition-transform group-active:scale-90 group-hover:rotate-180 duration-500" size={25} />
                </Button>
            </div>
        </div>
    )
}

