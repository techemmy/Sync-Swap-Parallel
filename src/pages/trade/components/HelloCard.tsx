import NavbarSettingsDialog from "@/components/NavbarSettings/NavbarSettingsDialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { HiSparkles } from "react-icons/hi";
import CustomHelloText from "./CustomHelloText";

export default function HelloCard() {
  return (
    <Card className="bg-card/70 z-20 mt-16 max-w-[300px] min-h-[100px] shadow-thin">
      <CardContent className="grid gap-5">
        <div className="animate-fade-in flex flex-col gap-2 mx-1.5 my-2 items-end">
          <CustomHelloText />
          <p className="text-sm">Input amount to start swapping</p>
        </div>

        <div className="grid gap-3 p-5 bg-primary/[0.05] rounded-2xl">
          <HiSparkles className="text-primary" fontSize={23} />
          <p className="text-[13px]">
            New gadget to help you review price and swap details
          </p>

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="w-full border-primary/[0.5]">
                Toggle in Settings
              </Button>
            </DialogTrigger>
            <NavbarSettingsDialog className="p-0" />
          </Dialog>
        </div>
      </CardContent>
    </Card>
  );
}
