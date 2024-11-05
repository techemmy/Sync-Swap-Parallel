import { Card, CardContent } from "@/components/ui/card";
import { MdLanguage, MdSwapCalls } from "react-icons/md";
import { useState } from "react";
import { chartDatapoints, TOKENS } from "@/constants";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { ChartDuration } from "@/types";
import LineChartSeries from "./LineSeriesChart";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

export default function TradeChartSection() {
  const [duration, setDuration] = useState<ChartDuration>(
    Object.keys(chartDatapoints)[1] as ChartDuration,
  );
  return (
    <section className="w-[780px] max-w-[98%] min-w-[350px] px-2 mt-4 z-20 animate-fade-in">
      <div className="flex justify-between">
        <div className="flex gap-4 items-center">
          <img
            className="border-[50%] w-10 h-10"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAS1BMVEUAAABhfephfetifephfepifupffO9hfuphfuxifethfuphfu5ifurBzPf///+Bl+5rhuu5xvaOovB3j+2su/SdrvLY3/r29/7q7v2nxo4HAAAADHRSTlMAvEPkz4ASmDVlqyG03JyqAAAEVklEQVR42s1ba3OjMAz0i1ewwQYM+f+/9K6TuzoN5GqtTLn92OmMN2j1sCQLCHXbNdIYre1vaG2MbLq2Fj8DVUltD6Flpc4/3H6DE0moRtss6EadePo1HJS0ZMhyFDpjIZiuzK83Fobhf4VeWhZkLzioG8tGVTOMr20BaFQKtbSFIGtIfNoWg24FGZUtCrIZGlsYjSDhZovjxpQfHzL/fGNPgcl0hl7bk6D7rN+v7WnQNeH7X2UFaU+FBPzvR72xsqej+mf8t1RMo6VClXQAfw8cV+ALMAxuwoXIF8A8DM75UjJoLRnrB4HFktGKIxhLRRw+CDi6Do04QGep8NuDQPAl6pPakuGGBwEXEU/gl0Dj8JeAm/kFkgIUmAgAOlRsBS5DIgAEA8P9APOWCEA6VMwYuA6JAKRDyYtB05AIgDpsWVXA/ZXAwqkMekSBiQCqwx7PQvO2J+A8npMMoMBEADaCgSUYhwSXMKIybIAkdEQgeDAea3IZtCOA6VBjUXAcdgTQYKAgH1jfE1ggP5BoCNgTcBMSjtEQkAjgOgQk4IZjAlhSUmQJTMOeAEOHFTkM3r8jEMgiwBWYCOA6JGbCeXjFujjH0WFP0+D6enxw4xg5OlSigxW4ufCRgX4jBufApNRRMpF/VuDdhcdpY6IAGKESNygJrZ8Hjn8wLZAObwQvHL8enwjsKXiCHxp6IR6+GPwJUwzUpGTyCcQ/pk/YEUhiGPMJaEIZlI7fEUiIC0WHWhCS0OrcNwSSGGJpAlM6fkfgiEJ2UsolEJzLIZCQ64q5GvCRRmDONoHOTkRLPoHZ20xoSjkwhkwC3gJxIAd+yiHgadczmWmAd1J4Z/xMGjI3G07OH0vh2Pg+Zqqwya5Jw7b85RLeEvCf/xKz03GXn4vu04EdDr7+GPKzUSdayo1knXd22Bt/oZQkrahpXYHgX1zy5ev7SCvKaiGIl6ItfpVCOj79MZIu6JJYE75I4fPrJ8sET7qYVPTOgHuSwrPrpdsZ5WqmgIvRtnxK4fnrPzBROxTQzeQevwa8MUBNCvEBifWn1vEwUwZPblBU6PXc+aPARG/RKLhBsS270ByRlr3FOwT3aQ54l0pDjcpxe98fCDPUqFRgo3ZPYAKHJprRp2J0qHRq11/TK652AwvIF/FGbY+PbJYjAhNjmaPFJxbJA1kjdAnPbJIAWNssCh6a4OMS5ujWMQeXkje8Ti0zdGrYsjeYxmcCMzq+5w8vwaFlXWKHZsU3KDrWEgt/h8SU2uN6EJhLbXM1wCLVkAQAKJBvhHVwi8UNwPeEeQseHNsXkkGE1/lAGfDR/EcrnbgQccjL13qvXmy+erX78uX2XMgL9HfxA4fzV6wrziMbPrTCnhkVf2h0kRkqAaI1RbyvFTi6Qk+ccNRMh2xqwUUrGeIDvz5OAT++PAXZXvruVp7x9DhbjzclzkGtGp3x5LkWZ6Lv/mEM2fXiJ9Crrnp9/l91Cjr8F3ZnbI+8pv7pAAAAAElFTkSuQmCC"
          />
          <p className="text-3xl text-primary-foreground">ETH</p>
          <p className="text-lg text-card-foreground">Ethereum</p>
        </div>

        <Card className="flex gap-x-2 text-sm font-medium border-0 rounded-3xl bg-card/80 opacity-[0.85] w-max cursor-pointer">
          <CardContent className="flex gap-1 py-0 px-3 items-center">
            <MdSwapCalls fontSize={18} className="text-primary" />
            <img
              className="border-[50%] w-5 h-5"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAA/1BMVEUAAAAndcondcondcondcondcondcondcondcondcondcondcondcondcondcondcondcondcondcondcondcondcondcondcondcondcondcr///8odssqd8sabccldMoGYMIUacYDXsEKY8MAXMEicskQZ8UOZcQXa8YAWcAfcMj7/f73+v0/hdAuesz0+P3d6ffR4vRRkNU6gs+dwOdEiNG+1u+JtON3qd43f84yfM3v9fylxemVvOZIitJtotxWk9br8vp9rOBhmtnW5fXM3/PC2PC60+6Cr+FwpNwAVr4AULzh7PjG2/Ll7vmyzu2syuuOt+Ron9paltdOjtSNxblrAAAAGnRSTlMA792Tyyf117mvnH51XBkQ/ObBi4ltakZANWpHnZcAAAVlSURBVFjDpVdpWxoxELagtdZaq7bWLtlskt3sJSByCCggQj3x1v//W8okk+zaSmsf8gWSzLyZzPFmdmHWWFr7urJYeDcdhcWVr2tLC/81vheXnd/GcvH7W7U/rxacV0dh9fNb1IvvnZnjffGfEJ9QfSbEp7+q/1h0/jkWf8zW/+a8aXybpf8xL+V5s2cfX9f/kEkQL2K+R+zU8VkEUzM+vKa/abfdVESDZp9Kez59aLZ8IV0rsvmX84knovFBqVQ6jM1SXJ1Oz598Roi1Yeb9XR7Ub0rTsVvhZo03yrBy0EqoO8MP21afxc2SHtW8BXo8RL5F2H5ROcZ8EnRrWrZ2yT3rg3C0p1dPXWER8vVlSyep7yrBn4+UOWSqKqUHbvGrFydq46gSGITlXP4a+5Ohktrt8ICS6Vz6PIRwEocnsq/3MgSb1etfUD9o6eO76CwpmzdnbSq1c5NnZUS5yhDhyzoCFFE/So+Us7lwdbiiQSkLJ3ESuQ/za84RoYgGoEWpuFH6LDI2RnU4scFthEKFcJcY92oTVo0DOrC774cuRiSeQPj24kQSFPHja5AZGzesKoANLc+9Mog7eEOXBtXxPXit3Qp9vJMruhClk5hqgA3Q38EUSJSXjxPUD8P2UQnHWUUYG65GsHCR4Hwnc2HsggE3gdRwMT8r5cazwHulbB9MSGnmxoLeCUZaUEN74k6lzV3v/qeKvstNqFWqXAZarmCzWEaAfMPQv34dxO4pYyw8hr894aAgO4VL+Z7J5zX9J6zkgR3RhITy/elfOmkrE6jx1SVMu2jR2sIWanQgBKYAPf98Om0qOBKntWltEWpLswzORou2Flb0H9aDHELDEOD8ShIVUDIYuClxzN4ZgCPAyoImcsnhZg+Bg0MAXnk4EXEqpwhhSDM6Cx7ACaHUJI9BoOR2uvrIjBB7VNFrDg/TUDDu4PHZ3rVHMQzv9MW6cLE6OC0XFHBL7aB53GWY3lmE9rDE3iEAr0CKtkLLbJEHd8JR7nVZZkPYMoyZB2gBQAUADEJ8oVIIDRlgiZiI77Z+A2goCyI1McVEn0e9g1s0wrMUG72wAJ0YH0LlDI0PMO99ISJv0FY02Q5e9UEBw5jKGiSisOzsMxYRYFXqTypH+RxxxHEuCouYSF4Eb1HfnOKlT53OMCaayiZ9IBqamjyA6U3oYSJt5VZPQ2meIkWGIXLARR5ARqe5TNwyxcTGoNLAMNDqHtDGhChXJGDdublC2FXEI0wxLVmVPNOIe2CDxoRxLq4UV3aEqcZRvhqXDKE4ikFqYaqlooqKXbteaQx78PeEUuTuqAalgMRRsJRGxFOeEkkAx8JRu/q3Zbg2GCs5JI5iRqpSId9ydL0Ux3AnHLWB4UTq1/L27ORoPVAF2LwybUZQbe/vKiP2RylDXidXbVgaoa828g+LZKoAn8wlXC78AVgxFgF1DaUOSspOmn9Y1nGTacd1A9dmvTyC2EIlooin3tehEcHXtWgCpMw7Okwgh7HE8izhirSmGNq8jcWXzztJxbku3atUn0CdMljA0SvJ4bV6/aOYZM97vsFweah5qMOYRxRC/aI9prq8omRcVhkhTZ/06Y8Wx/WpRjhoBdAVEjdizCcEGs+k2ivpGxpqWX7ZZCECP9eRv6+HadapSr/RL+uMqNoua+m1Ns8N2QMmT49LS7G8j4t31FLb9uuNpkuTOnKhqhfkK2TGS2Hp+eOsVpc4Ih4pIvyjU21Wk9Sd3W5v5ujU65yWyg61FrhTDus3gtAls5tttAFLJuDDOiVZt37Z8YLImd1qWz/k/I69muFYC2fvP/8nz/wfXfN/9s3/4Tn/p+/8H99zf/7/AuAyihx4sIg7AAAAAElFTkSuQmCC"
            />
            <p className="text-sm text-primary-foreground font-medium">
              USDC.e
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="my-3">
        <div className="flex justify-between mb-2">
          <p className=" flex justify-center items-center border w-max text-primary text-lg border-primary/[0.2] rounded-xl px-2 cursor-pointer transition-colors hover:bg-primary/[0.1]">
            $ 2470.72
          </p>
          <ToggleGroup
            value={duration}
            onValueChange={(value) => {
              const validDurations = Object.keys(chartDatapoints);
              if (!validDurations.includes(value)) {
                value = validDurations[1];
              }
              setDuration(value as ChartDuration);
            }}
            className="border border-primary/[0.2] rounded-xl *:rounded-xl *:font-medium *:text-[13px] text-card-foreground *:h-8"
            type="single"
          >
            <ToggleGroupItem value="1H" aria-label="Toggle one hour">
              <p>1H</p>
            </ToggleGroupItem>
            <ToggleGroupItem value="1D" aria-label="Toggle one day">
              <p>1D</p>
            </ToggleGroupItem>
            <ToggleGroupItem value="1W" aria-label="Toggle one week">
              <p>1W</p>
            </ToggleGroupItem>
            <ToggleGroupItem value="1M" aria-label="Toggle one month">
              <p>1M</p>
            </ToggleGroupItem>
            <ToggleGroupItem value="1Y" aria-label="Toggle one year">
              <p>1Y</p>
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
        <LineChartSeries duration={duration} data={chartDatapoints[duration]} />

        <a href="https://www.tradingview.com/">
          <p className="transition-colors text-card-foreground hover:text-primary text-sm mt-2">
            TradingView Lightweight Charts™ Copyright (с) 2024 TradingView,
            Inc.
          </p>
        </a>
      </div>

      <Card className="mt-10">
        <CardContent className="grid gap-5">
          <h2 className="text-primary-foreground text-xl font-medium">
            About ETH
          </h2>
          <p className="text-sm">
            Ethereum is a decentralized blockchain platform that establishes a
            peer-to-peer network that securely executes and verifies application
            code, called smart contracts. Ether (ETH) is the native
            cryptocurrency of the platform and the second-largest cryptocurrency
            by market capitalization after Bitcoin. ETH is the lifeblood of
            Ethereum.
          </p>

          <div className="grid gap-2">
            <p className="tet-card-foreground text-sm">Links</p>
            <Link to="https://ethereum.org/" className="text-primary">
              <Badge
                className="w-max bg-accent border border-2 py-1 px-3 flex gap-2 font-medium"
                variant="outline"
              >
                <MdLanguage fontSize={20} />
                <span className="text-sm">ethereum.org</span>
              </Badge>
            </Link>
          </div>
        </CardContent>
      </Card>

      <Card className="mt-10">
        <CardContent className="grid gap-5">
          <h2 className="text-primary-foreground text-xl font-medium">
            Featured Pools
          </h2>
          <p className="text-sm">
            Put your assets to work. Become a market maker today by providing
            liquidity on ETH pools to earn trading fees and juicy rewards.
          </p>

          <div className="flex flex-wrap gap-2 w-3/4">
            <Link to="https://ethereum.org/">
              <Badge
                className="w-max bg-accent border border-2 py-2 px-3 flex"
                variant="outline"
              >
                <img className="border-[50%] w-5 h-5" src={TOKENS[0].logo} />
                <img className="border-[50%] w-5 h-5" src={TOKENS[1].logo} />

                <span className="text-sm ml-1 text-primary-foreground font-medium">
                  ETH - USDC.e
                </span>
              </Badge>
            </Link>
            <Link to="https://ethereum.org/">
              <Badge
                className="w-max bg-accent border border-2 py-2 px-3 flex"
                variant="outline"
              >
                <img className="border-[50%] w-5 h-5" src={TOKENS[0].logo} />
                <img className="border-[50%] w-5 h-5" src={TOKENS[1].logo} />

                <span className="text-sm ml-1 text-primary-foreground font-medium">
                  ETH - USDC.e
                </span>
              </Badge>
            </Link>
            <Link to="https://ethereum.org/">
              <Badge
                className="w-max bg-accent border border-2 py-2 px-3 flex"
                variant="outline"
              >
                <img className="border-[50%] w-5 h-5" src={TOKENS[0].logo} />
                <img className="border-[50%] w-5 h-5" src={TOKENS[1].logo} />

                <span className="text-sm ml-1 text-primary-foreground font-medium">
                  ETH - USDC.e
                </span>
              </Badge>
            </Link>
            <Link to="https://ethereum.org/">
              <Badge
                className="w-max bg-accent border border-2 py-2 px-3 flex"
                variant="outline"
              >
                <img className="border-[50%] w-5 h-5" src={TOKENS[0].logo} />
                <img className="border-[50%] w-5 h-5" src={TOKENS[1].logo} />

                <span className="text-sm ml-1 text-primary-foreground font-medium">
                  ETH - USDC.e
                </span>
              </Badge>
            </Link>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
