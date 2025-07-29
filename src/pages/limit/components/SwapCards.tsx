import SelectTokenDialog from "@/components/SelectTokenDialog";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { FaArrowDown } from "react-icons/fa";
import { MdKeyboardArrowDown, MdOutlineInfo } from "react-icons/md";
import { useState } from "react";
import ConnectWalletDialogButton from "@/components/ConnectWalletDialogButton";
import { NavLink } from "react-router-dom";
import { TbArrowsExchange2 } from "react-icons/tb";
import { IoLockOpenOutline } from "react-icons/io5";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { PiCaretDownBold } from "react-icons/pi";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Top4Tokens from "@/pages/trade/components/Top4Tokens";

const DURATIONS = [
  "1 Minute",
  "10 Minutes",
  "1 Hour",
  "1 Day",
  "3 Days",
  "30 Days",
  "3 Months",
  "6 Months",
  "1 Year",
  "2 Years",
  "3 Years",
];

export default function SwapCards() {
  const [firstTokenDialogIsOpen, setFirstTokenDialogIsOpen] = useState(false);
  const [secondTokenDialogIsOpen, setSecondTokenDialogIsOpen] = useState(false);
  const [duration, setDuration] = useState<string>(DURATIONS[1]);
  const [customTimeDialogOpen, setCustomTimeDialogOpen] = useState(false);
  const [customHours, setCustomHours] = useState("");
  const [customMinutes, setCustomMinutes] = useState("");

  const handleSetCustomTime = () => {
    const hours = parseInt(customHours) || 0;
    const minutes = parseInt(customMinutes) || 0;

    if ((hours === 0 && minutes === 0) || minutes > 60) {
      return;
    }

    let customDuration = "";
    if (hours > 0 && minutes > 0) {
      customDuration = `${hours} Hour${hours > 1 ? "s" : ""} ${minutes} Minute${
        minutes > 1 ? "s" : ""
      }`;
    } else if (hours > 0) {
      customDuration = `${hours} Hour${hours > 1 ? "s" : ""}`;
    } else if (minutes > 0) {
      customDuration = `${minutes} Minute${minutes > 1 ? "s" : ""}`;
    }

    if (customDuration) {
      setDuration(customDuration);
      setCustomTimeDialogOpen(false);
      setCustomHours("");
      setCustomMinutes("");
    }
  };

  const handleCancelCustomTime = () => {
    setCustomTimeDialogOpen(false);
    setCustomHours("");
    setCustomMinutes("");
  };

  return (
    <section className="grid gap-y-1 px-1">
      <div className="relative">
        <Card className="grid gap-y-4 mt-2 border-0 shadow rounded-3xl bg-card/70 px-5 py-4">
          <CardHeader className="flex flex-row justify-between items-center p-0">
            <p className="text-sm font-medium text-primary">You pay</p>
            <Top4Tokens />
          </CardHeader>

          <CardContent className="p-0 flex flex-col gap-y-1">
            <div className="flex flex-row justify-between">
              <input
                type="text"
                placeholder="0.0"
                className="text-primary-foreground bg-transparent w-0 flex-grow text-3xl outline-none"
              />
              <Dialog
                open={firstTokenDialogIsOpen}
                onOpenChange={setFirstTokenDialogIsOpen}
              >
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="gap-x-2 transition-transform active:scale-90 border-card hover:border-border shadow hover:shadow-hover p-2 min-w-[110px] rounded-3xl flex flex-row justify-between"
                  >
                    <img
                      className="border-[50%] w-6 h-6"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAS1BMVEUAAABhfephfetifephfepifupffO9hfuphfuxifethfuphfu5ifurBzPf///+Bl+5rhuu5xvaOovB3j+2su/SdrvLY3/r29/7q7v2nxo4HAAAADHRSTlMAvEPkz4ASmDVlqyG03JyqAAAEVklEQVR42s1ba3OjMAz0i1ewwQYM+f+/9K6TuzoN5GqtTLn92OmMN2j1sCQLCHXbNdIYre1vaG2MbLq2Fj8DVUltD6Flpc4/3H6DE0moRtss6EadePo1HJS0ZMhyFDpjIZiuzK83Fobhf4VeWhZkLzioG8tGVTOMr20BaFQKtbSFIGtIfNoWg24FGZUtCrIZGlsYjSDhZovjxpQfHzL/fGNPgcl0hl7bk6D7rN+v7WnQNeH7X2UFaU+FBPzvR72xsqej+mf8t1RMo6VClXQAfw8cV+ALMAxuwoXIF8A8DM75UjJoLRnrB4HFktGKIxhLRRw+CDi6Do04QGep8NuDQPAl6pPakuGGBwEXEU/gl0Dj8JeAm/kFkgIUmAgAOlRsBS5DIgAEA8P9APOWCEA6VMwYuA6JAKRDyYtB05AIgDpsWVXA/ZXAwqkMekSBiQCqwx7PQvO2J+A8npMMoMBEADaCgSUYhwSXMKIybIAkdEQgeDAea3IZtCOA6VBjUXAcdgTQYKAgH1jfE1ggP5BoCNgTcBMSjtEQkAjgOgQk4IZjAlhSUmQJTMOeAEOHFTkM3r8jEMgiwBWYCOA6JGbCeXjFujjH0WFP0+D6enxw4xg5OlSigxW4ufCRgX4jBufApNRRMpF/VuDdhcdpY6IAGKESNygJrZ8Hjn8wLZAObwQvHL8enwjsKXiCHxp6IR6+GPwJUwzUpGTyCcQ/pk/YEUhiGPMJaEIZlI7fEUiIC0WHWhCS0OrcNwSSGGJpAlM6fkfgiEJ2UsolEJzLIZCQ64q5GvCRRmDONoHOTkRLPoHZ20xoSjkwhkwC3gJxIAd+yiHgadczmWmAd1J4Z/xMGjI3G07OH0vh2Pg+Zqqwya5Jw7b85RLeEvCf/xKz03GXn4vu04EdDr7+GPKzUSdayo1knXd22Bt/oZQkrahpXYHgX1zy5ev7SCvKaiGIl6ItfpVCOj79MZIu6JJYE75I4fPrJ8sET7qYVPTOgHuSwrPrpdsZ5WqmgIvRtnxK4fnrPzBROxTQzeQevwa8MUBNCvEBifWn1vEwUwZPblBU6PXc+aPARG/RKLhBsS270ByRlr3FOwT3aQ54l0pDjcpxe98fCDPUqFRgo3ZPYAKHJprRp2J0qHRq11/TK652AwvIF/FGbY+PbJYjAhNjmaPFJxbJA1kjdAnPbJIAWNssCh6a4OMS5ujWMQeXkje8Ti0zdGrYsjeYxmcCMzq+5w8vwaFlXWKHZsU3KDrWEgt/h8SU2uN6EJhLbXM1wCLVkAQAKJBvhHVwi8UNwPeEeQseHNsXkkGE1/lAGfDR/EcrnbgQccjL13qvXmy+erX78uX2XMgL9HfxA4fzV6wrziMbPrTCnhkVf2h0kRkqAaI1RbyvFTi6Qk+ccNRMh2xqwUUrGeIDvz5OAT++PAXZXvruVp7x9DhbjzclzkGtGp3x5LkWZ6Lv/mEM2fXiJ9Crrnp9/l91Cjr8F3ZnbI+8pv7pAAAAAElFTkSuQmCC"
                    />
                    <p className="text-lg text-primary-foreground">ETH</p>
                    <MdKeyboardArrowDown width={30} />
                  </Button>
                </DialogTrigger>

                {firstTokenDialogIsOpen && <SelectTokenDialog />}
              </Dialog>
            </div>

            <div className="flex flex-row justify-between">
              <div></div>
              <NavLink to={"#"} className="text-xs hover:text-foreground">
                Ethereum
              </NavLink>
            </div>
          </CardContent>
        </Card>

        <div className="absolute z-1 inset-y-1/3 top-[30%] inset-x-1/2 left-[46%] grid justify-center items-center shadow-md transition-transform hover:rotate-180 border-4 border-card text-primary bg-accent hover:bg-primary/[.08] rounded-full cursor-pointer w-9 h-9">
          <FaArrowDown size={12} />
        </div>

        <Card className="grid gap-y-4 mt-2 border-0 shadow rounded-3xl bg-card/70 px-5 py-4">
          <CardHeader className="flex flex-row justify-between items-center p-0">
            <p className="text-sm font-medium text-primary">You receive</p>
            <Top4Tokens />
          </CardHeader>

          <CardContent className="p-0 flex flex-col gap-y-1">
            <div className="flex flex-row justify-between">
              <input
                type="text"
                placeholder="0.0"
                className="text-primary-foreground bg-transparent w-0 flex-grow text-3xl outline-none"
              />

              <Dialog
                open={secondTokenDialogIsOpen}
                onOpenChange={setSecondTokenDialogIsOpen}
              >
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="gap-x-2 transition-transform active:scale-90 border-card hover:border-border shadow hover:shadow-hover p-2 min-w-[110px] rounded-3xl flex flex-row justify-between"
                  >
                    <img
                      className="border-[50%] w-6 h-6"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAA/1BMVEUAAAAndcondcondcondcondcondcondcondcondcondcondcondcondcondcondcondcondcondcondcondcondcondcondcondcondcondcr///8odssqd8sabccldMoGYMIUacYDXsEKY8MAXMEicskQZ8UOZcQXa8YAWcAfcMj7/f73+v0/hdAuesz0+P3d6ffR4vRRkNU6gs+dwOdEiNG+1u+JtON3qd43f84yfM3v9fylxemVvOZIitJtotxWk9br8vp9rOBhmtnW5fXM3/PC2PC60+6Cr+FwpNwAVr4AULzh7PjG2/Ll7vmyzu2syuuOt+Ron9paltdOjtSNxblrAAAAGnRSTlMA792Tyyf117mvnH51XBkQ/ObBi4ltakZANWpHnZcAAAVlSURBVFjDpVdpWxoxELagtdZaq7bWLtlskt3sJSByCCggQj3x1v//W8okk+zaSmsf8gWSzLyZzPFmdmHWWFr7urJYeDcdhcWVr2tLC/81vheXnd/GcvH7W7U/rxacV0dh9fNb1IvvnZnjffGfEJ9QfSbEp7+q/1h0/jkWf8zW/+a8aXybpf8xL+V5s2cfX9f/kEkQL2K+R+zU8VkEUzM+vKa/abfdVESDZp9Kez59aLZ8IV0rsvmX84knovFBqVQ6jM1SXJ1Oz598Roi1Yeb9XR7Ub0rTsVvhZo03yrBy0EqoO8MP21afxc2SHtW8BXo8RL5F2H5ROcZ8EnRrWrZ2yT3rg3C0p1dPXWER8vVlSyep7yrBn4+UOWSqKqUHbvGrFydq46gSGITlXP4a+5Ohktrt8ICS6Vz6PIRwEocnsq/3MgSb1etfUD9o6eO76CwpmzdnbSq1c5NnZUS5yhDhyzoCFFE/So+Us7lwdbiiQSkLJ3ESuQ/za84RoYgGoEWpuFH6LDI2RnU4scFthEKFcJcY92oTVo0DOrC774cuRiSeQPj24kQSFPHja5AZGzesKoANLc+9Mog7eEOXBtXxPXit3Qp9vJMruhClk5hqgA3Q38EUSJSXjxPUD8P2UQnHWUUYG65GsHCR4Hwnc2HsggE3gdRwMT8r5cazwHulbB9MSGnmxoLeCUZaUEN74k6lzV3v/qeKvstNqFWqXAZarmCzWEaAfMPQv34dxO4pYyw8hr894aAgO4VL+Z7J5zX9J6zkgR3RhITy/elfOmkrE6jx1SVMu2jR2sIWanQgBKYAPf98Om0qOBKntWltEWpLswzORou2Flb0H9aDHELDEOD8ShIVUDIYuClxzN4ZgCPAyoImcsnhZg+Bg0MAXnk4EXEqpwhhSDM6Cx7ACaHUJI9BoOR2uvrIjBB7VNFrDg/TUDDu4PHZ3rVHMQzv9MW6cLE6OC0XFHBL7aB53GWY3lmE9rDE3iEAr0CKtkLLbJEHd8JR7nVZZkPYMoyZB2gBQAUADEJ8oVIIDRlgiZiI77Z+A2goCyI1McVEn0e9g1s0wrMUG72wAJ0YH0LlDI0PMO99ISJv0FY02Q5e9UEBw5jKGiSisOzsMxYRYFXqTypH+RxxxHEuCouYSF4Eb1HfnOKlT53OMCaayiZ9IBqamjyA6U3oYSJt5VZPQ2meIkWGIXLARR5ARqe5TNwyxcTGoNLAMNDqHtDGhChXJGDdublC2FXEI0wxLVmVPNOIe2CDxoRxLq4UV3aEqcZRvhqXDKE4ikFqYaqlooqKXbteaQx78PeEUuTuqAalgMRRsJRGxFOeEkkAx8JRu/q3Zbg2GCs5JI5iRqpSId9ydL0Ux3AnHLWB4UTq1/L27ORoPVAF2LwybUZQbe/vKiP2RylDXidXbVgaoa828g+LZKoAn8wlXC78AVgxFgF1DaUOSspOmn9Y1nGTacd1A9dmvTyC2EIlooin3tehEcHXtWgCpMw7Okwgh7HE8izhirSmGNq8jcWXzztJxbku3atUn0CdMljA0SvJ4bV6/aOYZM97vsFweah5qMOYRxRC/aI9prq8omRcVhkhTZ/06Y8Wx/WpRjhoBdAVEjdizCcEGs+k2ivpGxpqWX7ZZCECP9eRv6+HadapSr/RL+uMqNoua+m1Ns8N2QMmT49LS7G8j4t31FLb9uuNpkuTOnKhqhfkK2TGS2Hp+eOsVpc4Ih4pIvyjU21Wk9Sd3W5v5ujU65yWyg61FrhTDus3gtAls5tttAFLJuDDOiVZt37Z8YLImd1qWz/k/I69muFYC2fvP/8nz/wfXfN/9s3/4Tn/p+/8H99zf/7/AuAyihx4sIg7AAAAAElFTkSuQmCC"
                    />
                    <p className="text-lg text-primary-foreground">USDC.e</p>
                    <MdKeyboardArrowDown width={30} />
                  </Button>
                </DialogTrigger>

                {secondTokenDialogIsOpen && <SelectTokenDialog />}
              </Dialog>
            </div>

            <div className="flex flex-row justify-between">
              <p className="text-xs">~$0</p>
              <NavLink to={"#"} className="text-xs hover:text-foreground">
                Bridged USDC (zkSync)
              </NavLink>
            </div>
          </CardContent>
        </Card>

        <div className="flex sm:flex-row flex-col gap-y-2 gap-x-2">
          <Card className="w-full sm:w-2/3 grid gap-y-4 mt-2 border-0 shadow rounded-3xl bg-card/70 px-5 py-4 pb-2">
            <CardContent className="p-0 flex flex-col gap-y-1">
              <div className="flex flex-row justify-between">
                <p className="text-xs">Pay USDC.e at rate</p>
                <div className="flex gap-x-1 items-center">
                  <p className="text-xs text-blue-500 hover:text-blue-700 cursor-pointer">
                    Set to market
                  </p>
                  <IoLockOpenOutline size={13} />
                </div>
              </div>

              <div className="flex flex-row justify-between">
                <input
                  type="text"
                  placeholder="0.0"
                  className="text-primary-foreground bg-transparent w-0 flex-grow text-2xl outline-none"
                />

                <div className="flex gap-x-1 px-2 items-center cursor-pointer rounded-xl bg-card/90 hover:text-primary-foreground">
                  <p className="text-xs">WETH</p>
                  <TbArrowsExchange2 />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="w-full sm:w-1/3 grid gap-y-4 mt-2 border-0 shadow rounded-3xl bg-card/70 px-3 py-4 pb-2">
            <CardContent className="p-0 flex flex-col gap-y-1 items-end">
              <div className="flex flex-row gap-x-1">
                <p className="text-xs">Expires in</p>
                <MdOutlineInfo />
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="grid grid-cols-[auto_1fr] border-0 gap-x-2 align-items-end px-0 hover:bg-transparent min-w-0 max-w-full"
                  >
                    <p className="truncate flex-1 text-left">{duration}</p>
                    <PiCaretDownBold />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="w-48 h-48 pb-0 overflow-y-scroll overflow-x-hidden rounded-2xl"
                >
                  <DropdownMenuGroup>
                    {DURATIONS.map((durationItem) => {
                      const isActive = durationItem === duration;
                      return (
                        <DropdownMenuItem
                          key={durationItem.toLowerCase()}
                          className={`cursor-pointer ${
                            isActive ? "bg-accent" : ""
                          }`}
                          onClick={() => setDuration(durationItem)}
                        >
                          {durationItem}
                        </DropdownMenuItem>
                      );
                    })}
                  </DropdownMenuGroup>
                  <div className="sticky bottom-0 bg-card">
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      className="cursor-pointer flex-row w-full text-right"
                      onClick={() => setCustomTimeDialogOpen(true)}
                    >
                      Custom
                    </DropdownMenuItem>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>

              <Dialog
                open={customTimeDialogOpen}
                onOpenChange={setCustomTimeDialogOpen}
              >
                <DialogContent className="sm:max-w-[425px] rounded-3xl bg-card/95 border-0 shadow-lg">
                  <DialogHeader>
                    <DialogTitle className="text-lg font-semibold text-primary-foreground">
                      Set Custom Duration
                    </DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label
                          htmlFor="hours"
                          className="text-sm font-medium text-primary"
                        >
                          Hours
                        </label>
                        <input
                          id="hours"
                          type="number"
                          min="0"
                          max="8760"
                          placeholder="0"
                          value={customHours}
                          onChange={(e) => setCustomHours(e.target.value)}
                          className="w-full px-3 py-2 text-primary-foreground bg-transparent border border-border rounded-xl outline-none focus:border-primary transition-colors"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="minutes"
                          className="text-sm font-medium text-primary"
                        >
                          Minutes
                        </label>
                        <input
                          id="minutes"
                          type="number"
                          min="0"
                          max="59"
                          placeholder="0"
                          value={customMinutes}
                          onChange={(e) => setCustomMinutes(e.target.value)}
                          className="w-full px-3 py-2 text-primary-foreground bg-transparent border border-border rounded-xl outline-none focus:border-primary transition-colors"
                        />
                      </div>
                    </div>
                  </div>
                  <DialogFooter className="flex gap-2">
                    <Button
                      variant="outline"
                      onClick={handleCancelCustomTime}
                      className="flex-1 border-card border-border rounded-xl"
                    >
                      Cancel
                    </Button>
                    <Button
                      onClick={handleSetCustomTime}
                      disabled={parseInt(customMinutes) > 60}
                      className="flex-1 border-card border-border rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Set
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        </div>

        <ConnectWalletDialogButton className="w-full">
          Connect Wallet
        </ConnectWalletDialogButton>
      </div>

      <Collapsible>
        <CollapsibleTrigger className="w-full flex justify-between mt-5 px-5">
          <p className="text-xs text-primary-foreground/80 mb-2 flex gap-x-1 items-center">
            <span>USDC.e price</span>
            <PiCaretDownBold className="flex-shrink-0" />
          </p>
          <p className="text-xs mb-2 text-primary-foreground">0 USDC.e <span className="text-xs text-primary-foreground/80">~$0</span></p>
        </CollapsibleTrigger>
        <CollapsibleContent className="w-full flex justify-between px-5">
          <p className="text-xs text-primary-foreground/80 mb-2 flex gap-x-1 items-center">USDC.e price</p>
          <p className="text-xs mb-2 text-primary-foreground">0 USDC.e <span className="text-xs text-primary-foreground/80">~$0</span></p>
        </CollapsibleContent>
      </Collapsible>
    </section>
  );
}
