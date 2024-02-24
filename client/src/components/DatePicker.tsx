import { PropsWithChildren } from "react";
import { CalendarDays } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { utils } from "../lib/utils";
import { data } from "../lib/data";
import { Month, Monthly } from "../lib/types";

export const DatePicker = ({ children }: PropsWithChildren) => {
  return <div data-datepicker="wrapper">{children}</div>;
};

/*
DatePicker.Container = forwardRef<HTMLDivElement, DatePickerProps>(
  (props, ref) => {
    const { children } = props;
    return (
      <div ref={ref} className="relative text-black">
        {children}
      </div>
    );
  },
);
*/

type DatePickerInputProps = {
  date: Date;
  handleOpen: () => void;
  fullWidth?: boolean;
};

DatePicker.Input = ({
  date,
  handleOpen,
  fullWidth = false,
}: DatePickerInputProps) => {
  return (
    <div
      className={twMerge(
        fullWidth ? "w-full" : "w-fit",
        "flex items-center gap-5",
      )}
      data-datepicker="input"
    >
      <CalendarDays
        onClick={handleOpen}
        className="text-black cursor-pointer"
      />
      <span>{utils.dates.dateFormat(date)}</span>
    </div>
  );
};

type DatePickerBodyProps = {
  handleClose: () => void;
} & PropsWithChildren;

DatePicker.Body = ({ children, handleClose }: DatePickerBodyProps) => {
  return (
    <div
      className="fixed top-0 left-0 z-50 bg-black bg-opacity-25 h-screen w-screen flex flex-col justify-center items-center"
      data-datepicker="bg-cover"
    >
      <div className="relative w-[368px] h-[445px] p-5 bg-white text-black shadow-xl rounded-sm">
        <span
          onClick={handleClose}
          className="absolute top-8 right-8 cursor-pointer hover:font-bold"
          data-datepicker="body"
        >
          &#10005;
        </span>
        {children}
      </div>
    </div>
  );
};

DatePicker.Title = ({ children }: PropsWithChildren) => {
  return (
    <span
      className="text-xl font-bold border-b border-b-[#b2b2b2] p-[10px] w-full block"
      data-datepicker="title"
    >
      {children}
    </span>
  );
};

type DatePickerMonthProps = {
  selectedMonth: Month;
  handleMonth: (currMonth: Month, idx: 1 | -1) => void;
};

DatePicker.Month = ({ selectedMonth, handleMonth }: DatePickerMonthProps) => {
  return (
    <div
      className="relative w-full flex justify-center"
      data-datepicker="month"
    >
      <button
        className="absolute top-0 left-0"
        onClick={() => handleMonth(selectedMonth, -1)}
      >
        &lt;
      </button>
      <span>{selectedMonth}</span>
      <button
        className="absolute top-0 right-0"
        onClick={() => handleMonth(selectedMonth, 1)}
      >
        &gt;
      </button>
    </div>
  );
};

type DatePickerCalendar = {
  selectedDate: Date;
  selectedMonthly: Monthly | undefined;
  onDateSelect: (selectedDay: number, selectedMonth: Month) => void;
  minSelectDate: Date;
  maxSelectDate: Date;
  // TODO: Props - minDate, maxDate, minSelectionDate, maxSelectionDate
};

DatePicker.Calendar = ({
  selectedDate,
  selectedMonthly,
  onDateSelect,
  minSelectDate,
  maxSelectDate,
}: DatePickerCalendar) => {
  return selectedMonthly ? (
    <table
      className="w-full border-spacing-1 border-separate"
      data-datepicker="calendar"
    >
      <thead>
        <tr>
          {data.week.map((day) => (
            <th key={day}>{day}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {selectedMonthly.weeksOfMonth.map((week) => (
          <tr key={week.weekNumber}>
            {week.days.map((day, idx) =>
              utils.calendar.isZeroDay(day) ? (
                <td key={day + idx} className="text-center">
                  <button
                    disabled={
                      !utils.dates.isDateBetweenMinAndMaxDate(
                        utils.dates.getDate(
                          day,
                          utils.dates.getMonthIdx(selectedMonthly.month),
                        ),
                        minSelectDate,
                        maxSelectDate,
                      )
                    }
                    className={twMerge(
                      utils.dates.compareDates(
                        selectedDate,
                        utils.dates.getDate(
                          day,
                          utils.dates.getMonthIdx(selectedMonthly.month),
                        ),
                      )
                        ? "border-2 border-orange-500"
                        : "border border-[#ddd]",
                      "w-10 h-10 rounded-s rounded-e cursor-pointer select-none text-orange-500 hover:bg-orange-500 hover:text-white disabled:pointer-events-none disabled:text-[#bab9b9]",
                    )}
                    onClick={() => onDateSelect(day, selectedMonthly.month)}
                  >
                    {day}
                  </button>
                </td>
              ) : (
                <td key={day + idx} className="pointer-events-none">
                  &nbsp;
                </td>
              ),
            )}
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <span>Something went wrong...</span>
  );
};

DatePicker.Info = ({ children }: PropsWithChildren) => {
  return <p data-datepicker="info">{children}</p>;
};
