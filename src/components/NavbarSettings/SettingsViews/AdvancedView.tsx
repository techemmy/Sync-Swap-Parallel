import { MdOutlineArrowBack, MdOutlineInfo } from "react-icons/md";
import { Switch } from "@/components/ui/switch";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ISetSettingsView } from "@/types";

export default function AdvancedView({
  setSettingsView,
}: {
  setSettingsView: ISetSettingsView;
}) {
  return (
    <>
      <article className="flex justify-between mt-2 items-center">
        <MdOutlineArrowBack
          onClick={setSettingsView.setDefault}
          fontSize={40}
          className="p-3 bg-accent cursor-pointer rounded-full active:scale-75 transition-transform"
        />
        <h3 className="font-medium text-sm mr-2">Advanced</h3>
      </article>
      <ul className="grid w-full gap-y-4 grid-cols-1 mt-4 p-2">
        <li className="flex items-center justify-between text-sm font-medium text-card-foreground">
          <label htmlFor="swap-gadget">Swap Gadget</label>
          <Switch className="shadow-md" id="swap-gadget" defaultChecked />
        </li>
        <li className="flex items-center justify-between text-sm font-medium text-card-foreground">
          <label htmlFor="light-effects">Light Effects</label>
          <Switch className="shadow-md" id="light-effects" defaultChecked />
        </li>
        <li className="flex items-center justify-between text-sm font-medium text-card-foreground">
          <label
            htmlFor="gasless-unlocking"
            className="flex items-center gap-x-1"
          >
            Gasless unlocking
            <Tooltip>
              <TooltipTrigger>
                <MdOutlineInfo className="text-primary cursor-pointer" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Whether to use a limited amount on unlocking tokens</p>
              </TooltipContent>
            </Tooltip>
          </label>
          <Switch className="shadow-md" id="gasless-unlocking" defaultChecked />
        </li>
        <li className="flex items-center justify-between text-sm font-medium text-card-foreground">
          <label
            htmlFor="limited-unlocking"
            className="flex items-center gap-x-1"
          >
            Limited unlocking
            <Tooltip>
              <TooltipTrigger>
                <MdOutlineInfo className="text-primary cursor-pointer" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Whether to use limited blocking on allowances</p>
              </TooltipContent>
            </Tooltip>
          </label>
          <Switch className="shadow-md" id="limited-unlocking" />
        </li>
        <li className="flex items-center justify-between text-sm font-medium text-card-foreground">
          <label
            htmlFor="direct-route-only"
            className="flex items-center gap-x-1"
          >
            Direct route only
            <Tooltip>
              <TooltipTrigger>
                <MdOutlineInfo className="text-primary cursor-pointer" />
              </TooltipTrigger>
              <TooltipContent>
                <p>
                  Whether to disable hops when swapping. Turn on may lead to
                  worse prices.
                </p>
              </TooltipContent>
            </Tooltip>
          </label>
          <Switch className="shadow-md" id="direct-route-only" />
        </li>
      </ul>
    </>
  );
}
