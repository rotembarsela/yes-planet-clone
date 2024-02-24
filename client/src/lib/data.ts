import { Monthly, IFooterSection, Route, Month, Week } from "./types";
import IMaxIcon from "../assets/imax.svg?react";
import FourDXIcon from "../assets/4dx.svg?react";
import ScreenXIcon from "../assets/screenx.svg?react";
import VipIcon from "../assets/vip.svg?react";
import { utils } from "./utils";

const routes: Route[] = [
  { route: "/whatson", title: "What's On" },
  { route: "/offers", title: "Offers" },
  { route: "/giftsAndMovieCards", title: "Gifts & Movie Cards" },
  { route: "/blog", title: "Blog" },
  {
    route: "/imax",
    title: "IMAX",
    Icon: IMaxIcon,
    ariaLabel: "Route to the IMAX page",
  },
  {
    route: "/4dx",
    title: "4DX",
    Icon: FourDXIcon,
    ariaLabel: "Route to the 4DX page",
  },
  {
    route: "/screenx",
    title: "SCREENX",
    Icon: ScreenXIcon,
    ariaLabel: "Route to the SCREENX page",
  },
  {
    route: "/vip",
    title: "VIP",
    Icon: VipIcon,
    ariaLabel: "Route to the VIP page",
  },
];

const footerSections: IFooterSection[] = [
  {
    title: "contact",
    children: [
      {
        title: "Follow Us",
        items: [
          {
            title: "Facebook",
            route: {
              isInternal: false,
              url: "https://www.facebook.com/Planetcinemail",
            },
          },
          {
            title: "Instagram",
            route: {
              isInternal: false,
              url: "https://www.instagram.com/planetcinema_il",
            },
          },
          {
            title: "Tiktok",
            route: {
              isInternal: false,
              url: "https://www.tiktok.com/@planetcinema_il?_t=8aJD28TX5LG&_r=1",
            },
          },
        ],
      },
      {
        title: "Talk With Us",
        items: [
          {
            title: "ContactUs",
            route: {
              isInternal: true,
              url: "/blog",
            },
          },
          {
            title: "Customer Service",
            route: {
              isInternal: true,
              url: "/blog",
            },
          },
        ],
      },
    ],
  },
  {
    title: "links",
    children: [
      {
        title: "Links",
        items: [
          {
            title: "Cineworld Group PLC",
            route: {
              isInternal: true,
              url: "/blog",
            },
          },
          {
            title: "Advertising in Theaters",
            route: {
              isInternal: true,
              url: "/blog",
            },
          },
          {
            title: "Forum Film",
            route: {
              isInternal: true,
              url: "/blog",
            },
          },
        ],
      },
    ],
  },
  {
    title: "info",
    children: [
      {
        title: "Information",
        items: [
          {
            title: "Regulations",
            route: {
              isInternal: true,
              url: "/blog",
            },
          },
          {
            title: "Planet",
            route: {
              isInternal: true,
              url: "/blog",
            },
          },
          {
            title: "Privacy Policy",
            route: {
              isInternal: true,
              url: "/blog",
            },
          },
          {
            title: "FAQ",
            route: {
              isInternal: true,
              url: "/blog",
            },
          },
          {
            title: "Accessibility",
            route: {
              isInternal: true,
              url: "/blog",
            },
          },
          {
            title: "Cancel Booking",
            route: {
              isInternal: true,
              url: "/blog",
            },
          },
          {
            title: "Work with Us",
            route: {
              isInternal: true,
              url: "/blog",
            },
          },
        ],
      },
    ],
  },
  {
    title: "apps",
    children: [
      {
        title: "Download The Planet App",
        items: [
          {
            title: "Android",
            route: {
              isInternal: true,
              url: "/blog",
            },
          },
          {
            title: "iOS",
            route: {
              isInternal: true,
              url: "/blog",
            },
          },
        ],
      },
    ],
  },
];

const months: Month[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const week: Week[] = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

const calendar: Monthly[] = [
  {
    month: "January",
    weeksOfMonth: utils.calendar.getMonthlyDays(
      utils.dates.getDaysInMonth(1),
      utils.dates.getStartDayOfMonth(1),
    ),
  },
  {
    month: "February",
    weeksOfMonth: utils.calendar.getMonthlyDays(
      utils.dates.getDaysInMonth(2),
      utils.dates.getStartDayOfMonth(2),
    ),
  },
  {
    month: "March",
    weeksOfMonth: utils.calendar.getMonthlyDays(
      utils.dates.getDaysInMonth(3),
      utils.dates.getStartDayOfMonth(3),
    ),
  },
  {
    month: "April",
    weeksOfMonth: utils.calendar.getMonthlyDays(
      utils.dates.getDaysInMonth(4),
      utils.dates.getStartDayOfMonth(4),
    ),
  },
  {
    month: "May",
    weeksOfMonth: utils.calendar.getMonthlyDays(
      utils.dates.getDaysInMonth(5),
      utils.dates.getStartDayOfMonth(5),
    ),
  },
  {
    month: "June",
    weeksOfMonth: utils.calendar.getMonthlyDays(
      utils.dates.getDaysInMonth(6),
      utils.dates.getStartDayOfMonth(6),
    ),
  },
  {
    month: "July",
    weeksOfMonth: utils.calendar.getMonthlyDays(
      utils.dates.getDaysInMonth(7),
      utils.dates.getStartDayOfMonth(7),
    ),
  },
  {
    month: "August",
    weeksOfMonth: utils.calendar.getMonthlyDays(
      utils.dates.getDaysInMonth(8),
      utils.dates.getStartDayOfMonth(8),
    ),
  },
  {
    month: "September",
    weeksOfMonth: utils.calendar.getMonthlyDays(
      utils.dates.getDaysInMonth(9),
      utils.dates.getStartDayOfMonth(9),
    ),
  },
  {
    month: "October",
    weeksOfMonth: utils.calendar.getMonthlyDays(
      utils.dates.getDaysInMonth(10),
      utils.dates.getStartDayOfMonth(10),
    ),
  },
  {
    month: "November",
    weeksOfMonth: utils.calendar.getMonthlyDays(
      utils.dates.getDaysInMonth(11),
      utils.dates.getStartDayOfMonth(11),
    ),
  },
  {
    month: "December",
    weeksOfMonth: utils.calendar.getMonthlyDays(
      utils.dates.getDaysInMonth(12),
      utils.dates.getStartDayOfMonth(12),
    ),
  },
];

export const data = {
  routes,
  footerSections,
  months,
  week,
  calendar,
};
