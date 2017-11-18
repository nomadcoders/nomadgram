import React from "react";
import PropTypes from "prop-types";
import Textarea from "react-textarea-autosize";
import styles from "./styles.scss";

const CommentBox = (props, context) => (
  <form className={styles.commentBox}>
    <Textarea
      className={styles.input}
      placeholder={context.t("Add a comment...")}
      onChange={props.handleInputChange}
      value={props.comment}
      onKeyPress={props.handleKeyPress}
    />
  </form>
);

CommentBox.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  comment: PropTypes.string.isRequired,
  handleKeyPress: PropTypes.func.isRequired
};

CommentBox.contextTypes = {
  t: PropTypes.func.isRequired
};

export default CommentBox;
