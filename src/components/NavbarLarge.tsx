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
import { NavLink } from "react-router-dom";
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
import type { AppContextType } from "@/types/index";
import SelectNetworkNavContent from "@/components/SelectNetwork/SelectNetworkNavContent";
import NavbarSettings from "./NavbarSettings";
import { useState } from "react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import ConnectWalletDialog from "@/components/ConnectWalletDialog";
import { ListItem, ListItemsContainer } from "@/components/NavDropdown";
import { PiCodesandboxLogoBold } from "react-icons/pi";
import { FaEthereum } from "react-icons/fa";

interface Props {
  appContext: AppContextType;
}

export default function NavbarLarge({ appContext, ...props }: Props) {
  const { selectedNetwork, setSelectedNetwork } = appContext;
  const [settingsIsVisible, setSettingsIsVisible] = useState(false);

  return (
    <nav className="hidden lg:flex fixed left-0 right-0 justify-between mx-12 my-2 bg-card/85 px-4 rounded-3xl shadow-md">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink href="/intro">
              <Logo />
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavLink
              to="/home"
              className={({ isActive }) => {
                const base =
                  "group inline-flex gap-x-1 items-center justify-center py-2 transition-colors hover:bg-accent focus:bg-accent focus:text-accent-foreground focus:outline-none data-[isActive]:bg-accent/50 data-[state=open]:bg-accent/50 mx-1 w-max h-10 text-card-foreground hover:text-primary px-3 text-sm font-medium rounded-full";
                return (isActive ? "text-primary " : "").concat(base);
              }}
            >
              <TiHome
                size={25}
                className="hidden group-[.text-primary]:block text-primary p-1 bg-gray-100 rounded-md"
              />
              <span>Home</span>
            </NavLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavLink
              to="/swap"
              className={({ isActive }) => {
                const base =
                  "group inline-flex gap-x-1 items-center justify-center py-2 transition-colors hover:bg-accent focus:bg-accent focus:text-accent-foreground focus:outline-none data-[isActive]:bg-accent/50 data-[state=open]:bg-accent/50 mx-1 w-max h-10 text-card-foreground hover:text-primary px-3 text-sm font-medium rounded-full";
                return (isActive ? "text-primary " : "").concat(base);
              }}
            >
              <MdSwapCalls
                size={25}
                className="hidden group-[.text-primary]:block text-primary p-1 bg-gray-100 rounded-md"
              />
              <span>Trade</span>
            </NavLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavLink
              to="/pool"
              className={({ isActive }) => {
                return (isActive ? "text-primary " : "").concat("group");
              }}
            >
              <NavigationMenuTrigger className="bg-transparent hover:bg-accent focus:bg-accent focus:text-accent-foreground focus:outline-none data-[isActive]:bg-accent data-[state=open]:bg-accent mx-1 w-max h-10 text-card-foreground hover:text-primary px-3 text-sm font-medium rounded-full">
                <MdWaves
                  size={25}
                  className="hidden group-[.text-primary]:block text-primary p-1 bg-gray-100 rounded-md"
                />
                Pool
              </NavigationMenuTrigger>
            </NavLink>
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

          {selectedNetwork === AVAILABLE_NETWORKS.zkSync && (
            <NavigationMenuItem>
              <NavLink
                to="/rewards"
                className={({ isActive }) => {
                  return (isActive ? "text-primary " : "").concat("group");
                }}
              >
                <NavigationMenuTrigger className="bg-transparent hover:bg-accent focus:bg-accent focus:text-accent-foreground focus:outline-none data-[isActive]:bg-accent data-[state=open]:bg-accent mx-1 w-max h-10 text-card-foreground hover:text-primary px-3 text-sm font-medium rounded-full">
                  <HiSparkles
                    size={25}
                    className="hidden group-[.text-primary]:block text-primary p-1 bg-gray-100 rounded-md"
                  />
                  Explore
                </NavigationMenuTrigger>
              </NavLink>

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
            <NavLink
              to="/launch"
              className={({ isActive }) => {
                const base =
                  "group inline-flex gap-x-1 items-center justify-center py-2 transition-colors hover:bg-accent focus:bg-accent focus:text-accent-foreground focus:outline-none data-[isActive]:bg-accent/50 data-[state=open]:bg-accent/50 mx-1 w-max h-10 text-card-foreground hover:text-primary px-3 text-sm font-medium rounded-full";
                return (isActive ? "text-primary " : "").concat(base);
              }}
            >
              <MdRocketLaunch
                size={25}
                className="hidden group-[.text-primary]:block text-primary p-1 bg-gray-100 rounded-md"
              />
              <span>Launch</span>
            </NavLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavLink
              to="/dashboard"
              className={({ isActive }) => {
                const base =
                  "group inline-flex gap-x-1 items-center justify-center py-2 transition-colors hover:bg-accent focus:bg-accent focus:text-accent-foreground focus:outline-none data-[isActive]:bg-accent/50 data-[state=open]:bg-accent/50 mx-1 w-max h-10 text-card-foreground hover:text-primary px-3 text-sm font-medium rounded-full";
                return (isActive ? "text-primary " : "").concat(base);
              }}
            >
              <MdDataUsage
                size={25}
                className="hidden group-[.text-primary]:block text-primary p-1 bg-gray-100 rounded-md"
              />
              <span>Portfolio</span>
            </NavLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavLink
              to="/bridge"
              className={({ isActive }) => {
                return (isActive ? "text-primary " : "").concat("group");
              }}
            >
              <NavigationMenuTrigger className="bg-transparent hover:bg-accent focus:bg-accent focus:text-accent-foreground focus:outline-none data-[isActive]:bg-accent data-[state=open]:bg-accent mx-1 w-max h-10 text-card-foreground hover:text-primary px-3 text-sm font-medium rounded-full">
                <MdLayers
                  size={25}
                  className="hidden group-[.text-primary]:block text-primary p-1 bg-gray-100 rounded-md"
                />
                Bridge
              </NavigationMenuTrigger>
            </NavLink>

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
                className="w-5"
                src={selectedNetwork.logoUrl}
                alt={`${selectedNetwork.name} logo`}
              />
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <SelectNetworkNavContent
                selectedNetwork={selectedNetwork}
                setSelectedNetwork={setSelectedNetwork}
              />
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
                {...props}
                handleCloseSettings={() => setSettingsIsVisible(false)}
              />
            )}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}
