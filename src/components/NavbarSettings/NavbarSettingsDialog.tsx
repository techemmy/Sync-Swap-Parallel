import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import NavbarSettings from ".";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export default function NavbarSettingsDialog({ className }: Props) {
  return (
    <DialogContent
      className={cn("w-[460px] p-0 rounded-2xl sm:rounded-2xl", className)}
    >
      <VisuallyHidden>
        <DialogHeader>
          <DialogTitle>Navbar Settings</DialogTitle>
          <DialogDescription>Navbar settings dialog/popup</DialogDescription>
        </DialogHeader>
      </VisuallyHidden>
      <NavbarSettings gridColumns={3} className="shadow-none p-6 rounded-2xl" />
    </DialogContent>
  );
}
