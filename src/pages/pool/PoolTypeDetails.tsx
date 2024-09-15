import { Link } from "react-router-dom";
import { RiGraduationCapLine } from "react-icons/ri";
import { TbAlignBoxRightBottom, TbTrendingUp } from "react-icons/tb";
import Tag from "./Tag";
import {
  MdOutlineContentCopy,
  MdOutlineInfo,
  MdTravelExplore,
} from "react-icons/md";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Card, CardTitle } from "@/components/ui/card";
import { IoIosSwap } from "react-icons/io";
import { useState } from "react";
import { BsLightningChargeFill } from "react-icons/bs";
import { FaPercent, FaPlus } from "react-icons/fa";
import { HiOutlineTag } from "react-icons/hi";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import TokenDetailsDialog from "@/components/SelectTokenDialog/TokenDetailsDialog";

const TOKENS = [
  {
    name: "ETH",
    amount: 1,
    logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAS1BMVEUAAABhfephfetifephfepifupffO9hfuphfuxifethfuphfu5ifurBzPf///+Bl+5rhuu5xvaOovB3j+2su/SdrvLY3/r29/7q7v2nxo4HAAAADHRSTlMAvEPkz4ASmDVlqyG03JyqAAAEVklEQVR42s1ba3OjMAz0i1ewwQYM+f+/9K6TuzoN5GqtTLn92OmMN2j1sCQLCHXbNdIYre1vaG2MbLq2Fj8DVUltD6Flpc4/3H6DE0moRtss6EadePo1HJS0ZMhyFDpjIZiuzK83Fobhf4VeWhZkLzioG8tGVTOMr20BaFQKtbSFIGtIfNoWg24FGZUtCrIZGlsYjSDhZovjxpQfHzL/fGNPgcl0hl7bk6D7rN+v7WnQNeH7X2UFaU+FBPzvR72xsqej+mf8t1RMo6VClXQAfw8cV+ALMAxuwoXIF8A8DM75UjJoLRnrB4HFktGKIxhLRRw+CDi6Do04QGep8NuDQPAl6pPakuGGBwEXEU/gl0Dj8JeAm/kFkgIUmAgAOlRsBS5DIgAEA8P9APOWCEA6VMwYuA6JAKRDyYtB05AIgDpsWVXA/ZXAwqkMekSBiQCqwx7PQvO2J+A8npMMoMBEADaCgSUYhwSXMKIybIAkdEQgeDAea3IZtCOA6VBjUXAcdgTQYKAgH1jfE1ggP5BoCNgTcBMSjtEQkAjgOgQk4IZjAlhSUmQJTMOeAEOHFTkM3r8jEMgiwBWYCOA6JGbCeXjFujjH0WFP0+D6enxw4xg5OlSigxW4ufCRgX4jBufApNRRMpF/VuDdhcdpY6IAGKESNygJrZ8Hjn8wLZAObwQvHL8enwjsKXiCHxp6IR6+GPwJUwzUpGTyCcQ/pk/YEUhiGPMJaEIZlI7fEUiIC0WHWhCS0OrcNwSSGGJpAlM6fkfgiEJ2UsolEJzLIZCQ64q5GvCRRmDONoHOTkRLPoHZ20xoSjkwhkwC3gJxIAd+yiHgadczmWmAd1J4Z/xMGjI3G07OH0vh2Pg+Zqqwya5Jw7b85RLeEvCf/xKz03GXn4vu04EdDr7+GPKzUSdayo1knXd22Bt/oZQkrahpXYHgX1zy5ev7SCvKaiGIl6ItfpVCOj79MZIu6JJYE75I4fPrJ8sET7qYVPTOgHuSwrPrpdsZ5WqmgIvRtnxK4fnrPzBROxTQzeQevwa8MUBNCvEBifWn1vEwUwZPblBU6PXc+aPARG/RKLhBsS270ByRlr3FOwT3aQ54l0pDjcpxe98fCDPUqFRgo3ZPYAKHJprRp2J0qHRq11/TK652AwvIF/FGbY+PbJYjAhNjmaPFJxbJA1kjdAnPbJIAWNssCh6a4OMS5ujWMQeXkje8Ti0zdGrYsjeYxmcCMzq+5w8vwaFlXWKHZsU3KDrWEgt/h8SU2uN6EJhLbXM1wCLVkAQAKJBvhHVwi8UNwPeEeQseHNsXkkGE1/lAGfDR/EcrnbgQccjL13qvXmy+erX78uX2XMgL9HfxA4fzV6wrziMbPrTCnhkVf2h0kRkqAaI1RbyvFTi6Qk+ccNRMh2xqwUUrGeIDvz5OAT++PAXZXvruVp7x9DhbjzclzkGtGp3x5LkWZ6Lv/mEM2fXiJ9Crrnp9/l91Cjr8F3ZnbI+8pv7pAAAAAElFTkSuQmCC",
  },
  {
    name: "USDC.e",
    amount: 2347419,
    logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAA/1BMVEUAAAAndcondcondcondcondcondcondcondcondcondcondcondcondcondcondcondcondcondcondcondcondcondcondcondcondcondcr///8odssqd8sabccldMoGYMIUacYDXsEKY8MAXMEicskQZ8UOZcQXa8YAWcAfcMj7/f73+v0/hdAuesz0+P3d6ffR4vRRkNU6gs+dwOdEiNG+1u+JtON3qd43f84yfM3v9fylxemVvOZIitJtotxWk9br8vp9rOBhmtnW5fXM3/PC2PC60+6Cr+FwpNwAVr4AULzh7PjG2/Ll7vmyzu2syuuOt+Ron9paltdOjtSNxblrAAAAGnRSTlMA792Tyyf117mvnH51XBkQ/ObBi4ltakZANWpHnZcAAAVlSURBVFjDpVdpWxoxELagtdZaq7bWLtlskt3sJSByCCggQj3x1v//W8okk+zaSmsf8gWSzLyZzPFmdmHWWFr7urJYeDcdhcWVr2tLC/81vheXnd/GcvH7W7U/rxacV0dh9fNb1IvvnZnjffGfEJ9QfSbEp7+q/1h0/jkWf8zW/+a8aXybpf8xL+V5s2cfX9f/kEkQL2K+R+zU8VkEUzM+vKa/abfdVESDZp9Kez59aLZ8IV0rsvmX84knovFBqVQ6jM1SXJ1Oz598Roi1Yeb9XR7Ub0rTsVvhZo03yrBy0EqoO8MP21afxc2SHtW8BXo8RL5F2H5ROcZ8EnRrWrZ2yT3rg3C0p1dPXWER8vVlSyep7yrBn4+UOWSqKqUHbvGrFydq46gSGITlXP4a+5Ohktrt8ICS6Vz6PIRwEocnsq/3MgSb1etfUD9o6eO76CwpmzdnbSq1c5NnZUS5yhDhyzoCFFE/So+Us7lwdbiiQSkLJ3ESuQ/za84RoYgGoEWpuFH6LDI2RnU4scFthEKFcJcY92oTVo0DOrC774cuRiSeQPj24kQSFPHja5AZGzesKoANLc+9Mog7eEOXBtXxPXit3Qp9vJMruhClk5hqgA3Q38EUSJSXjxPUD8P2UQnHWUUYG65GsHCR4Hwnc2HsggE3gdRwMT8r5cazwHulbB9MSGnmxoLeCUZaUEN74k6lzV3v/qeKvstNqFWqXAZarmCzWEaAfMPQv34dxO4pYyw8hr894aAgO4VL+Z7J5zX9J6zkgR3RhITy/elfOmkrE6jx1SVMu2jR2sIWanQgBKYAPf98Om0qOBKntWltEWpLswzORou2Flb0H9aDHELDEOD8ShIVUDIYuClxzN4ZgCPAyoImcsnhZg+Bg0MAXnk4EXEqpwhhSDM6Cx7ACaHUJI9BoOR2uvrIjBB7VNFrDg/TUDDu4PHZ3rVHMQzv9MW6cLE6OC0XFHBL7aB53GWY3lmE9rDE3iEAr0CKtkLLbJEHd8JR7nVZZkPYMoyZB2gBQAUADEJ8oVIIDRlgiZiI77Z+A2goCyI1McVEn0e9g1s0wrMUG72wAJ0YH0LlDI0PMO99ISJv0FY02Q5e9UEBw5jKGiSisOzsMxYRYFXqTypH+RxxxHEuCouYSF4Eb1HfnOKlT53OMCaayiZ9IBqamjyA6U3oYSJt5VZPQ2meIkWGIXLARR5ARqe5TNwyxcTGoNLAMNDqHtDGhChXJGDdublC2FXEI0wxLVmVPNOIe2CDxoRxLq4UV3aEqcZRvhqXDKE4ikFqYaqlooqKXbteaQx78PeEUuTuqAalgMRRsJRGxFOeEkkAx8JRu/q3Zbg2GCs5JI5iRqpSId9ydL0Ux3AnHLWB4UTq1/L27ORoPVAF2LwybUZQbe/vKiP2RylDXidXbVgaoa828g+LZKoAn8wlXC78AVgxFgF1DaUOSspOmn9Y1nGTacd1A9dmvTyC2EIlooin3tehEcHXtWgCpMw7Okwgh7HE8izhirSmGNq8jcWXzztJxbku3atUn0CdMljA0SvJ4bV6/aOYZM97vsFweah5qMOYRxRC/aI9prq8omRcVhkhTZ/06Y8Wx/WpRjhoBdAVEjdizCcEGs+k2ivpGxpqWX7ZZCECP9eRv6+HadapSr/RL+uMqNoua+m1Ns8N2QMmT49LS7G8j4t31FLb9uuNpkuTOnKhqhfkK2TGS2Hp+eOsVpc4Ih4pIvyjU21Wk9Sd3W5v5ujU65yWyg61FrhTDus3gtAls5tttAFLJuDDOiVZt37Z8YLImd1qWz/k/I69muFYC2fvP/8nz/wfXfN/9s3/4Tn/p+/8H99zf/7/AuAyihx4sIg7AAAAAElFTkSuQmCC",
  },
];

