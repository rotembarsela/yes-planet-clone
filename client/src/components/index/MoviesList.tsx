import { data } from "@/lib/data";
import { MovieToBook } from "./MovieToBook";

export const MoviesList = () => {
  return (
    <div className="w-[980px] m-auto flex flex-col gap-7">
      <ul>
        {data.movies.map((movie) => (
          <li key={movie.title}>
            <MovieToBook movie={movie} />
          </li>
        ))}
      </ul>
    </div>
  );
};
