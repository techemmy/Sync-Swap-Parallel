import Footer from "@/components/Footer";
import { FaCheck } from "react-icons/fa6";
import { MdArrowForward, MdElectricBolt, MdOutlineInfo } from "react-icons/md";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PiPulseBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import { HiSparkles } from "react-icons/hi2";
import ConnectWalletDialogButton from "@/components/ConnectWalletDialogButton";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function SwitchNetwork({ imgSrc, title }: { imgSrc: string; title: string }) {
  return (
    <>
      <p className="text-sm text-card-foreground">Please connect to</p>
      <section className="flex items-center gap-x-2 mb-2">
        <img className="w-8 h-8" src={imgSrc} alt="Ethereum logo" />
        <h3 className="text-primary-foreground text-2xl">{title}</h3>
      </section>
      <ConnectWalletDialogButton className="px-12">
        <PiPulseBold fontSize={20} fontWeight={60} />
        <p>Switch Network</p>
      </ConnectWalletDialogButton>
    </>
  );
}

function MoreBridges() {
  return (
    <div className="flex items-center gap-x-3 mt-10">
      <div className="flex items-center gap-x-1">
        <HiSparkles className="text-primary" />
        <p className="text-card-foreground text-sm">
          Looking for more bridges?
        </p>
      </div>

      <Link
        className="w-max flex gap-x-2 text-primary items-center text-card-foreground text-sm p-2 hover:bg-primary/[0.04] rounded-xl"
        to="/bridge"
      >
        <p>Go to bridge page</p>
        <MdArrowForward />
      </Link>
    </div>
  );
}

