import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import styles from './Book.module.css';
import { removeById } from '../redux/books/booksSlice';

const Book = (props) => {
  const dispatch = useDispatch();
  const { book } = props;
  const {
    category, title, author, completed, currentChapter, id,
  } = book;
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(removeById(id));
  };

  return (
    <div className={styles.book}>
      <section className={styles.col1}>
        <div>
          <p>{category}</p>
          <p>{title}</p>
          <p>{author}</p>
          <div>
            <button type="button">Comments</button>
            <button onClick={handleClick} type="button">Remove</button>
            <button type="button">Edit</button>
          </div>
        </div>
        <div>
          <p>{completed}</p>
          <p>Completed</p>
        </div>
      </section>
      <section className={styles.col2}>
        <p>CURRENT CHAPTER</p>
        <p>{currentChapter}</p>
        <button type="button">UPDATE PROGRESS</button>
      </section>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Book;
