import { Button } from "@/components/ui/button";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

export default function CommunityOwnershipSection() {
  return (
    <section className="mb-40 mt-10 flex flex-wrap md:flex-nowrap gap-x-6 gap-y-10 md:mx-2">
      <article className="mx-auto text-center md:text-left flex flex-col gap-y-6 justify-center">
        <h2 className="text-primary-foreground text-[40px] font-Public font-medium leading-[1.2] md:max-w-[300px]">
          Community Ownership
        </h2>
        <p className="mx-auto text-card-foreground max-w-[500px] md:max-w-[300px]">
          SyncSwap is strong community-driven and designed to be owned by the
          community.
        </p>

        <Button variant="outline" className="rounded-[20px] text-md" asChild>
          <Link
            className="mx-auto md:mx-0 max-w-[270px] flex gap-x-3"
            to="https://matterlabs.notion.site/Why-zkSync-On-Maximizing-Freedom-6265ef48c6af490f83926e907d959035"
          >
            Get Involved
            <MdArrowOutward />
          </Link>
        </Button>
      </article>

      <img
        className="opacity-40 mx-auto md:w-2/3"
        src="/images/community.png"
        alt="Community color illustration"
      />
    </section>
  );
}
