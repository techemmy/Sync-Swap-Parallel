import { buttonVariants } from "@/components/ui/button";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

export default function CommunityOwnershipSection() {
    return (
        <section className="mb-10 md:mb-40  mt-10 flex flex-wrap md:flex-nowrap gap-x-6 gap-y-10 md:mx-5">

            <article className="mx-auto text-center md:text-left flex flex-col gap-y-6 justify-center">
                <h2 className="text-[40px] font-Public font-medium leading-[1.2] md:max-w-[300px]">Community Ownership</h2>
                <p className="mx-auto text-[15px] text-gray-500 max-w-[500px] md:max-w-[300px]">SyncSwap is strong community-driven and designed to be owned by the community.</p>

                <Link className={buttonVariants({
                    variant: "outline",
                    className: "mx-auto md:mx-0 md:w-4/5 max-w-[300px] flex gap-x-3 text-primary bg-transparent text-[16px]",
                    size: "xl"
                })} to="https://matterlabs.notion.site/Why-zkSync-On-Maximizing-Freedom-6265ef48c6af490f83926e907d959035" >
                    Get Involved
                    <MdArrowOutward />
                </Link>
            </article>

            <img className="opacity-40 mx-auto md:w-2/3" src="/images/community.png" alt="Community color illustration" />

        </section>
    )
}

