import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/_orderLayout/order/tickets")({
  component: OrderTickets,
});

function OrderTickets() {
  return <div>order/tickets</div>;
}
