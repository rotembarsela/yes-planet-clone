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

export type DateFormat = "yyyy-MM-dd" | "yyyy-dd-MM";
