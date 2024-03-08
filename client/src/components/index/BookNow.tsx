import { utils } from "@/lib/utils";
import { BookNowDatePicker } from "./BookNowDatePicker";
import { useAppSelector } from "@/lib/store/hooks";
import { Select } from "../Select";
import { useState } from "react";

interface IPlanet {
  planetId: string;
  planetValue: string;
}

const planets: IPlanet[] = [
  {
    planetId: "1",
    planetValue: "Planet Ayalon",
  },
  {
    planetId: "2",
    planetValue: "Planet Beer Sheva",
  },
  {
    planetId: "3",
    planetValue: "Planet Zichron Yaakov",
  },
  {
    planetId: "4",
    planetValue: "Planet Haifa",
  },
  {
    planetId: "5",
    planetValue: "Planet Jerusalem",
  },
  {
    planetId: "6",
    planetValue: "Planet Rishon LeTziyon",
  },
];

const initialPlanet: IPlanet = planets[0];

export const BookNow = () => {
  const datePicker = useAppSelector((state) => state.datePicker);
  const [planet, setPlanet] = useState<IPlanet>(initialPlanet);

  const handleSelectPlanet = (planetToSelect: IPlanet) => {
    setPlanet(planetToSelect);
  };

  return (
    <div className="w-[980px] m-auto flex flex-col gap-7">
      <h1 className="text-2xl font-bold uppercase">Book Now</h1>
      <div className="flex justify-between items-center">
        <Select
          items={planets}
          value={planet}
          onSelect={handleSelectPlanet}
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
          <div className="border border-[#e2e2e2] rounded text-sm font-bold py-[6px] pl-3 pr-[25px] shadow-sm">
            Choose a Screening T
          </div>
          <div className="border border-[#e2e2e2] rounded text-sm font-bold py-[6px] pl-3 pr-[25px] shadow-sm">
            Choose a Movie
          </div>
        </div>
      </div>
      <span className="text-lg font-bold">
        {utils.dates.dateFormat(datePicker.selectedDate)}
      </span>
    </div>
  );
};
