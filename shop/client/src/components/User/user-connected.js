import { User } from "./user-view"
import { connect } from "react-redux"

const mapStateToProps = (state) => ({
        user: state.auth.user,
        orders: state.auth?.user?.orders,   
})

const mapDispatchToProps = (dispatch) => ({
    mapDispatchToProps: {
    },
})
export default connect(mapStateToProps, mapDispatchToProps)(User)
