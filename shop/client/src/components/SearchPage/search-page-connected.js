import { connect } from "react-redux"
import { SearchPage } from "./search-page-view"
import { uploadItems } from "../../redux/actions/items"
import { addItemToCart } from "../../redux/actions/cart"

const mapStateToProps = (state) => ({
    props: {
        searchedItems: state.items.searchedItems,
        user: state.auth.user,
    },
})

const mapDispatchToProps = (dispatch) => ({
    mapDispatchToProps: {
        uploadItems: () => dispatch(uploadItems()),
        onAddItemToCartWasPressed: (selectedItem) => dispatch(addItemToCart(selectedItem)),
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage)
