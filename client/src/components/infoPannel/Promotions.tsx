import { IPromoLink } from "@/lib/types";
import { Card } from "../Card";
import { PromoLink } from "./PromoLink";
import MyPlanetImage from "@/assets/infoPannel/my-planet.jpg";
import SpecialDiscountsImage from "@/assets/infoPannel/special-discounts.jpg";

const links: IPromoLink[] = [
  {
    title: "Special Discounts",
    subTitle:
      "Discounts on movie tickets to holders of specified special ID cards upon presentation",
  },
];

export const Promotions = () => {
  return (
    <div className="flex gap-5 h-[250px]">
      <Card src={MyPlanetImage} />
      <Card src={SpecialDiscountsImage} />
      <ul>
        {links.map((link) => (
          <li key={link.title} className="group border-y border-[#191919]">
            <PromoLink promoLink={link} />
          </li>
        ))}
      </ul>
    </div>
  );
};
