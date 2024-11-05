import { AreaData } from "lightweight-charts";

export const AVAILABLE_NETWORKS = {
  zkSync: {
    name: "zkSync",
    logoUrl: {
      dark: "/images/zksync_black.png",
      light: "/images/zksync_white.png",
    },
  },
  Linea: {
    name: "Linea",
    logoUrl: { light: "/images/linea.png", dark: "/images/linea.png" },
  },
  Scroll: {
    name: "Scroll",
    logoUrl: { light: "/images/scroll.svg", dark: "/images/scroll.svg" },
  },
};

export const TOKENS = [
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

const ONE_DAY_CHART_DATAPOINTS = [
  { time: 1729900800, value: 2475.32 },
  { time: 1729902600, value: 2472.85 },
  { time: 1729904400, value: 2468.15 },
  { time: 1729906200, value: 2474.55 },
  { time: 1729908000, value: 2480.45 },
  { time: 1729909800, value: 2476.05 },
  { time: 1729911600, value: 2465.18 },
  { time: 1729913400, value: 2470.25 },
  { time: 1729915200, value: 2475.85 },
  { time: 1729917000, value: 2460.78 },
  { time: 1729918800, value: 2455.28 },
  { time: 1729920600, value: 2470.12 },
  { time: 1729922400, value: 2475.62 },
  { time: 1729924200, value: 2482.15 },
  { time: 1729926000, value: 2487.45 },
  { time: 1729927800, value: 2485.28 },
  { time: 1729929600, value: 2479.68 },
  { time: 1729931400, value: 2478.22 },
  { time: 1729933200, value: 2476.54 },
  { time: 1729935000, value: 2485.45 },
  { time: 1729936800, value: 2490.78 },
  { time: 1729938600, value: 2491.28 },
  { time: 1729940400, value: 2489.12 },
  { time: 1729942200, value: 2495.95 },
  { time: 1729944000, value: 2497.45 },
  { time: 1729945800, value: 2499.22 },
  { time: 1729947600, value: 2500.12 },
  { time: 1729949400, value: 2501.25 },
  { time: 1729951200, value: 2500.89 },
  { time: 1729953000, value: 2495.32 },
  { time: 1729954800, value: 2491.67 },
  { time: 1729956600, value: 2487.23 },
  { time: 1729958400, value: 2479.12 },
  { time: 1729960200, value: 2478.92 },
  { time: 1729962000, value: 2475.75 },
  { time: 1729963800, value: 2483.45 },
  { time: 1729965600, value: 2488.68 },
  { time: 1729967400, value: 2485.95 },
  { time: 1729969200, value: 2481.28 },
  { time: 1729971000, value: 2470.45 },
  { time: 1729972800, value: 2465.85 },
  { time: 1729974600, value: 2468.12 },
  { time: 1729976400, value: 2472.25 },
  { time: 1729978200, value: 2478.95 },
  { time: 1729980000, value: 2483.72 },
  { time: 1729981800, value: 2486.45 },
  { time: 1729983600, value: 2491.95 },
  { time: 1729985400, value: 2498.15 },
  { time: 1729987200, value: 2503.32 },
  { time: 1729989000, value: 2502.28 },
  { time: 1729990800, value: 2496.85 },
  { time: 1729992600, value: 2491.15 },
  { time: 1729994400, value: 2485.98 },
  { time: 1729996200, value: 2483.75 },
  { time: 1729998000, value: 2478.56 },
  { time: 1729999800, value: 2472.98 },
  { time: 1730001600, value: 2475.45 },
  { time: 1730003400, value: 2478.85 },
  { time: 1730005200, value: 2480.92 },
  { time: 1730007000, value: 2477.28 },
  { time: 1730008800, value: 2468.12 },
  { time: 1730010600, value: 2463.75 },
  { time: 1730012400, value: 2475.25 },
  { time: 1730014200, value: 2480.78 },
  { time: 1730016000, value: 2485.32 },
  { time: 1730017800, value: 2488.25 },
  { time: 1730019600, value: 2491.95 },
  { time: 1730021400, value: 2495.85 },
  { time: 1730023200, value: 2499.12 },
  { time: 1730025000, value: 2501.68 },
  { time: 1730026800, value: 2504.25 },
  { time: 1730028600, value: 2502.95 },
  { time: 1730030400, value: 2498.32 },
  { time: 1730032200, value: 2492.15 },
  { time: 1730034000, value: 2488.78 },
  { time: 1730035800, value: 2484.28 },
  { time: 1730037600, value: 2486.95 },
  { time: 1730039400, value: 2489.32 },
  { time: 1730041200, value: 2491.75 },
  { time: 1730043000, value: 2494.85 },
  { time: 1730044800, value: 2497.32 },
  { time: 1730046600, value: 2495.98 },
  { time: 1730048400, value: 2489.65 },
  { time: 1730050200, value: 2483.25 },
  { time: 1730052000, value: 2475.32 },
  { time: 1730053800, value: 2470.85 },
  { time: 1730055600, value: 2478.45 },
  { time: 1730057400, value: 2483.25 },
  { time: 1730059200, value: 2489.78 },
  { time: 1730061000, value: 2492.65 },
  { time: 1730062800, value: 2495.28 },
  { time: 1730064600, value: 2497.98 },
  { time: 1730066400, value: 2502.45 },
  { time: 1730068200, value: 2504.85 },
  { time: 1730070000, value: 2501.12 },
  { time: 1730071800, value: 2496.88 },
  { time: 1730073600, value: 2491.12 },
  { time: 1730075400, value: 2485.78 },
] as unknown as AreaData[];

const ONE_HOUR_CHART_DATAPOINTS = [
  { time: 1729900800, value: 2475.32 },
  { time: 1729904400, value: 2473.15 },
  { time: 1729908000, value: 2472.88 },
  { time: 1729911600, value: 2474.55 },
  { time: 1729915200, value: 2476.12 },
  { time: 1729918800, value: 2475.92 },
  { time: 1729922400, value: 2478.45 },
  { time: 1729926000, value: 2481.75 },
  { time: 1729929600, value: 2483.32 },
  { time: 1729933200, value: 2481.18 },
  { time: 1729936800, value: 2478.45 },
  { time: 1729940400, value: 2476.72 },
  { time: 1729944000, value: 2478.95 },
  { time: 1729947600, value: 2480.32 },
  { time: 1729951200, value: 2483.88 },
  { time: 1729954800, value: 2486.12 },
  { time: 1729958400, value: 2484.75 },
  { time: 1729962000, value: 2481.25 },
  { time: 1729965600, value: 2479.32 },
  { time: 1729969200, value: 2478.88 },
  { time: 1729972800, value: 2477.15 },
  { time: 1729976400, value: 2479.45 },
  { time: 1729980000, value: 2482.32 },
  { time: 1729983600, value: 2484.72 },
  { time: 1729987200, value: 2487.88 },
  { time: 1729990800, value: 2485.35 },
  { time: 1729994400, value: 2481.15 },
  { time: 1729998000, value: 2478.92 },
  { time: 1730001600, value: 2476.75 },
  { time: 1730005200, value: 2478.12 },
  { time: 1730008800, value: 2479.58 },
  { time: 1730012400, value: 2481.32 },
  { time: 1730016000, value: 2485.25 },
  { time: 1730019600, value: 2488.78 },
  { time: 1730023200, value: 2491.15 },
  { time: 1730026800, value: 2493.88 },
  { time: 1730030400, value: 2495.12 },
  { time: 1730034000, value: 2494.15 },
  { time: 1730037600, value: 2491.32 },
  { time: 1730041200, value: 2489.25 },
  { time: 1730044800, value: 2486.88 },
  { time: 1730048400, value: 2484.12 },
  { time: 1730052000, value: 2482.75 },
  { time: 1730055600, value: 2483.32 },
  { time: 1730059200, value: 2486.15 },
  { time: 1730062800, value: 2487.92 },
  { time: 1730066400, value: 2490.32 },
  { time: 1730070000, value: 2492.88 },
  { time: 1730073600, value: 2491.15 },
  { time: 1730077200, value: 2488.92 },
  { time: 1730080800, value: 2486.25 },
  { time: 1730084400, value: 2483.75 },
  { time: 1730088000, value: 2481.45 },
  { time: 1730091600, value: 2479.25 },
  { time: 1730095200, value: 2477.85 },
  { time: 1730098800, value: 2476.12 },
  { time: 1730102400, value: 2478.45 },
  { time: 1730106000, value: 2481.32 },
  { time: 1730109600, value: 2484.75 },
  { time: 1730113200, value: 2486.88 },
  { time: 1730116800, value: 2489.15 },
  { time: 1730120400, value: 2487.25 },
  { time: 1730124000, value: 2485.75 },
  { time: 1730127600, value: 2483.25 },
  { time: 1730131200, value: 2481.92 },
  { time: 1730134800, value: 2480.12 },
  { time: 1730138400, value: 2478.45 },
  { time: 1730142000, value: 2476.35 },
  { time: 1730145600, value: 2474.15 },
  { time: 1730149200, value: 2472.35 },
  { time: 1730152800, value: 2474.58 },
  { time: 1730156400, value: 2477.45 },
  { time: 1730160000, value: 2480.32 },
  { time: 1730163600, value: 2483.15 },
  { time: 1730167200, value: 2486.75 },
  { time: 1730170800, value: 2488.92 },
  { time: 1730174400, value: 2491.88 },
  { time: 1730178000, value: 2494.12 },
  { time: 1730181600, value: 2496.32 },
  { time: 1730185200, value: 2495.75 },
  { time: 1730188800, value: 2492.15 },
  { time: 1730192400, value: 2488.85 },
  { time: 1730196000, value: 2485.72 },
  { time: 1730199600, value: 2483.15 },
  { time: 1730203200, value: 2481.75 },
  { time: 1730206800, value: 2480.12 },
  { time: 1730210400, value: 2479.85 },
  { time: 1730214000, value: 2478.12 },
  { time: 1730217600, value: 2476.45 },
  { time: 1730221200, value: 2474.35 },
  { time: 1730224800, value: 2472.55 },
  { time: 1730228400, value: 2470.88 },
  { time: 1730232000, value: 2469.25 },
  { time: 1730235600, value: 2471.15 },
  { time: 1730239200, value: 2474.32 },
  { time: 1730242800, value: 2476.85 },
  { time: 1730246400, value: 2478.12 },
  { time: 1730250000, value: 2480.32 },
] as unknown as AreaData[];

const ONE_WEEK_CHART_DATAPOINTS = [
  { time: 1729900800, value: 2475.32 },
  { time: 1729915200, value: 2473.88 },
  { time: 1729929600, value: 2476.25 },
  { time: 1729944000, value: 2478.92 },
  { time: 1729958400, value: 2477.45 },
  { time: 1729972800, value: 2480.32 },
  { time: 1729987200, value: 2483.75 },
  { time: 1730001600, value: 2481.95 },
  { time: 1730016000, value: 2486.12 },
  { time: 1730030400, value: 2487.55 },
  { time: 1730044800, value: 2485.32 },
  { time: 1730059200, value: 2483.88 },
  { time: 1730073600, value: 2481.12 },
  { time: 1730088000, value: 2479.75 },
  { time: 1730102400, value: 2482.15 },
  { time: 1730116800, value: 2485.32 },
  { time: 1730131200, value: 2488.75 },
  { time: 1730145600, value: 2491.25 },
  { time: 1730160000, value: 2493.78 },
  { time: 1730174400, value: 2490.12 },
  { time: 1730188800, value: 2488.65 },
  { time: 1730203200, value: 2487.12 },
  { time: 1730217600, value: 2485.88 },
  { time: 1730232000, value: 2483.25 },
  { time: 1730246400, value: 2481.85 },
  { time: 1730260800, value: 2479.75 },
  { time: 1730275200, value: 2482.32 },
  { time: 1730289600, value: 2484.75 },
  { time: 1730304000, value: 2487.15 },
  { time: 1730318400, value: 2489.25 },
  { time: 1730332800, value: 2491.88 },
  { time: 1730347200, value: 2493.95 },
  { time: 1730361600, value: 2491.45 },
  { time: 1730376000, value: 2489.12 },
  { time: 1730390400, value: 2487.88 },
  { time: 1730404800, value: 2485.15 },
  { time: 1730419200, value: 2482.75 },
  { time: 1730433600, value: 2479.85 },
  { time: 1730448000, value: 2481.32 },
  { time: 1730462400, value: 2484.78 },
  { time: 1730476800, value: 2487.12 },
  { time: 1730491200, value: 2488.88 },
  { time: 1730505600, value: 2490.12 },
  { time: 1730520000, value: 2492.35 },
  { time: 1730534400, value: 2491.78 },
  { time: 1730548800, value: 2489.55 },
  { time: 1730563200, value: 2487.15 },
  { time: 1730577600, value: 2485.12 },
  { time: 1730592000, value: 2483.32 },
  { time: 1730606400, value: 2485.78 },
  { time: 1730620800, value: 2488.32 },
  { time: 1730635200, value: 2490.95 },
  { time: 1730649600, value: 2492.15 },
  { time: 1730664000, value: 2494.12 },
  { time: 1730678400, value: 2492.45 },
  { time: 1730692800, value: 2490.15 },
  { time: 1730707200, value: 2488.45 },
  { time: 1730721600, value: 2486.88 },
  { time: 1730736000, value: 2484.25 },
  { time: 1730750400, value: 2482.75 },
  { time: 1730764800, value: 2481.45 },
  { time: 1730779200, value: 2483.65 },
  { time: 1730793600, value: 2486.32 },
  { time: 1730808000, value: 2489.15 },
  { time: 1730822400, value: 2491.75 },
  { time: 1730836800, value: 2494.12 },
  { time: 1730851200, value: 2491.55 },
  { time: 1730865600, value: 2488.78 },
  { time: 1730880000, value: 2485.92 },
  { time: 1730894400, value: 2483.55 },
  { time: 1730908800, value: 2481.32 },
  { time: 1730923200, value: 2482.88 },
  { time: 1730937600, value: 2485.45 },
  { time: 1730952000, value: 2488.65 },
  { time: 1730966400, value: 2490.78 },
  { time: 1730980800, value: 2493.25 },
  { time: 1730995200, value: 2495.35 },
  { time: 1731009600, value: 2497.88 },
  { time: 1731024000, value: 2495.15 },
  { time: 1731038400, value: 2492.45 },
  { time: 1731052800, value: 2489.32 },
  { time: 1731067200, value: 2485.75 },
  { time: 1731081600, value: 2483.15 },
  { time: 1731096000, value: 2481.45 },
  { time: 1731110400, value: 2479.78 },
  { time: 1731124800, value: 2482.15 },
  { time: 1731139200, value: 2484.88 },
  { time: 1731153600, value: 2487.12 },
  { time: 1731168000, value: 2489.55 },
  { time: 1731182400, value: 2491.88 },
  { time: 1731196800, value: 2494.25 },
  { time: 1731211200, value: 2492.12 },
  { time: 1731225600, value: 2489.35 },
  { time: 1731240000, value: 2487.15 },
  { time: 1731254400, value: 2485.32 },
  { time: 1731268800, value: 2483.15 },
  { time: 1731283200, value: 2481.75 },
  { time: 1731297600, value: 2482.88 },
  { time: 1731312000, value: 2485.32 },
  { time: 1731326400, value: 2488.15 },
  { time: 1731340800, value: 2491.45 },
  { time: 1731355200, value: 2494.32 },
  { time: 1731369600, value: 2492.15 },
  { time: 1731384000, value: 2489.75 },
  { time: 1731398400, value: 2487.32 },
  { time: 1731412800, value: 2485.15 },
  { time: 1731427200, value: 2483.78 },
  { time: 1731441600, value: 2482.32 },
  { time: 1731456000, value: 2485.45 },
  { time: 1731470400, value: 2487.88 },
  { time: 1731484800, value: 2490.35 },
  { time: 1731499200, value: 2493.12 },
  { time: 1731513600, value: 2491.45 },
  { time: 1731528000, value: 2489.78 },
  { time: 1731542400, value: 2487.15 },
  { time: 1731556800, value: 2485.78 },
  { time: 1731571200, value: 2483.32 },
  { time: 1731585600, value: 2481.78 },
  { time: 1731600000, value: 2483.45 },
  { time: 1731614400, value: 2486.12 },
  { time: 1731628800, value: 2489.78 },
  { time: 1731643200, value: 2492.35 },
  { time: 1731657600, value: 2495.12 },
  { time: 1731672000, value: 2493.78 },
  { time: 1731686400, value: 2491.35 },
  { time: 1731700800, value: 2488.78 },
  { time: 1731715200, value: 2486.15 },
  { time: 1731729600, value: 2483.45 },
  { time: 1731744000, value: 2482.12 },
  { time: 1731758400, value: 2484.45 },
  { time: 1731772800, value: 2487.75 },
  { time: 1731787200, value: 2490.15 },
  { time: 1731801600, value: 2493.45 },
  { time: 1731816000, value: 2495.32 },
  { time: 1731830400, value: 2493.15 },
  { time: 1731844800, value: 2491.45 },
  { time: 1731859200, value: 2488.78 },
  { time: 1731873600, value: 2486.12 },
] as unknown as AreaData[];

const ONE_MONTH_CHART_DATAPOINTS = [
  { time: 1729900800, value: 2475.32 },
  { time: 1729915200, value: 2473.88 },
  { time: 1729929600, value: 2476.25 },
  { time: 1729944000, value: 2478.92 },
  { time: 1729958400, value: 2482.12 },
  { time: 1729972800, value: 2485.78 },
  { time: 1729987200, value: 2483.95 },
  { time: 1730001600, value: 2488.32 },
  { time: 1730016000, value: 2490.75 },
  { time: 1730030400, value: 2492.88 },
  { time: 1730044800, value: 2489.45 },
  { time: 1730059200, value: 2486.78 },
  { time: 1730073600, value: 2484.25 },
  { time: 1730088000, value: 2481.92 },
  { time: 1730102400, value: 2485.45 },
  { time: 1730116800, value: 2488.32 },
  { time: 1730131200, value: 2491.25 },
  { time: 1730145600, value: 2494.12 },
  { time: 1730160000, value: 2497.88 },
  { time: 1730174400, value: 2495.75 },
  { time: 1730188800, value: 2492.45 },
  { time: 1730203200, value: 2489.12 },
  { time: 1730217600, value: 2485.78 },
  { time: 1730232000, value: 2483.45 },
  { time: 1730246400, value: 2481.25 },
  { time: 1730260800, value: 2485.45 },
  { time: 1730275200, value: 2489.88 },
  { time: 1730289600, value: 2492.32 },
  { time: 1730304000, value: 2495.15 },
  { time: 1730318400, value: 2497.25 },
  { time: 1730332800, value: 2494.12 },
  { time: 1730347200, value: 2490.78 },
  { time: 1730361600, value: 2487.45 },
  { time: 1730376000, value: 2484.88 },
  { time: 1730390400, value: 2482.15 },
  { time: 1730404800, value: 2485.92 },
  { time: 1730419200, value: 2489.78 },
  { time: 1730433600, value: 2492.88 },
  { time: 1730448000, value: 2495.12 },
  { time: 1730462400, value: 2497.88 },
  { time: 1730476800, value: 2493.55 },
  { time: 1730491200, value: 2489.12 },
  { time: 1730505600, value: 2484.78 },
  { time: 1730520000, value: 2482.25 },
  { time: 1730534400, value: 2480.12 },
  { time: 1730548800, value: 2483.88 },
  { time: 1730563200, value: 2487.45 },
  { time: 1730577600, value: 2490.12 },
  { time: 1730592000, value: 2493.45 },
  { time: 1730606400, value: 2495.12 },
  { time: 1730620800, value: 2492.78 },
  { time: 1730635200, value: 2489.15 },
  { time: 1730649600, value: 2486.88 },
  { time: 1730664000, value: 2484.12 },
  { time: 1730678400, value: 2481.78 },
  { time: 1730692800, value: 2485.32 },
  { time: 1730707200, value: 2488.78 },
  { time: 1730721600, value: 2491.45 },
  { time: 1730736000, value: 2493.88 },
  { time: 1730750400, value: 2496.15 },
  { time: 1730764800, value: 2493.12 },
  { time: 1730779200, value: 2489.45 },
  { time: 1730793600, value: 2485.75 },
  { time: 1730808000, value: 2483.32 },
  { time: 1730822400, value: 2480.78 },
  { time: 1730836800, value: 2484.12 },
  { time: 1730851200, value: 2488.32 },
  { time: 1730865600, value: 2491.55 },
  { time: 1730880000, value: 2494.15 },
  { time: 1730894400, value: 2497.12 },
  { time: 1730908800, value: 2493.88 },
  { time: 1730923200, value: 2490.45 },
  { time: 1730937600, value: 2487.88 },
  { time: 1730952000, value: 2485.12 },
  { time: 1730966400, value: 2482.32 },
  { time: 1730980800, value: 2484.88 },
  { time: 1730995200, value: 2488.45 },
  { time: 1731009600, value: 2492.12 },
  { time: 1731024000, value: 2494.78 },
  { time: 1731038400, value: 2497.25 },
  { time: 1731052800, value: 2494.45 },
  { time: 1731067200, value: 2491.88 },
  { time: 1731081600, value: 2489.25 },
  { time: 1731096000, value: 2485.78 },
  { time: 1731110400, value: 2483.88 },
  { time: 1731124800, value: 2480.32 },
  { time: 1731139200, value: 2483.45 },
  { time: 1731153600, value: 2486.78 },
  { time: 1731168000, value: 2489.32 },
  { time: 1731182400, value: 2492.88 },
  { time: 1731196800, value: 2496.12 },
  { time: 1731211200, value: 2498.45 },
  { time: 1731225600, value: 2495.25 },
  { time: 1731240000, value: 2491.45 },
  { time: 1731254400, value: 2488.88 },
  { time: 1731268800, value: 2486.12 },
  { time: 1731283200, value: 2484.25 },
  { time: 1731297600, value: 2480.88 },
  { time: 1731312000, value: 2483.25 },
  { time: 1731326400, value: 2485.75 },
  { time: 1731340800, value: 2488.88 },
  { time: 1731355200, value: 2491.25 },
  { time: 1731369600, value: 2493.88 },
  { time: 1731384000, value: 2497.12 },
  { time: 1731398400, value: 2494.15 },
  { time: 1731412800, value: 2491.12 },
  { time: 1731427200, value: 2488.32 },
  { time: 1731441600, value: 2486.88 },
  { time: 1731456000, value: 2484.78 },
  { time: 1731470400, value: 2481.55 },
  { time: 1731484800, value: 2485.32 },
  { time: 1731499200, value: 2489.78 },
  { time: 1731513600, value: 2492.12 },
  { time: 1731528000, value: 2495.25 },
  { time: 1731542400, value: 2498.88 },
] as unknown as AreaData[];

const ONE_YEAR_CHART_DATAPOINTS = [
  { time: 1672531200, value: 2400.12 },
  { time: 1672617600, value: 2403.58 },
  { time: 1672704000, value: 2407.84 },
  { time: 1672790400, value: 2412.25 },
  { time: 1672876800, value: 2408.95 },
  { time: 1672963200, value: 2405.15 },
  { time: 1673049600, value: 2402.78 },
  { time: 1673136000, value: 2410.42 },
  { time: 1673222400, value: 2414.88 },
  { time: 1673308800, value: 2417.15 },
  { time: 1673395200, value: 2415.28 },
  { time: 1673481600, value: 2413.95 },
  { time: 1673568000, value: 2416.42 },
  { time: 1673654400, value: 2419.78 },
  { time: 1673740800, value: 2423.65 },
  { time: 1673827200, value: 2426.88 },
  { time: 1673913600, value: 2424.55 },
  { time: 1674000000, value: 2421.25 },
  { time: 1674086400, value: 2419.15 },
  { time: 1674172800, value: 2417.58 },
  { time: 1674259200, value: 2420.88 },
  { time: 1674345600, value: 2424.12 },
  { time: 1674432000, value: 2428.45 },
  { time: 1674518400, value: 2432.12 },
  { time: 1674604800, value: 2429.88 },
  { time: 1674691200, value: 2426.75 },
  { time: 1674777600, value: 2423.25 },
  { time: 1674864000, value: 2427.48 },
  { time: 1674950400, value: 2431.12 },
  { time: 1675036800, value: 2433.75 },
  { time: 1675123200, value: 2438.12 },
  { time: 1675209600, value: 2441.35 },
  { time: 1675296000, value: 2444.58 },
  { time: 1675382400, value: 2447.88 },
  { time: 1675468800, value: 2445.25 },
  { time: 1675555200, value: 2440.65 },
  { time: 1675641600, value: 2436.28 },
  { time: 1675728000, value: 2432.12 },
  { time: 1675814400, value: 2434.58 },
  { time: 1675900800, value: 2438.12 },
  { time: 1675987200, value: 2442.25 },
  { time: 1676073600, value: 2445.88 },
  { time: 1676160000, value: 2449.55 },
  { time: 1676246400, value: 2446.88 },
  { time: 1676332800, value: 2443.12 },
  { time: 1676419200, value: 2439.75 },
  { time: 1676505600, value: 2435.45 },
  { time: 1676592000, value: 2431.88 },
  { time: 1676678400, value: 2436.25 },
  { time: 1676764800, value: 2440.78 },
  { time: 1676851200, value: 2445.12 },
  { time: 1676937600, value: 2448.88 },
  { time: 1677024000, value: 2451.58 },
  { time: 1677110400, value: 2453.88 },
  { time: 1677196800, value: 2450.65 },
  { time: 1677283200, value: 2446.28 },
  { time: 1677369600, value: 2442.75 },
  { time: 1677456000, value: 2438.88 },
  { time: 1677542400, value: 2435.25 },
  { time: 1677628800, value: 2439.65 },
  { time: 1677715200, value: 2443.88 },
  { time: 1677801600, value: 2447.25 },
  { time: 1677888000, value: 2450.88 },
  { time: 1677974400, value: 2453.12 },
  { time: 1678060800, value: 2456.88 },
  { time: 1678147200, value: 2453.28 },
  { time: 1678233600, value: 2449.12 },
  { time: 1678320000, value: 2445.28 },
  { time: 1678406400, value: 2441.75 },
  { time: 1678492800, value: 2438.12 },
  { time: 1678579200, value: 2434.78 },
  { time: 1678665600, value: 2439.15 },
  { time: 1678752000, value: 2442.88 },
  { time: 1678838400, value: 2446.28 },
  { time: 1678924800, value: 2449.55 },
  { time: 1679011200, value: 2453.78 },
  { time: 1679097600, value: 2457.88 },
  { time: 1679184000, value: 2454.12 },
  { time: 1679270400, value: 2449.28 },
  { time: 1679356800, value: 2443.58 },
  { time: 1679443200, value: 2437.75 },
  { time: 1679529600, value: 2433.15 },
  { time: 1679616000, value: 2438.28 },
  { time: 1679702400, value: 2442.88 },
  { time: 1679788800, value: 2447.58 },
  { time: 1679875200, value: 2452.12 },
  { time: 1679961600, value: 2455.28 },
  { time: 1680048000, value: 2458.12 },
  { time: 1680134400, value: 2462.28 },
  { time: 1680220800, value: 2465.88 },
  { time: 1680307200, value: 2468.45 },
  { time: 1680393600, value: 2471.12 },
  { time: 1680480000, value: 2475.88 },
  { time: 1680566400, value: 2478.65 },
  { time: 1680652800, value: 2480.88 },
  { time: 1680739200, value: 2483.15 },
  { time: 1680825600, value: 2486.88 },
  { time: 1680912000, value: 2489.28 },
  { time: 1680998400, value: 2493.12 },
  { time: 1681084800, value: 2495.88 },
  { time: 1681171200, value: 2499.25 },
] as unknown as AreaData[];

export const chartDatapoints = {
  "1H": ONE_HOUR_CHART_DATAPOINTS,
  "1D": ONE_DAY_CHART_DATAPOINTS,
  "1W": ONE_WEEK_CHART_DATAPOINTS,
  "1M": ONE_MONTH_CHART_DATAPOINTS,
  "1Y": ONE_YEAR_CHART_DATAPOINTS,
};
