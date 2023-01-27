import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import { fetchBooks } from '../redux/books/booksSlice';

const BooksList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.contents);

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
