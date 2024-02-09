import { Link } from "@tanstack/react-router";
import IMaxIcon from "../assets/imax.svg?react";
import FourDX from "../assets/4dx.svg?react";
import ScreenX from "../assets/screenx.svg?react";
import Vip from "../assets/vip.svg?react";

export const Navbar = () => {
  return (
    <nav className="bg-planet-orange h-full" role="navigation">
      <ul className="w-[980px] mx-auto h-full flex items-center gap-14">
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
        <li>
          <Link to="/about" className="[&.active]:font-bold font-bold">
            Offers
          </Link>
        </li>
        <li>
          <Link to="/about" className="[&.active]:font-bold font-bold">
            Gifts & Movie Cards
          </Link>
        </li>
        <li>
          <Link to="/about" className="[&.active]:font-bold font-bold">
            Blog
          </Link>
        </li>
        <li>
          <Link to="/blog" className="[&.active]:font-bold">
            <IMaxIcon />
          </Link>
        </li>
        <li>
          <Link to="/blog" className="[&.active]:font-bold">
            <FourDX />
          </Link>
        </li>
        <li>
          <Link to="/blog" className="[&.active]:font-bold">
            <ScreenX />
          </Link>
        </li>
        <li>
          <Link to="/blog" className="[&.active]:font-bold">
            <Vip />
          </Link>
        </li>
      </ul>
    </nav>
  );
};
