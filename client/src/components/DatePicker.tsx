import { getDaysInMonth, parse } from "date-fns";

export const DatePicker = () => {
  function getDaysInMonthByName(monthName: string) {
    // Parse the month name to a date object
    const date = parse(monthName, "MMMM", new Date());

    // Get number of days in the parsed month
    const daysInMonth = getDaysInMonth(date);

    console.log(daysInMonth);

    return daysInMonth;
  }

  return (
    <div>
      <button onClick={() => getDaysInMonthByName("February")}>
        DatePicker
      </button>
    </div>
  );
};
