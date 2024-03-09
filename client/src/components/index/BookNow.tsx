import { utils } from "@/lib/utils";
import { BookNowDatePicker } from "./BookNowDatePicker";
import { useAppSelector } from "@/lib/store/hooks";
import { Select } from "../select/Select";
import { useState } from "react";
import { IMovie, IPlanet, IScreening } from "@/lib/types";
import { mocks } from "@/lib/mocks";

const initialPlanet: IPlanet = mocks.planets[0];

const initialMovie: IMovie = mocks.movies[0];

const initialScreening: IScreening = mocks.screenings[0];

export const BookNow = () => {
  const datePicker = useAppSelector((state) => state.datePicker);
  const [planet, setPlanet] = useState<IPlanet>(initialPlanet);
  const [movie, setMovie] = useState<IMovie>(initialMovie);
  const [screening, setScreening] = useState<IScreening>(initialScreening);

  const handlePlanetSelect = (planetToSelect: IPlanet) => {
    setPlanet(planetToSelect);
  };

  const handleMovieSelect = (movieToSelect: IMovie) => {
    setMovie(movieToSelect);
  };

  const handlScreeningSelect = (screeningToSelect: IScreening) => {
    setScreening(screeningToSelect);
  };

  return (
    <div className="w-[980px] m-auto flex flex-col gap-7">
      <h1 className="text-2xl font-bold uppercase">Book Now</h1>
      <div className="flex justify-between items-center">
        <Select
          items={mocks.planets}
          value={planet}
          onSelect={handlePlanetSelect}
          valueId="planetId"
          valueLabel="planetValue"
        />
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button
            type="button"
            className="border border-r-0 border-[#e2e2e2] rounded-s text-sm font-bold py-[6px] px-4 uppercase ring-2 ring-[#f5821e] z-10"
          >
            By Cinema
          </button>
          <button
            type="button"
            className="border border-[#e2e2e2] rounded-e text-sm font-bold py-[6px] px-4 uppercase"
          >
            By Film
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-7">
          <button className="text-2xl text-[#f5821e] font-bold">Today</button>
          <button className="text-2xl hover:text-[#f5821e]">Sun</button>
          <button className="text-2xl hover:text-[#f5821e]">Mon</button>
          <button className="text-2xl hover:text-[#f5821e]">Tue</button>
          <button className="text-2xl hover:text-[#f5821e]">Wed</button>
          <button disabled className="text-2xl disabled:text-[#908f8f]">
            Thu
          </button>
          <button disabled className="text-2xl disabled:text-[#908f8f]">
            Fri
          </button>
          <div className="border border-[#e2e2e2] rounded p-[6px]">
            <BookNowDatePicker />
          </div>
        </div>
        <div className="flex items-center gap-5">
          <Select
            items={mocks.screenings}
            value={screening}
            onSelect={handlScreeningSelect}
            valueId="screeningId"
            valueLabel="screeningValue"
          />
          <Select
            items={mocks.movies}
            value={movie}
            onSelect={handleMovieSelect}
            valueId="movieId"
            valueLabel="movieValue"
          />
        </div>
      </div>
      <span className="text-lg font-bold">
        {utils.dates.dateFormat(datePicker.selectedDate)}
      </span>
    </div>
  );
};
