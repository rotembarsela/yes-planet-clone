import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/giftsAndMovieCards")({
  component: GiftsAndMovieCardsPage,
});

function GiftsAndMovieCardsPage() {
  return (
    <div>
      <h3>WhatsOn</h3>
    </div>
  );
}
