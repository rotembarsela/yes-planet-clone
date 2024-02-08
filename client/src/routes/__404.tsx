import { createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: Page,
});

function Page() {
  return (
    <div>
      <h3>404 - Not Found</h3>
    </div>
  );
}
