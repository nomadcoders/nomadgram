// imports

import { actionCreators as userActions } from "redux/modules/user";

// actions

const SET_FEED = "SET_FEED";

// action creators

function setFeed(feed) {
  return {
    type: SET_FEED,
    feed
  };
}

// API Actions

function getFeed() {
  return (dispatch, getState) => {
    const { user: { token } } = getState();
    fetch("/images/", {
      headers: {
        Authorization: `JWT ${token}`
      }
    })
      .then(response => {
        if (response.status === 401) {
          dispatch(userActions.logout());
        }
        return response.json();
      })
      .then(json => dispatch(setFeed(json)));
  };
}

// Initial State

const initialState = {};

// Reducer

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_FEED:
      return applySetFeed(state, action);
    default:
      return state;
  }
}

// Reducer Functions

function applySetFeed(state, action) {
  const { feed } = action;
  return {
    ...state,
    feed
  };
}

// Exports

const actionCreators = {
  getFeed
};

export { actionCreators };

// Export reducer by default

export default reducer;
