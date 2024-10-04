import Footer from "@/components/Footer";
import { MdOutlineArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
import Bridges from "./Bridges";

export default function Bridge() {
  return (
    <>
      <main className="relative overflow-hidden pt-28 max-w-screen-lg mx-auto min-h-screen p-4">
        <img
          className="absolute w-full opacity-[0.1] z-0 -left-2 top-1"
          src="/images/tracks_light.png"
        />
        <div className="relative z-20 space-y-12">
          <section className="grid justify-items-center gap-1">
            <h2 className="text-3xl font-semibold text-primary-foreground mb-3">
              Say hello to a new era.
            </h2>
            <p className="text-sm text-card-foreground">
              Enjoy faster, cheaper and more efficient transactions with the
              future proof zkEVM scaling Ethereum‘s security and values.
            </p>

            <Link
              className="flex items-center gap-x-1 p-1 text-primary text-sm font-medium hover:opacity-[.75]"
              to="https://ethereum.org/en/bridges/"
            >
              <p>What are bridges?</p>
              <MdOutlineArrowOutward />
            </Link>
          </section>
          <Bridges />
        </div>
      </main>
      <Footer />
    </>
  );
}
