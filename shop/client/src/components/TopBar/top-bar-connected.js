import { connect } from 'react-redux';
import { TopBar } from './top-bar-view';
import { search } from '../../redux/actions/top-bar'
import { logout } from '../../redux/actions/auth'

const mapStateToProps = state => ({
  props: {
    search: state.topBar.searchValue,
  }
});

const mapDispatchToProps = dispatch => ({
  mapDispatchToProps: {
    handleSearchBox: (value) => dispatch(search(value)),
    logout: () => dispatch(logout()),
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(TopBar);