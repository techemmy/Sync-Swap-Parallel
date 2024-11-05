import { SPONSORS } from "@/constants";
import LogoView from "./LogoView";
import useImageTheme from "@/hooks/useImageTheme";

export default function BuiltWithTheBestSection() {
  const logoTheme = useImageTheme();
  return (
    <section className="mb-64 mt-10 grid gap-y-20">
      <article className="text-center">
        <h2 className="text-[40px] font-Public font-medium">
          Built with the Best
        </h2>
        <p className="text-card-foreground mt-2">
          Thanks to our partners and the best builders in Web3 industry
        </p>
      </article>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-24 gap-y-16 max-w-[700px] mx-auto">
        {SPONSORS.map((sponsor) => (
          <LogoView
            key={sponsor.name}
            src={sponsor[logoTheme]}
            alt={`${sponsor.name} logo`}
            height={sponsor?.height}
          />
        ))}
      </div>
    </section>
  );
}
