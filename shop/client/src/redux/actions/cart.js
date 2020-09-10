export const createUserCart = (userID) => {
  return {
    type: "CREATE_NEW_ORDER",
    userID,
  };
};

export const addItemToCart = (selectedItem) => {
  return {
    type: "ADD_ITEM_TO_CART",
    payload: selectedItem,
  };
};

export const clearUserCart = () => {
  return {
    type: "CLEAR_USER_CART",
  };
};
