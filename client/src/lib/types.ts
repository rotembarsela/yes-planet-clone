import { RouteIds } from "@tanstack/react-router";
import { routeTree } from "../routeTree.gen";
import { FunctionComponent, SVGProps } from "react";
import { LucideIcon } from "lucide-react";

export type RouteId = RouteIds<typeof routeTree>;

// add extra Route type just for Navigation bar
export type Route = {
  route: Exclude<RouteId, "__root__" | "/_layout" | "/">;
  title: string;
  ariaLabel?: string;
  Icon?: FunctionComponent<SVGProps<SVGSVGElement>>;
};

export type ExternalLink = {
  isInternal: false;
  url: string;
};

export type InternalLink<T extends string> = {
  isInternal: true;
  url: T;
};

export interface IFooterItem<T extends string> {
  title: string;
  route: ExternalLink | InternalLink<T>;
  Icon?: FunctionComponent<SVGProps<SVGSVGElement>> | LucideIcon;
}

export interface IFooterSection {
  title: string;
  items?: IFooterItem<Route["route"]>[]; // change to RouteId type
  children?: IFooterSection[];
}

export type Month =
  | "January"
  | "February"
  | "March"
  | "April"
  | "May"
  | "June"
  | "July"
  | "August"
  | "September"
  | "October"
  | "November"
  | "December";

export type Monthly = {
  month: Month;
  weeksOfMonth: Weekly[];
};

export type Week = "Su" | "Mo" | "Tu" | "We" | "Th" | "Fr" | "Sa";

export type Weekly = {
  weekNumber: number;
  days: number[];
};

export type DateFormat =
  | "dd/MM/yyyy"
  | "dd-MM-yyyy"
  | "yyyy-MM-dd"
  | "yyyy-dd-MM";

export interface ITabs {
  title: string;
  component: JSX.Element;
}

export interface IPromoLink {
  title: string;
  subTitle?: string;
}

const moviesHalls = [
  "2D",
  "2D VIP",
  "2D SCREENX",
  "2D IMAX",
  "2D 4DX",
] as const;

export type MovieHall = (typeof moviesHalls)[number];

const movieGenres = [
  "Action",
  "Adventure",
  "Comedy",
  "Drama",
  "Fantasy",
  "Horror",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Thriller",
] as const;

export type MovieGenre = (typeof movieGenres)[number];

type MovieLanguage = {
  title: string;
  subtitles?: "EN" | "HE";
};

export interface IMovieToBook {
  title: string;
  restriction: "12" | "14" | "16" | "18" | "No Limit";
  halls: MovieHall[];
  genre: MovieGenre[];
  lengthInMinutes: number;
  screeningTimes: string[];
  language: MovieLanguage;
  youtubeEmbed: string;
  image?: string;
}
