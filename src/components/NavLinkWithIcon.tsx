import { IconType } from "react-icons/lib";
import { NavLink, NavLinkProps } from "react-router-dom";

interface Props extends NavLinkProps {
  title: string;
  Icon: IconType;
}

export default function NavLinkWithIcon({ to, Icon, title, ...props }: Props) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => {
        const base =
          "group inline-flex gap-x-1 items-center justify-center py-2 transition-colors hover:bg-accent focus:bg-accent focus:text-accent-foreground focus:outline-none data-[isActive]:bg-accent/50 data-[state=open]:bg-accent/50 mx-1 w-max h-10 text-card-foreground hover:text-primary px-3 text-sm font-medium rounded-full";
        return (isActive ? "text-primary " : "").concat(base);
      }}
      {...props}
    >
      <Icon
        size={25}
        className="hidden group-[.text-primary]:block text-primary p-1 bg-accent rounded-md"
      />
      <span>{title}</span>
    </NavLink>
  );
}
