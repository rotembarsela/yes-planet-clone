import { Link } from "@tanstack/react-router";

export const Navbar = () => {
  return (
    <div className="p-2 flex gap-2">
      <Link to="/" className="[&.active]:font-bold">
        Home
      </Link>
      <Link to="/about" className="[&.active]:font-bold">
        About
      </Link>
      <Link to="/blog" className="[&.active]:font-bold">
        Blog
      </Link>
    </div>
  );
};
