import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

export const Route = createRootRoute({
  notFoundComponent: () => {
    return (
      <div>
        Not Found 😢
        <Link to="/" className="underline underline-offset-2">
          Home
        </Link>
      </div>
    );
  },
  component: Root,
});

function Root() {
  return (
    <>
      <Navbar />
      <hr />
      <Outlet />
      <Footer />
      <TanStackRouterDevtools />
    </>
  );
}
