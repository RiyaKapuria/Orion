import { LOGIN_FETCH, LOGIN_SUCCESS, LOGIN_FAIL } from '../actions/Session';

const INITIAL_STATE = {
  login_details: null,
  loggedIn: false,
  error: null,
  data: null
};

const sessionReducer = (state = INITIAL_STATE , action) => {
  switch (action.type) {
    case LOGIN_FETCH:
      return {
        ...state,
        login_details: action.payload,
        loggedIn: false,
        error: null,
        data: null
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        login_details: null,
        loggedIn: true,
        error: null,
        data: action.payload
      };
    case LOGIN_FAIL:
      return {
        ...state,
        login_details: null,
        loggedIn: false,
        error: action.payload,
        data: null
      };
    default:
      return state;
  }
};

export default sessionReducer;
