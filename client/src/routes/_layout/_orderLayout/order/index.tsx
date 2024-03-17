import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/_orderLayout/order/")({
  component: OrderPage,
});

function OrderPage() {
  return (
    <div>
      <h1>order</h1>
    </div>
  );
}
