import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addBook } from '../redux/books/books';
import store from '../redux/configureStore';
import BooksList from './BooksList';

const AddBook = ({ dispatch }) => {
  let title;
  let author;
  let genre;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.value.trim() || !author.value.trim()) {
      return;
    }
    dispatch(addBook(title.value, author.value, genre.value));
    const booksArr = store.getState().books;
    BooksList(booksArr);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Book title"
        ref={(node) => { title = node; }}
      />
      <input
        type="text"
        placeholder="Book author"
        ref={(node) => { author = node; }}
      />
      <select ref={(node) => { genre = node; }}>
        <option value="action">Action</option>
        <option value="scifi">Science Fiction</option>
        <option value="fantasy">Fantasy</option>
      </select>
      <button type="submit">
        ADD BOOK
      </button>
    </form>
  );
};

AddBook.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(AddBook);
