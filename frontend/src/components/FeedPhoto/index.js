import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as photoAction } from "redux/modules/photos";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getPhotoLikes: () => {
      dispatch(photoAction.getPhotoLikes(ownProps.id));
    }
  };
};

export default connect(null, mapDispatchToProps)(Container);
