import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const BooksList = (props) => {
  const { books } = props;
  return (
    <ul>
      {books.map((book) => (
        <Book
          key={book.title}
          book={book}
        />
      ))}
    </ul>
  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default BooksList;
