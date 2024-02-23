import { IFooterSection } from "../../lib/types";
import { FooterItem } from "./FooterItem";

export const FooterSection = ({ section }: { section: IFooterSection }) => {
  return (
    <section className="flex-1 text-[#a2a2a2] flex flex-col gap-[10px]">
      {section.children?.map((section) => (
        <div key={section.title} className="flex flex-col gap-[10px]">
          <h4 className="text-white font-bold uppercase">{section.title}</h4>
          <ul>
            {section.items?.map((item) => (
              <FooterItem key={item.title} item={item} />
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};
