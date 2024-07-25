import { FaDiscord, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom'

export default function Socials() {
    return (
        <div className="mt-4 pl-2 flex gap-x-4 text-primary items-end">
            <Link to='#' className="transition-colors cursor-pointer hover:opacity-50">
                <FaDiscord fontSize={22} />
            </Link>
            <Link to='#' className="transition-colors cursor-pointer hover:opacity-50">
                <FaTwitter fontSize={22} />
            </Link>

            <Link to='#' className="transition-colors cursor-pointer hover:opacity-50 mb-[2.5px]">
                <svg width="22" height="22" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill="rgba(78, 81, 183, 0.75)" d="M12.0000128,1 L11.9999872,1 C7.02943473,1 3,4.76368832 3,9.40642642 L3,23 L21,23 L21,9.40642642 C21,4.76368832 16.9705653,1 12.0000128,1"></path>
                </svg>
            </Link>
        </div>
    )
}

