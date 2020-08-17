import { connect } from 'react-redux';
import { SearchPage } from './search-page-view';
import { uploadItems } from '../../redux/actions/items'

const mapStateToProps = state => ({
  props:{
    searchedItems: state.items.searchedItems,
  }
});

const mapDispatchToProps = dispatch => ({
  mapDispatchToProps: {
        uploadItems: () => dispatch(uploadItems()),
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);