import { useState } from "react";
import { createPortal } from "react-dom";
import { DatePicker } from "./DatePicker";

export const MovieDatePicker = () => {
  const [showModal, setShowModal] = useState(false);
  // const datePickerContainerRef = useRef<HTMLDivElement>(null);

  const handleOpen = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <DatePicker>
      <DatePicker.Input date={new Date()} handleOpen={handleOpen} />
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
