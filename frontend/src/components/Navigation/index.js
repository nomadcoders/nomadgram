import { connect } from "react-redux";
import Container from "./container";
import { push } from "react-router-redux";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    goToSearch: searchTerm => {
      dispatch(push(`/search/${searchTerm}`));
    }
  };
};

export default connect(null, mapDispatchToProps)(Container);
