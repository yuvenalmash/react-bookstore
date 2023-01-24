import React from 'react';
import { useSelector } from 'react-redux';
import BooksList from './BooksList';
import AddBook from './AddBook';

const BooksContainer = () => {
  // const booksArr = store.getState().books;
  const booksArr = useSelector((state) => state.books);
  // const [books] = useState(booksArr);

  return (
    <div>
      <BooksList books={booksArr} />
      <AddBook addBookProps={BooksList} />
    </div>
  );
};

export default BooksContainer;
