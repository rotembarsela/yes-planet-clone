import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/whatson")({
  component: WhatsOnPage,
});

function WhatsOnPage() {
  return (
    <div>
      <h3>WhatsOn</h3>
    </div>
  );
}