function NoPoolDetails() {
  return (
    <section className="transition-all animate-fade-in mt-10 flex gap-y-5 items-center flex-col text-center">
      <h2 className="text-xl font-medium">
        This pool has not yet been created.
      </h2>

      <p className="text-card-foreground text-sm">
        Let me help you find the best pools and manage them.
      </p>

      <Link
        className="transition-all hover:opacity-75 text-card-foreground text-[15px]"
        to="https://academy.binance.com/en/articles/what-are-liquidity-pools-in-defi"
      >
        <p className="flex gap-x-2 items-center">
          <RiGraduationCapLine />
          <span>Learn more</span>
        </p>
      </Link>
    </section>
  );
}

function DetailsHeader({ poolType }: { poolType: string }) {
  return (
    <>
      <section className="flex justify-between text-primary items-center">
        <div className="flex gap-x-2 items-center">
          <TbAlignBoxRightBottom size={25} />
          <h2 className="text-2xl text-primary-foreground font-semibold">
            {poolType} Pool
          </h2>
          <Tag className="px-2">V1</Tag>
        </div>
        <Link
          className="transition-all hover:opacity-75 active:scale-90"
          to="https://era.zksync.network/address/0x80115c708E12eDd42E504c1cD52Aea96C547c05c"
        >
          <MdTravelExplore fontSize={22} />
        </Link>
      </section>

      <div className="flex gap-x-2 text-sm text-card-foreground">
        <span className="font-medium">Contract</span>
        <span
          onClick={() =>
            navigator.clipboard.writeText(
              "0x3355df6d4c9c3035724fd0e3914de96a5a83aaf4",
            )
          }
          className="flex gap-x-2 items-center"
        >
          <Tooltip>
            <TooltipTrigger> 0x3355df...83aaf4 </TooltipTrigger>
            <TooltipContent>
              0x3355df6d4c9c3035724fd0e3914de96a5a83aaf4
            </TooltipContent>
          </Tooltip>
          <MdOutlineContentCopy className="cursor-pointer" />
        </span>
      </div>
    </>
  );
}

