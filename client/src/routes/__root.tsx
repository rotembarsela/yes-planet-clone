import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Footer } from "../components/footer/Footer";
import { Header } from "../components/Header";

export const Route = createRootRoute({
  component: () => (
    <>
      <Header />
      <main className="min-h-[calc(100vh-470px)]">
        <Outlet />
      </main>
      <Footer />
      <TanStackRouterDevtools />
    </>
  ),
});
