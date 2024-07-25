import { MdOutlineArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

export default function ResourceLinks() {
    return (
        <div className="mt-4 grid grid-cols-2 gap-x-3 gap-y-2 " >
            <Link to="#"><p className="transition-colors flex items-center justify-between rounded-lg text-[13px] text-gray-500 cursor-pointer hover:bg-accent p-2">Bridge assets <MdOutlineArrowOutward /> </p></Link>
            <Link to="#"><p className="transition-colors flex items-center justify-between rounded-lg text-[13px] text-gray-500 cursor-pointer hover:bg-accent p-2">Documentation <MdOutlineArrowOutward /> </p></Link>
            <Link to="#"><p className="transition-colors flex items-center justify-between rounded-lg text-[13px] text-gray-500 cursor-pointer hover:bg-accent p-2">Governance <MdOutlineArrowOutward /> </p></Link>
        </div>

    )
}

