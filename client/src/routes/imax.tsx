import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/imax")({
  component: IMaxPage,
});

function IMaxPage() {
  return (
    <div>
      <h3>WhatsOn</h3>
    </div>
  );
}
