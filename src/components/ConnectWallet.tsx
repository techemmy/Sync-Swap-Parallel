import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";
import { GoInbox } from "react-icons/go";
import { IoWalletOutline } from "react-icons/io5";
import ConnectWalletDialog from "@/components/ConnectWalletDialog";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export default function ConnectWallet({
  className = "",
}: {
  className?: string;
}) {
  return (
    <section className={cn("py-10 grid place-items-center", className)}>
      <GoInbox size={45} className="text-primary" />
      <p className="text-card-foreground mt-2 mb-4">
        Connect wallet to see your positions
      </p>

      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="rounded-xl min-w-16 w-[260px] md:w-[300px] flex gap-x-2"
          >
            <IoWalletOutline size={20} /> Connect
          </Button>
        </DialogTrigger>
        <ConnectWalletDialog />
      </Dialog>
    </section>
  );
}
