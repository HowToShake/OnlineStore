import { connect } from 'react-redux';
import { LandingPage } from './landing-page-view';
import { uploadItems } from '../../redux/actions/items'
import { addItemToCart } from '../../redux/actions/cart';
import { createUserCart } from '../../redux/actions/cart';

const mapStateToProps = state => ({
  props:{
    items: state.items.items,
    loading: state.items.loading,
    user: state.auth.user,
  }
});

const mapDispatchToProps = dispatch => ({
  mapDispatchToProps: {
        uploadItems: () => dispatch(uploadItems()),
        onAddItemToCartWasPressed: (selectedItem) => dispatch(addItemToCart(selectedItem)),
        createUserCart: (userID) => dispatch(createUserCart(userID)),
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);