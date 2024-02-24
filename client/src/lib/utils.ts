import {
  format,
  getDay,
  getDaysInMonth,
  getMonth,
  parse,
  startOfMonth,
} from "date-fns";
import { DateFormat, Weekly } from "./types";

const dates = {
  dateFormat: (date: Date, formatStr: DateFormat = "dd/MM/yyyy") =>
    format(date, formatStr),
  getDaysInMonth: (monthIdx: number, year: number = new Date().getFullYear()) =>
    getDaysInMonth(new Date(year, monthIdx - 1)),
  getStartDayOfMonth: (
    monthIdx: number,
    year: number = new Date().getFullYear(),
  ) => getDay(startOfMonth(new Date(year, monthIdx - 1))),
  getMonthIdx: (month: string) => getMonth(parse(month, "MMMM", new Date())),
  futureDateFromToday: (days: number = 0) => {
    const currentDate = new Date();
    const futureDate = new Date(currentDate);
    futureDate.setDate(currentDate.getDate() + (days - 1));
    return futureDate;
  },
  isDateBetweenMinAndMaxDate: (date: Date, minDate: Date, maxDate: Date) =>
    date >= minDate && date <= maxDate,
  getDate: (
    day: number = new Date().getDay(),
    month: number = new Date().getMonth(),
    year: number = new Date().getFullYear(),
  ) => new Date(year, month, day),
  compareDates: (firstDate: Date, secondDate: Date) => {
    const firstDateYear = firstDate.getFullYear();
    const firstDateMonth = firstDate.getMonth();
    const firstDateDay = firstDate.getDate();

    const secondDateYear = secondDate.getFullYear();
    const secondDateMonth = secondDate.getMonth();
    const secondDateDay = secondDate.getDate();

    return (
      firstDateYear === secondDateYear &&
      firstDateMonth === secondDateMonth &&
      firstDateDay === secondDateDay
    );
  },
};

const calendar = {
  getMonthlyDays: (daysInMonth: number, startDayOfMonth: number) => {
    const weeks: Weekly[] = [];

    let currentWeekNumber = 1;
    let currentWeek: Weekly = { weekNumber: currentWeekNumber, days: [] };

    for (let i = 0; i < startDayOfMonth; i++) {
      currentWeek.days.push(0);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      currentWeek.days.push(day);

      if (currentWeek.days.length === 7) {
        weeks.push(currentWeek);
        currentWeekNumber++;
        currentWeek = { weekNumber: currentWeekNumber, days: [] };
      }
    }

    while (currentWeek.days.length < 7) {
      currentWeek.days.push(0);
    }

    weeks.push(currentWeek);

    return weeks;
  },
  isZeroDay: (day: number) => (day === 0 ? "" : day),
};

const tailwindCSS = {
  bgImageFormat: (path: string) => `bg-[url('src${path}')]`,
};

export const utils = {
  dates,
  calendar,
  tailwindCSS,
};
