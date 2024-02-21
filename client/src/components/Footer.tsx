import { Link } from "@tanstack/react-router";
import { data } from "../lib/data";

export const Footer = () => {
  return (
    <footer className="h-[335px] border-t border-t-[#b2b2b2] py-[25px]">
      <div className="w-[980px] h-full mx-auto flex flex-col justify-between items-center">
        <div className="flex w-full">
          {data.footerSections.map((child) => (
            <section
              key={child.title}
              className="flex-1 text-[#a2a2a2] px-[10px] flex flex-col gap-[10px]"
            >
              {child.children?.map((section) => (
                <div key={section.title} className="flex flex-col gap-[10px]">
                  <h4 className="text-white font-bold uppercase">
                    {section.title}
                  </h4>
                  <ul>
                    {section.items?.map((item) => (
                      <li
                        key={item.title}
                        className="hover:text-white cursor-pointer"
                      >
                        {item.route.isInternal ? (
                          <Link
                            to={item.route.url}
                            className="w-full flex items-center gap-1"
                          >
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
                    ))}
                  </ul>
                </div>
              ))}
            </section>
          ))}
        </div>
        <p>
          All rights reserved Planet Cinemas {new Date().getFullYear()} &copy;
        </p>
      </div>
    </footer>
  );
};
