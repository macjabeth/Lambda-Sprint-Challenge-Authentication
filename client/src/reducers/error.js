import {
  SIGNUP_FAILURE,
  LOGIN_FAILURE,
  FETCH_JOKES_FAILURE,
} from '../actions/types';

export default (state, action) => {
  switch (action.type) {
    case SIGNUP_FAILURE:
    case LOGIN_FAILURE:
    case FETCH_JOKES_FAILURE:
      return action.payload.response.data.message;
    default:
      return '';
  }
};
