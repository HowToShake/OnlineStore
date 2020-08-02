
const initialState = { 
  searchValue: ''
}

export const topBarReducer = (state = initialState, action) => {
  debugger;
  switch (action.type) {
    case "SEARCH":
      const { searchValue } = action;
      return {...state, searchValue};
    default:
      return state;
  }
};
