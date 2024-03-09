import { IMovie, IPlanet, IScreening } from "./types";

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

const movies: IMovie[] = [
  { movieId: "1", movieValue: "Anyone But You" },
  { movieId: "2", movieValue: "Beautiful Wedding" },
];

const screenings: IScreening[] = [
  { screeningId: "1", screeningValue: "2D" },
  { screeningId: "2", screeningValue: "4DX" },
];

export const mocks = {
  planets,
  movies,
  screenings,
};
