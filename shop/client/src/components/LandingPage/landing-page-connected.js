import { connect } from 'react-redux';
import { LandingPage } from './landing-page-view';
import { uploadItems } from '../../redux/actions/items'

const mapStateToProps = state => ({
  props:{
    items: state.items.items,
    loading: state.items.loading,
  }
});

const mapDispatchToProps = dispatch => ({
  mapDispatchToProps: {
        uploadItems: () => dispatch(uploadItems()),
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);