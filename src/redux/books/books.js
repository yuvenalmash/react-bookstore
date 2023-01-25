// Actions
const ADD_BOOK = 'react-bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'react-bookstore/books/REMOVE_BOOK';

// Reducer
const initialState = [
  {
    title: 'Book1',
    author: 'author1',
    genre: 'genre1',
    completed: '10%',
    currentChapter: '2',
    id: '0',
  },
  {
    title: 'Book2',
    author: 'author2',
    genre: 'genre2',
    completed: '20%',
    currentChapter: '4',
    id: '1',
  },
];
const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          ...action.payload,
          completed: '0%',
          currentChapter: '0',
        },
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};
export default bookReducer;

// Action Creators
export const addBook = (bookObj) => (
  {
    type: ADD_BOOK,
    payload: bookObj,
  });

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});
