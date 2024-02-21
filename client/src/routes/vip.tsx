import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/vip")({
  component: VipPage,
});

function VipPage() {
  return (
    <div>
      <h3>WhatsOn</h3>
    </div>
  );
}
