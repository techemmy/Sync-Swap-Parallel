import { Link } from "react-router-dom";
import { MdCardGiftcard, MdCurrencyExchange, MdDataUsage, MdElectricBolt, MdImportContacts, MdLayers, MdRocketLaunch, MdScience, MdSettings, MdStream, MdSwapCalls, MdToll, MdWaves } from "react-icons/md";

export default function Home() {
    return (
        <main className="h-screen bg-[length:400%_400%] theme-portfolio pt-20">

            <section className="flex flex-col flex-wrap content-start gap-x-1 gap-y-1 ml-16 text-center max-h-[80vh] h-[700px] min-h-[200px]">

                <Link to="#" className="flex flex-col justify-center items-center w-24 h-24 hover:bg-white/25 p-1 rounded-lg active:scale-90 transition-transform">
                    <MdSwapCalls className="flex justify-center items-center w-10 h-10 bg-navIcon/10 p-2 text-navIcon-foreground rounded-md" />
                    <p className="h-[28px] mt-2 font-medium text-[0.825rem] text-white text-shadow">Swap</p>
                </Link>


                <Link to="#" className="flex flex-col justify-center items-center w-24 h-24 hover:bg-white/25 p-1 rounded-lg active:scale-90 transition-transform">
                    <MdDataUsage className="flex justify-center items-center w-10 h-10 bg-navIcon/10 p-2 text-navIcon-foreground rounded-md" />
                    <p className="h-[28px] mt-2 font-medium text-[0.825rem] text-white text-shadow">Portfolio</p>
                </Link>


                <Link to="#" className="flex flex-col justify-center items-center w-24 h-24 hover:bg-white/25 p-1 rounded-lg active:scale-90 transition-transform">
                    <MdToll className="flex justify-center items-center w-10 h-10 bg-navIcon/10 p-2 text-navIcon-foreground rounded-md" />
                    <p className="h-[28px] mt-2 font-medium text-[0.825rem] text-white text-shadow">Pool</p>
                </Link>

                <Link to="#" className="flex flex-col justify-center items-center w-24 h-24 hover:bg-white/25 p-1 rounded-lg active:scale-90 transition-transform">
                    <MdStream className="flex justify-center items-center w-10 h-10 bg-navIcon/10 p-2 text-navIcon-foreground rounded-md" />
                    <p className="h-[28px] mt-2 font-medium text-[0.825rem] text-white text-shadow">Earnings</p>
                </Link>

                <Link to="#" className="flex flex-col justify-center items-center w-24 h-24 hover:bg-white/25 p-1 rounded-lg active:scale-90 transition-transform">
                    <MdWaves className="flex justify-center items-center w-10 h-10 bg-navIcon/10 p-2 text-navIcon-foreground rounded-md" />
                    <p className="h-[28px] mt-2 font-medium text-[0.825rem] text-white text-shadow">My Positions</p>
                </Link>

                <Link to="#" className="flex flex-col justify-center items-center w-24 h-24 hover:bg-white/25 p-1 rounded-lg active:scale-90 transition-transform">
                    <MdScience className="flex justify-center items-center w-10 h-10 bg-navIcon/10 p-2 text-navIcon-foreground rounded-md" />
                    <p className="h-[28px] mt-2 font-medium text-[0.825rem] text-white text-shadow">Pool Wizard</p>
                </Link>

                <Link to="#" className="flex flex-col justify-center items-center w-24 h-24 hover:bg-white/25 p-1 rounded-lg active:scale-90 transition-transform">
                    <MdCardGiftcard className="flex justify-center items-center w-10 h-10 bg-navIcon/10 p-2 text-navIcon-foreground rounded-md" />
                    <p className="h-[28px] mt-2 font-medium text-[0.825rem] text-white text-shadow">Loyalty Program</p>
                </Link>


                <Link to="#" className="flex flex-col justify-center items-center w-24 h-24 hover:bg-white/25 p-1 rounded-lg active:scale-90 transition-transform">
                    <div className="flex justify-center items-center w-10 h-10 bg-navIcon/10 p-2 text-navIcon-foreground rounded-md" >
                        <svg width="20" height="20" viewBox="0 0 24 24" stroke="none" fill="#5155a6">
                            <path fillRule="evenodd" clipRule="evenodd" d="M1 16.757a3.026 3.026 0 001.653 2.698l8 4a3 3 0 002.684 0l8-4A3 3 0 0023 16.77V7.23a3.026 3.026 0 00-1.665-2.686L13.337.546a3 3 0 00-2.684 0l-8 4A3.026 3.026 0 001 7.243v9.514zm20 .013a1 1 0 01-.555.895h-.002L13 21.388v-9.769l8-4v9.152zM19.77 5.998l-7.327-3.664a1 1 0 00-.896 0L9.226 3.495 17 7.382l2.77-1.384zM6.99 4.613L4.226 5.995 12 9.882 14.764 8.5 6.99 4.613zM3 7.618l8 4v9.774l-7.45-3.725h-.001a1 1 0 01-.549-.9V7.618z"></path>
                        </svg>
                    </div>
                    <p className="h-[28px] mt-2 font-medium text-[0.825rem] text-white text-shadow">404 Wrapper</p>
                </Link>

                <Link to="#" className="flex flex-col justify-center items-center w-24 h-24 hover:bg-white/25 p-1 rounded-lg active:scale-90 transition-transform">
                    <MdCurrencyExchange className="flex justify-center items-center w-10 h-10 bg-navIcon/10 p-2 text-navIcon-foreground rounded-md" />
                    <p className="h-[28px] mt-2 font-medium text-[0.825rem] text-white text-shadow">USDC Conversion</p>
                </Link>

                <Link to="#" className="flex flex-col justify-center items-center w-24 h-24 hover:bg-white/25 p-1 rounded-lg active:scale-90 transition-transform">
                    <MdRocketLaunch className="flex justify-center items-center w-10 h-10 bg-navIcon/10 p-2 text-navIcon-foreground rounded-md" />
                    <p className="h-[28px] mt-2 font-medium text-[0.825rem] text-white text-shadow">Launch</p>
                </Link>

                <Link to="#" className="flex flex-col justify-center items-center w-24 h-24 hover:bg-white/25 p-1 rounded-lg active:scale-90 transition-transform">
                    <MdElectricBolt className="flex justify-center items-center w-10 h-10 bg-navIcon/10 p-2 text-navIcon-foreground rounded-md" />
                    <p className="h-[28px] mt-2 font-medium text-[0.825rem] text-white text-shadow">Move</p>
                </Link>

                <Link to="#" className="flex flex-col justify-center items-center w-24 h-24 hover:bg-white/25 p-1 rounded-lg active:scale-90 transition-transform">
                    <MdLayers className="flex justify-center items-center w-10 h-10 bg-navIcon/10 p-2 text-navIcon-foreground rounded-md" />
                    <p className="h-[28px] mt-2 font-medium text-[0.825rem] text-white text-shadow">Bridges</p>
                </Link>


                <Link to="#" className="flex flex-col justify-center items-center w-24 h-24 hover:bg-white/25 p-1 rounded-lg active:scale-90 transition-transform">
                    <MdSettings className="flex justify-center items-center w-10 h-10 bg-navIcon/10 p-2 text-navIcon-foreground rounded-md" />
                    <p className="h-[28px] mt-2 font-medium text-[0.825rem] text-white text-shadow">Settings</p>
                </Link>

                <Link to="#" className="flex flex-col justify-center items-center w-24 h-24 hover:bg-white/25 p-1 rounded-lg active:scale-90 transition-transform">
                    <MdImportContacts className="flex justify-center items-center w-10 h-10 bg-navIcon/10 p-2 text-navIcon-foreground rounded-md" />
                    <p className="h-[28px] mt-2 font-medium text-[0.825rem] text-white text-shadow">About</p>
                </Link>


            </section>
        </main>
    )
}

