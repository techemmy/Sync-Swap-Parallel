import { MdKeyboardArrowDown } from "react-icons/md";
import { FaArrowDown } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import Footer from "@/components/Footer";
import GettingStartedCard from "./components/GettingStartedCard";
import ClaimZkTokenAirdropCard from "./components/ClaimZkTokenAirdropCard";
import Top4Tokens from "./components/Top4Tokens";
import ActionButtons from "./components/ActionButtons";
import SelectTokenDialog from "@/components/SelectTokenDialog";
import { useApp } from "@/App";
import { AVAILABLE_NETWORKS } from "@/constants";
import LineaVoyageSurgeCard from "./components/LineaVoyageSurgeCard";

export default function Trade() {
  const { selectedNetwork } = useApp();
  return (
    <>
      <main className="pt-32">
        <section className="relative z-[1] mx-auto max-w-[470px] grid gap-y-1 p-2">
          <ActionButtons />
          <section className="grid gap-y-1 relative">
            <Card className="grid gap-y-4 mt-2 border-0 shadow rounded-3xl bg-card/70 px-5 py-4">
              <CardHeader className="flex flex-row justify-between items-center p-0">
                <p className="text-sm font-medium text-primary">From</p>
                <Top4Tokens />
              </CardHeader>

              <CardContent className="p-0">
                <div className="flex flex-row justify-between">
                  <input
                    type="text"
                    placeholder="0.0"
                    className="text-primary-foreground bg-transparent w-0 flex-grow text-3xl outline-none"
                  />
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        className="transition-transform active:scale-90 border-card hover:border-border shadow hover:shadow-hover p-2 min-w-[110px] rounded-3xl flex flex-row justify-between"
                      >
                        <img
                          className="border-[50%] w-6 h-6"
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAS1BMVEUAAABhfephfetifephfepifupffO9hfuphfuxifethfuphfu5ifurBzPf///+Bl+5rhuu5xvaOovB3j+2su/SdrvLY3/r29/7q7v2nxo4HAAAADHRSTlMAvEPkz4ASmDVlqyG03JyqAAAEVklEQVR42s1ba3OjMAz0i1ewwQYM+f+/9K6TuzoN5GqtTLn92OmMN2j1sCQLCHXbNdIYre1vaG2MbLq2Fj8DVUltD6Flpc4/3H6DE0moRtss6EadePo1HJS0ZMhyFDpjIZiuzK83Fobhf4VeWhZkLzioG8tGVTOMr20BaFQKtbSFIGtIfNoWg24FGZUtCrIZGlsYjSDhZovjxpQfHzL/fGNPgcl0hl7bk6D7rN+v7WnQNeH7X2UFaU+FBPzvR72xsqej+mf8t1RMo6VClXQAfw8cV+ALMAxuwoXIF8A8DM75UjJoLRnrB4HFktGKIxhLRRw+CDi6Do04QGep8NuDQPAl6pPakuGGBwEXEU/gl0Dj8JeAm/kFkgIUmAgAOlRsBS5DIgAEA8P9APOWCEA6VMwYuA6JAKRDyYtB05AIgDpsWVXA/ZXAwqkMekSBiQCqwx7PQvO2J+A8npMMoMBEADaCgSUYhwSXMKIybIAkdEQgeDAea3IZtCOA6VBjUXAcdgTQYKAgH1jfE1ggP5BoCNgTcBMSjtEQkAjgOgQk4IZjAlhSUmQJTMOeAEOHFTkM3r8jEMgiwBWYCOA6JGbCeXjFujjH0WFP0+D6enxw4xg5OlSigxW4ufCRgX4jBufApNRRMpF/VuDdhcdpY6IAGKESNygJrZ8Hjn8wLZAObwQvHL8enwjsKXiCHxp6IR6+GPwJUwzUpGTyCcQ/pk/YEUhiGPMJaEIZlI7fEUiIC0WHWhCS0OrcNwSSGGJpAlM6fkfgiEJ2UsolEJzLIZCQ64q5GvCRRmDONoHOTkRLPoHZ20xoSjkwhkwC3gJxIAd+yiHgadczmWmAd1J4Z/xMGjI3G07OH0vh2Pg+Zqqwya5Jw7b85RLeEvCf/xKz03GXn4vu04EdDr7+GPKzUSdayo1knXd22Bt/oZQkrahpXYHgX1zy5ev7SCvKaiGIl6ItfpVCOj79MZIu6JJYE75I4fPrJ8sET7qYVPTOgHuSwrPrpdsZ5WqmgIvRtnxK4fnrPzBROxTQzeQevwa8MUBNCvEBifWn1vEwUwZPblBU6PXc+aPARG/RKLhBsS270ByRlr3FOwT3aQ54l0pDjcpxe98fCDPUqFRgo3ZPYAKHJprRp2J0qHRq11/TK652AwvIF/FGbY+PbJYjAhNjmaPFJxbJA1kjdAnPbJIAWNssCh6a4OMS5ujWMQeXkje8Ti0zdGrYsjeYxmcCMzq+5w8vwaFlXWKHZsU3KDrWEgt/h8SU2uN6EJhLbXM1wCLVkAQAKJBvhHVwi8UNwPeEeQseHNsXkkGE1/lAGfDR/EcrnbgQccjL13qvXmy+erX78uX2XMgL9HfxA4fzV6wrziMbPrTCnhkVf2h0kRkqAaI1RbyvFTi6Qk+ccNRMh2xqwUUrGeIDvz5OAT++PAXZXvruVp7x9DhbjzclzkGtGp3x5LkWZ6Lv/mEM2fXiJ9Crrnp9/l91Cjr8F3ZnbI+8pv7pAAAAAElFTkSuQmCC"
                        />
                        <p className="text-lg text-primary-foreground">ETH</p>
                        <MdKeyboardArrowDown width={30} />
                      </Button>
                    </DialogTrigger>

                    <SelectTokenDialog />
                  </Dialog>
                </div>
              </CardContent>

              <CardFooter className="p-0 mt-4">
                <section className="flex flex-row justify-between w-full gap-x-2">
                  <Button
                    variant="outline"
                    className="rounded-3xl text-primary border-border w-full py-1 h-auto font-normal"
                  >
                    25%
                  </Button>
                  <Button
                    variant="outline"
                    className="rounded-3xl text-primary border-border w-full py-1 h-auto font-normal"
                  >
                    50%
                  </Button>
                  <Button
                    variant="outline"
                    className="rounded-3xl text-primary border-border w-full py-1 h-auto font-normal"
                  >
                    75%
                  </Button>
                  <Button
                    variant="outline"
                    className="rounded-3xl text-primary border-border w-full py-1 h-auto font-normal"
                  >
                    100%
                  </Button>
                </section>
              </CardFooter>
            </Card>

            <div className="absolute z-1 inset-y-1/2 inset-x-1/2 left-[46%] grid justify-center items-center shadow-md transition-transform hover:rotate-180 border-4 border-white text-primary bg-accent rounded-full cursor-pointer w-9 h-9">
              <FaArrowDown size={12} />
            </div>

            <Card className="grid gap-y-4 mt-2 border-0 shadow rounded-3xl bg-card/70 px-5 py-4">
              <CardHeader className="flex flex-row justify-between items-center p-0">
                <p className="text-sm font-medium text-primary">To</p>
                <Top4Tokens />
              </CardHeader>

              <CardContent className="p-0">
                <div className="flex flex-row justify-between">
                  <input
                    type="text"
                    placeholder="0.0"
                    className="text-primary-foreground bg-transparent w-0 flex-grow text-3xl outline-none"
                  />
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        className="transition-transform active:scale-90 border-card hover:border-border shadow hover:shadow-hover p-2 mi[110px] rounded-3xl flex flex-row justify-between gap-x-2"
                      >
                        <img
                          className="border-[50%] w-6 h-6"
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAA/1BMVEUAAAAndcondcondcondcondcondcondcondcondcondcondcondcondcondcondcondcondcondcondcondcondcondcondcondcondcondcr///8odssqd8sabccldMoGYMIUacYDXsEKY8MAXMEicskQZ8UOZcQXa8YAWcAfcMj7/f73+v0/hdAuesz0+P3d6ffR4vRRkNU6gs+dwOdEiNG+1u+JtON3qd43f84yfM3v9fylxemVvOZIitJtotxWk9br8vp9rOBhmtnW5fXM3/PC2PC60+6Cr+FwpNwAVr4AULzh7PjG2/Ll7vmyzu2syuuOt+Ron9paltdOjtSNxblrAAAAGnRSTlMA792Tyyf117mvnH51XBkQ/ObBi4ltakZANWpHnZcAAAVlSURBVFjDpVdpWxoxELagtdZaq7bWLtlskt3sJSByCCggQj3x1v//W8okk+zaSmsf8gWSzLyZzPFmdmHWWFr7urJYeDcdhcWVr2tLC/81vheXnd/GcvH7W7U/rxacV0dh9fNb1IvvnZnjffGfEJ9QfSbEp7+q/1h0/jkWf8zW/+a8aXybpf8xL+V5s2cfX9f/kEkQL2K+R+zU8VkEUzM+vKa/abfdVESDZp9Kez59aLZ8IV0rsvmX84knovFBqVQ6jM1SXJ1Oz598Roi1Yeb9XR7Ub0rTsVvhZo03yrBy0EqoO8MP21afxc2SHtW8BXo8RL5F2H5ROcZ8EnRrWrZ2yT3rg3C0p1dPXWER8vVlSyep7yrBn4+UOWSqKqUHbvGrFydq46gSGITlXP4a+5Ohktrt8ICS6Vz6PIRwEocnsq/3MgSb1etfUD9o6eO76CwpmzdnbSq1c5NnZUS5yhDhyzoCFFE/So+Us7lwdbiiQSkLJ3ESuQ/za84RoYgGoEWpuFH6LDI2RnU4scFthEKFcJcY92oTVo0DOrC774cuRiSeQPj24kQSFPHja5AZGzesKoANLc+9Mog7eEOXBtXxPXit3Qp9vJMruhClk5hqgA3Q38EUSJSXjxPUD8P2UQnHWUUYG65GsHCR4Hwnc2HsggE3gdRwMT8r5cazwHulbB9MSGnmxoLeCUZaUEN74k6lzV3v/qeKvstNqFWqXAZarmCzWEaAfMPQv34dxO4pYyw8hr894aAgO4VL+Z7J5zX9J6zkgR3RhITy/elfOmkrE6jx1SVMu2jR2sIWanQgBKYAPf98Om0qOBKntWltEWpLswzORou2Flb0H9aDHELDEOD8ShIVUDIYuClxzN4ZgCPAyoImcsnhZg+Bg0MAXnk4EXEqpwhhSDM6Cx7ACaHUJI9BoOR2uvrIjBB7VNFrDg/TUDDu4PHZ3rVHMQzv9MW6cLE6OC0XFHBL7aB53GWY3lmE9rDE3iEAr0CKtkLLbJEHd8JR7nVZZkPYMoyZB2gBQAUADEJ8oVIIDRlgiZiI77Z+A2goCyI1McVEn0e9g1s0wrMUG72wAJ0YH0LlDI0PMO99ISJv0FY02Q5e9UEBw5jKGiSisOzsMxYRYFXqTypH+RxxxHEuCouYSF4Eb1HfnOKlT53OMCaayiZ9IBqamjyA6U3oYSJt5VZPQ2meIkWGIXLARR5ARqe5TNwyxcTGoNLAMNDqHtDGhChXJGDdublC2FXEI0wxLVmVPNOIe2CDxoRxLq4UV3aEqcZRvhqXDKE4ikFqYaqlooqKXbteaQx78PeEUuTuqAalgMRRsJRGxFOeEkkAx8JRu/q3Zbg2GCs5JI5iRqpSId9ydL0Ux3AnHLWB4UTq1/L27ORoPVAF2LwybUZQbe/vKiP2RylDXidXbVgaoa828g+LZKoAn8wlXC78AVgxFgF1DaUOSspOmn9Y1nGTacd1A9dmvTyC2EIlooin3tehEcHXtWgCpMw7Okwgh7HE8izhirSmGNq8jcWXzztJxbku3atUn0CdMljA0SvJ4bV6/aOYZM97vsFweah5qMOYRxRC/aI9prq8omRcVhkhTZ/06Y8Wx/WpRjhoBdAVEjdizCcEGs+k2ivpGxpqWX7ZZCECP9eRv6+HadapSr/RL+uMqNoua+m1Ns8N2QMmT49LS7G8j4t31FLb9uuNpkuTOnKhqhfkK2TGS2Hp+eOsVpc4Ih4pIvyjU21Wk9Sd3W5v5ujU65yWyg61FrhTDus3gtAls5tttAFLJuDDOiVZt37Z8YLImd1qWz/k/I69muFYC2fvP/8nz/wfXfN/9s3/4Tn/p+/8H99zf/7/AuAyihx4sIg7AAAAAElFTkSuQmCC"
                        />
                        <p className="text-lg text-primary-foreground">
                          USDC.e
                        </p>
                        <MdKeyboardArrowDown width={30} />
                      </Button>
                    </DialogTrigger>

                    <SelectTokenDialog />
                  </Dialog>
                </div>
              </CardContent>

              <CardFooter className="p-0 mt-4"></CardFooter>
            </Card>

            <div
              className="absolute z-[-1] opacity-60 -top-[70px] -left-[200px] h-[517px] w-[517px] animate-fade-in-out-15"
              style={{
                background:
                  "radial-gradient(285px, rgba(255, 201, 0, 0.25) 0%, rgba(0, 0, 0, 0) 95%)",
              }}
            ></div>
            <div
              className="absolute z-[-1] opacity-60 -top-[100px] left-[130px] h-[591px] w-[591px] animate-fade-in-out-20"
              style={{
                background:
                  "radial-gradient(295px, rgba(0, 255, 137, 0.25) 0%, rgba(0, 0, 0, 0) 95%)",
              }}
            ></div>
            <div
              className="absolute z-[-1] opacity-60 -top-[20px] left-0 h-[611px] w-[611px] animate-fade-in-out-10"
              style={{
                background:
                  "radial-gradient(305px, rgba(100, 0, 255, 0.22) 0%, rgba(0, 0, 0, 0) 95%)",
              }}
            ></div>
          </section>

          <GettingStartedCard />

          {selectedNetwork === AVAILABLE_NETWORKS.zkSync && (
            <ClaimZkTokenAirdropCard />
          )}
          {selectedNetwork === AVAILABLE_NETWORKS.Linea && (
            <LineaVoyageSurgeCard />
          )}
        </section>
      </main>

      <Footer />
    </>
  );
}
