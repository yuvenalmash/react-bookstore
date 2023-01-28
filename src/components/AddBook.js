import React from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { addNewBook, bookAdded } from '../redux/books/booksSlice';
import styles from './css/AddBook.module.scss';

const AddBook = () => {
  const dispatch = useDispatch();
  let title;
  let author;
  let category;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.value.trim() || !author.value.trim()) {
      return;
    }
    const newId = nanoid();
    const bookObj = {
      item_id: newId,
      title: title.value,
      author: author.value,
      category: category.value,
    };
    const bookObj2 = {
      id: newId,
      title: title.value,
      author: author.value,
      category: category.value,
    };
    dispatch(bookAdded(bookObj2));
    dispatch(addNewBook(bookObj));

    title.value = '';
    author.value = '';
    category.value = 'action';
  };

  return (
    <div className={styles.container}>
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Book title"
          ref={(node) => {
            title = node;
          }}
        />
        <input
          type="text"
          placeholder="Book author"
          ref={(node) => {
            author = node;
          }}
        />
        <select
          ref={(node) => {
            category = node;
          }}
        >
          <option value="action">Action</option>
          <option value="scifi">Science Fiction</option>
          <option value="fantasy">Fantasy</option>
        </select>
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default AddBook;
