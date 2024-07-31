import { Link } from "react-router-dom";
import {
    Card,
    CardContent,
    CardDescription,
    CardTitle,
} from "@/components/ui/card"

export default function LineaVoyageSurgeCard() {
    return (
        <Link to="https://referrals.linea.build/?refCode=jdoGBVc7Ov">
            <Card className="mt-5 shadow-md rounded-3xl border-0 cursor-pointer hover:opacity-50 bg-card/70 relative overflow-clip">
                <CardContent className="p-5 px-5 text-center">
                    <CardTitle className="font-semibold text-lg">Linea Voyage: The Surge</CardTitle>
                    <CardDescription>Provide liquidity to earn Linea LXP-L points</CardDescription>
                </CardContent>
                <img className="absolute  border-[50%] w-44 right-2 top-2" src="/images/linea_overlay.svg" />
            </Card>
        </Link>
    )
}

