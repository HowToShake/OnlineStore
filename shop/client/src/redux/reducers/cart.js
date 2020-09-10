const initialState = {
  id: "",
  order: [],
  userID: "",
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM_TO_CART":
      return {
        ...state,
        order: [...state.order, action.payload],
      };
    case "CREATE_NEW_ORDER":
      return {
        ...state,
        id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER) + 1,
        userID: action.userID,
      };
    case "CLEAR_USER_CART":
      return {
        id: "",
        order: [],
        userID: "",
      };

    default:
      return state;
  }
};
