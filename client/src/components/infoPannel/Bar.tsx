import { Card } from "../Card";
import MenuesAndPricesImage from "@/assets/infoPannel/menues-and-prices.jpg";

export const Bar = () => {
  return (
    <div className="flex gap-5 h-[250px]">
      <Card src={MenuesAndPricesImage} />
    </div>
  );
};
