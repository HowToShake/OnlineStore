import { connect } from "react-redux"
import { Register } from "./register-view"
import { register } from "../../../redux/actions/auth"

const mapStateToProps = (state) => ({
    props: {
        isAuthenticated: state.auth.isAuthenticated,
        error: state.error,
    },
})

const mapDispatchToProps = (dispatch) => ({
    mapDispatchToProps: {
        register: (newUser) => dispatch(register(newUser)),
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(Register)
