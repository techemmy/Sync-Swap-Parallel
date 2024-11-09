import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import Logo from "@/components/Logo";
import { IoWalletOutline } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import { TiHome } from "react-icons/ti";
import {
  MdCardGiftcard,
  MdCurrencyExchange,
  MdDataUsage,
  MdElectricBolt,
  MdLayers,
  MdRocketLaunch,
  MdScience,
  MdStream,
  MdSwapCalls,
  MdToll,
  MdWaves,
} from "react-icons/md";
import { HiSparkles } from "react-icons/hi";
import { AVAILABLE_NETWORKS } from "@/constants";
import SelectNetworkNavContent from "@/components/SelectNetwork/SelectNetworkNavContent";
import NavbarSettings from "./NavbarSettings";
import { useState } from "react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import ConnectWalletDialog from "@/components/ConnectWalletDialog";
import { ListItem, ListItemsContainer } from "@/components/NavDropdown";
import { PiCodesandboxLogoBold } from "react-icons/pi";
import { FaEthereum } from "react-icons/fa";
import { useActiveNetwork } from "@/context/ActiveNetworkContext";
import useImageTheme from "@/hooks/useImageTheme";
import NavLinkWithIcon from "./NavLinkWithIcon";

export default function NavbarLarge() {
  const [activeNetwork] = useActiveNetwork();
  const [settingsIsVisible, setSettingsIsVisible] = useState(false);
  const logoTheme = useImageTheme();

  return (
    <nav className="hidden lg:flex fixed left-0 right-0 justify-between mx-12 my-2 bg-card/85 px-4 rounded-3xl shadow-md">
      <NavigationMenu>
        <NavigationMenuList className="space-x-0">
          <NavigationMenuItem className="mr-1">
            <NavigationMenuLink href="/intro">
              <Logo />
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavLinkWithIcon to="/home" title="Home" icon={TiHome} />
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavLinkWithIcon to="/swap" title="Trade" icon={MdSwapCalls} />
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavLinkWithIcon
              isMenuTrigger={true}
              to="/pool"
              title="Pool"
              icon={MdWaves}
            />
            <NavigationMenuContent>
              <ListItemsContainer>
                <ListItem href="/pools" title="Pools" logo={MdToll}>
                  Explore all pools on SyncSwap
                </ListItem>
                <ListItem href="/pool" title="Position" logo={MdWaves}>
                  View and manage your liquidity positions
                </ListItem>
                <ListItem
                  href="/pool/earnings"
                  title="Earnings"
                  logo={MdStream}
                >
                  View your earnings and manage rewards
                </ListItem>
                <ListItem href="/pool/wizard" title="Wizard" logo={MdScience}>
                  Find the best pools in a few clicks
                </ListItem>
              </ListItemsContainer>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {activeNetwork === AVAILABLE_NETWORKS.zkSync && (
            <NavigationMenuItem>
              <NavLinkWithIcon
                to="/rewards"
                isMenuTrigger={true}
                title="Explore"
                icon={HiSparkles}
              />

              <NavigationMenuContent>
                <ListItemsContainer>
                  <ListItem
                    href="/rewards"
                    title="Loyalty Program"
                    logo={MdCardGiftcard}
                  >
                    Trade to earn loyalty rewards
                  </ListItem>
                  <ListItem
                    href="/wrapper"
                    title="404 Wrapper"
                    logo={PiCodesandboxLogoBold}
                  >
                    Wrap LIBERTAS OMNIBUS NFTs
                  </ListItem>
                  <ListItem
                    href="/usdc-conversion"
                    title="USDC Conversion"
                    logo={MdCurrencyExchange}
                  >
                    Convert USDC.e to native USDC
                  </ListItem>
                  <ListItem href="/staking" title="Staking" logo={FaEthereum}>
                    Stake and earn rewards on your tokens
                  </ListItem>
                </ListItemsContainer>
              </NavigationMenuContent>
            </NavigationMenuItem>
          )}

          <NavigationMenuItem>
            <NavLinkWithIcon
              to="/launch"
              title="Launch"
              icon={MdRocketLaunch}
            />
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavLinkWithIcon
              to="/dashboard"
              title="Portfolio"
              icon={MdDataUsage}
            />
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavLinkWithIcon
              to="/bridge"
              isMenuTrigger={true}
              title="Bridge"
              icon={MdLayers}
            />
            <NavigationMenuContent>
              <ListItemsContainer>
                <ListItem href="/move" title="Move" logo={MdElectricBolt}>
                  Securely and easily move assets to zkSync
                </ListItem>

                <ListItem href="/bridge" title="Bridges" logo={MdLayers}>
                  Explore the best bridges across blockchain
                </ListItem>
              </ListItemsContainer>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent">
              <img
                className="w-6"
                src={activeNetwork.logoUrl[logoTheme]}
                alt={`${activeNetwork.name} logo`}
              />
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <SelectNetworkNavContent />
            </NavigationMenuContent>
          </NavigationMenuItem>

          <Dialog>
            <DialogTrigger asChild>
              <NavigationMenuItem className="cursor-pointer inline-flex items-center justify-center py-2 transition-all border border-transparent hover:border-border hover:shadow-hover hover:bg-primary/[0.04] active:scale-90 transition-transform mx-1 h-10 text-primary px-5 text-sm font-medium rounded-full">
                <NavigationMenuLink className="flex">
                  <IoWalletOutline className="mr-1" size={20} />
                  Connect
                </NavigationMenuLink>
              </NavigationMenuItem>
            </DialogTrigger>
            <ConnectWalletDialog />
          </Dialog>

          <NavigationMenuItem className="relative">
            <NavigationMenuLink
              onClick={() => setSettingsIsVisible(!settingsIsVisible)}
              className="cursor-pointer inline-flex items-center justify-center py-2 transition-all active:scale-90 hover:bg-accent focus:bg-accent focus:text-accent-foreground focus:outline-none data-[isActive]:bg-accent/50 data-[state=open]:bg-accent/50 mx-1 w-max h-10 text-card-foreground hover:text-primary px-2 text-sm font-medium rounded-full"
            >
              <BsThreeDots size={20} />
            </NavigationMenuLink>

            {settingsIsVisible && (
              <NavbarSettings
                className="animate-fade-in absolute top-14 right-0"
                handleCloseSettings={() => setSettingsIsVisible(false)}
              />
            )}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}
