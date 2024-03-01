import { ITabs } from "@/lib/types";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

type TabsProps = {
  tabs: ITabs[];
  fullWidth?: boolean;
};

export const Tabs = ({ tabs, fullWidth = false }: TabsProps) => {
  const [activeTab, setActiveTab] = useState<string>(tabs[0].title);

  const handleActiveTab = (title: string) => {
    setActiveTab(title);
  };

  return (
    <div
      className={twMerge(
        fullWidth ? "flex" : "inline-flex",
        "flex-col w-full text-md text-[#a2a2a2]",
      )}
    >
      <ul className="flex flex-wrap -mb-px">
        {tabs.map(({ title }) => (
          <li key={title} className="me-2 last-of-type:me-0">
            <Tab
              title={title}
              isActive={title === activeTab}
              onClick={() => handleActiveTab(title)}
            />
          </li>
        ))}
      </ul>
      <div className="mt-4">{renderActiveTabComponent(tabs, activeTab)}</div>
    </div>
  );
};

type TabProps = {
  title: string;
  isActive: boolean;
  onClick: () => void;
};

const Tab = ({ title, isActive, onClick }: TabProps) => {
  return (
    <button
      className={twMerge(
        "inline-block uppercase p-4 border-b-2 border-transparent rounded-t-lg",
        isActive ? "border-[#f5821e] text-white" : "hover:text-white",
      )}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

const renderActiveTabComponent = (tabs: ITabs[], activeTab: string) => {
  const tab = tabs.find((tab) => tab.title === activeTab);
  return tab ? tab.component : null;
};
