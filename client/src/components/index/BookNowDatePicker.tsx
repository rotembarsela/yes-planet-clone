import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { DatePicker } from "../DatePicker";
import {
  closeModal,
  openModal,
  setSelectedDate,
  setSelectedMonth,
} from "@/lib/store/slices/datePickerSlice";
import { useMemo } from "react";
import { Month } from "@/lib/types";
import { data } from "@/lib/data";
import { utils } from "@/lib/utils";
import { CalendarClock } from "lucide-react";
import { useFocusTrap } from "@/hooks/useFocusTrap";

export const BookNowDatePicker = () => {
  const datePicker = useAppSelector((state) => state.datePicker);
  const dispatch = useAppDispatch();

  const { selectedDate, selectedMonth, showModal } = datePicker;

  const handleOpen = () => {
    dispatch(openModal());
  };

  const handleClose = () => {
    dispatch(closeModal());
    dropDownBtnRef.current?.focus();
  };

  const handleMonthChange = (currMonth: Month, idx: 1 | -1) => {
    const months = data.months;

    const currMonthIdx = months.indexOf(currMonth);

    let newMonthIdx = currMonthIdx + idx;

    if (newMonthIdx < 0) newMonthIdx = months.length - 1;
    else if (newMonthIdx >= months.length) newMonthIdx = 0;
    dispatch(setSelectedMonth(months[newMonthIdx]));
  };

  const handleDateSelect = (selectedDay: number, selectedMonth: Month) => {
    const currYear = new Date().getFullYear();

    const date = new Date(
      currYear,
      utils.dates.getMonthIdx(selectedMonth),
      selectedDay,
    );

    dispatch(setSelectedDate(date));
    handleClose();
  };

  const selectedMonthly = useMemo(
    () => data.calendar.find((month) => month.month === selectedMonth),
    [selectedMonth],
  );

  const [dropDownRef, dropDownBtnRef] = useFocusTrap(showModal, handleClose);

  return (
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
  );
};
