import { MdOutlineArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

export default function ResourceLinks() {
  return (
    <div className="mt-4 grid grid-cols-2 gap-x-3 gap-y-2 ">
      <Link to="#">
        <p className="transition-all flex items-center gap-1 rounded-lg text-[13px] text-card-foreground cursor-pointer hover:bg-primary/[0.04] active:scale-90 p-2">
          Bridge assets <MdOutlineArrowOutward />
        </p>
      </Link>
      <Link to="#">
        <p className="transition-all flex items-center gap-1 rounded-lg text-[13px] text-card-foreground cursor-pointer hover:bg-primary/[0.04] active:scale-90 p-2">
          Documentation <MdOutlineArrowOutward />
        </p>
      </Link>
      <Link to="#">
        <p className="transition-all flex items-center gap-1 rounded-lg text-[13px] text-card-foreground cursor-pointer hover:bg-primary/[0.04] active:scale-90 p-2">
          Governance <MdOutlineArrowOutward />
        </p>
      </Link>
    </div>
  );
}
