import ConnectWalletDialogButton from "@/components/ConnectWalletDialogButton";
import Footer from "@/components/Footer";
import Logo from "@/components/Logo";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";

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

            <ConnectWalletDialogButton
              variant="outline"
              className="w-[220px] md:mx-0 rounded-2xl mt-2 text-sm"
            />
          </CardContent>
        </Card>
      </main>
      <Footer></Footer>
    </>
  );
}
