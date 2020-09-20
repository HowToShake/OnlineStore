import { connect } from "react-redux"
import { CategoryView } from "./category-view"
import { getItemsInParticularCategory } from "../../redux/actions/items"
import { addItemToCart } from "../../redux/actions/cart"

const mapStateToProps = (state) => ({
    props: {
        musicInParticularCategory: state.items?.musicInParticularCategory,
        user: state.auth.user,
        areItemsLoading: state.items.loading,
    },
})

const mapDispatchToProps = (dispatch) => ({
    mapDispatchToProps: {
        getItemsInParticularCategory: (category) => dispatch(getItemsInParticularCategory(category)),
        onAddItemToCartWasPressed: (selectedItem) => dispatch(addItemToCart(selectedItem)),
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryView)

