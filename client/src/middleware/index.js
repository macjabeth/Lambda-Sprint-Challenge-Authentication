import { LOGIN_SUCCESS } from '../actions/types';

export const addTokenToLocalStorage = store => next => action => {
  if (action.type === LOGIN_SUCCESS) {
    localStorage.setItem('token', action.payload.token);
  }

  next(action);
};
