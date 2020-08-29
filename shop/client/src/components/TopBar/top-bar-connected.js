import { connect } from 'react-redux';
import { TopBar } from './top-bar-view';
import { logout } from '../../redux/actions/auth'
import { getSearchedItems, getDistinctCategories } from '../../redux/actions/items'

const mapStateToProps = state => ({
  props: {
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user,
    token: state.auth.token,
    categories: state.items.categories,
  }
});

const mapDispatchToProps = dispatch => ({
  mapDispatchToProps: {
    logout: () => dispatch(logout()),
    getSearchedItems: (searchValue, selectedCategory) => dispatch(getSearchedItems(searchValue, selectedCategory)),
    getDistinctCategories: () => dispatch(getDistinctCategories()),
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(TopBar);