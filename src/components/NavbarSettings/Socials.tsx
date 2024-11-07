import { FaDiscord, FaTwitter } from "react-icons/fa";
import { IoIosListBox } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Socials() {
  return (
    <div className="mt-4 pl-2 flex gap-x-4 text-primary items-end">
      <Link
        to="#"
        className="transition-colors cursor-pointer hover:opacity-50"
      >
        <FaDiscord className="text-secondary" fontSize={22} />
      </Link>
      <Link
        to="#"
        className="transition-colors cursor-pointer hover:opacity-50"
      >
        <FaTwitter className="text-secondary" fontSize={22} />
      </Link>

      <Link
        to="#"
        className="transition-colors cursor-pointer hover:opacity-50"
      >
        <IoIosListBox className="text-secondary" fontSize={22} />
      </Link>
    </div>
  );
}
