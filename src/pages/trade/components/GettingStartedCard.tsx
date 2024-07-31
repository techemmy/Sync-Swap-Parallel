import {
    Card,
    CardContent,
    CardDescription,
    CardTitle,
} from "@/components/ui/card"
import { IoWalletOutline } from "react-icons/io5"
import { MdKeyboardArrowRight } from "react-icons/md"

export default function GettingStartedCard() {
    return (
        <Card className="mt-3 shadow-md rounded-3xl border-0 cursor-pointer hover:opacity-75 bg-card/45">
            <CardContent className="flex justify-between items-center p-5 px-5 gap-x-1 text-primary">
                <IoWalletOutline size={25} />
                <article>
                    <CardTitle className="font-medium text-md">Getting Started</CardTitle>
                    <CardDescription className="text-primary">Connect wallet to start trading and exploring more</CardDescription>
                </article>
                <MdKeyboardArrowRight />
            </CardContent>
        </Card>
    )
}

