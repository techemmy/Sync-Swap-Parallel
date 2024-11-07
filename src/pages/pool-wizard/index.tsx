import { FaPlus, FaArrowRight } from "react-icons/fa6";
import StepIndicator from "./StepIndicator";
import { Link } from "react-router-dom";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { PiCaretRightBold, PiCaretLeft } from "react-icons/pi";
import SelectTokenDialog from "@/components/SelectTokenDialog";
import PoolTypeCard from "./PoolTypeCard";
import { MdOutlineWaterDrop } from "react-icons/md";
import { TbAlignBoxRightBottom } from "react-icons/tb";
import { useState } from "react";
import Footer from "@/components/Footer";
import PoolTypeData from "./PoolTypeData";

const poolTypes = [
  {
    icon: <MdOutlineWaterDrop size={25} />,
    title: "Aqua",
    isRecommended: true,
    description: "The next-generation pool with hyper efficiency",
  },
  {
    icon: <TbAlignBoxRightBottom size={23} />,
    title: "Classic",
    isRecommended: false,
    description: "Classic pool supports virtually any assets",
  },
];

export default function PoolWizard() {
  const [activePoolType, setActivePoolType] = useState(poolTypes[0].title);
  const [showPoolTypeDetail, setShowPoolTypeDetail] = useState(false);

  return (
    <>
      <main className="relative z-10 flex flex-col items-center pt-24 max-w-screen-lg mx-auto p-4 mb-20">
        <article>
          <Link to="/pool">
            <section className="flex gap-x-2 text-primary items-center cursor-pointer mb-5">
              <PiCaretLeft />
              <h2 className="text-sm hover:text-card-foreground">Positions</h2>
            </section>
          </Link>

          <section>
            <h1 className="text-primary-foreground text-2xl font-semibold font-Public mb-1">
              🧙 Pool Wizard
            </h1>
            <p className="text-sm text-card-foreground">
              Let me help you find the best pools and manage them.
            </p>
          </section>

          <section className="pt-8 pb-10 grid">
            <div className="flex justify-between items-center gap-x-3">
              <StepIndicator step={1} text="Choose tokens" />
              <div className="h-px rounded-md opacity-20 flex-1 min-w-10 max-w-full bg-card-foreground"></div>
              <StepIndicator step={2} text="Choose type" />
              <div className="h-px rounded-md opacity-20 flex-1 min-w-10 max-w-full bg-card-foreground"></div>
              <StepIndicator step={3} text="Complete" />
            </div>
          </section>

          <div className={`grid ${showPoolTypeDetail && "grid-cols-2"}`}>
            <section className="w-full pt-3 px-6 space-y-4 max-w-[520px]">
              <section className="flex justify-between">
                <h2 className="text-primary-foreground font-medium">Choose</h2>
                <FaPlus
                  onClick={() => setShowPoolTypeDetail(!showPoolTypeDetail)}
                  className={`transition-all duration-500 ${showPoolTypeDetail && "rotate-45"} text-card-foreground cursor-pointer`}
                />
              </section>

              <section>
                <h2 className="text-primary-foreground font-medium">Tokens</h2>
                <p className="text-[13px] text-card-foreground mt-1 mb-3">
                  What tokens should the pool comprise? A pool comprises two or
                  more tokens to enable trades between them.
                </p>
                <div className="flex gap-x-3">
                  {/* TODO: create a component for the select token btn and its dialog */}

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full bg-card hover:bg-card transition-transform active:scale-90 border-card hover:border-border px-4 py-2 rounded-3xl flex flex-row justify-between"
                      >
                        <article className="flex gap-x-3 items-center">
                          <img
                            className="border-[50%] w-6 h-6"
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAS1BMVEUAAABhfephfetifephfepifupffO9hfuphfuxifethfuphfu5ifurBzPf///+Bl+5rhuu5xvaOovB3j+2su/SdrvLY3/r29/7q7v2nxo4HAAAADHRSTlMAvEPkz4ASmDVlqyG03JyqAAAEVklEQVR42s1ba3OjMAz0i1ewwQYM+f+/9K6TuzoN5GqtTLn92OmMN2j1sCQLCHXbNdIYre1vaG2MbLq2Fj8DVUltD6Flpc4/3H6DE0moRtss6EadePo1HJS0ZMhyFDpjIZiuzK83Fobhf4VeWhZkLzioG8tGVTOMr20BaFQKtbSFIGtIfNoWg24FGZUtCrIZGlsYjSDhZovjxpQfHzL/fGNPgcl0hl7bk6D7rN+v7WnQNeH7X2UFaU+FBPzvR72xsqej+mf8t1RMo6VClXQAfw8cV+ALMAxuwoXIF8A8DM75UjJoLRnrB4HFktGKIxhLRRw+CDi6Do04QGep8NuDQPAl6pPakuGGBwEXEU/gl0Dj8JeAm/kFkgIUmAgAOlRsBS5DIgAEA8P9APOWCEA6VMwYuA6JAKRDyYtB05AIgDpsWVXA/ZXAwqkMekSBiQCqwx7PQvO2J+A8npMMoMBEADaCgSUYhwSXMKIybIAkdEQgeDAea3IZtCOA6VBjUXAcdgTQYKAgH1jfE1ggP5BoCNgTcBMSjtEQkAjgOgQk4IZjAlhSUmQJTMOeAEOHFTkM3r8jEMgiwBWYCOA6JGbCeXjFujjH0WFP0+D6enxw4xg5OlSigxW4ufCRgX4jBufApNRRMpF/VuDdhcdpY6IAGKESNygJrZ8Hjn8wLZAObwQvHL8enwjsKXiCHxp6IR6+GPwJUwzUpGTyCcQ/pk/YEUhiGPMJaEIZlI7fEUiIC0WHWhCS0OrcNwSSGGJpAlM6fkfgiEJ2UsolEJzLIZCQ64q5GvCRRmDONoHOTkRLPoHZ20xoSjkwhkwC3gJxIAd+yiHgadczmWmAd1J4Z/xMGjI3G07OH0vh2Pg+Zqqwya5Jw7b85RLeEvCf/xKz03GXn4vu04EdDr7+GPKzUSdayo1knXd22Bt/oZQkrahpXYHgX1zy5ev7SCvKaiGIl6ItfpVCOj79MZIu6JJYE75I4fPrJ8sET7qYVPTOgHuSwrPrpdsZ5WqmgIvRtnxK4fnrPzBROxTQzeQevwa8MUBNCvEBifWn1vEwUwZPblBU6PXc+aPARG/RKLhBsS270ByRlr3FOwT3aQ54l0pDjcpxe98fCDPUqFRgo3ZPYAKHJprRp2J0qHRq11/TK652AwvIF/FGbY+PbJYjAhNjmaPFJxbJA1kjdAnPbJIAWNssCh6a4OMS5ujWMQeXkje8Ti0zdGrYsjeYxmcCMzq+5w8vwaFlXWKHZsU3KDrWEgt/h8SU2uN6EJhLbXM1wCLVkAQAKJBvhHVwi8UNwPeEeQseHNsXkkGE1/lAGfDR/EcrnbgQccjL13qvXmy+erX78uX2XMgL9HfxA4fzV6wrziMbPrTCnhkVf2h0kRkqAaI1RbyvFTi6Qk+ccNRMh2xqwUUrGeIDvz5OAT++PAXZXvruVp7x9DhbjzclzkGtGp3x5LkWZ6Lv/mEM2fXiJ9Crrnp9/l91Cjr8F3ZnbI+8pv7pAAAAAElFTkSuQmCC"
                          />
                          <p className="text-lg text-primary-foreground">ETH</p>
                        </article>
                        <PiCaretRightBold className="text-primary" width={30} />
                      </Button>
                    </DialogTrigger>
                    <SelectTokenDialog />
                  </Dialog>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full bg-card hover:bg-card transition-transform active:scale-90 border-card hover:border-border px-4 py-2 rounded-3xl flex flex-row justify-between"
                      >
                        <article className="flex gap-x-3 items-center">
                          <img
                            className="border-[50%] w-6 h-6"
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAA/1BMVEUAAAAndcondcondcondcondcondcondcondcondcondcondcondcondcondcondcondcondcondcondcondcondcondcondcondcondcondcr///8odssqd8sabccldMoGYMIUacYDXsEKY8MAXMEicskQZ8UOZcQXa8YAWcAfcMj7/f73+v0/hdAuesz0+P3d6ffR4vRRkNU6gs+dwOdEiNG+1u+JtON3qd43f84yfM3v9fylxemVvOZIitJtotxWk9br8vp9rOBhmtnW5fXM3/PC2PC60+6Cr+FwpNwAVr4AULzh7PjG2/Ll7vmyzu2syuuOt+Ron9paltdOjtSNxblrAAAAGnRSTlMA792Tyyf117mvnH51XBkQ/ObBi4ltakZANWpHnZcAAAVlSURBVFjDpVdpWxoxELagtdZaq7bWLtlskt3sJSByCCggQj3x1v//W8okk+zaSmsf8gWSzLyZzPFmdmHWWFr7urJYeDcdhcWVr2tLC/81vheXnd/GcvH7W7U/rxacV0dh9fNb1IvvnZnjffGfEJ9QfSbEp7+q/1h0/jkWf8zW/+a8aXybpf8xL+V5s2cfX9f/kEkQL2K+R+zU8VkEUzM+vKa/abfdVESDZp9Kez59aLZ8IV0rsvmX84knovFBqVQ6jM1SXJ1Oz598Roi1Yeb9XR7Ub0rTsVvhZo03yrBy0EqoO8MP21afxc2SHtW8BXo8RL5F2H5ROcZ8EnRrWrZ2yT3rg3C0p1dPXWER8vVlSyep7yrBn4+UOWSqKqUHbvGrFydq46gSGITlXP4a+5Ohktrt8ICS6Vz6PIRwEocnsq/3MgSb1etfUD9o6eO76CwpmzdnbSq1c5NnZUS5yhDhyzoCFFE/So+Us7lwdbiiQSkLJ3ESuQ/za84RoYgGoEWpuFH6LDI2RnU4scFthEKFcJcY92oTVo0DOrC774cuRiSeQPj24kQSFPHja5AZGzesKoANLc+9Mog7eEOXBtXxPXit3Qp9vJMruhClk5hqgA3Q38EUSJSXjxPUD8P2UQnHWUUYG65GsHCR4Hwnc2HsggE3gdRwMT8r5cazwHulbB9MSGnmxoLeCUZaUEN74k6lzV3v/qeKvstNqFWqXAZarmCzWEaAfMPQv34dxO4pYyw8hr894aAgO4VL+Z7J5zX9J6zkgR3RhITy/elfOmkrE6jx1SVMu2jR2sIWanQgBKYAPf98Om0qOBKntWltEWpLswzORou2Flb0H9aDHELDEOD8ShIVUDIYuClxzN4ZgCPAyoImcsnhZg+Bg0MAXnk4EXEqpwhhSDM6Cx7ACaHUJI9BoOR2uvrIjBB7VNFrDg/TUDDu4PHZ3rVHMQzv9MW6cLE6OC0XFHBL7aB53GWY3lmE9rDE3iEAr0CKtkLLbJEHd8JR7nVZZkPYMoyZB2gBQAUADEJ8oVIIDRlgiZiI77Z+A2goCyI1McVEn0e9g1s0wrMUG72wAJ0YH0LlDI0PMO99ISJv0FY02Q5e9UEBw5jKGiSisOzsMxYRYFXqTypH+RxxxHEuCouYSF4Eb1HfnOKlT53OMCaayiZ9IBqamjyA6U3oYSJt5VZPQ2meIkWGIXLARR5ARqe5TNwyxcTGoNLAMNDqHtDGhChXJGDdublC2FXEI0wxLVmVPNOIe2CDxoRxLq4UV3aEqcZRvhqXDKE4ikFqYaqlooqKXbteaQx78PeEUuTuqAalgMRRsJRGxFOeEkkAx8JRu/q3Zbg2GCs5JI5iRqpSId9ydL0Ux3AnHLWB4UTq1/L27ORoPVAF2LwybUZQbe/vKiP2RylDXidXbVgaoa828g+LZKoAn8wlXC78AVgxFgF1DaUOSspOmn9Y1nGTacd1A9dmvTyC2EIlooin3tehEcHXtWgCpMw7Okwgh7HE8izhirSmGNq8jcWXzztJxbku3atUn0CdMljA0SvJ4bV6/aOYZM97vsFweah5qMOYRxRC/aI9prq8omRcVhkhTZ/06Y8Wx/WpRjhoBdAVEjdizCcEGs+k2ivpGxpqWX7ZZCECP9eRv6+HadapSr/RL+uMqNoua+m1Ns8N2QMmT49LS7G8j4t31FLb9uuNpkuTOnKhqhfkK2TGS2Hp+eOsVpc4Ih4pIvyjU21Wk9Sd3W5v5ujU65yWyg61FrhTDus3gtAls5tttAFLJuDDOiVZt37Z8YLImd1qWz/k/I69muFYC2fvP/8nz/wfXfN/9s3/4Tn/p+/8H99zf/7/AuAyihx4sIg7AAAAAElFTkSuQmCC"
                          />
                          <p className="text-lg text-primary-foreground">
                            USDC.e
                          </p>
                        </article>
                        <PiCaretRightBold className="text-primary" width={30} />
                      </Button>
                    </DialogTrigger>
                    <SelectTokenDialog />
                  </Dialog>
                </div>
              </section>

              <section className="w-full">
                <h2 className="text-primary-foreground font-medium">Type</h2>
                <p className="text-[13px] text-card-foreground mt-1 mb-3">
                  The pool type determines how the pool will utilize liquidity.{" "}
                </p>
                <div className="grid">
                  {poolTypes.map((poolType) => (
                    <PoolTypeCard
                      key={poolType.title}
                      icon={poolType.icon}
                      title={poolType.title}
                      isRecommended={poolType.isRecommended}
                      description={poolType.description}
                      isActive={poolType.title === activePoolType}
                      onClick={() => setActivePoolType(poolType.title)}
                    />
                  ))}
                </div>
                <Button
                  variant="outline"
                  className="transition-transform flex gap-x-3 px-14 py-5 rounded-3xl mx-auto mt-10 active:scale-90"
                >
                  <span>Enter Pool</span>
                  <FaArrowRight />
                </Button>
              </section>
            </section>

            {showPoolTypeDetail && <PoolTypeData poolType={activePoolType} />}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
