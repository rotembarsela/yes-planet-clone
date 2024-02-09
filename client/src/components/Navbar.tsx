import { Link } from "@tanstack/react-router";

export const Navbar = () => {
  return (
    <nav className="bg-planet-orange h-full">
      <ul className="flex">
        <li>
          <Link to="/" className="[&.active]:font-bold">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="[&.active]:font-bold">
            About
          </Link>
        </li>
        <li>
          <Link to="/blog" className="[&.active]:font-bold">
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
};
