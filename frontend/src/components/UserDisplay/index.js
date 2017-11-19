import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as userAction } from "redux/modules/user";

const mapDispatchToProps = (dispatch, ownProps) => {
  const { user } = ownProps;
  return {
    handleClick: () => {
      if (user.following) {
        dispatch(userAction.unfollowUser(user.id));
      } else {
        dispatch(userAction.followUser(user.id));
      }
    }
  };
};

export default connect(null, mapDispatchToProps)(Container);
