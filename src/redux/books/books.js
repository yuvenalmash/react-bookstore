// actions
let nextBookId = 2;
export const addBook = (title, author, genre) => {
  nextBookId += 1;
  return (
    {
      type: 'ADD_BOOK',
      id: toString(nextBookId),
      title,
      author,
      genre,
    });
};

export const removeBook = () => ({
  type: 'REMOVE_BOOK',
});

// reducer
export const initialState = [];

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
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
    case 'REMOVE_BOOK':
      return [
        ...state,
      ];
    default:
      return state;
  }
};

export default bookReducer;
