import React from 'react';
// import { useSelector } from 'react-redux';
import BooksList from './BooksList';
import AddBook from './AddBook';

const BooksContainer = () => (
  <div>
    <BooksList />
    <AddBook />
  </div>
);

export default BooksContainer;
