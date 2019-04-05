import { combineReducers } from 'redux';

import error from './error';
import status from './status';
import jokes from './jokes';

export default combineReducers({
  error,
  status,
  jokes
});
