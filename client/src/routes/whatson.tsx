import { createFileRoute } from "@tanstack/react-router";
import { DatePicker } from "../components/DatePicker";
import { utils } from "../lib/utils";
import { useState } from "react";
import { Month } from "../lib/types";
import { data } from "../lib/data";

export const Route = createFileRoute("/whatson")({
  component: WhatsOnPage,
});

function WhatsOnPage() {
  const [showModal, setShowModal] = useState(true);
  const [selectedMonth, setSelectedMonth] = useState<Month>("February");

  const handleOpen = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleMonthChange = (currMonth: Month, idx: 1 | -1) => {
    const months = data.months;

    const currMonthIdx = months.indexOf(currMonth);

    let newMonthIdx = currMonthIdx + idx;

    if (newMonthIdx < 0) {
      newMonthIdx = months.length - 1;
    } else if (newMonthIdx >= months.length) {
      newMonthIdx = 0;
    }

    setSelectedMonth(months[newMonthIdx]);
  };

  return (
    <div className="h-[500px] bg-white text-black">
      <DatePicker>
        <DatePicker.Input
          date={utils.dates.dateFormat(new Date())}
          handleOpen={handleOpen}
        />
        {showModal ? (
          <DatePicker.Body handleClose={handleClose}>
            <DatePicker.Title>Choose a date</DatePicker.Title>
            <DatePicker.Month
              selectedMonth={selectedMonth}
              handleMonth={handleMonthChange}
            />
            <DatePicker.Calendar selectedMonth={selectedMonth} />
            <DatePicker.Info>
              A new schedule is available every Tuesday
            </DatePicker.Info>
          </DatePicker.Body>
        ) : null}
      </DatePicker>
    </div>
  );
}
