import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from "@/components/ui/navigation-menu"
import Logo from "@/components/Logo"
import { IoWalletOutline } from "react-icons/io5"
import { BsThreeDots } from "react-icons/bs"
import { TiHome } from "react-icons/ti";
import { NavLink } from "react-router-dom"
import { MdDataUsage, MdLayers, MdRocketLaunch, MdSwapCalls, MdWaves } from "react-icons/md"
import { HiSparkles } from "react-icons/hi"
import { AVAILABLE_NETWORKS } from "@/constants";
import type { AppContextType } from "@/types/index";
import SelectNetworkNavContent from "./SelectNetworkNavContent"
import NavbarSettings from "./NavbarSettings";
import { useState } from "react";

export default function Navbar({ selectedNetwork, setSelectedNetwork }: AppContextType) {
  const [settingsIsVisible, setSettingsIsVisible] = useState(false);

  return (
    <nav className="hidden lg:flex fixed left-0 right-0 justify-between mx-12 my-2 bg-white/85 px-4 rounded-3xl shadow-md">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink href="/intro">
              <Logo />
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavLink to="/home" className={({ isActive }) => {
              const base = "group inline-flex gap-x-1 items-center justify-center bg-background py-2 transition-colors hover:bg-accent focus:bg-accent focus:text-accent-foreground focus:outline-none data-[isActive]:bg-accent/50 data-[state=open]:bg-accent/50 mx-1 w-max h-10 text-gray-500 hover:text-primary px-3 text-sm font-medium rounded-full";
              return (isActive ? 'text-primary ' : '').concat(base)
            }}>
              <TiHome size={25} className="hidden group-[.text-primary]:block text-primary p-1 bg-gray-100 rounded-md" />
              <span>Home</span>
            </NavLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavLink to="/swap" className={({ isActive }) => {
              const base = "group inline-flex gap-x-1 items-center justify-center bg-background py-2 transition-colors hover:bg-accent focus:bg-accent focus:text-accent-foreground focus:outline-none data-[isActive]:bg-accent/50 data-[state=open]:bg-accent/50 mx-1 w-max h-10 text-gray-500 hover:text-primary px-3 text-sm font-medium rounded-full";
              return (isActive ? 'text-primary ' : '').concat(base)
            }}>
              <MdSwapCalls size={25} className="hidden group-[.text-primary]:block text-primary p-1 bg-gray-100 rounded-md" />
              <span>Trade</span>
            </NavLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavLink to="/pool" className={({ isActive }) => {
              return (isActive ? 'text-primary ' : '').concat('group')
            }}>
              <NavigationMenuTrigger className="mx-1 w-max h-10 text-gray-500 hover:text-primary px-3 text-sm font-medium rounded-full">
                <MdWaves size={25} className="hidden group-[.text-primary]:block text-primary p-1 bg-gray-100 rounded-md" />
                Pool
              </NavigationMenuTrigger>
            </NavLink>
          </NavigationMenuItem>

          {selectedNetwork === AVAILABLE_NETWORKS.zkSync &&
            <NavigationMenuItem>
              <NavLink to="/explore" className={({ isActive }) => {
                return (isActive ? 'text-primary ' : '').concat('group')
              }}>
                <NavigationMenuTrigger className="mx-1 w-max h-10 text-gray-500 hover:text-primary px-3 text-sm font-medium rounded-full">
                  <HiSparkles size={25} className="hidden group-[.text-primary]:block text-primary p-1 bg-gray-100 rounded-md" />
                  Explore
                </NavigationMenuTrigger>
              </NavLink>
            </NavigationMenuItem>
          }

          <NavigationMenuItem>
            <NavLink to="/launch" className={({ isActive }) => {
              const base = "group inline-flex gap-x-1 items-center justify-center bg-background py-2 transition-colors hover:bg-accent focus:bg-accent focus:text-accent-foreground focus:outline-none data-[isActive]:bg-accent/50 data-[state=open]:bg-accent/50 mx-1 w-max h-10 text-gray-500 hover:text-primary px-3 text-sm font-medium rounded-full";
              return (isActive ? 'text-primary ' : '').concat(base)
            }}>
              <MdRocketLaunch size={25} className="hidden group-[.text-primary]:block text-primary p-1 bg-gray-100 rounded-md" />
              <span>Launch</span>
            </NavLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavLink to="/dashboard" className={({ isActive }) => {
              const base = "group inline-flex gap-x-1 items-center justify-center bg-background py-2 transition-colors hover:bg-accent focus:bg-accent focus:text-accent-foreground focus:outline-none data-[isActive]:bg-accent/50 data-[state=open]:bg-accent/50 mx-1 w-max h-10 text-gray-500 hover:text-primary px-3 text-sm font-medium rounded-full";
              return (isActive ? 'text-primary ' : '').concat(base)
            }}>
              <MdDataUsage size={25} className="hidden group-[.text-primary]:block text-primary p-1 bg-gray-100 rounded-md" />
              <span>Portfolio</span>
            </NavLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavLink to="/bridge" className={({ isActive }) => {
              return (isActive ? 'text-primary ' : '').concat('group')
            }}>
              <NavigationMenuTrigger className="w-max h-10 text-gray-500 hover:text-primary px-3 text-sm font-medium rounded-full">
                <MdLayers size={25} className="hidden group-[.text-primary]:block text-primary p-1 bg-gray-100 rounded-md" />
                Bridge
              </NavigationMenuTrigger>
            </NavLink>
          </NavigationMenuItem>

        </NavigationMenuList>
      </NavigationMenu>

      <NavigationMenu>
        <NavigationMenuList>

          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <img className="w-5" src={selectedNetwork.logoUrl} alt={`${selectedNetwork.name} logo`} />
            </NavigationMenuTrigger>
            <NavigationMenuContent className="backdrop-blur">
              <SelectNetworkNavContent selectedNetwork={selectedNetwork} setSelectedNetwork={setSelectedNetwork} />
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem className="cursor-pointer inline-flex items-center justify-center bg-background py-2 transition-all hover:border-primary hover:border-1.5 hover:shadow-primary hover:shadow-md focus:bg-accent focus:text-accent-foreground focus:outline-none data-[isActive]:bg-accent/50 data-[state=open]:bg-accent/50 mx-1 w-max h-10 text-primary px-3 text-sm font-medium rounded-full">
            <NavigationMenuLink className="flex">
              <IoWalletOutline className="mr-1" size={20} />
              Connect
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem className="relative">
            <NavigationMenuLink
              className="cursor-pointer inline-flex items-center justify-center bg-background py-2 transition-all active:scale-90 hover:bg-accent focus:bg-accent focus:text-accent-foreground focus:outline-none data-[isActive]:bg-accent/50 data-[state=open]:bg-accent/50 mx-1 w-max h-10 text-gray-500 hover:text-primary px-2 text-sm font-medium rounded-full"
              onClick={() => setSettingsIsVisible(!settingsIsVisible)}
            >
              <BsThreeDots size={20} />
            </NavigationMenuLink>

            {settingsIsVisible && <NavbarSettings className="animate-fade-in absolute top-14 right-0" />}
          </NavigationMenuItem>

        </NavigationMenuList>
      </NavigationMenu>

    </nav >
  )
}
