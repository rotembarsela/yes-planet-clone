import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/_orderLayout")({
  component: LayoutComponent,
});

function LayoutComponent() {
  return (
    <div>
      <h1>Order Layout</h1>
      <Outlet />
    </div>
  );
}
