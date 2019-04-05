import { FETCH_JOKES_START, FETCH_JOKES_SUCCESS, FETCH_JOKES_FAILURE } from './types';
import { serverHandshake } from '../helpers';

export const fetchJokes = () => async dispatch => {
  dispatch({ type: FETCH_JOKES_START });
  try {
    const success = await serverHandshake(true).get('/jokes');
    dispatch({ type: FETCH_JOKES_SUCCESS, payload: success.data });
    return success;
  } catch (error) {
    dispatch({ type: FETCH_JOKES_FAILURE, payload: error });
    return error;
  }
};
