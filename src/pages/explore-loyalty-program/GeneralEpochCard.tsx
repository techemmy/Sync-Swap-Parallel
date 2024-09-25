import { Card, CardContent } from "@/components/ui/card";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import { MdAutoMode } from "react-icons/md";

export default function GeneralEpochCard() {
  return (
    <Card className="px-8 border-transparent py-5 rounded-2xl w-full shadow-thin min-h-[200px]">
      <CardContent className="flex flex-col justify-between text-primary p-0 space-y-4">
        <section className="flex justify-between">
          <article className="flex gap-x-2 items-center">
            <MdAutoMode fontSize={23} />
            <h3 className="text-lg font-medium">General Epoch</h3>
          </article>

          <div className="flex gap-x-2 items-center">
            <div className="p-1 border border-border rounded-full shadow-thin hover:opacity-50 transition-opacity">
              <IoChevronBackOutline className="text-border" fontSize={23} />
            </div>
            <div className="p-1 border border-border rounded-full shadow-thin hover:opacity-50 transition-opacity">
              <IoChevronForwardOutline className="text-border" fontSize={23} />
            </div>
          </div>
        </section>

        <section className="grid grid-cols-2 text-card-foreground font-medium">
          <article>
            <p>
              <span className="text-primary-foreground text-xl">900,000</span>
              <span> veSYNC </span>
            </p>
            <p className="text-sm">Rewards</p>
          </article>

          <article>
            <p>
              <span className="text-primary-foreground text-xl">
                1,189,624.5
              </span>
              <span> veSYNC </span>
            </p>
            <p className="text-sm"> Epoch Supply </p>
          </article>
        </section>

        <hr className="opacity-[0.5]" />

        <p className="text-[13px] text-card-foreground font-medium">
          The loyalty program is currently in epoch 1. veSYNC rewards will be
          supplied with every new epoch.
        </p>
      </CardContent>
    </Card>
  );
}
