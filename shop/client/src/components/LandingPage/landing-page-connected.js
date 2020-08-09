import { connect } from 'react-redux';
import { LandingPage } from './landing-page-view';
import { uploadItems } from '../../redux/actions/items'
import { clearErrors } from '../../redux/actions/error';

const mapStateToProps = state => ({
  props:{
    items: state.items.items,
    loading: state.items.loading,
  }
});

const mapDispatchToProps = dispatch => ({
  mapDispatchToProps: {
        uploadItems: () => dispatch(uploadItems()),
        clearErrors: () => dispatch(clearErrors()),
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);