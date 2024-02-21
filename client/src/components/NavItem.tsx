import { Link } from "@tanstack/react-router";
import { Route } from "../lib/types";

type NavItemProps = {
  route: Route;
};

export const NavItem = ({ route }: NavItemProps) => {
  return (
    <li
      className="h-full hover:text-white flex items-center uppercase hover:bg-planet-orange/30"
      title="What's On"
    >
      <Link
        to={route.route}
        aria-label={route.ariaLabel}
        className="px-3 font-bold h-3/4 flex items-center [&.active]:bg-black [&.active]:text-white [&.active]:rounded-full"
      >
        {route.Icon ? <route.Icon /> : route.title}
      </Link>
    </li>
  );
};
