import React, { useState } from 'react';
import BooksList from './BooksList';
import AddBook from './AddBook';

const BooksContainer = () => {
  const booksArr = [
    {
      title: 'Book1',
      author: 'author1',
      genre: 'genre1',
      completed: '10%',
      currentChapter: '2',
    },
    {
      title: 'Book2',
      author: 'author2',
      genre: 'genre2',
      completed: '20%',
      currentChapter: '4',
    },
  ];

  const [books, setBooks] = useState(booksArr);

  const addNewBook = (title, genre) => {
    const newBook = {
      title,
      author: 'author1',
      genre,
      completed: '0%',
      currentChapter: '0',
    };
    setBooks([...books, newBook]);
  };

  return (
    <div>
      <BooksList books={books} />
      <AddBook addBookProps={addNewBook} />
    </div>
  );
};

export default BooksContainer;
