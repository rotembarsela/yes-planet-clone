import { Month } from "@/lib/types";
import { utils } from "@/lib/utils";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DatePickerState {
  showModal: boolean;
  selectedMonth: Month;
  selectedDate: Date;
}

const initialState: DatePickerState = {
  showModal: false,
  selectedMonth: utils.dates.getCurrentMonth(),
  selectedDate: new Date(),
};

const datePickerSlice = createSlice({
  name: "datePicker",
  initialState,
  reducers: {
    openModal: (state) => {
      state.showModal = true;
    },
    closeModal: (state) => {
      state.showModal = false;
    },
    setSelectedMonth: (state, action: PayloadAction<Month>) => {
      state.selectedMonth = action.payload;
    },
    setSelectedDate: (state, action: PayloadAction<Date>) => {
      state.selectedDate = action.payload;
    },
  },
});

export const { openModal, closeModal, setSelectedMonth, setSelectedDate } =
  datePickerSlice.actions;

export default datePickerSlice.reducer;
