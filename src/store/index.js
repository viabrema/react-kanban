import { configureStore } from "@reduxjs/toolkit";
import kanbanReducer from "../kanban/kanbanSlice";

export const store = configureStore({
  reducer: {
      kanban: kanbanReducer
  },
})