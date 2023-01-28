import React from 'react';
import BooksList from './BooksList';
import AddBook from './AddBook';
import styles from './css/BooksContainer.module.scss';

const BooksContainer = () => (
  <div>
    <BooksList />
    <hr className={styles.separator} />
    <AddBook />
  </div>
);

export default BooksContainer;
