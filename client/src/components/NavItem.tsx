import { Link } from "@tanstack/react-router";

export const NavItem = () => {
  return (
    <li
      className="h-full hover:text-white flex items-center uppercase hover:bg-planet-orange/30"
      title="What's On"
    >
      <Link
        to="/"
        className="px-3 font-bold h-3/4 flex items-center [&.active]:bg-black [&.active]:text-white [&.active]:rounded-full"
      >
        What's On
      </Link>
    </li>
  );
};
