import ConnectWalletDialog from "@/components/ConnectWalletDialog";
import Footer from "@/components/Footer";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { IoWalletOutline } from "react-icons/io5";

export default function Portfolio() {
  return (
    <>
      <main className="relative overflow-hidden pt-20 max-w-screen-lg mx-auto h-[90vh] space-y-14 p-4">
        <Card className="mt-3 shadow-md rounded-3xl border-0 bg-white/75 max-w-[930px] mx-auto">
          <CardContent className="py-20 px-10 flex flex-col justify-between items-center gap-y-5">
            <Logo className="w-12 h-12" />

            <CardTitle className="tracking-wide font-semibold text-2xl text-primary-foreground">
              Welcome
            </CardTitle>

            <CardDescription className="text-primary text-card-foreground">
              Connect your wallet to explore the DeFi world with SyncSwap
            </CardDescription>

            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className="w-[220px] md:mx-0 flex gap-x-2 text-primary bg-transparent text-sm rounded-2xl mt-2"
                >
                  <IoWalletOutline size={20} />
                  Connect
                </Button>
              </DialogTrigger>
              <ConnectWalletDialog />
            </Dialog>
          </CardContent>
        </Card>
      </main>
      <Footer></Footer>
    </>
  );
}
