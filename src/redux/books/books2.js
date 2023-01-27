
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const appId = '5PHZk8CiiRMye2JyvULz';

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await client.get(`${baseURL}/apps/${appId}/books`);
  return response.books;
});

const initialState = []

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    // omit reducer cases
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        const newEntities = {};
        action.payload.forEach((book) => {
          newEntities[book.id] = book;
        });
        state.entities = newEntities;
        state.status = 'idle';
      });
  },
});
