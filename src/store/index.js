import { configureStore } from "@reduxjs/toolkit";
import kambanReducer from "../kamban/kambanSlice";

export const store = configureStore({
  reducer: {
      kamban: kambanReducer
  },
})