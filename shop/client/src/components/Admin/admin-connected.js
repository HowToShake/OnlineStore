import { connect } from "react-redux"
import { Admin } from "./admin-view"

const mapStateToProps = (state) => ({
    role: state.auth?.user?.role,
})

const mapDispatchToProps = (dispatch) => ({
    mapDispatchToProps: {},
})

export default connect(mapStateToProps, mapDispatchToProps)(Admin)
