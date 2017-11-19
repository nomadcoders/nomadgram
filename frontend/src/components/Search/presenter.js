import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";
import Loading from "components/Loading";
import UserDisplay from "components/UserDisplay";

const Search = (props, context) => {
  return (
    <div className={styles.search}>
      <div className={styles.section}>
        <h4 className={styles.title}>{context.t("Users")}</h4>
        {props.loading && <Loading />}
        {!props.loading &&
          props.userList.length < 1 && (
            <NotFound text={context.t("Nothing found :(")} />
          )}
        {!props.loading &&
          props.userList.length > 0 && (
            <RenderUserSearch userList={props.userList} />
          )}
      </div>
      <div className={styles.section}>
        <h4 className={styles.title}>{context.t("Photos")}</h4>
        {props.loading && <Loading />}
        {!props.loading &&
          props.imageList.length < 1 && (
            <NotFound text={context.t("Nothing found :(")} />
          )}
      </div>
    </div>
  );
};

const RenderUserSearch = props => (
  <div className={styles.search}>
    {props.userList.map(user => (
      <UserDisplay vertical={true} user={user} key={user.id} />
    ))}
  </div>
);

const NotFound = props => <span className={styles.notFound}>{props.text}</span>;

Search.contextTypes = {
  t: PropTypes.func.isRequired
};

Search.propTypes = {
  loading: PropTypes.bool.isRequired,
  imageList: PropTypes.array,
  photoList: PropTypes.array
};

export default Search;
