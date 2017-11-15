// imports

// actions

// action creators

// API actions

function facebookLogin(access_token) {
  return function(dispatch) {
    fetch("/users/login/facebook/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        access_token
      })
    })
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(err => console.log(err));
  };
}

// initial state

const initialState = {
  isLoggedIn: localStorage.getItem("jwt") || false
};

// reducer

function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

// reducer functions

// exports

const actionCreators = {
  facebookLogin
};

export { actionCreators };

// export reducer by default

export default reducer;
