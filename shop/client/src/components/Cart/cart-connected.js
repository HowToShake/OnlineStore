import { connect } from "react-redux"
import { Cart } from "./cart-view"
import { uploadItems } from "../../redux/actions/items"
import { createUserCart, removeItemFromCart, setOrderedItems, setTotalUserPrice } from "../../redux/actions/cart"

const mapStateToProps = (state) => ({
    props: {
        isAuthenticated: state.auth.isAuthenticated,
        user: state.auth.user,
        cart: state.cart,
        order: state.cart.order,
    },
})

const mapDispatchToProps = (dispatch) => ({
    mapDispatchToProps: {
        setPrice: (totalPrice) => dispatch(setTotalUserPrice(totalPrice)),
        setOrderedItems: (orderedItems) => dispatch(setOrderedItems(orderedItems)),
        uploadItems: () => dispatch(uploadItems()),
        createUserCart: (userID) => dispatch(createUserCart(userID)),
        removeItemFromCart: (selectedItem) => dispatch(removeItemFromCart(selectedItem)),
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
