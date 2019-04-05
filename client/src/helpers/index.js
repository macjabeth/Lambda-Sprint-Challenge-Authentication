import axios from 'axios';

export const serverHandshake = (auth) => {
  const defaults = {};

  defaults.baseURL = 'http://penguin.linux.test:2000/api';

  if (auth) defaults.headers = { authorization: localStorage.getItem('token') };

  return axios.create(defaults);
};
