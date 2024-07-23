import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuLink } from "@/components/ui/navigation-menu"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import SelectTokenDialog from "@/components/SelectTokenDialog";
import { FaRotate } from "react-icons/fa6";
import { MdDataUsage, MdLayers, MdRocketLaunch, MdToll, MdWaves } from "react-icons/md";

export default function NavbarSidebar({ visible }: { visible: boolean }) {
    return (
        <section className={`w-56 bg-white flex flex-col h-screen fixed shadow-xl z-50 -translate-x-60 duration-300 transition-transform ${visible && "translate-x-0"}`}>
            <NavigationMenu orientation="vertical">
                <NavigationMenuList className="w-full mt-12 flex flex-col gap-y-4 fixed top-0">

                    <NavigationMenuItem className="pl-6 pr-2 w-full">
                        <NavigationMenuLink href="/swap" className="font-medium w-full text-primary group gap-x-4 inline-flex items-center bg-background py-2 transition-colors hover:bg-accent focus:bg-accent focus:text-accent-foreground focus:outline-none data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 h-10 px-3 w-full">
                            <FaRotate className="w-5 h-5 pl-1" />
                            Trade
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem className="pl-6 pr-2 w-full">
                        <NavigationMenuLink href="#" className="font-medium w-full text-primary group gap-x-4 inline-flex items-center bg-background py-2 transition-colors hover:bg-accent focus:bg-accent focus:text-accent-foreground focus:outline-none data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 h-10 px-3 w-full">
                            <MdToll className="w-6 h-6" />
                            Pools
                        </NavigationMenuLink>
                    </NavigationMenuItem>


                    <NavigationMenuItem className="pl-6 pr-2 w-full">
                        <NavigationMenuLink href="#" className="font-medium w-full text-primary group gap-x-4 inline-flex items-center bg-background py-2 transition-colors hover:bg-accent focus:bg-accent focus:text-accent-foreground focus:outline-none data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 h-10 px-3 w-full">
                            <MdWaves className="w-6 h-6" />
                            Positions
                        </NavigationMenuLink>
                    </NavigationMenuItem>


                    <NavigationMenuItem className="pl-6 pr-2 w-full">
                        <NavigationMenuLink href="#" className="font-medium w-full text-primary group gap-x-4 inline-flex items-center bg-background py-2 transition-colors hover:bg-accent focus:bg-accent focus:text-accent-foreground focus:outline-none data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 h-10 px-3 w-full">
                            <MdRocketLaunch className="w-6 h-6" />
                            Launch
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem className="pl-6 pr-2 w-full">
                        <NavigationMenuLink href="#" className="font-medium w-full text-primary group gap-x-4 inline-flex items-center bg-background py-2 transition-colors hover:bg-accent focus:bg-accent focus:text-accent-foreground focus:outline-none data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 h-10 px-3 w-full">
                            <MdDataUsage className="w-6 h-6" />
                            Portfolio
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem className="pl-6 pr-2 w-full">
                        <NavigationMenuLink href="#" className="font-medium w-full text-primary group gap-x-4 inline-flex items-center bg-background py-2 transition-colors hover:bg-accent focus:bg-accent focus:text-accent-foreground focus:outline-none data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 h-10 px-3 w-full">
                            <MdLayers className="w-6 h-6" />
                            Bridge
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                </NavigationMenuList>
            </NavigationMenu>

            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="outline" className="mx-auto p-2 mb-8 transition-transform active:scale-90 border-transparent hover:border-border hover:shadow-hover w-[90px] rounded-3xl flex gap-x-3">
                        <img className="border-[50%] w-6 h-6" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAS1BMVEUAAABhfephfetifephfepifupffO9hfuphfuxifethfuphfu5ifurBzPf///+Bl+5rhuu5xvaOovB3j+2su/SdrvLY3/r29/7q7v2nxo4HAAAADHRSTlMAvEPkz4ASmDVlqyG03JyqAAAEVklEQVR42s1ba3OjMAz0i1ewwQYM+f+/9K6TuzoN5GqtTLn92OmMN2j1sCQLCHXbNdIYre1vaG2MbLq2Fj8DVUltD6Flpc4/3H6DE0moRtss6EadePo1HJS0ZMhyFDpjIZiuzK83Fobhf4VeWhZkLzioG8tGVTOMr20BaFQKtbSFIGtIfNoWg24FGZUtCrIZGlsYjSDhZovjxpQfHzL/fGNPgcl0hl7bk6D7rN+v7WnQNeH7X2UFaU+FBPzvR72xsqej+mf8t1RMo6VClXQAfw8cV+ALMAxuwoXIF8A8DM75UjJoLRnrB4HFktGKIxhLRRw+CDi6Do04QGep8NuDQPAl6pPakuGGBwEXEU/gl0Dj8JeAm/kFkgIUmAgAOlRsBS5DIgAEA8P9APOWCEA6VMwYuA6JAKRDyYtB05AIgDpsWVXA/ZXAwqkMekSBiQCqwx7PQvO2J+A8npMMoMBEADaCgSUYhwSXMKIybIAkdEQgeDAea3IZtCOA6VBjUXAcdgTQYKAgH1jfE1ggP5BoCNgTcBMSjtEQkAjgOgQk4IZjAlhSUmQJTMOeAEOHFTkM3r8jEMgiwBWYCOA6JGbCeXjFujjH0WFP0+D6enxw4xg5OlSigxW4ufCRgX4jBufApNRRMpF/VuDdhcdpY6IAGKESNygJrZ8Hjn8wLZAObwQvHL8enwjsKXiCHxp6IR6+GPwJUwzUpGTyCcQ/pk/YEUhiGPMJaEIZlI7fEUiIC0WHWhCS0OrcNwSSGGJpAlM6fkfgiEJ2UsolEJzLIZCQ64q5GvCRRmDONoHOTkRLPoHZ20xoSjkwhkwC3gJxIAd+yiHgadczmWmAd1J4Z/xMGjI3G07OH0vh2Pg+Zqqwya5Jw7b85RLeEvCf/xKz03GXn4vu04EdDr7+GPKzUSdayo1knXd22Bt/oZQkrahpXYHgX1zy5ev7SCvKaiGIl6ItfpVCOj79MZIu6JJYE75I4fPrJ8sET7qYVPTOgHuSwrPrpdsZ5WqmgIvRtnxK4fnrPzBROxTQzeQevwa8MUBNCvEBifWn1vEwUwZPblBU6PXc+aPARG/RKLhBsS270ByRlr3FOwT3aQ54l0pDjcpxe98fCDPUqFRgo3ZPYAKHJprRp2J0qHRq11/TK652AwvIF/FGbY+PbJYjAhNjmaPFJxbJA1kjdAnPbJIAWNssCh6a4OMS5ujWMQeXkje8Ti0zdGrYsjeYxmcCMzq+5w8vwaFlXWKHZsU3KDrWEgt/h8SU2uN6EJhLbXM1wCLVkAQAKJBvhHVwi8UNwPeEeQseHNsXkkGE1/lAGfDR/EcrnbgQccjL13qvXmy+erX78uX2XMgL9HfxA4fzV6wrziMbPrTCnhkVf2h0kRkqAaI1RbyvFTi6Qk+ccNRMh2xqwUUrGeIDvz5OAT++PAXZXvruVp7x9DhbjzclzkGtGp3x5LkWZ6Lv/mEM2fXiJ9Crrnp9/l91Cjr8F3ZnbI+8pv7pAAAAAElFTkSuQmCC" />
                        <p className="text-center">ETH</p>
                    </Button>
                </DialogTrigger>

                <SelectTokenDialog />
            </Dialog>
        </section>
    )
}

