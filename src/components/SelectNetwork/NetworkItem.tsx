import useImageTheme from "@/hooks/useImageTheme";
import { AppContextType, NetworkType } from "@/types";
import { MdCheckCircleOutline } from "react-icons/md";

interface Props extends AppContextType {
  network: NetworkType;
  className?: string;
}
export default function NetworkItem({
  activeNetwork,
  network,
  setActiveNetwork,
  className = "",
}: Props) {
  const logoTheme = useImageTheme();
  return (
    <li
      key={network.name}
      onClick={() => setActiveNetwork(network)}
      className={`h-9 text-[14px] transition-transform active:scale-90 duration-300 cursor-pointer flex items-center justify-between w-full block select-none rounded-lg p-2 leading-none transition-colors hover:bg-accent focus:bg-accent ${className}`}
    >
      <div className="flex gap-x-3 items-center">
        <img
          className="w-5"
          src={network.logoUrl[logoTheme]}
          alt={`${network.name} logo`}
        />
        <p className="text-primary-foreground">{network.name}</p>
      </div>
      {activeNetwork.name === network.name && (
        <MdCheckCircleOutline size={20} className="text-primary" />
      )}
    </li>
  );
}
