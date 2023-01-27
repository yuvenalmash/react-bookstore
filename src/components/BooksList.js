import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import { fetchBooks, selectAllBooks } from '../redux/books/booksSlice';
// import store from '../redux/configureStore';

const BooksList = () => {
  const dispatch = useDispatch();
  const books = useSelector(selectAllBooks);

  const bookStatus = useSelector((state) => state.books.status);

  useEffect(() => {
    if (bookStatus === 'idle') {
      dispatch(fetchBooks());
    }
  }, [bookStatus, dispatch]);

  console.log(`books = ${books}`);
  return (
    <ul>
      {books.map((book) => (
        <Book
          key={book.id}
          book={book}
        />
      ))}
    </ul>
  );
};

export default BooksList;
