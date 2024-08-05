import {
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import WalletCard from "./WalletCard";
import { FaEye } from "react-icons/fa";
import { GrCircleQuestion } from "react-icons/gr";
import { FiArrowUpRight } from "react-icons/fi";

export default function ConnectWalletDialog() {
  return (
    <DialogContent className="flex flex-col max-w-[45rem] border-0 gap-1 sm:rounded-2xl">
      <DialogTitle className="text-2xl">Connect</DialogTitle>
      <DialogDescription>
        Connect wallet in one click to start using SyncSwap
      </DialogDescription>
      <div className="grid grid-cols-wallet-options gap-3 mt-4">
        <WalletCard
          name="WalletConnect"
          logoSrc="/images/wallets/walletconnect2.png"
        />
        <WalletCard name="Gate Wallet" logoSrc="/images/wallets/gate.svg" />
        <WalletCard
          name="Bitget Wallet"
          logoSrc="/images/wallets/bitget_wallet.png"
        />
        <WalletCard
          name="Token Pocket"
          logoSrc="/images/wallets/tokenpocket_tp.png"
        />
      </div>

      <article className="mt-14 bg-accent grid gap-y-3 px-4 py-3 rounded-lg text-sm">
        <p className="inline-flex items-center gap-x-2">
          <FaEye size={18} className="text-primary" />
          <span className="text-card-foreground">
            View only permissions. We cannot do anything without your approval.
          </span>
        </p>
        <p className="inline-flex gap-x-2">
          <GrCircleQuestion size={18} className="text-primary" />
          <span className="text-card-foreground">New to Web3? </span>
          <a
            href="#"
            className="transition-opacity text-primary font-medium flex items-center gap-x-1 hover:opacity-75"
          >
            Learn more about wallets <FiArrowUpRight />
          </a>
        </p>
      </article>
    </DialogContent>
  );
}
