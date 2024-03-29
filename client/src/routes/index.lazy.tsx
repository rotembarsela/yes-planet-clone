import { createLazyFileRoute } from "@tanstack/react-router";
import { Carousel } from "../components/Carousel";
import { BookNow } from "@/components/index/BookNow";
import { MoviesList } from "@/components/index/MoviesList";

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
    <div className="flex flex-col">
      <section className="h-[390px] relative overflow-hidden">
        <Carousel images={imagesTemp} />
      </section>
      <div className="w-full bg-white text-black py-[30px]">
        <BookNow />
      </div>
      <div className="w-full bg-gradient-to-b from-[#f4f4f4] to-white text-black py-[30px] border-t border-gray-200">
        <MoviesList />
      </div>
    </div>
  );
}
