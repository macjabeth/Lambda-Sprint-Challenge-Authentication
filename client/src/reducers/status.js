import {
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  FETCH_JOKES_START,
  FETCH_JOKES_SUCCESS,
  FETCH_JOKES_FAILURE,
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case SIGNUP_START:
      return { ...state, signingUp: true };
    case SIGNUP_SUCCESS:
    case SIGNUP_FAILURE:
      return { ...state, signingUp: false };
    case LOGIN_START:
      return { ...state, loggingIn: true };
    case LOGIN_SUCCESS:
    case LOGIN_FAILURE:
      return { ...state, loggingIn: false };
    case FETCH_JOKES_START:
      return { ...state, fetchingJokes: true };
    case FETCH_JOKES_SUCCESS:
    case FETCH_JOKES_FAILURE:
      return { ...state, fetchingJokes: false };
    default:
      return state;
  }
};
