import { connect } from 'react-redux';
import { LandingPage } from './landing-page-view';
import { uploadItems } from '../../redux/actions/items'

const mapStateToProps = state => ({
    items: state
})

const mapDispatchToProps = dispatch => {
  return {
        uploadItems: () => uploadItems(),
    
}};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);