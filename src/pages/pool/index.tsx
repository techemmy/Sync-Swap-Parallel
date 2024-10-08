import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";
import { MdAdd } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FiPlusCircle } from "react-icons/fi";
import { RiGraduationCapFill } from "react-icons/ri";
import ImportPositionDialog from "./ImportPositionDialog";
import { Link } from "react-router-dom";
import ConnectWallet from "@/components/ConnectWallet";

export default function Pool() {
  return (
    <main className="relative overflow-hidden pt-28 max-w-screen-lg mx-auto h-screen space-y-14 p-4">
      <article className="flex justify-between gap-y-5 flex-col md:flex-row">
        <section>
          <h1 className="text-3xl font-medium font-Public mb-1">
            My Positions
          </h1>
          <p className="text-sm text-card-foreground">
            View and manage your liquidity positions.
          </p>
        </section>

        <div className="flex gap-x-2">
          <Dialog>
            <DropdownMenu>
              <DropdownMenuTrigger className="h-fit outline-none" asChild>
                <Button
                  variant="outline"
                  className="active:scale-90 transition-transform"
                >
                  More
                  <MdKeyboardArrowDown fontSize={20} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="p-0 border-transparent">
                <DialogTrigger asChild>
                  <DropdownMenuItem className="cursor-pointer text-card-foreground hover:bg-primary/[0.04] active:scale-90 transition-transform">
                    <p className="w-full flex gap-x-6 justify-between items-center px-2 py-px">
                      Import position <FiPlusCircle />
                    </p>
                  </DropdownMenuItem>
                </DialogTrigger>

                <DropdownMenuItem className="cursor-pointer text-card-foreground hover:bg-primary/[0.04] active:scale-90 transition-transform">
                  <Link to="#" className="w-full">
                    <p className="w-full flex gap-x-6 justify-between items-center px-2 py-px">
                      Learn <RiGraduationCapFill />
                    </p>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <ImportPositionDialog />
          </Dialog>
          <Link to="wizard">
            <Button className="rounded-xl boxShadow active:scale-90 transition-all">
              <MdAdd fontSize={20} />
              New Position
            </Button>
          </Link>
        </div>
      </article>

      <ConnectWallet />
    </main>
  );
}
