import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "./quizSlice";

const store = configureStore({
  reducer: {
    QUIZ: quizReducer,
  },
});

export type DispatchType = typeof store.dispatch;

export type StateType = ReturnType<typeof store.getState>;

// export default store;
