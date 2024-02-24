import { getDaysInMonth, parse } from "date-fns";
import { useState } from "react";
import { createPortal } from "react-dom";
import { DatePicker } from "./DatePicker";
import { utils } from "../lib/utils";

export const MovieDatePicker = () => {
  const [showModal, setShowModal] = useState(false);
  // const datePickerContainerRef = useRef<HTMLDivElement>(null);

  const handleOpen = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  function getDaysInMonthByName(monthName: string) {
    // Parse the month name to a date object
    const date = parse(monthName, "MMMM", new Date());

    // Get number of days in the parsed month
    const daysInMonth = getDaysInMonth(date);

    console.log(daysInMonth);

    return daysInMonth;
  }

  return (
    <DatePicker>
      <DatePicker.Input
        date={utils.dates.dateFormat(new Date())}
        handleOpen={handleOpen}
      />
      {showModal
        ? createPortal(
            <DatePicker.Body handleClose={handleClose}>
              <DatePicker.Title>Choose a date</DatePicker.Title>
            </DatePicker.Body>,
            document.body,
          )
        : null}
    </DatePicker>
  );
};
