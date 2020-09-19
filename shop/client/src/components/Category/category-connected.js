import { connect } from "react-redux"
import { CategoryView } from "./category-view"
import { getItemsInParticularCategory } from "../../redux/actions/items"

const mapStateToProps = (state) => ({
    props: {
        musicInParticularCategory: state.items?.musicInParticularCategory,
    },
})

const mapDispatchToProps = (dispatch) => ({
    mapDispatchToProps: {
        getItemsInParticularCategory: (category) => dispatch(getItemsInParticularCategory(category)),
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryView)

