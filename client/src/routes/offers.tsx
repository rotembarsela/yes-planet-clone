import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/offers")({
  component: OffersPage,
});

function OffersPage() {
  return (
    <div>
      <h3>WhatsOn</h3>
    </div>
  );
}
