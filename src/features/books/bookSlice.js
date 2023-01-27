import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookList: [],
};

export const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setBookList: (state, action) => {
      state.bookList = action.payload.books;
    },
  },
});

export const { setBookList } = bookSlice.actions;

export default bookSlice.reducer;
