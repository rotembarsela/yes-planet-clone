import { Card } from "../Card";
import BirthdayInCinemasImage from "@/assets/infoPannel/birthday-in-cinemas.jpg";
import GravityParkImage from "@/assets/infoPannel/gravity-park.jpg";
import FamilyOfferImage from "@/assets/infoPannel/family-offer.jpg";

export const Kids = () => {
  return (
    <div className="flex gap-5 h-[250px]">
      <Card src={BirthdayInCinemasImage} />
      <div className="flex flex-col justify-between h-full">
        <Card src={GravityParkImage} size="sm" />
        <Card src={FamilyOfferImage} size="sm" />
      </div>
    </div>
  );
};
