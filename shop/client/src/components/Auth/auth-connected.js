import { connect } from 'react-redux';
import { clearErrors } from '../../redux/actions/error';
import { Auth } from './auth-view'

const mapStateToProps = state => ({
  props:{
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error,
  }
});

const mapDispatchToProps = dispatch => ({
  mapDispatchToProps: {
        clearErrors: () => dispatch(clearErrors()),
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);