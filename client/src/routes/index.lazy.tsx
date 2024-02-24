import { createLazyFileRoute } from "@tanstack/react-router";
import { Carousel } from "../components/Carousel";
import { MovieDatePicker } from "../components/MovieDatePicker";

export const Route = createLazyFileRoute("/")({
  component: IndexPage,
});

const imagesTemp = [
  `bg-[url('src/assets/carousel/dune-slider.jpg')]`,
  `bg-[url('src/assets/carousel/oscars-movies-slider.jpg')]`,
  `bg-[url('src/assets/carousel/birthday-slider.jpg')]`,
];

function IndexPage() {
  return (
    <div>
      <div className="h-[418px] relative overflow-hidden">
        <Carousel images={imagesTemp} />
      </div>
      <MovieDatePicker />
    </div>
  );
}
