import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import Logo from "@/components/Logo";
import { Link } from "react-router-dom";
import { PiCaretUpBold } from "react-icons/pi";
import { TbMenu2 } from "react-icons/tb";
import ConnectWalletDialog from "@/components/ConnectWalletDialog";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { AppContextType, IThemeManager } from "@/types";
import SelectNetworkNavDialog from "@/components/SelectNetwork/SelectNetworkNavDialog";
import NavbarSettingsDialog from "./NavbarSettings/NavbarSettingsDialog";

interface NavbarSmall {
  hamburgerToggled: boolean;
  handleHamburgerClicked: (value: boolean) => void;
  appContext: AppContextType;
  themeManager: IThemeManager;
}

export default function NavbarSmall({
  hamburgerToggled,
  handleHamburgerClicked,
  appContext,
  themeManager,
}: NavbarSmall) {
  const { selectedNetwork, setSelectedNetwork } = appContext;
  return (
    <nav className="lg:hidden">
      <Link to="/intro" className="fixed m-3">
        <Logo className="w-8 h-8" />
      </Link>
      <TbMenu2
        onClick={() => handleHamburgerClicked(!hamburgerToggled)}
        className="fixed text-primary cursor-pointer right-0 mr-3 mt-3.5"
        size={28}
      />

      <section className="fixed bottom-0 left-0 right-0 py-1.5 px-2.5 flex justify-between bg-card/85 shadow-2xl">
        <NavigationMenu>
          <Dialog>
            <DialogTrigger asChild>
              <NavigationMenuItem className="transition-all cursor-pointer inline-flex items-center justify-center bg-background py-2 hover:bg-accent focus:bg-accent focus:text-accent-foreground focus:outline-none data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 mx-1 w-max h-10 text-gray-500 hover:text-primary px-3 text-sm font-medium rounded-lg active:scale-90">
                <NavigationMenuLink className="flex items-center space-x-2 text-primary">
                  <svg
                    viewBox="0 0 80 80"
                    fill="none"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                  >
                    <mask
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="80"
                      height="80"
                      id="mui-48"
                    >
                      <rect
                        width="80"
                        height="80"
                        rx="160"
                        fill="#FFFFFF"
                      ></rect>
                    </mask>
                    <g mask="url(#mui-48)">
                      <rect width="80" height="80" fill="#ccf7b2"></rect>
                      <path
                        filter="url(#prefix__filter0_f)"
                        d="M32.414 59.35L50.376 70.5H72.5v-71H33.728L26.5 13.381l19.057 27.08L32.414 59.35z"
                        fill="#93e69d"
                        transform="translate(0 0) rotate(-200 40 40) scale(1.2)"
                      ></path>
                      <path
                        filter="url(#prefix__filter0_f)"
                        d="M22.216 24L0 46.75l14.108 38.129L78 86l-3.081-59.276-22.378 4.005 12.972 20.186-23.35 27.395L22.215 24z"
                        fill="#9fd8ed"
                        transform="translate(0 0) rotate(-120 40 40) scale(1.2)"
                        style={{ mixBlendMode: "overlay" }}
                      ></path>
                    </g>
                    <defs>
                      <filter
                        id="prefix__filter0_f"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood
                          floodOpacity="0"
                          result="BackgroundImageFix"
                        ></feFlood>
                        <feBlend
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        ></feBlend>
                        <feGaussianBlur
                          stdDeviation="7"
                          result="effect1_foregroundBlur"
                        ></feGaussianBlur>
                      </filter>
                    </defs>
                  </svg>
                  <span>Connect</span>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </DialogTrigger>

            <ConnectWalletDialog />
          </Dialog>
        </NavigationMenu>

        <NavigationMenu>
          <NavigationMenuList>
            <Dialog>
              <NavigationMenuItem>
                <DialogTrigger asChild>
                  <NavigationMenuTrigger className="bg-transparent">
                    <img
                      className="w-5"
                      src={selectedNetwork.logoUrl}
                      alt={`${selectedNetwork.name} logo`}
                    />
                  </NavigationMenuTrigger>
                </DialogTrigger>
              </NavigationMenuItem>

              <SelectNetworkNavDialog
                selectedNetwork={selectedNetwork}
                setSelectedNetwork={setSelectedNetwork}
              />
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <NavigationMenuItem>
                  <NavigationMenuLink className="cursor-pointer inline-flex items-center justify-center bg-background py-2 transition-colors hover:bg-accent focus:bg-accent focus:text-accent-foreground focus:outline-none data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 w-max h-10 text-gray-500 hover:text-primary px-2 text-sm font-medium rounded-full">
                    <PiCaretUpBold size={17} />
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </DialogTrigger>
              <NavbarSettingsDialog
                className="max-w-md p-0"
                themeManager={themeManager}
              />
            </Dialog>
          </NavigationMenuList>
        </NavigationMenu>
      </section>
    </nav>
  );
}
