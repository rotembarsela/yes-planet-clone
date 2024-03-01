import { NavItem } from "./NavItem";
import { data } from "../../lib/data";

export const Navbar = () => {
  return (
    <nav className="bg-planet-orange text-black h-full" role="navigation">
      <ul className="w-[980px] mx-auto h-full flex items-center justify-between">
        {data.routes.map((route) => (
          <NavItem key={route.route} route={route} />
        ))}
      </ul>
    </nav>
  );
};
