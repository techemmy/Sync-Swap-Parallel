import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import SelectTokenDialog from "@/components/SelectTokenDialog";
import { FaRotate } from "react-icons/fa6";
import {
  MdCardGiftcard,
  MdCurrencyExchange,
  MdDataUsage,
  MdKeyboardArrowDown,
  MdLayers,
  MdRocketLaunch,
  MdToll,
  MdWaves,
} from "react-icons/md";
import React from "react";
import { cn } from "@/lib/utils";

function NavMenuLinkItem({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <NavigationMenuItem className="w-full">
      <NavigationMenuLink
        href={href}
        className="font-medium w-full text-primary group gap-x-4 inline-flex items-center bg-background py-2 transition-colors hover:bg-accent focus:bg-accent focus:text-accent-foreground focus:outline-none data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 h-10 px-3 w-full"
      >
        {children}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
}

export default function NavbarSidebar({ visible }: { visible: boolean }) {
  return (
    <section
      className={cn(
        "fixed lg:hidden transition-transform py-8 pr-4 pl-8 min-w-48 bg-card flex flex-col h-screen shadow-xl z-50 -translate-x-80 duration-300",
        `${visible && "translate-x-0"}`,
      )}
    >
      <NavigationMenu orientation="vertical" className="items-start mt-4">
        <NavigationMenuList className="relative w-full flex flex-col gap-y-4 top-0">
          <NavMenuLinkItem href="/swap">
            <FaRotate className="w-5 h-5 pl-1" />
            Trade
          </NavMenuLinkItem>

          <NavMenuLinkItem href="/pools">
            <MdToll className="w-6 h-6" />
            Pools
          </NavMenuLinkItem>

          <NavMenuLinkItem href="/pool">
            <MdWaves className="w-6 h-6" />
            Positions
          </NavMenuLinkItem>

          <NavMenuLinkItem href="/launch">
            <MdRocketLaunch className="w-6 h-6" />
            Launch
          </NavMenuLinkItem>

          <NavMenuLinkItem href="/rewards">
            <MdCardGiftcard className="w-6 h-6" />
            Rewards
          </NavMenuLinkItem>

          <NavMenuLinkItem href="/wrapper">
            <svg
              className="fill-primary w-6 h-6"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              stroke="none"
              fill="#5155a6"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1 16.757a3.026 3.026 0 001.653 2.698l8 4a3 3 0 002.684 0l8-4A3 3 0 0023 16.77V7.23a3.026 3.026 0 00-1.665-2.686L13.337.546a3 3 0 00-2.684 0l-8 4A3.026 3.026 0 001 7.243v9.514zm20 .013a1 1 0 01-.555.895h-.002L13 21.388v-9.769l8-4v9.152zM19.77 5.998l-7.327-3.664a1 1 0 00-.896 0L9.226 3.495 17 7.382l2.77-1.384zM6.99 4.613L4.226 5.995 12 9.882 14.764 8.5 6.99 4.613zM3 7.618l8 4v9.774l-7.45-3.725h-.001a1 1 0 01-.549-.9V7.618z"
              ></path>
            </svg>
            Wrapper
          </NavMenuLinkItem>

          <NavMenuLinkItem href="/usdc-conversion">
            <MdCurrencyExchange className="w-6 h-6" />
            USDC Conversion
          </NavMenuLinkItem>

          <NavMenuLinkItem href="/dashboard">
            <MdDataUsage className="w-6 h-6" />
            Portfolio
          </NavMenuLinkItem>

          <NavMenuLinkItem href="/bridge">
            <MdLayers className="w-6 h-6" />
            Bridge
          </NavMenuLinkItem>
        </NavigationMenuList>
      </NavigationMenu>

      <Dialog>
        <Tooltip>
          <TooltipTrigger asChild>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="p-2 transition-transform active:scale-90 border-transparent hover:border-border hover:shadow-hover w-max rounded-3xl flex gap-x-3"
              >
                <img
                  className="border-[50%] w-6 h-6"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAS1BMVEUAAABhfephfetifephfepifupffO9hfuphfuxifethfuphfu5ifurBzPf///+Bl+5rhuu5xvaOovB3j+2su/SdrvLY3/r29/7q7v2nxo4HAAAADHRSTlMAvEPkz4ASmDVlqyG03JyqAAAEVklEQVR42s1ba3OjMAz0i1ewwQYM+f+/9K6TuzoN5GqtTLn92OmMN2j1sCQLCHXbNdIYre1vaG2MbLq2Fj8DVUltD6Flpc4/3H6DE0moRtss6EadePo1HJS0ZMhyFDpjIZiuzK83Fobhf4VeWhZkLzioG8tGVTOMr20BaFQKtbSFIGtIfNoWg24FGZUtCrIZGlsYjSDhZovjxpQfHzL/fGNPgcl0hl7bk6D7rN+v7WnQNeH7X2UFaU+FBPzvR72xsqej+mf8t1RMo6VClXQAfw8cV+ALMAxuwoXIF8A8DM75UjJoLRnrB4HFktGKIxhLRRw+CDi6Do04QGep8NuDQPAl6pPakuGGBwEXEU/gl0Dj8JeAm/kFkgIUmAgAOlRsBS5DIgAEA8P9APOWCEA6VMwYuA6JAKRDyYtB05AIgDpsWVXA/ZXAwqkMekSBiQCqwx7PQvO2J+A8npMMoMBEADaCgSUYhwSXMKIybIAkdEQgeDAea3IZtCOA6VBjUXAcdgTQYKAgH1jfE1ggP5BoCNgTcBMSjtEQkAjgOgQk4IZjAlhSUmQJTMOeAEOHFTkM3r8jEMgiwBWYCOA6JGbCeXjFujjH0WFP0+D6enxw4xg5OlSigxW4ufCRgX4jBufApNRRMpF/VuDdhcdpY6IAGKESNygJrZ8Hjn8wLZAObwQvHL8enwjsKXiCHxp6IR6+GPwJUwzUpGTyCcQ/pk/YEUhiGPMJaEIZlI7fEUiIC0WHWhCS0OrcNwSSGGJpAlM6fkfgiEJ2UsolEJzLIZCQ64q5GvCRRmDONoHOTkRLPoHZ20xoSjkwhkwC3gJxIAd+yiHgadczmWmAd1J4Z/xMGjI3G07OH0vh2Pg+Zqqwya5Jw7b85RLeEvCf/xKz03GXn4vu04EdDr7+GPKzUSdayo1knXd22Bt/oZQkrahpXYHgX1zy5ev7SCvKaiGIl6ItfpVCOj79MZIu6JJYE75I4fPrJ8sET7qYVPTOgHuSwrPrpdsZ5WqmgIvRtnxK4fnrPzBROxTQzeQevwa8MUBNCvEBifWn1vEwUwZPblBU6PXc+aPARG/RKLhBsS270ByRlr3FOwT3aQ54l0pDjcpxe98fCDPUqFRgo3ZPYAKHJprRp2J0qHRq11/TK652AwvIF/FGbY+PbJYjAhNjmaPFJxbJA1kjdAnPbJIAWNssCh6a4OMS5ujWMQeXkje8Ti0zdGrYsjeYxmcCMzq+5w8vwaFlXWKHZsU3KDrWEgt/h8SU2uN6EJhLbXM1wCLVkAQAKJBvhHVwi8UNwPeEeQseHNsXkkGE1/lAGfDR/EcrnbgQccjL13qvXmy+erX78uX2XMgL9HfxA4fzV6wrziMbPrTCnhkVf2h0kRkqAaI1RbyvFTi6Qk+ccNRMh2xqwUUrGeIDvz5OAT++PAXZXvruVp7x9DhbjzclzkGtGp3x5LkWZ6Lv/mEM2fXiJ9Crrnp9/l91Cjr8F3ZnbI+8pv7pAAAAAElFTkSuQmCC"
                />
                <p className="text-center">ETH</p>

                <MdKeyboardArrowDown
                  className="text-primary-foreground"
                  width={30}
                />
              </Button>
            </DialogTrigger>
          </TooltipTrigger>
          <TooltipContent>
            You can pay network fees in tokens other than Ether
          </TooltipContent>
        </Tooltip>

        <SelectTokenDialog />
      </Dialog>
    </section>
  );
}
