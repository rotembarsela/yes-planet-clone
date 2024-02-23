import { Link } from "@tanstack/react-router";
import { IFooterItem, Route } from "../../lib/types";

type FooterItemProps = {
  item: IFooterItem<Route["route"]>;
};

export const FooterItem = ({ item }: FooterItemProps) => {
  return (
    <li className="hover:text-white cursor-pointer">
      {item.route.isInternal ? (
        <Link to={item.route.url} className="w-full flex items-center gap-1">
          {item.Icon ? <item.Icon /> : null}
          {item.title}
        </Link>
      ) : (
        <a
          href={item.route.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center gap-1"
        >
          {item.Icon ? <item.Icon /> : null}
          {item.title}
        </a>
      )}
    </li>
  );
};
