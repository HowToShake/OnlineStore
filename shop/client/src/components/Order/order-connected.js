import { connect } from "react-redux"
import { Order } from "./order-view"

const mapStateToProps = (state) => ({
    user: state.auth.user,
    totalPrice: state.cart?.totalPrice,
    orderedItems: state.cart?.orderedItems,
    uniqueOrderItems: [...new Set(state.cart?.order.map((item) => item))],
})

const mapDispatchToProps = (dispatch) => ({
    mapDispatchToProps: {},
})

export default connect(mapStateToProps, mapDispatchToProps)(Order)
