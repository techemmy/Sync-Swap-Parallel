import { IconType } from "react-icons/lib";
import { NavLink, NavLinkProps } from "react-router-dom";
import { NavigationMenuTrigger } from "@/components/ui/navigation-menu";

interface Props extends NavLinkProps {
  children: React.ReactNode;
}

function NavLinkStructure({ to, children, ...props }: Props) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => {
        const base =
          "group inline-flex px-3 gap-x-1 items-center justify-center transition-colors hover:bg-accent focus:bg-accent focus:text-accent-foreground focus:outline-none data-[isActive]:bg-accent/50 data-[state=open]:bg-accent/50 w-max h-10 text-card-foreground hover:text-primary text-sm font-medium rounded-full";
        return (isActive ? "text-primary " : "").concat(base);
      }}
      {...props}
    >
      {children}
    </NavLink>
  );
}

interface NavLinkWithIconProps extends NavLinkProps {
  title: string;
  icon: IconType;
  isMenuTrigger?: boolean;
  props?: NavLinkProps;
}

export default function NavLinkWithIcon({
  to,
  icon: Icon,
  title,
  isMenuTrigger = false,
  ...props
}: NavLinkWithIconProps) {
  if (isMenuTrigger) {
    return (
      <NavLinkStructure to={to} {...props}>
        <NavigationMenuTrigger className="bg-transparent p-0 hover:bg-accent focus:bg-transparent focus:text-accent-foreground focus:outline-none data-[isActive]:bg-accent data-[state=open]:bg-accent w-max h-10 text-card-foreground hover:text-primary text-sm font-medium rounded-full">
          <Icon
            size={25}
            className="hidden group-[.text-primary]:block text-primary p-1 bg-accent rounded-md"
          />
          <span className="group-[.text-primary]:text-primary">{title}</span>
        </NavigationMenuTrigger>
      </NavLinkStructure>
    );
  }

  return (
    <NavLinkStructure to={to} {...props}>
      <Icon
        size={25}
        className="hidden group-[.text-primary]:block text-primary p-1 bg-accent rounded-md"
      />
      <span className="group-[.text-primary]:text-primary">{title}</span>
    </NavLinkStructure>
  );
}
