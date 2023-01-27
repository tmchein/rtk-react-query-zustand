import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../features/books/bookSlice";
import counterReducer from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    books: bookReducer,
  },
});
