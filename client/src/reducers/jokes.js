import { FETCH_JOKES_SUCCESS } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_JOKES_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
