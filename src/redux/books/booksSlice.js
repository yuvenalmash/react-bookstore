import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    bookAdded: (state, action) => {
      const newBook = {
        ...action.payload,
        completed: '0%',
        currentChapter: '0',
      };
      return [...state, newBook];
    },
    bookDeleted: (state, action) => (
      state.filter((book) => book.id !== action.payload)
    ),
  },
});

export const { bookAdded, bookDeleted } = booksSlice.actions;

export default booksSlice.reducer;
