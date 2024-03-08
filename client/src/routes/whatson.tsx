import { createFileRoute } from "@tanstack/react-router";
import { DatePicker } from "../components/DatePicker";
import { utils } from "../lib/utils";
import { useMemo, useState } from "react";
import { Month } from "../lib/types";
import { data } from "../lib/data";
import { CalendarClock } from "lucide-react";
import { useFocusTrap } from "../hooks/useFocusTrap";

export const Route = createFileRoute("/whatson")({
  component: WhatsOnPage,
});

function WhatsOnPage() {
  const [showModal, setShowModal] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState<Month>("February");
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const handleOpen = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    dropDownBtnRef.current?.focus();
  };

  const handleMonthChange = (currMonth: Month, idx: 1 | -1) => {
    const months = data.months;

    const currMonthIdx = months.indexOf(currMonth);

    let newMonthIdx = currMonthIdx + idx;

    if (newMonthIdx < 0) newMonthIdx = months.length - 1;
    else if (newMonthIdx >= months.length) newMonthIdx = 0;

    setSelectedMonth(months[newMonthIdx]);
  };

  const handleDateSelect = (selectedDay: number, selectedMonth: Month) => {
    // TODO: const Year, change later
    const currYear = new Date().getFullYear();

    const date = new Date(
      currYear,
      utils.dates.getMonthIdx(selectedMonth),
      selectedDay,
    );

    setSelectedDate(date);
    handleClose();
  };

  const selectedMonthly = useMemo(
    () => data.calendar.find((month) => month.month === selectedMonth),
    [selectedMonth],
  );

  const [dropDownRef, dropDownBtnRef] = useFocusTrap(showModal, handleClose);

  return (
    <div className="h-[500px] bg-white text-black">
      <DatePicker>
        <DatePicker.Input
          ref={dropDownBtnRef}
          date={selectedDate}
          handleOpen={handleOpen}
        />
        {showModal ? (
          <DatePicker.Body ref={dropDownRef} handleClose={handleClose}>
            <DatePicker.Title>Choose a date</DatePicker.Title>
            <DatePicker.Month
              selectedMonth={selectedMonth}
              handleMonth={handleMonthChange}
            />
            <DatePicker.Calendar
              selectedDate={selectedDate}
              selectedMonthly={selectedMonthly}
              onDateSelect={handleDateSelect}
              minSelectDate={utils.dates.futureDateFromToday()}
              maxSelectDate={utils.dates.futureDateFromToday(8)}
            />
            <DatePicker.Info>
              <div className="flex items-center justify-between">
                <CalendarClock />
                <p>A new schedule is available every Tuesday</p>
              </div>
            </DatePicker.Info>
          </DatePicker.Body>
        ) : null}
      </DatePicker>
    </div>
  );
}
