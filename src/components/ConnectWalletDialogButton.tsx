import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { IoWalletOutline } from "react-icons/io5";
import ConnectWalletDialog from "@/components/ConnectWalletDialog";
import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Props extends ButtonProps {
  className?: string;
}

export default function ConnectWalletDialogButton({
  className = "",
  ...props
}: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          {...props}
          className={cn(
            "rounded-xl flex gap-x-2 transition-all hover:shadow active:scale-90 mt-2 border-primary/[0.5]",
            className,
          )}
        >
          <IoWalletOutline size={20} /> Connect
        </Button>
      </DialogTrigger>
      <ConnectWalletDialog />
    </Dialog>
  );
}