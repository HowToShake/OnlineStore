import { connect } from 'react-redux';
import { Cart } from './cart-view';

import { uploadItems } from '../../redux/actions/items'

const mapStateToProps = state => ({
  props:{
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user,
  }
});

const mapDispatchToProps = dispatch => ({
  mapDispatchToProps: {
        uploadItems: () => dispatch(uploadItems()),
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);