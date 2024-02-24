import { format, getDay, getDaysInMonth, startOfMonth } from "date-fns";
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
};

const calendar = {
  getMonthlyDays: (daysInMonth: number, startDayOfMonth: number) => {
    const weeks: Weekly[] = [];

    let currentWeekNumber = 1;
    let currentWeek: Weekly = { weekNumber: currentWeekNumber, days: [] };

    // Fill in empty slots for days before the start day of the month
    for (let i = 0; i < startDayOfMonth; i++) {
      currentWeek.days.push(0); // Assign 0 for empty slots
    }

    // Fill in days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      currentWeek.days.push(day); // Assign day to corresponding day of the week

      // If it's the end of the week, start a new week
      if (currentWeek.days.length === 7) {
        weeks.push(currentWeek);
        currentWeekNumber++;
        currentWeek = { weekNumber: currentWeekNumber, days: [] };
      }
    }

    // Fill in remaining days in the last week with zeros
    while (currentWeek.days.length < 7) {
      currentWeek.days.push(0);
    }

    // Add the last week to the weeks array
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
