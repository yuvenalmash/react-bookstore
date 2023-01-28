import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import styles from './css/Book.module.scss';
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
          <h3>{category}</h3>
          <h1>{title}</h1>
          <p>{author}</p>
          <div className={styles.buttons}>
            <button type="button">Comments</button>
            <hr />
            <button onClick={handleClick} type="button">Remove</button>
            <hr />
            <button type="button">Edit</button>
          </div>
        </div>
        <div className={styles.completed}>
          <div className={styles.progress} data-progress="" />
          <div>
            <h2>{completed}</h2>
            <h3>Completed</h3>
          </div>
        </div>
      </section>
      <hr />
      <section className={styles.col2}>
        <p>CURRENT CHAPTER</p>
        <h3>{currentChapter}</h3>
        <button type="button">UPDATE PROGRESS</button>
      </section>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Book;
