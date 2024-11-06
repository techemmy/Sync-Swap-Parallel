import React from "react";
import { cn } from "@/lib/utils";
import { PiCaretRightBold } from "react-icons/pi";
import { IconType } from "react-icons/lib";
import { NavLink } from "react-router-dom";

interface ListItemProps extends React.ComponentPropsWithoutRef<"a"> {
  title: string;
  logo: IconType;
}

export const ListItem = React.forwardRef<React.ElementRef<"a">, ListItemProps>(
  ({ className, title, href = "#", children, logo: Logo, ...props }, ref) => {
    return (
      <li className="transition-all animate-slide-in-from-right">
        <NavLink
          to={href}
          ref={ref}
          className={({ isActive }) => {
            const groupItem = isActive ? "" : "group/item";
            return cn(
              `${groupItem} flex items-center gap-x-3 select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground active:scale-90`,
              className,
            );
          }}
          {...props}
        >
          {
            <Logo className="flex justify-center items-center w-10 h-10 bg-secondary/10 p-2 text-secondary-foreground rounded-md" />
          }
          <article className="grid gap-y-2">
            <div className="text-sm text-primary-foreground font-medium leading-none">
              {title}
            </div>
            <p className="line-clamp-2 text-[12px] leading-snug text-card-foreground">
              {children}
            </p>
          </article>
          <PiCaretRightBold className="opacity-0 group-hover/item:opacity-100 ml-auto text-primary" />
        </NavLink>
      </li>
    );
  },
);
ListItem.displayName = "ListItem";

export const ListItemsContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <ul className="transition-all animate-fade-in bg-card rounded-xl grid gap-1 p-2 w-[400px]">
      {children}
    </ul>
  );
};
