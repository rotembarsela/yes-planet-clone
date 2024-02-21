import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/4dx")({
  component: FourDXPage,
});

function FourDXPage() {
  return (
    <div>
      <h3>WhatsOn</h3>
    </div>
  );
}
