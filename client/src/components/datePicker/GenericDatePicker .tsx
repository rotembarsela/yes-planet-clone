import { useFocusTrap } from "@/hooks/useFocusTrap";
import { data } from "@/lib/data";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import {
  closeModal,
  openModal,
  setSelectedDate,
  setSelectedMonth,
} from "@/lib/store/slices/datePickerSlice";
import { Month } from "@/lib/types";
import { utils } from "@/lib/utils";
import { useMemo } from "react";
import { DatePicker } from "./DatePicker";
import { CalendarClock } from "lucide-react";

type GenericDatePickerProps = {
  title?: string;
  info?: string;
  minSelectDate?: Date;
  maxSelectDate?: Date;
};

export const GenericDatePicker = ({
  title = "Choose a date",
  info = "A new schedule is available every Tuesday",
  minSelectDate = utils.dates.futureDateFromToday(),
  maxSelectDate = utils.dates.futureDateFromToday(8),
}: GenericDatePickerProps) => {
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
          <DatePicker.Title>{title}</DatePicker.Title>
          <DatePicker.Month
            selectedMonth={selectedMonth}
            handleMonth={handleMonthChange}
          />
          <DatePicker.Calendar
            selectedDate={selectedDate}
            selectedMonthly={selectedMonthly}
            onDateSelect={handleDateSelect}
            minSelectDate={minSelectDate}
            maxSelectDate={maxSelectDate}
          />
          <DatePicker.Info>
            <div className="flex items-center justify-between">
              <p>{info}</p>
              <CalendarClock />
            </div>
          </DatePicker.Info>
        </DatePicker.Body>
      ) : null}
    </DatePicker>
  );
};
