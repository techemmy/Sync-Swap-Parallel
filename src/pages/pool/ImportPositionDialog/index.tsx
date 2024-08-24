import { FaDiscord } from "react-icons/fa";
import { IoWalletOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import SelectTokenDialog from "@/components/SelectTokenDialog";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ConnectWalletDialog from "@/components/ConnectWalletDialog";
import { Link } from "react-router-dom";

export default function ImportPositionDialog() {
  return (
    <DialogContent className="max-w-md">
      <DialogTitle className="font-medium"> Import Position </DialogTitle>
      <DialogDescription className="my-2">
        Select tokens the pool comprises to import.
      </DialogDescription>

      <div className="grid gap-y-4">
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="transition-all active:scale-90 px-4 py-2 w-full flex flex-row justify-between"
            >
              <article className="flex gap-x-3 items-center">
                <img
                  className="border-[50%] w-6 h-6"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAS1BMVEUAAABhfephfetifephfepifupffO9hfuphfuxifethfuphfu5ifurBzPf///+Bl+5rhuu5xvaOovB3j+2su/SdrvLY3/r29/7q7v2nxo4HAAAADHRSTlMAvEPkz4ASmDVlqyG03JyqAAAEVklEQVR42s1ba3OjMAz0i1ewwQYM+f+/9K6TuzoN5GqtTLn92OmMN2j1sCQLCHXbNdIYre1vaG2MbLq2Fj8DVUltD6Flpc4/3H6DE0moRtss6EadePo1HJS0ZMhyFDpjIZiuzK83Fobhf4VeWhZkLzioG8tGVTOMr20BaFQKtbSFIGtIfNoWg24FGZUtCrIZGlsYjSDhZovjxpQfHzL/fGNPgcl0hl7bk6D7rN+v7WnQNeH7X2UFaU+FBPzvR72xsqej+mf8t1RMo6VClXQAfw8cV+ALMAxuwoXIF8A8DM75UjJoLRnrB4HFktGKIxhLRRw+CDi6Do04QGep8NuDQPAl6pPakuGGBwEXEU/gl0Dj8JeAm/kFkgIUmAgAOlRsBS5DIgAEA8P9APOWCEA6VMwYuA6JAKRDyYtB05AIgDpsWVXA/ZXAwqkMekSBiQCqwx7PQvO2J+A8npMMoMBEADaCgSUYhwSXMKIybIAkdEQgeDAea3IZtCOA6VBjUXAcdgTQYKAgH1jfE1ggP5BoCNgTcBMSjtEQkAjgOgQk4IZjAlhSUmQJTMOeAEOHFTkM3r8jEMgiwBWYCOA6JGbCeXjFujjH0WFP0+D6enxw4xg5OlSigxW4ufCRgX4jBufApNRRMpF/VuDdhcdpY6IAGKESNygJrZ8Hjn8wLZAObwQvHL8enwjsKXiCHxp6IR6+GPwJUwzUpGTyCcQ/pk/YEUhiGPMJaEIZlI7fEUiIC0WHWhCS0OrcNwSSGGJpAlM6fkfgiEJ2UsolEJzLIZCQ64q5GvCRRmDONoHOTkRLPoHZ20xoSjkwhkwC3gJxIAd+yiHgadczmWmAd1J4Z/xMGjI3G07OH0vh2Pg+Zqqwya5Jw7b85RLeEvCf/xKz03GXn4vu04EdDr7+GPKzUSdayo1knXd22Bt/oZQkrahpXYHgX1zy5ev7SCvKaiGIl6ItfpVCOj79MZIu6JJYE75I4fPrJ8sET7qYVPTOgHuSwrPrpdsZ5WqmgIvRtnxK4fnrPzBROxTQzeQevwa8MUBNCvEBifWn1vEwUwZPblBU6PXc+aPARG/RKLhBsS270ByRlr3FOwT3aQ54l0pDjcpxe98fCDPUqFRgo3ZPYAKHJprRp2J0qHRq11/TK652AwvIF/FGbY+PbJYjAhNjmaPFJxbJA1kjdAnPbJIAWNssCh6a4OMS5ujWMQeXkje8Ti0zdGrYsjeYxmcCMzq+5w8vwaFlXWKHZsU3KDrWEgt/h8SU2uN6EJhLbXM1wCLVkAQAKJBvhHVwi8UNwPeEeQseHNsXkkGE1/lAGfDR/EcrnbgQccjL13qvXmy+erX78uX2XMgL9HfxA4fzV6wrziMbPrTCnhkVf2h0kRkqAaI1RbyvFTi6Qk+ccNRMh2xqwUUrGeIDvz5OAT++PAXZXvruVp7x9DhbjzclzkGtGp3x5LkWZ6Lv/mEM2fXiJ9Crrnp9/l91Cjr8F3ZnbI+8pv7pAAAAAElFTkSuQmCC"
                />
                <p className="text-lg text-primary-foreground">ETH</p>
              </article>
              <MdKeyboardArrowDown width={30} />
            </Button>
          </DialogTrigger>

          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="transition-all active:scale-90 px-4 py-2 w-full flex flex-row justify-between"
            >
              <article className="flex gap-x-3 items-center">
                <img
                  className="border-[50%] w-6 h-6"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAA/1BMVEUAAAAndcondcondcondcondcondcondcondcondcondcondcondcondcondcondcondcondcondcondcondcondcondcondcondcondcondcr///8odssqd8sabccldMoGYMIUacYDXsEKY8MAXMEicskQZ8UOZcQXa8YAWcAfcMj7/f73+v0/hdAuesz0+P3d6ffR4vRRkNU6gs+dwOdEiNG+1u+JtON3qd43f84yfM3v9fylxemVvOZIitJtotxWk9br8vp9rOBhmtnW5fXM3/PC2PC60+6Cr+FwpNwAVr4AULzh7PjG2/Ll7vmyzu2syuuOt+Ron9paltdOjtSNxblrAAAAGnRSTlMA792Tyyf117mvnH51XBkQ/ObBi4ltakZANWpHnZcAAAVlSURBVFjDpVdpWxoxELagtdZaq7bWLtlskt3sJSByCCggQj3x1v//W8okk+zaSmsf8gWSzLyZzPFmdmHWWFr7urJYeDcdhcWVr2tLC/81vheXnd/GcvH7W7U/rxacV0dh9fNb1IvvnZnjffGfEJ9QfSbEp7+q/1h0/jkWf8zW/+a8aXybpf8xL+V5s2cfX9f/kEkQL2K+R+zU8VkEUzM+vKa/abfdVESDZp9Kez59aLZ8IV0rsvmX84knovFBqVQ6jM1SXJ1Oz598Roi1Yeb9XR7Ub0rTsVvhZo03yrBy0EqoO8MP21afxc2SHtW8BXo8RL5F2H5ROcZ8EnRrWrZ2yT3rg3C0p1dPXWER8vVlSyep7yrBn4+UOWSqKqUHbvGrFydq46gSGITlXP4a+5Ohktrt8ICS6Vz6PIRwEocnsq/3MgSb1etfUD9o6eO76CwpmzdnbSq1c5NnZUS5yhDhyzoCFFE/So+Us7lwdbiiQSkLJ3ESuQ/za84RoYgGoEWpuFH6LDI2RnU4scFthEKFcJcY92oTVo0DOrC774cuRiSeQPj24kQSFPHja5AZGzesKoANLc+9Mog7eEOXBtXxPXit3Qp9vJMruhClk5hqgA3Q38EUSJSXjxPUD8P2UQnHWUUYG65GsHCR4Hwnc2HsggE3gdRwMT8r5cazwHulbB9MSGnmxoLeCUZaUEN74k6lzV3v/qeKvstNqFWqXAZarmCzWEaAfMPQv34dxO4pYyw8hr894aAgO4VL+Z7J5zX9J6zkgR3RhITy/elfOmkrE6jx1SVMu2jR2sIWanQgBKYAPf98Om0qOBKntWltEWpLswzORou2Flb0H9aDHELDEOD8ShIVUDIYuClxzN4ZgCPAyoImcsnhZg+Bg0MAXnk4EXEqpwhhSDM6Cx7ACaHUJI9BoOR2uvrIjBB7VNFrDg/TUDDu4PHZ3rVHMQzv9MW6cLE6OC0XFHBL7aB53GWY3lmE9rDE3iEAr0CKtkLLbJEHd8JR7nVZZkPYMoyZB2gBQAUADEJ8oVIIDRlgiZiI77Z+A2goCyI1McVEn0e9g1s0wrMUG72wAJ0YH0LlDI0PMO99ISJv0FY02Q5e9UEBw5jKGiSisOzsMxYRYFXqTypH+RxxxHEuCouYSF4Eb1HfnOKlT53OMCaayiZ9IBqamjyA6U3oYSJt5VZPQ2meIkWGIXLARR5ARqe5TNwyxcTGoNLAMNDqHtDGhChXJGDdublC2FXEI0wxLVmVPNOIe2CDxoRxLq4UV3aEqcZRvhqXDKE4ikFqYaqlooqKXbteaQx78PeEUuTuqAalgMRRsJRGxFOeEkkAx8JRu/q3Zbg2GCs5JI5iRqpSId9ydL0Ux3AnHLWB4UTq1/L27ORoPVAF2LwybUZQbe/vKiP2RylDXidXbVgaoa828g+LZKoAn8wlXC78AVgxFgF1DaUOSspOmn9Y1nGTacd1A9dmvTyC2EIlooin3tehEcHXtWgCpMw7Okwgh7HE8izhirSmGNq8jcWXzztJxbku3atUn0CdMljA0SvJ4bV6/aOYZM97vsFweah5qMOYRxRC/aI9prq8omRcVhkhTZ/06Y8Wx/WpRjhoBdAVEjdizCcEGs+k2ivpGxpqWX7ZZCECP9eRv6+HadapSr/RL+uMqNoua+m1Ns8N2QMmT49LS7G8j4t31FLb9uuNpkuTOnKhqhfkK2TGS2Hp+eOsVpc4Ih4pIvyjU21Wk9Sd3W5v5ujU65yWyg61FrhTDus3gtAls5tttAFLJuDDOiVZt37Z8YLImd1qWz/k/I69muFYC2fvP/8nz/wfXfN/9s3/4Tn/p+/8H99zf/7/AuAyihx4sIg7AAAAAElFTkSuQmCC"
                />
                <p className="text-lg text-primary-foreground">USDC.e</p>
              </article>
              <MdKeyboardArrowDown width={30} />
            </Button>
          </DialogTrigger>
          <SelectTokenDialog />
        </Dialog>

        {/* TODO: gotta make the connect button a dialog */}
        <Dialog>
          <DialogTrigger asChild>
            <Button className="rounded-xl flex gap-x-2 transition-all hover:shadow active:scale-90 mt-2">
              <IoWalletOutline size={20} /> Connect
            </Button>
          </DialogTrigger>
          <ConnectWalletDialog />
        </Dialog>

        <Link
          to="https://discord.gg/syncswap"
          className="mt-2 text-card-foreground flex items-center gap-x-2 hover:opacity-75"
        >
          <FaDiscord fontSize={20} />
          <span className="font-medium text-sm">
            Need help? Join the Discord
          </span>
        </Link>
      </div>
    </DialogContent>
  );
}