function ConversionRateCard() {
  const [coins, setCoins] = useState(TOKENS);
  const [left, right] = coins;
  return (
    <Card
      onClick={() => setCoins([right, left])}
      className="flex gap-x-2 text-sm font-medium border-0 shadow rounded-2xl bg-card/70 p-2 w-max cursor-pointer"
    >
      <article className="flex gap-x-2 items-center">
        <img className="border-[50%] w-4 h-4" src={left.logo} />
        <p className="text-primary-foreground">
          {left.amount.toLocaleString()} {left.name}
        </p>
      </article>

      <IoIosSwap fontSize={20} className="text-primary" />

      <article className="flex gap-x-2 items-center">
        <img className="border-[50%] w-4 h-4" src={right.logo} />
        <p className="text-primary-foreground">
          {right.amount.toLocaleString()} {right.name}
        </p>
      </article>
    </Card>
  );
}

function AssetsInPoolCard() {
  return (
    <Card className="flex flex-col gap-x-1 space-y-3 font-medium border-0 shadow rounded-2xl bg-card/70 px-6 py-5 w-full cursor-pointer">
      <CardTitle className="text-base font-medium">Assets in Pool</CardTitle>

      <article className="flex gap-x-2 items-center">
        <span className="text-sm text-primary bg-accent py-1 px-2 rounded-lg">
          50%
        </span>

        <Dialog>
          <DialogTrigger asChild>
            <article className="flex gap-x-2 items-center rounded-2xl p-1 hover:bg-accent transition-colors">
              <img className="border-[50%] w-5 h-5" src={TOKENS[0].logo} />
              <p className="text-primary-foreground">1,788.176 ETH</p>
            </article>
          </DialogTrigger>
          <TokenDetailsDialog
            name="Ethereum"
            symbol="ETH"
            logoSrc={TOKENS[0].logo}
          />
        </Dialog>
      </article>

      <article className="flex gap-x-2 items-center">
        <span className="text-sm text-primary bg-accent py-1 px-2 rounded-lg">
          50%
        </span>

        <Dialog>
          <DialogTrigger asChild>
            <article className="flex gap-x-2 items-center rounded-2xl p-1 hover:bg-accent transition-colors">
              <img className="border-[50%] w-5 h-5" src={TOKENS[1].logo} />
              <p className="text-primary-foreground">4,202,093.934 USDC.e</p>
            </article>
          </DialogTrigger>
          <TokenDetailsDialog
            name="USDC (Ethereum)"
            symbol="USDC.e"
            logoSrc={TOKENS[1].logo}
          />
        </Dialog>
      </article>
    </Card>
  );
}

