import { connect } from "react-redux"
import { Admin } from "./admin-view"
import { getDistinctCategories } from "../../redux/actions/items"

const mapStateToProps = (state) => ({
    role: state.auth?.user?.role,
    categories: state.items?.categories,
})

const mapDispatchToProps = (dispatch) => ({
    mapDispatchToProps: {
        getDistinctCategories: () => dispatch(getDistinctCategories()),
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(Admin)
