// imports

// actions

// action creators

// API Actions

function getFeed() {
  return (dispatch, getState) => {
    const { user: { token } } = getState();
    fetch("/images/", {
      headers: {
        Authorization: `JWT ${token}`
      }
    })
      .then(response => response.json())
      .then(json => console.log(json));
  };
}

// Initial State

const initialState = {
  feed: []
};

// Reducer

function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

// Reducer Functions

// Exports

const actionCreators = {
  getFeed
};

export { actionCreators };

// Export reducer by default

export default reducer;
