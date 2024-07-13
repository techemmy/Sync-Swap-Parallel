import { buttonVariants } from "@/components/ui/button";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

export default function MissionSection() {
    return (
        <section className="mb-10 md:mb-80 text-center flex flex-col gap-y-6 relative">
            <h2 className="text-[40px] font-Public font-medium">An Aligned Mission </h2>
            <p className="mx-auto text-lg text-gray-500 max-w-[750px]">SyncSwap aligns with the mission of zkSync
                to accelerate the mass adoption of crypto for
                personal sovereignty.</p>

            <Link className={buttonVariants({
                variant: "outline",
                className: "mx-auto max-w-[400px] flex gap-x-3 text-primary bg-transparent text-[16px]",
                size: "xl"
            })} to="https://matterlabs.notion.site/Why-zkSync-On-Maximizing-Freedom-6265ef48c6af490f83926e907d959035" >
                Learn
                <MdArrowOutward />
            </Link>

            <img className="absolute top-44 md:top-24 max-w-[85%] left-0 right-0 md:mx-auto z-[-1]" src="/images/curve.png" alt="Curve" />
        </section>
    )
}

