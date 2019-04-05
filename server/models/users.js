const db = require('../database/db');

module.exports = {
  add: (user) => db('users').insert(user),
  find: () => db('users').select('id', 'username', 'password'),
  findBy: (filter) => db('users').where(filter),
  findById: (id) => db('users').where({ id })
};
