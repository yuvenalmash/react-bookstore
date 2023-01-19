import React, { useState } from 'react';

const Book = () => {
  const [state, setstate] = useState({
    name: null,
    author: null,
    genre: null,
    completed: null,
    currentChapter: null,
  });
  const {
    name, author, genre, completed, currentChapter,
  } = state;

  return (
    <>
      <section>
        <div>
          <p>{genre}</p>
          <p>{name}</p>
          <p>{author}</p>
          <div>
            <button type="button">Comments</button>
            <button type="button">Remove</button>
            <button type="button">Edit</button>
          </div>
        </div>
        <div>
          <p>{completed}</p>
          <p>Completed</p>
        </div>
      </section>
      <section>
        <p>CURRENT CHAPTER</p>
        <p>{currentChapter}</p>
        <button type="button">UPDATE PROGRESS</button>
      </section>
    </>
  );
};

export default Book;
