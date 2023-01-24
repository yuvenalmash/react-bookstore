import React, { useState } from 'react';
import BooksList from './BooksList';
import AddBook from './AddBook';
import store from '../redux/configureStore';

const BooksContainer = () => {
  const booksArr = store.getState().books;
  const [books] = useState(booksArr);

  return (
    <div>
      <BooksList books={books} />
      <AddBook addBookProps={BooksList} />
    </div>
  );
};

export default BooksContainer;
