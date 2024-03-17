import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/blog")({
  beforeLoad: async () => {
    const isLoggedIn = false;
    if (!isLoggedIn) {
      throw redirect({
        to: "/login",
      });
    }
  },
  component: BlogPage,
});

function BlogPage() {
  return (
    <div>
      <h3>Welcome Blog!</h3>
    </div>
  );
}
