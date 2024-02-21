import { FooterSection, Route } from "./types";
import IMaxIcon from "../assets/imax.svg?react";
import FourDXIcon from "../assets/4dx.svg?react";
import ScreenXIcon from "../assets/screenx.svg?react";
import VipIcon from "../assets/vip.svg?react";

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

const footerSections: FooterSection[] = [
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

export const data = {
  routes,
  footerSections,
};
