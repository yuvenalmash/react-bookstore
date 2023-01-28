import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import { fetchBooks, selectAllBooks } from '../redux/books/booksSlice';

const BooksList = () => {
  const dispatch = useDispatch();
  const bookStatus = useSelector((state) => state.books.status);
  useEffect(() => {
    if (bookStatus === 'idle') {
      dispatch(fetchBooks());
    }
  });
  const books = useSelector(selectAllBooks);

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
