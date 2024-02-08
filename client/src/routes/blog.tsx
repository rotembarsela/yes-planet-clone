import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/blog")({
  component: BlogPage,
});

function BlogPage() {
  return (
    <div>
      <h3>Welcome Blog!</h3>
    </div>
  );
}
