import React, { useState } from 'react';

const AddBook = () => {
  const [newBook] = useState({
    title: '',
    Author: '',
  });

  return (
    <form>
      <input
        type="text"
        placeholder="Book title"
        value={newBook.title}
        name="title"
      />
      <select>
        <option value="action">Action</option>
        <option value="scifi">Science Fiction</option>
        <option value="fantasy">Fantasy</option>
      </select>
      <button type="button">
        ADD BOOK
      </button>
    </form>
  );
};

export default AddBook;
