import { connect } from 'react-redux';
import { LandingPage } from './landing-page-view';
import { uploadItems } from '../../redux/actions/items'
import { addItemToCart } from '../../redux/actions/cart';
import { changeLandingPageLayout } from '../../redux/actions/topBar'

const mapStateToProps = state => ({
  props:{
    items: state.items.items,
    loading: state.items.loading,
    user: state.auth.user,
    wasHomeOrMenuPressed: state.topBar.wasHomeOrMenuPressed,
  }
});

const mapDispatchToProps = dispatch => ({
  mapDispatchToProps: {
        uploadItems: () => dispatch(uploadItems()),
        onAddItemToCartWasPressed: (selectedItem) => dispatch(addItemToCart(selectedItem)),
        onCategoryButtonWasPressed: () => dispatch(changeLandingPageLayout()),
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);