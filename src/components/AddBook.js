import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
// import { bookAdded } from '../redux/books/booksSlice';
import { addNewBook } from '../redux/books/booksSlice';

const AddBook = () => {
  const dispatch = useDispatch();
  let title;
  let author;
  let genre;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.value.trim() || !author.value.trim()) {
      return;
    }
    const id = nanoid();
    const bookObj = {
      item_id: id,
      title: title.value,
      author: author.value,
      category: genre.value,
    };
    dispatch(addNewBook(bookObj));
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
