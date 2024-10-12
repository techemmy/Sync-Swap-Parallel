import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import React, { useState } from "react";
import { FiSettings } from "react-icons/fi";
import { MdWaves, MdOutlineInfo } from "react-icons/md";

export default function SlippagePopover() {
  const [slippage, setSlippage] = useState<number | null>(null);
  const [slippageInput, setSlippageInput] = useState<string>();

  const handleSetInputSlippage = () => {
    let newSlippage = Number(slippageInput) >= 60 ? "60" : slippageInput;
    newSlippage = Number(newSlippage) === 0 ? "0.01" : newSlippage;
    setSlippage(Number(newSlippage));
    setSlippageInput(newSlippage);
  };

  const handleSlippageInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = event.target.value.trim();
    if (isNaN(Number(value))) return;
    setSlippageInput(value);
  };
  return (
    <Popover>
      <PopoverTrigger className="text-primary flex items-center gap-x-2 bg-navIcon/[0.05] py-1 pr-2 rounded-xl">
        <FiSettings
          className="font-bold group-active:transition-transform group-active:scale-90 group-hover:rotate-180 duration-500"
          size={20}
        />
        <p className="text-xs">
          Slippage {slippage == null ? "Auto" : `${slippage}%`}
        </p>
      </PopoverTrigger>
      <PopoverContent className="rounded-2xl min-w-[300px] max-w-full px-8 py-4 w-full">
        <section className="flex items-center justify-between">
          <div className="flex gap-x-2 items-center text-primary">
            <MdWaves fontSize={23} />
            <h3>Max Slippage</h3>
            <Tooltip>
              <TooltipTrigger>
                <MdOutlineInfo />
              </TooltipTrigger>
              <TooltipContent className="max-w-[300px]">
                <p>
                  Your transaction will revert if price changes unfavorably by
                  more than this percentage.
                </p>
              </TooltipContent>
            </Tooltip>
          </div>
          <p className="text-card-foreground text-xs">
            {slippage == null ? "Auto" : `${slippage}%`}
          </p>
        </section>

        <div className="grid gap-y-3 grid-cols-3 mt-7 *:text-primary *:border-transparent *:transition-transform *:w-24 *:text-sm">
          <Button
            onClick={() => setSlippage(null)}
            variant="outline"
            className="hover:bg-accent hover:border-transparent active:scale-90 focus:border-primary"
          >
            Auto
          </Button>

          {[0.1, 0.5, 1, 3].map((number) => (
            <Button
              key={number}
              onClick={() => setSlippage(number)}
              variant="outline"
              className="hover:bg-accent hover:border-transparent active:scale-90 focus:border-primary"
            >
              {number}
            </Button>
          ))}
          <input
            type="text"
            onBlur={handleSetInputSlippage}
            value={slippageInput}
            onChange={handleSlippageInputChange}
            className="w-full h-full text-center outline-none border focus:border-primary rounded-2xl"
            placeholder="Custom"
          />
        </div>
      </PopoverContent>
    </Popover>
  );
}
