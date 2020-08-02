import { connect } from 'react-redux';
import { TopBar } from './top-bar-view';
import { searchInput } from '../../redux/actions/top-bar'

const mapStateToProps = state => {
  return {
    wholeState: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleSearchBox: (value) => dispatch(searchInput(value)),
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(TopBar);