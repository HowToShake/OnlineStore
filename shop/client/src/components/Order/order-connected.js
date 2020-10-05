import { connect } from "react-redux"
import { Order } from "./order-view"


const mapStateToProps = (state) => ({
    props: {
        user: state.auth.user,
        totalPrice: state.cart?.totalPrice,
        orderedItems: state.cart?.orderedItems,
    },
})

const mapDispatchToProps = (dispatch) => ({
    mapDispatchToProps: {
        
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(Order)