export default function BridgeMove() {
  return (
    <>
      <main className="relative overflow-hidden pt-28 max-w-screen-md mx-auto min-h-screen p-4">
        <img
          className="absolute w-full opacity-[0.1] z-0 -left-2 top-1"
          src="/images/tracks_light.png"
        />
        <section className="relative z-20 mx-auto w-max grid gap-3">
          <div className="flex gap-x-4 items-end">
            <MdElectricBolt fontSize={40} className="text-primary" />
            <h2 className="text-primary-foreground text-3xl">Move</h2>
          </div>
          <p className="text-card-foreground text-sm">
            Securely and easily move assets between Ethereum and zkSync Era.
          </p>
          <div className="py-2 px-4 rounded-3xl flex gap-x-2 items-center bg-gradient-to-r from-secondary/[0.1] to-transparent w-max text-primary">
            <FaCheck />
            <p className="text-sm">Powered by zkSync Era Official Bridge</p>
            <Tooltip>
              <TooltipTrigger>
                <MdOutlineInfo />
              </TooltipTrigger>
              <TooltipContent className="w-[500px]">
                <p>
                  SyncSwap Move is a frontend for the zkSync Official Bridge
                  with no 3rd party risks. All bridged tokens are 100% zkSync
                  Era native assets.
                </p>
              </TooltipContent>
            </Tooltip>
          </div>

          <Tabs defaultValue="withdraw" className="mt-8">
            <TabsList className="shadow-thin mb-12">
              <TabsTrigger value="deposit">
                <h2>Deposit</h2>
              </TabsTrigger>
              <TabsTrigger value="withdraw">
                <h2>Withdraw</h2>
              </TabsTrigger>
              <TabsTrigger value="claim">
                <h2>Claim</h2>
              </TabsTrigger>
            </TabsList>

            <TabsContent
              value="deposit"
              className="grid gap-y-3 justify-center justify-items-center"
            >
              <SwitchNetwork
                imgSrc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAS1BMVEUAAABhfephfetifephfepifupffO9hfuphfuxifethfuphfu5ifurBzPf///+Bl+5rhuu5xvaOovB3j+2su/SdrvLY3/r29/7q7v2nxo4HAAAADHRSTlMAvEPkz4ASmDVlqyG03JyqAAAEVklEQVR42s1ba3OjMAz0i1ewwQYM+f+/9K6TuzoN5GqtTLn92OmMN2j1sCQLCHXbNdIYre1vaG2MbLq2Fj8DVUltD6Flpc4/3H6DE0moRtss6EadePo1HJS0ZMhyFDpjIZiuzK83Fobhf4VeWhZkLzioG8tGVTOMr20BaFQKtbSFIGtIfNoWg24FGZUtCrIZGlsYjSDhZovjxpQfHzL/fGNPgcl0hl7bk6D7rN+v7WnQNeH7X2UFaU+FBPzvR72xsqej+mf8t1RMo6VClXQAfw8cV+ALMAxuwoXIF8A8DM75UjJoLRnrB4HFktGKIxhLRRw+CDi6Do04QGep8NuDQPAl6pPakuGGBwEXEU/gl0Dj8JeAm/kFkgIUmAgAOlRsBS5DIgAEA8P9APOWCEA6VMwYuA6JAKRDyYtB05AIgDpsWVXA/ZXAwqkMekSBiQCqwx7PQvO2J+A8npMMoMBEADaCgSUYhwSXMKIybIAkdEQgeDAea3IZtCOA6VBjUXAcdgTQYKAgH1jfE1ggP5BoCNgTcBMSjtEQkAjgOgQk4IZjAlhSUmQJTMOeAEOHFTkM3r8jEMgiwBWYCOA6JGbCeXjFujjH0WFP0+D6enxw4xg5OlSigxW4ufCRgX4jBufApNRRMpF/VuDdhcdpY6IAGKESNygJrZ8Hjn8wLZAObwQvHL8enwjsKXiCHxp6IR6+GPwJUwzUpGTyCcQ/pk/YEUhiGPMJaEIZlI7fEUiIC0WHWhCS0OrcNwSSGGJpAlM6fkfgiEJ2UsolEJzLIZCQ64q5GvCRRmDONoHOTkRLPoHZ20xoSjkwhkwC3gJxIAd+yiHgadczmWmAd1J4Z/xMGjI3G07OH0vh2Pg+Zqqwya5Jw7b85RLeEvCf/xKz03GXn4vu04EdDr7+GPKzUSdayo1knXd22Bt/oZQkrahpXYHgX1zy5ev7SCvKaiGIl6ItfpVCOj79MZIu6JJYE75I4fPrJ8sET7qYVPTOgHuSwrPrpdsZ5WqmgIvRtnxK4fnrPzBROxTQzeQevwa8MUBNCvEBifWn1vEwUwZPblBU6PXc+aPARG/RKLhBsS270ByRlr3FOwT3aQ54l0pDjcpxe98fCDPUqFRgo3ZPYAKHJprRp2J0qHRq11/TK652AwvIF/FGbY+PbJYjAhNjmaPFJxbJA1kjdAnPbJIAWNssCh6a4OMS5ujWMQeXkje8Ti0zdGrYsjeYxmcCMzq+5w8vwaFlXWKHZsU3KDrWEgt/h8SU2uN6EJhLbXM1wCLVkAQAKJBvhHVwi8UNwPeEeQseHNsXkkGE1/lAGfDR/EcrnbgQccjL13qvXmy+erX78uX2XMgL9HfxA4fzV6wrziMbPrTCnhkVf2h0kRkqAaI1RbyvFTi6Qk+ccNRMh2xqwUUrGeIDvz5OAT++PAXZXvruVp7x9DhbjzclzkGtGp3x5LkWZ6Lv/mEM2fXiJ9Crrnp9/l91Cjr8F3ZnbI+8pv7pAAAAAElFTkSuQmCC"
                title="Ethereum Mainnet"
              />
              <MoreBridges />
            </TabsContent>

            <TabsContent
              value="withdraw"
              className="grid gap-y-3 justify-center justify-items-center"
            >
              <SwitchNetwork
                imgSrc="/images/logos/zksync.svg"
                title="zkSync Era Mainnet"
              />
              <MoreBridges />
            </TabsContent>
            <TabsContent
              value="claim"
              className="grid gap-y-3 justify-center justify-items-center"
            >
              <SwitchNetwork
                imgSrc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAS1BMVEUAAABhfephfetifephfepifupffO9hfuphfuxifethfuphfu5ifurBzPf///+Bl+5rhuu5xvaOovB3j+2su/SdrvLY3/r29/7q7v2nxo4HAAAADHRSTlMAvEPkz4ASmDVlqyG03JyqAAAEVklEQVR42s1ba3OjMAz0i1ewwQYM+f+/9K6TuzoN5GqtTLn92OmMN2j1sCQLCHXbNdIYre1vaG2MbLq2Fj8DVUltD6Flpc4/3H6DE0moRtss6EadePo1HJS0ZMhyFDpjIZiuzK83Fobhf4VeWhZkLzioG8tGVTOMr20BaFQKtbSFIGtIfNoWg24FGZUtCrIZGlsYjSDhZovjxpQfHzL/fGNPgcl0hl7bk6D7rN+v7WnQNeH7X2UFaU+FBPzvR72xsqej+mf8t1RMo6VClXQAfw8cV+ALMAxuwoXIF8A8DM75UjJoLRnrB4HFktGKIxhLRRw+CDi6Do04QGep8NuDQPAl6pPakuGGBwEXEU/gl0Dj8JeAm/kFkgIUmAgAOlRsBS5DIgAEA8P9APOWCEA6VMwYuA6JAKRDyYtB05AIgDpsWVXA/ZXAwqkMekSBiQCqwx7PQvO2J+A8npMMoMBEADaCgSUYhwSXMKIybIAkdEQgeDAea3IZtCOA6VBjUXAcdgTQYKAgH1jfE1ggP5BoCNgTcBMSjtEQkAjgOgQk4IZjAlhSUmQJTMOeAEOHFTkM3r8jEMgiwBWYCOA6JGbCeXjFujjH0WFP0+D6enxw4xg5OlSigxW4ufCRgX4jBufApNRRMpF/VuDdhcdpY6IAGKESNygJrZ8Hjn8wLZAObwQvHL8enwjsKXiCHxp6IR6+GPwJUwzUpGTyCcQ/pk/YEUhiGPMJaEIZlI7fEUiIC0WHWhCS0OrcNwSSGGJpAlM6fkfgiEJ2UsolEJzLIZCQ64q5GvCRRmDONoHOTkRLPoHZ20xoSjkwhkwC3gJxIAd+yiHgadczmWmAd1J4Z/xMGjI3G07OH0vh2Pg+Zqqwya5Jw7b85RLeEvCf/xKz03GXn4vu04EdDr7+GPKzUSdayo1knXd22Bt/oZQkrahpXYHgX1zy5ev7SCvKaiGIl6ItfpVCOj79MZIu6JJYE75I4fPrJ8sET7qYVPTOgHuSwrPrpdsZ5WqmgIvRtnxK4fnrPzBROxTQzeQevwa8MUBNCvEBifWn1vEwUwZPblBU6PXc+aPARG/RKLhBsS270ByRlr3FOwT3aQ54l0pDjcpxe98fCDPUqFRgo3ZPYAKHJprRp2J0qHRq11/TK652AwvIF/FGbY+PbJYjAhNjmaPFJxbJA1kjdAnPbJIAWNssCh6a4OMS5ujWMQeXkje8Ti0zdGrYsjeYxmcCMzq+5w8vwaFlXWKHZsU3KDrWEgt/h8SU2uN6EJhLbXM1wCLVkAQAKJBvhHVwi8UNwPeEeQseHNsXkkGE1/lAGfDR/EcrnbgQccjL13qvXmy+erX78uX2XMgL9HfxA4fzV6wrziMbPrTCnhkVf2h0kRkqAaI1RbyvFTi6Qk+ccNRMh2xqwUUrGeIDvz5OAT++PAXZXvruVp7x9DhbjzclzkGtGp3x5LkWZ6Lv/mEM2fXiJ9Crrnp9/l91Cjr8F3ZnbI+8pv7pAAAAAElFTkSuQmCC"
                title="Ethereum Mainnet"
              />
            </TabsContent>
          </Tabs>
        </section>
      </main>
      <Footer />
    </>
  );
}
