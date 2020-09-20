import { connect } from "react-redux"
import { Cart } from "./cart-view"
import { uploadItems } from "../../redux/actions/items"
import { createUserCart, removeItemFromCart } from "../../redux/actions/cart"

const mapStateToProps = (state) => ({
    props: {
        isAuthenticated: state.auth.isAuthenticated,
        user: state.auth.user,
        cart: state.cart
    },
})

const mapDispatchToProps = (dispatch) => ({
    mapDispatchToProps: {
        uploadItems: () => dispatch(uploadItems()),
        createUserCart: (userID) => dispatch(createUserCart(userID)),
        removeItemFromCart: (selectedItem) => dispatch(removeItemFromCart(selectedItem)),
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
