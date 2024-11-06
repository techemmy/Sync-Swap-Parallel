import { Button } from "@/components/ui/button";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

export default function MissionSection() {
  return (
    <section className="relative my-20 md:mb-52 text-center flex flex-col gap-y-6">
      <h2 className="text-[40px] font-Public font-medium">
        An Aligned Mission
      </h2>
      <p className="mx-auto text-lg text-card-foreground max-w-[750px] font-medium">
        SyncSwap aligns with the mission of zkSync to accelerate the mass
        adoption of crypto for personal sovereignty.
      </p>

      <Button
        variant="outline"
        className="rounded-[20px] text-md px-20"
        asChild
      >
        <Link
          className="mx-auto flex gap-x-3"
          to="https://matterlabs.notion.site/Why-zkSync-On-Maximizing-Freedom-6265ef48c6af490f83926e907d959035"
        >
          Learn
          <MdArrowOutward />
        </Link>
      </Button>

      <img
        className="absolute top-40 left-0 md:max-w-full md:top-24 z-0"
        src="/images/curve.png"
        alt="Curve"
      />
    </section>
  );
}
