import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { getBooks, postBook } from '../../APIs/bookStoreAPI';

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async () => getBooks(),
);

export const addNewBook = createAsyncThunk(
  'books/addNewBook',
  async (bookObj) => postBook(bookObj),
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
    bookAdded: {
      reducer: (state, action) => {
        const newBook = {
          ...action.payload,
          completed: '0%',
          currentChapter: '0',
        };
        // return [...state, newBook];
        state.contents.push(newBook);
      },
      prepare: (bookObj) => {
        const id = nanoid();
        return { payload: { id, ...bookObj } };
      },
    },
    bookDeleted: (state, action) => (
      state.contents.filter((book) => book.id !== action.payload)
    ),
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        /* eslint-disable prefer-object-spread */
        Object.assign({}, state, { status: 'loading' });
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        const arr = action.payload;
        /* eslint-disable array-callback-return */
        Object.entries(arr).map((entry) => {
          const key = entry[0];
          const value = entry[1];
          const book = {
            item_id: `${key}`,
            title: `${value[0].title}`,
            author: `${value[0].author}`,
            genre: `${value[0].category}`,
          };
          state.contents.push(book);
        });
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        Object.assign({}, state, { status: 'failed' });
        Object.assign({}, state, { error: action.error.message });
      })
      .addCase(addNewBook.fulfilled, (state, action) => {
        state.books.contents.push(action.payload);
      });
  },
});

export const { bookAdded, bookDeleted } = booksSlice.actions;

export default booksSlice.reducer;

export const selectAllBooks = (state) => state.books.contents;
