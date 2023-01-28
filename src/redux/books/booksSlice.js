/* eslint-disable array-callback-return */
/* eslint-disable prefer-object-spread */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { deleteBook, getBooks, postBook } from '../../APIs/bookStoreAPI';

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async () => getBooks(),
);

export const addNewBook = createAsyncThunk(
  'books/addNewBook',
  async (bookObj) => postBook(bookObj),
);

export const removeById = createAsyncThunk(
  'books/removeById',
  async (bookId) => deleteBook(bookId),
);

const initialState = {
  contents: [],
  status: 'idle',
  error: null,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    bookAdded: (state, action) => {
      const newBook = {
        ...action.payload,
        completed: '60%',
        currentChapter: 'Chapter 7',
      };
      state.contents.push(newBook);
    },
    bookDeleted: (state, action) => (
      state.contents.filter((book) => book.id !== action.payload)
    ),
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => (
        Object.assign({}, state, { status: 'loading' })
      ))
      .addCase(fetchBooks.fulfilled, (state, action) => {
        const arr = action.payload;
        const newArr = [];
        Object.entries(arr).map((entry) => {
          const key = entry[0];
          const value = entry[1];
          const book = {
            id: `${key}`,
            title: `${value[0].title}`,
            author: `${value[0].author}`,
            category: `${value[0].category}`,
            completed: '60%',
            currentChapter: 'Chapter 7',
          };
          newArr.push(book);
        });
        return Object.assign({}, state, { contents: newArr });
      })
      .addCase(fetchBooks.rejected, (state, action) => (
        Object.assign({}, state, { status: 'failed', error: action.error.message })
      ))
      .addCase(removeById.fulfilled, (state) => (
        Object.assign({}, state, { status: 'idle' })
      ));
  },
});

export const { bookAdded, bookDeleted } = booksSlice.actions;

export default booksSlice.reducer;

export const selectAllBooks = (state) => state.books.contents;
