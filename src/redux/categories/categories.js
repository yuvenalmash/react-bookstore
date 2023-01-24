const CHECK_STATUS = 'CHECK_STATUS';

// reducer
const initialState = [{ status: 'UNDER CONSTRUCTION' }];

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return state[0].status;
    default:
      return state;
  }
};
export default categoryReducer;

// actions
export const checkStatus = () => ({
  type: CHECK_STATUS,
});
