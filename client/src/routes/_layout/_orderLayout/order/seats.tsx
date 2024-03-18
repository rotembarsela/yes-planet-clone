import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/_orderLayout/order/seats")({
  component: OrderSeats,
});

function OrderSeats() {
  return <div>order/tickets</div>;
}
