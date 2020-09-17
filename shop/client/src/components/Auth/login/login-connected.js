import { connect } from "react-redux"
import { login } from "../../../redux/actions/auth"
import { Login } from "./login-view"
import { clearErrors } from "../../../redux/actions/error"

const mapStateToProps = (state) => ({
    props: {
        isAuthenticated: state.auth.isAuthenticated,
        error: state.error,
    },
})

const mapDispatchToProps = (dispatch) => ({
    mapDispatchToProps: {
        login: (loginData) => dispatch(login(loginData)),
        clearErrors: () => dispatch(clearErrors()),
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
