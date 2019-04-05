module.exports = {
  port: 2000,
  secrets: { jwt: 'supersecretkey' },
  knex: {
    client: 'sqlite3',
    connection: { filename: './database/auth.db3' },
    useNullAsDefault: true,
    migrations: { directory: './database/migrations', tableName: 'dbmigrations' },
    seeds: { directory: './database/seeds' }
  }
};
