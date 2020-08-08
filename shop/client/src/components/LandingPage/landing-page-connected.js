import { connect } from 'react-redux';
import { LandingPage } from './landing-page-view';
import { uploadItems, setItemsLoading } from '../../redux/actions/items'

const mapStateToProps = state => ({
  props:{
    items: state.items.items,
    state
  }
});

const mapDispatchToProps = dispatch => ({
  mapDispatchToProps: {
        uploadItems: () => dispatch(uploadItems()),
        loadingItems: () => dispatch(setItemsLoading()),
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);