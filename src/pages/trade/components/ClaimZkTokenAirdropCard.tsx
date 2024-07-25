import { Link } from "react-router-dom";
import {
    Card,
    CardContent,
    CardDescription,
    CardTitle,
} from "@/components/ui/card"

export default function ClaimZkTokenAirdropCard() {
    return (
        <Link to="https://claim.zknation.io/">
            <Card className="mt-5 shadow-md rounded-3xl border-0 cursor-pointer hover:opacity-50 bg-white/70 relative overflow-clip">
                <CardContent className="p-5 px-5 text-center">
                    <CardTitle className="font-semibold text-lg">ZKsync Token Launch</CardTitle>
                    <CardDescription>Check and claim your ZK airdrop today</CardDescription>
                </CardContent>
                <img className="absolute border-[50%] w-24 right-2 top-4 opacity-20" src="/images/zksync_black.png" />
            </Card>
        </Link>
    )
}

