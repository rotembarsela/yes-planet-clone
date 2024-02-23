import { data } from "../../lib/data";
import { FooterSection } from "./FooterSection";

export const FooterSections = () => {
  return (
    <div className="flex w-full">
      {data.footerSections.map((section) => (
        <FooterSection key={section.title} section={section} />
      ))}
    </div>
  );
};
