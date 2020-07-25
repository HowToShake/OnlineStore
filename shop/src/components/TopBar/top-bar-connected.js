import { connect } from 'react-redux';
import { TopBar } from './top-bar-view';

const mapStateToProps = state => {
  return {
    count: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleIncrementClick: () => dispatch({ type: 'INCREMENT' }),
    handleDecrementClick: () => dispatch({ type: 'DECREMENT' })
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(TopBar);