import { connect } from 'react-redux';
import { LandingPage } from './landing-page-view';
import { uploadItems } from '../../redux/actions/items'
import { addItemToCart } from '../../redux/actions/cart';

const mapStateToProps = state => ({
  props:{
    items: state.items.items,
    loading: state.items.loading,
  }
});

const mapDispatchToProps = dispatch => ({
  mapDispatchToProps: {
        uploadItems: () => dispatch(uploadItems()),
        onAddItemToCartWasPressed: (selectedItem) => dispatch(addItemToCart(selectedItem)),
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);