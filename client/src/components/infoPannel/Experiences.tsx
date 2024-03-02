import { Card } from "../Card";
import IMaxLiveItImage from "@/assets/infoPannel/imax-live-it.webp";
import IMaxDuneImage from "@/assets/infoPannel/imax-dune.jpeg";
import FourDxTheBestImage from "@/assets/infoPannel/4dx-the-best.jpg";
import { PromoLink } from "./PromoLink";
import { IPromoLink } from "@/lib/types";

const links: IPromoLink[] = [
  { title: "VIP", subTitle: "The perfect dinner and a movie experience" },
  { title: "Dolby Atmos", subTitle: "Get into the sound" },
];

export const Experiences = () => {
  return (
    <div className="flex gap-5 h-[250px]">
      <Card src={IMaxLiveItImage} />
      <div className="flex flex-col justify-between h-full">
        <Card src={IMaxDuneImage} size="sm" />
        <Card src={FourDxTheBestImage} size="sm" />
      </div>
      <ul className="w-full">
        {links.map((link) => (
          <li key={link.title} className="group border-y border-[#191919]">
            <PromoLink promoLink={link} />
          </li>
        ))}
      </ul>
    </div>
  );
};
