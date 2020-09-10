import { connect } from "react-redux";
import { clearErrors } from "../redux/actions/error";
import { loadUser } from "../redux/actions/auth";
import { App } from "./App-view";

const mapStateToProps = (state) => ({
  props: {
    user: state.auth.isAuthenticated,
  },
});

const mapDispatchToProps = (dispatch) => ({
  mapDispatchToProps: {
    clearErrors: () => dispatch(clearErrors()),
    loadUser: () => dispatch(loadUser()),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
