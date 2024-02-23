import { format } from "date-fns";
import { DateFormat } from "./types";

const dates = {
  dateFormat: (date: Date, formatStr: DateFormat = "yyyy-MM-dd") =>
    format(date, formatStr),
};

const tailwindCSS = {
  bgImageFormat: (path: string) => `bg-[url('src${path}')]`,
};

export const utils = {
  dates,
  tailwindCSS,
};
