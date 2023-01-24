import React from 'react';
import { useDispatch, connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();
  let title;
  let author;
  let genre;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.value.trim() || !author.value.trim()) {
      return;
    }
    const bookObj = {
      title: title.value,
      author: author.value,
      genre: genre.value,
      id: uuidv4(),
    };
    dispatch(addBook(bookObj));
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

export default connect()(AddBook);
