import { Card } from "../Card";
import EventsAndConfrencesImage from "@/assets/infoPannel/events-and-confrences.jpg";
import VoucherAndBusinessImage from "@/assets/infoPannel/voucher-and-business.jpg";

export const Companies = () => {
  return (
    <div className="flex gap-5 h-[250px]">
      <Card src={EventsAndConfrencesImage} />
      <div className="flex flex-col justify-between h-full">
        <Card src={VoucherAndBusinessImage} size="sm" />
      </div>
    </div>
  );
};
