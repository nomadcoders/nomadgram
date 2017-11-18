import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";
import Loading from "components/Loading";
import Ionicon from "react-ionicons";

const UserList = props => (
  <div className={styles.container}>
    <div className={styles.overlay} />
    <div className={styles.box}>
      <header className={styles.header}>
        <h4>{props.title}</h4>
        <Ionicon icon="md-close" fontSize="20px" color="black" />
      </header>
      <div className={styles.content}>{props.loading ? <Loading /> : null}</div>
    </div>
  </div>
);

const LoadingUserList = props =>
  (UserList.propTypes = {
    title: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
    users: PropTypes.array
  });

export default UserList;
