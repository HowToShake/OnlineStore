import { connect } from 'react-redux';
import { LandingPage } from './landing-page-view';
import { uploadItems } from '../../redux/actions/items'

const mapStateToProps = state => ({
  props:{
    items: state.items.items
  }
});

const mapDispatchToProps = dispatch => ({
  mapDispatchToProps: {
        uploadItems: () => uploadItems(),
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);