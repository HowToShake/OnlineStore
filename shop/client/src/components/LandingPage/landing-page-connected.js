import { connect } from "react-redux";
import { LandingPage } from "./landing-page-view";
import { uploadItems } from "../../redux/actions/items";
import { addItemToCart } from "../../redux/actions/cart";
import {
  getDistinctCategories,
} from "../../redux/actions/items";

const mapStateToProps = (state) => ({
  props: {
    items: state.items.items,
    loading: state.items.loading,
    user: state.auth.user,
  },
});

const mapDispatchToProps = (dispatch) => ({
  mapDispatchToProps: {
    uploadItems: () => dispatch(uploadItems()),
    onAddItemToCartWasPressed: (selectedItem) =>
      dispatch(addItemToCart(selectedItem)),
    getDistinctCategories: () => dispatch(getDistinctCategories()),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
