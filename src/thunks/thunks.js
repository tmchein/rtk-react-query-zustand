import { setBookList } from "../features/books/bookSlice";

export function getBooks() {
  return async function (dispatch) {
    const response = await fetch("http://localhost:3000/products/");
    const data = await response.json();

    console.log(data);
    dispatch(setBookList({ books: data }));
  };
}
