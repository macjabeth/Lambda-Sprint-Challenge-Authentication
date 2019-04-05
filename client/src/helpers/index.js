import axios from 'axios';

export const serverHandshake = (auth) => {
  const defaults = {};

  defaults.baseURL = 'http://penguin.linux.test:2000/api';

  defaults.headers.authorization = auth && localStorage.getItem('token');

  return axios.create(defaults);
};
