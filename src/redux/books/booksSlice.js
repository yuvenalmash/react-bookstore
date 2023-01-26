import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = [];

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
        return [...state, newBook];
      },
      prepare: (bookObj) => {
        const id = nanoid();
        return { payload: { id, ...bookObj } };
      },
    },
    bookDeleted: (state, action) => (
      state.filter((book) => book.id !== action.payload)
    ),
  },
});

export const { bookAdded, bookDeleted } = booksSlice.actions;

export default booksSlice.reducer;
