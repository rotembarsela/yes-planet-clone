import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Header } from "@/components/Header";
import { Footer } from "@/components/footer/Footer";
import { InfoPannel } from "@/components/infoPannel/InfoPannel";

export const Route = createRootRoute({
  component: () => (
    <>
      <Header />
      <main className="min-h-[calc(100vh-470px)] w-[980px] m-auto">
        <Outlet />
      </main>
      <InfoPannel />
      <Footer />
      <TanStackRouterDevtools />
    </>
  ),
});
