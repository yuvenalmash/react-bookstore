const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

// reducer
const initialState = [];

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          author: action.author,
          genre: action.genre,
          completed: '0',
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

// actions
let nextBookId = 2;
export const addBook = (title, author, genre) => {
  nextBookId += 1;
  return (
    {
      type: ADD_BOOK,
      id: toString(nextBookId),
      title,
      author,
      genre,
    });
};

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});
