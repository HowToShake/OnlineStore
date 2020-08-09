import { connect } from 'react-redux';
import { Register } from './register-view';
import { register, login } from '../../redux/actions/auth'
import { clearErrors } from '../../redux/actions/error'

const mapStateToProps = state => ({
  props:{
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error,
  }
});

const mapDispatchToProps = dispatch => ({
  mapDispatchToProps: {
        register: (newUser) => dispatch(register(newUser)),
        login: (loginData) => dispatch(login(loginData)),
        clearErrors: () => dispatch(clearErrors())
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);