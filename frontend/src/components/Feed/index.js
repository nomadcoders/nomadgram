import { connect } from "react-redux";
import { actionCreators as photoActions } from "redux/modules/photos";
import Container from "./container";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getFeed: () => {
      dispatch(photoActions.getFeed());
    }
  };
};

export default connect(null, mapDispatchToProps)(Container);
