import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { AVAILABLE_NETWORKS } from "../constants";
import { Link } from "react-router-dom";
import {
  MdArrowOutward,
  MdCheckCircleOutline,
  MdKeyboardArrowDown,
} from "react-icons/md";
import { AppContextType } from "@/types";

export default function SelectNetworkNavContent({
  selectedNetwork,
  setSelectedNetwork,
}: AppContextType) {
  return (
    <ul className="bg-card grid w-[230px] p-3">
      <p className="text-gray-500 font-medium text-sm mb-2">Select a network</p>

      {Object.values(AVAILABLE_NETWORKS).map((network) => {
        return (
          <li
            key={network.name}
            onClick={() => setSelectedNetwork(network)}
            className="h-9 transition-transform active:scale-90 duration-300 cursor-pointer flex items-center justify-between w-full block select-none rounded-lg p-2 leading-none transition-colors hover:bg-accent focus:bg-accent"
          >
            <div className="flex gap-x-2 items-center">
              <img
                className="w-5"
                src={network.logoUrl}
                alt={`${network.name} logo`}
              />
              <p className="text-medium">{network.name}</p>
            </div>
            {selectedNetwork.name === network.name && (
              <MdCheckCircleOutline size={20} className="text-primary" />
            )}
          </li>
        );
      })}

      <Link
        to="https://ritsu.xyz/swap"
        className="transition-transform active:scale-90 duration-300 cursor-pointer flex items-center justify-between w-full block select-none rounded-lg p-2 leading-none transition-colors hover:bg-accent focus:bg-accent"
      >
        <div className="flex gap-x-3 items-center">
          <svg
            width="24"
            height="24"
            data-testid="taiko-logo"
            fill="none"
            viewBox="0 0 300 300"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M270.018 219.255L226.941 160.73C222.262 154.37 215.332 150.56 207.953 149.72C206.273 149.526 204.773 148.551 203.933 147.081C203.078 145.611 202.988 143.826 203.663 142.266C206.618 135.457 206.798 127.552 203.618 120.323L174.476 53.7586C170.156 43.8745 160.392 37.5 149.608 37.5C138.824 37.5 129.06 43.8895 124.74 53.7586L95.5975 120.323C92.4327 127.552 92.5977 135.457 95.5525 142.266C96.2274 143.826 96.1224 145.611 95.2825 147.081C94.4276 148.551 92.9427 149.526 91.2628 149.72C83.8834 150.56 76.9541 154.37 72.2745 160.73L29.1981 219.255C22.8086 227.939 22.1637 239.578 27.5482 248.922C32.9478 258.251 43.3569 263.516 54.066 262.331L126.285 254.292C134.129 253.422 140.894 249.327 145.303 243.358C146.308 241.993 147.913 241.183 149.608 241.183C151.303 241.183 152.893 241.993 153.913 243.358C158.322 249.327 165.087 253.422 172.931 254.292L245.15 262.331C255.859 263.531 266.268 258.266 271.668 248.922C277.052 239.578 276.407 227.939 270.018 219.255ZM114.436 128.677L143.623 62.0379C144.673 59.6531 147.028 58.1082 149.623 58.1082C152.218 58.1082 154.572 59.6531 155.622 62.0379L184.81 128.677C185.725 130.777 185.53 133.207 184.27 135.127C183.01 137.047 180.88 138.201 178.57 138.201H120.66C118.366 138.201 116.221 137.047 114.961 135.127C113.701 133.207 113.506 130.777 114.421 128.677H114.436ZM129.42 230.129C128.385 232.184 126.375 233.563 124.095 233.818L51.8012 241.858C49.2214 242.143 46.7016 240.883 45.3967 238.633C44.0918 236.383 44.2568 233.578 45.8017 231.479L88.923 172.894C90.2879 171.049 92.4778 169.999 94.7726 170.134C97.0674 170.254 99.1372 171.529 100.292 173.523L100.337 173.598L129.21 223.604L129.255 223.679C130.41 225.674 130.47 228.104 129.435 230.144L129.42 230.129ZM155.547 207.511C154.318 209.625 152.068 210.945 149.608 210.945C147.163 210.945 144.898 209.64 143.668 207.526L121.485 169.114C120.255 166.999 120.255 164.374 121.485 162.259C122.715 160.145 124.965 158.825 127.425 158.825H171.776C174.221 158.825 176.486 160.115 177.716 162.244C178.945 164.374 178.945 166.984 177.716 169.099L155.547 207.511ZM253.834 238.633C252.529 240.883 250.024 242.158 247.43 241.873L175.136 233.833C172.856 233.578 170.846 232.199 169.811 230.144C168.776 228.089 168.836 225.659 169.991 223.679L170.036 223.604L198.909 173.598L198.954 173.523C200.109 171.529 202.178 170.254 204.473 170.134C206.768 170.014 208.958 171.049 210.323 172.894L253.444 231.479C254.989 233.578 255.139 236.383 253.849 238.633H253.834Z"
              fill="#E81899"
            ></path>
          </svg>
          <p className="text-medium">Taiko</p>
        </div>
        <MdArrowOutward className="text-primary" />
      </Link>

      <Collapsible>
        <CollapsibleTrigger className="w-full flex items-center gap-x-1 p-2 my-2 transition-colors hover:bg-accent">
          <MdKeyboardArrowDown />
          <p className="text-gray-500 font-medium text-sm">Testnet</p>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <li className="cursor-pointer flex items-center justify-between w-full block select-none rounded-lg p-2 leading-none">
            <div className="flex gap-x-2 items-center">
              <img
                className="w-5"
                src="/images/zksync_black.png"
                alt="Zksync black logo"
              />
              <p className="text-medium">zkSync Sepolia</p>
            </div>
          </li>
          <li className="cursor-pointer flex items-center justify-between w-full block select-none rounded-lg p-2 leading-none">
            <div className="flex gap-x-3 items-center">
              <img className="w-5" src="/images/linea.png" alt="Linea logo" />
              <p className="text-medium">Linea Goerli</p>
            </div>
          </li>
        </CollapsibleContent>
      </Collapsible>
    </ul>
  );
}
