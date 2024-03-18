import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/_layout/_orderLayout/order/confirmation",
)({
  component: OrderConfirmation,
});

function OrderConfirmation() {
  return <div>order/tickets</div>;
}
