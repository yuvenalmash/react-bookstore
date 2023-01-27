import { configureStore } from '@reduxjs/toolkit';
// import bookReducer from './books/books';
import booksReducer from './books/booksSlice';
import categoryReducer from './categories/categories';

const store = configureStore({
  reducer: {
    // books: bookReducer,
    books: booksReducer,
    categories: categoryReducer,
  },
});

export default store;
