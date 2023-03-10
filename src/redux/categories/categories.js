// Actions
const CHECK_STATUS = 'react-bookstore/categories/CHECK_STATUS';

// Reducer
const initialState = [];
const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction';
    default:
      return state;
  }
};
export default categoryReducer;

// Action Creators
export const checkStatus = () => ({
  type: CHECK_STATUS,
});
