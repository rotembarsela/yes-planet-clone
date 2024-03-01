import { ITabs } from "@/lib/types";
import { Tabs } from "../Tabs";
import { Experiences } from "./Experiences";
import { Promotions } from "./Promotions";
import { Companies } from "./Companies";
import { Kids } from "./Kids";
import { Bar } from "./Bar";

const tabs: ITabs[] = [
  { title: "Experiences", component: <Experiences /> },
  { title: "Promotions", component: <Promotions /> },
  { title: "Companies", component: <Companies /> },
  { title: "Kids", component: <Kids /> },
  { title: "Bar", component: <Bar /> },
];

export const InfoPannel = () => {
  return (
    <section className="w-[980px] m-auto py-5">
      <Tabs tabs={tabs} />
    </section>
  );
};
