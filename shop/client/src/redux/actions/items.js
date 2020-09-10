import axios from "axios";

export const uploadItems = () => (dispatch) => {
  dispatch(setItemsLoading());
  axios.get("http://localhost:5000/api/items").then((res) => {
    dispatch({
      type: "GET_ITEMS",
      payload: res.data,
    });
  });
};

export const setItemsLoading = () => {
  return {
    type: "ITEMS_LOADING",
  };
};

export const getSearchedItems = (searchValue, selectedCategory) => (
  dispatch
) => {
  axios
    .get(`http://localhost:5000/api/items/search?`, {
      params: { searchValue, selectedCategory },
    })
    .then((res) => {
      dispatch({
        type: "GET_SEARCHED_ITEMS",
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const getDistinctCategories = () => (dispatch) => {
  axios
    .get("http://localhost:5000/api/items/categories")
    .then((res) => {
      dispatch({
        type: "GET_CATEGORIES",
        categories: res.data,
      });
    })
    .catch((err) => console.log(err));
};
