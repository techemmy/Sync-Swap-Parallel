import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import Logo from "@/components/Logo"
import { CgArrowsExchangeAlt } from "react-icons/cg"
import { IoWalletOutline } from "react-icons/io5"
import { BsThreeDots } from "react-icons/bs"

export default function Navbar() {
  return (
    <nav className="hidden lg:flex justify-between mx-5 my-2 bg-white/85 px-4 rounded-3xl shadow-md">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink href="/">
              <Logo />
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink href="/" className="group inline-flex items-center justify-center bg-background py-2 transition-colors hover:bg-accent focus:bg-accent focus:text-accent-foreground focus:outline-none data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 mx-1 w-max h-10 text-gray-500 hover:text-primary px-3 text-sm font-medium rounded-full">
              Home
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink href="/trade" className="group inline-flex items-center justify-center bg-background py-2 transition-colors hover:bg-accent focus:bg-accent focus:text-accent-foreground focus:outline-none data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 mx-1 w-max h-10 text-gray-500 hover:text-primary px-3 text-sm font-medium rounded-full">
              Trade
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink href="/pool">
              <NavigationMenuTrigger className="mx-1 w-max h-10 text-gray-500 hover:text-primary px-3 text-sm font-medium rounded-full">
                Pool
              </NavigationMenuTrigger>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink href="/explore">
              <NavigationMenuTrigger className="mx-1 w-max h-10 text-gray-500 hover:text-primary px-3 text-sm font-medium rounded-full">
                Explore
              </NavigationMenuTrigger>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink href="/launch" className="group inline-flex items-center justify-center bg-background py-2 transition-colors hover:bg-accent focus:bg-accent focus:text-accent-foreground focus:outline-none data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 mx-1 w-max h-10 text-gray-500 hover:text-primary px-3 text-sm font-medium rounded-full">
              Launch
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink href="/portfolio" className="group inline-flex items-center justify-center bg-background py-2 transition-colors hover:bg-accent focus:bg-accent focus:text-accent-foreground focus:outline-none data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 mx-1 w-max h-10 text-gray-500 hover:text-primary px-3 text-sm font-medium rounded-full">
              Portfolio
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink href="/bridge">
              <NavigationMenuTrigger className="w-max h-10 text-gray-500 hover:text-primary px-3 text-sm font-medium rounded-full">
                Bridge
              </NavigationMenuTrigger>
            </NavigationMenuLink>
          </NavigationMenuItem>

        </NavigationMenuList>
      </NavigationMenu>

      <NavigationMenu>
        <NavigationMenuList>

          <NavigationMenuItem>
            <NavigationMenuTrigger> <CgArrowsExchangeAlt size={30} /> </NavigationMenuTrigger>
          </NavigationMenuItem>

          <NavigationMenuItem className="cursor-pointer inline-flex items-center justify-center bg-background py-2 transition-all hover:border-primary hover:border-1.5 hover:shadow-primary hover:shadow-md focus:bg-accent focus:text-accent-foreground focus:outline-none data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 mx-1 w-max h-10 text-primary px-3 text-sm font-medium rounded-full">
            <NavigationMenuLink className="flex">
              <IoWalletOutline className="mr-1" size={20} />
              Connect
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink className="cursor-pointer inline-flex items-center justify-center bg-background py-2 transition-colors hover:bg-accent focus:bg-accent focus:text-accent-foreground focus:outline-none data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 mx-1 w-max h-10 text-gray-500 hover:text-primary px-2 text-sm font-medium rounded-full">
              <BsThreeDots size={20} />
            </NavigationMenuLink>
          </NavigationMenuItem>

        </NavigationMenuList>
      </NavigationMenu>

    </nav>
  )
}
