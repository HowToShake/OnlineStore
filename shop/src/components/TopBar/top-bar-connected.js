import { connect } from 'react-redux';
import { TopBar } from './top-bar-view';
import { search } from '../../redux/actions/top-bar'

const mapStateToProps = state => {
  return {
    search: state.topBar.searchValue
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleSearchBox: (value) => dispatch(search(value)),
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(TopBar);