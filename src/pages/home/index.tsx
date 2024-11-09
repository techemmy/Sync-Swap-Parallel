import { Link } from "react-router-dom";
import {
  MdCardGiftcard,
  MdCurrencyExchange,
  MdDataUsage,
  MdElectricBolt,
  MdImportContacts,
  MdLayers,
  MdRocketLaunch,
  MdScience,
  MdSettings,
  MdStream,
  MdSwapCalls,
  MdToll,
  MdWaves,
} from "react-icons/md";
import { IconType } from "react-icons/lib";
import React from "react";

function HomeLink({
  name,
  to,
  icon: Icon,
  svg: Svg,
}: {
  name: string;
  to: string;
  icon?: IconType;
  svg?: React.ReactNode;
}) {
  if (Icon && Svg) {
    throw Error("You can't use an icon or svg. Choose either an icon or svg.");
  }
  return (
    <Link
      to={to}
      className="flex flex-col justify-center items-center w-24 h-24 hover:bg-card/25 p-1 rounded-lg active:scale-90 transition-transform"
    >
      {Svg ||
        (Icon && (
          <Icon className="flex justify-center items-center w-10 h-10 bg-secondary/10 p-2 text-secondary-foreground rounded-md" />
        ))}
      <p className="h-[28px] mt-2 font-medium text-[0.825rem] text-white text-shadow">
        {name}
      </p>
    </Link>
  );
}

export default function Home() {
  return (
    <main className="h-screen bg-[length:400%_400%] theme-portfolio pt-20">
      <section className="flex flex-col flex-wrap content-start gap-x-1 gap-y-1 ml-16 text-center max-h-[80vh] h-[700px] min-h-[200px]">
        <HomeLink to="/swap" icon={MdSwapCalls} name="Swap" />
        <HomeLink to="#" icon={MdDataUsage} name="Portfolio" />
        <HomeLink to="#" name="Pool" icon={MdToll} />
        <HomeLink to="#" name="Earnings" icon={MdStream} />
        <HomeLink to="#" name="My Positions" icon={MdWaves} />
        <HomeLink to="#" name="Pool Wizard" icon={MdScience} />
        <HomeLink to="#" icon={MdCardGiftcard} name="Loyalty Program" />

        <HomeLink
          to="#"
          svg={
            <svg
              className="fill-primary"
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
          }
          name="404 Wrapper"
        />

        <HomeLink to="#" icon={MdCurrencyExchange} name="USDC Conversion" />

        <HomeLink to="#" icon={MdRocketLaunch} name="Launch" />

        <HomeLink to="#" icon={MdElectricBolt} name="Move" />
        <HomeLink to="#" icon={MdLayers} name="Bridges" />
        <HomeLink to="#" icon={MdSettings} name="Settings" />
        <HomeLink to="#" icon={MdImportContacts} name="About" />
      </section>
    </main>
  );
}
