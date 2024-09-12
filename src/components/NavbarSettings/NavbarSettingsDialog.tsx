import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import NavbarSettings from ".";
import { IThemeManager } from "@/types";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface Props {
  className?: string;
  themeManager: IThemeManager;
}

export default function NavbarSettingsDialog({
  themeManager,
  className,
}: Props) {
  return (
    <DialogContent className={className}>
      <VisuallyHidden>
        <DialogHeader>
          <DialogTitle>Navbar Settings</DialogTitle>
          <DialogDescription>Navbar settings dialog/popup</DialogDescription>
        </DialogHeader>
      </VisuallyHidden>
      <NavbarSettings
        gridColumns={3}
        themeManager={themeManager}
        className="shadow-none"
      />
    </DialogContent>
  );
}
