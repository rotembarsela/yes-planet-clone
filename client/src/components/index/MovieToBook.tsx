import { IMovieToBook } from "@/lib/types";

type MovieToBookProps = {
  movie: IMovieToBook;
};

export const MovieToBook = ({ movie }: MovieToBookProps) => {
  return (
    <div className="flex gap-5">
      <img
        src={movie.image}
        alt="anyone-but-you-movie"
        className="w-[140px] h-[210px] rounded-lg cursor-pointer"
      />
      {/* <VideoPlayer url={movie.youtubeEmbed} /> */}
      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-bold uppercase">{movie.title}</h2>
        <div className="flex items-center gap-3">
          <span className="w-6 h-6 text-sm pt-[1px] pr-[1px] font-bold bg-gray-100 border border-gray-600 rounded-full text-center">
            {movie.restriction}
          </span>
          <div className="flex gap-2 items-center text-sm font-light">
            <span className="border-r border-r-black pr-2">{movie.genre}</span>
            <span>{movie.lengthInMinutes} minutes</span>
          </div>
        </div>
        <div>
          {movie.halls.map((hall) => (
            <h3 key={hall} className="font-bold">
              {hall}
            </h3>
          ))}
        </div>
        <div>
          {movie.screeningTimes.map((screenTime) => (
            <button key={screenTime}>{screenTime}</button>
          ))}
        </div>
        <span className="font-light">
          {movie.language.title}&bull;(SUB&bull;
          {movie.language.subtitles})
        </span>
      </div>
    </div>
  );
};
