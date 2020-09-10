import { connect } from "react-redux";
import { Cart } from "./cart-view";
import { uploadItems } from "../../redux/actions/items";
import { createUserCart } from "../../redux/actions/cart";

const mapStateToProps = (state) => ({
  props: {
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user,
  },
});

const mapDispatchToProps = (dispatch) => ({
  mapDispatchToProps: {
    uploadItems: () => dispatch(uploadItems()),
    createUserCart: (userID) => dispatch(createUserCart(userID)),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
