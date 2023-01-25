import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

const BooksList = () => {
  const booksArr = useSelector((state) => state.books);
  return (
    <ul>
      {booksArr.map((book) => (
        <Book
          key={book.id}
          book={book}
        />
      ))}
    </ul>
  );
};

export default BooksList;
