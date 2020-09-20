import { connect } from "react-redux"
import { LandingPage } from "./landing-page-view"
import { getDistinctCategories } from "../../redux/actions/items"

const mapStateToProps = (state) => ({
    props: {
        user: state.auth.user,
        categories: state.items.categories,
    },
})

const mapDispatchToProps = (dispatch) => ({
    mapDispatchToProps: {
        getDistinctCategories: () => dispatch(getDistinctCategories()),
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage)
