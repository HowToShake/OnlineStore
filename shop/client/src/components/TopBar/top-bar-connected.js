import { connect } from 'react-redux';
import { TopBar } from './top-bar-view';
import { search } from '../../redux/actions/top-bar'
import { logout } from '../../redux/actions/auth'
import { getSearchedItems } from '../../redux/actions/items'

const mapStateToProps = state => ({
  props: {
    search: state.topBar.searchValue,
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user,
    token: state.auth.token,
    items: state.items.items,
  }
});

const mapDispatchToProps = dispatch => ({
  mapDispatchToProps: {
    handleSearchBox: (value) => dispatch(search(value)),
    logout: () => dispatch(logout()),
    getSearchedItems: (searchValue, selectedCategory) => dispatch(getSearchedItems(searchValue, selectedCategory))
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(TopBar);