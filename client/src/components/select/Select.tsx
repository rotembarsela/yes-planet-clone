import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { useFocusTrap } from "@/hooks/useFocusTrap";

interface SelectProps<T> {
  items: T[];
  value: T;
  valueId: keyof T;
  valueLabel: keyof T;
  onSelect: (selectedItem: T) => void;
}

export const Select = <T,>({
  items,
  value,
  valueId,
  valueLabel,
  onSelect,
}: SelectProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectedRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (isOpen && value) {
      const selectedElement = selectedRef.current;
      if (selectedElement) {
        selectedElement.scrollIntoView({
          behavior: "auto",
          block: "nearest",
        });
      }
    }
  }, [isOpen, value]);

  const handleSelect = (selectedItem: T) => {
    onSelect(selectedItem);
    setIsOpen(false);
  };

  const handleCloseDropDown = () => {
    setIsOpen(false);
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLLIElement>,
    item: T,
  ) => {
    if (event.key === "Enter") {
      handleSelect(item);
    }
  };

  const [dropDownRef, dropDownBtnRef] = useFocusTrap(
    isOpen,
    handleCloseDropDown,
  );

  return (
    <div ref={dropDownRef} className="dropdown relative w-[250px]">
      <button
        ref={dropDownBtnRef}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="inline-flex justify-between items-center w-full px-4 py-[6px] text-sm font-bold uppercase bg-white border border-[#e2e2e2] rounded hover:bg-gray-100/50"
      >
        {String(value[valueLabel])}
        <ChevronDown className="h-4 w-4" />
      </button>
      {isOpen && (
        <ul className="absolute z-10 p-2 mt-1 w-full max-h-[200px] overflow-auto rounded bg-white border border-[#e2e2e2] shadow-md">
          {items.map((item, index) => (
            <li
              key={index}
              aria-selected={
                value[valueId] === item[valueId] ? "true" : "false"
              }
              tabIndex={0}
              ref={value[valueId] === item[valueId] ? selectedRef : null}
              className={`${
                value[valueId] === item[valueId]
                  ? "bg-orange-500 text-white"
                  : "hover:bg-[#f5f5f5]"
              } cursor-pointer rounded select-none relative py-2 pl-3 pr-9`}
              onClick={() => handleSelect(item)}
              onKeyDown={(event) => handleKeyDown(event, item)}
            >
              {String(item[valueLabel])}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