function LPRewardsCard() {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <Card className="flex flex-col gap-x-1 gap-y-3 font-medium border-0 shadow rounded-2xl bg-card/70 px-6 py-5 pb-7 w-full cursor-pointer">
      <section className="flex justify-between items-center mb-2">
        <CardTitle className="text-base font-medium flex gap-x-2 items-center">
          <BsLightningChargeFill fontSize={20} className="text-primary" />
          <span className="text-primary-foreground text-[18px]">LP Rewards</span>
        </CardTitle>

        <FaPlus
          onClick={() => setShowDetails(!showDetails)}
          className={`transition-all duration-500 ${showDetails && "rotate-45"} text-card-foreground cursor-pointer`}
          fontSize={13}
        />
      </section>

      <article className="flex gap-x-2 items-center">
        <span className="text-sm text-primary bg-accent grid place-items-center w-10 h-10 border rounded-xl">
          <TbTrendingUp fontSize={20} />
        </span>

        <article className="grid rounded-2xl p-1">
          <p className="text-sm"> Fee APR (24h) </p>
          <p className="text-[18px] text-primary-foreground"> 1.79% </p>
        </article>
      </article>

      <article className="flex gap-x-2 items-center">
        <span className="text-sm text-primary bg-accent grid place-items-center w-10 h-10 border rounded-xl">
          <BsLightningChargeFill fontSize={18} />
        </span>

        <article className="grid rounded-2xl p-1">
          <p className="text-sm"> Staking APR </p>
          <p className="text-[18px]">-</p>
        </article>
      </article>

      {showDetails && (
        <section className="transition-all animate-fade-in bg-accent px-6 py-4 space-y-3 rounded-xl mt-8">
          <h3 className="text-sm">Fee Policy</h3>
          <article className="flex gap-x-2 items-center">
            <span className="text-sm text-primary bg-accent grid place-items-center w-10 h-10 border rounded-xl">
              <HiOutlineTag fontSize={18} />
            </span>

            <article className="grid rounded-2xl p-1">
              <div className="text-sm flex items-center gap-x-1">
                Swap Fee
                <Tooltip>
                  <TooltipTrigger>
                    <MdOutlineInfo />
                  </TooltipTrigger>
                  <TooltipContent>
                    The swap fee for every trade through pool
                  </TooltipContent>
                </Tooltip>
              </div>
              <p className="text-[18px] text-primary-foreground">0.30%</p>
            </article>
          </article>

          <article className="flex gap-x-2 items-center">
            <span className="text-sm text-primary bg-accent grid place-items-center w-10 h-10 border rounded-xl">
              <FaPercent fontSize={15} />
            </span>

            <article className="grid rounded-2xl p-1">
              <div className="text-sm flex items-center gap-x-1">
                LP Fee Share
                <Tooltip>
                  <TooltipTrigger>
                    <MdOutlineInfo />
                  </TooltipTrigger>
                  <TooltipContent>
                    The percentage of Liquidity Providers (LPs) share from the
                    total sweep fees.
                  </TooltipContent>
                </Tooltip>
              </div>
              <p className="text-[18px] text-primary-foreground">71.0%</p>
            </article>
          </article>
        </section>
      )}
    </Card>
  );
}

export default function PoolTypeDetails({ poolType }: { poolType: string }) {
  if (poolType === "Aqua") {
    return <NoPoolDetails />;
  }

  return (
    <section className="w-full transition-all animate-fade-in pt-3 px-6 space-y-4 max-w-[520px]">
      <DetailsHeader poolType={poolType} />

      <ConversionRateCard />

      <AssetsInPoolCard />

      <Card className="grid grid-cols-2 gap-x-3 gap-y-5 font-medium border-0 shadow rounded-2xl bg-card/70 px-6 py-5 w-full cursor-pointer">
        <article>
          <p className="text-sm">TVL</p>
          <p className="text-primary-foreground text-[18px]"> $8,404,187.86 </p>
        </article>

        <article>
          <p className="text-sm">Total APR</p>
          <p className="text-primary-foreground text-[18px]">1.79%</p>
        </article>

        <article>
          <p className="text-sm"> Volume (24h) </p>
          <p className="text-[18px]"> $194,215.3 </p>
        </article>

        <article>
          <p className="text-sm"> Fees (24h) </p>
          <p className="text-[18px]"> $582.6 </p>
        </article>
      </Card>

      <LPRewardsCard />
    </section>
  );
}
