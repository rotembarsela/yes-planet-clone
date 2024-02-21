import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/screenx")({
  component: ScreenXPage,
});

function ScreenXPage() {
  return (
    <div>
      <h3>WhatsOn</h3>
    </div>
  );
}
