import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
import datePickerSlice from "./slices/datePickerSlice";

export const store = configureStore({
  reducer: {
    datePicker: datePickerSlice,
    counter: counterSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
