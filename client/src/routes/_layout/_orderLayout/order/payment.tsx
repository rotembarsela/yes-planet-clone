import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/_orderLayout/order/payment")({
  component: OrderPayment,
});

function OrderPayment() {
  return <div>order/tickets</div>;
}
