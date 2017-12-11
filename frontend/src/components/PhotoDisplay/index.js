import React from "react";
import PropTypes from "prop-types";
import Ionicon from "react-ionicons";
import styles from "./styles.scss";

const PhotoDisplay = props => (
  <div className={styles.container}>
    <img
      src={props.photo.file}
      className={styles.photo}
      alt={"Something else"}
    />
    <div className={styles.overlay}>
      <span className={styles.data}>
        <Ionicon icon="ios-heart" fontSize="22px" color="white" />{" "}
        {props.photo.like_count}
      </span>
      <span className={styles.data}>
        <Ionicon icon="ios-text" fontSize="22px" color="white" />{" "}
        {props.photo.comment_count}
      </span>
    </div>
  </div>
);

PhotoDisplay.propTypes = {
  photo: PropTypes.shape({
    file: PropTypes.string.isRequired,
    comment_count: PropTypes.number.isRequired,
    like_count: PropTypes.number.isRequired
  }).isRequired
};

export default PhotoDisplay;
