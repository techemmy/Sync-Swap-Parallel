import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import NavbarSettings from ".";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface Props {
  className?: string;
}

export default function NavbarSettingsDialog({ className }: Props) {
  return (
    <DialogContent className={className}>
      <VisuallyHidden>
        <DialogHeader>
          <DialogTitle>Navbar Settings</DialogTitle>
          <DialogDescription>Navbar settings dialog/popup</DialogDescription>
        </DialogHeader>
      </VisuallyHidden>
      <NavbarSettings gridColumns={3} className="shadow-none" />
    </DialogContent>
  );
}
